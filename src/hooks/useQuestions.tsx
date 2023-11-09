import { useContext, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";
import { useParams } from "react-router-dom";
import { typeQuestion } from "../utils/interfaces";
import { QuestionsContext } from "../services/firebase/QuestionsContext";

export default function useQuestions() {
  const { localStorageData } = useLocalStorage();
  const { params } = useParams();
  const allQuestions = useContext(QuestionsContext);
  const techFilteredQuestions = useMemo(() => {
    if (!allQuestions) return [];
    if (!params) return allQuestions;
    const techs = params.toLowerCase().split("+");
    return allQuestions.filter((question) =>
      techs.includes(question.tech.toLowerCase())
    );
  }, [params, allQuestions]);

  const notAnsweredQuestions: typeQuestion[] = useMemo(() => {
    if (!techFilteredQuestions) return [];
    if (!localStorageData) return techFilteredQuestions;

    const answeredIDS = localStorageData.map((q) => q.id);
    return techFilteredQuestions
      .filter((question) => !answeredIDS.includes(question.id))
      .sort(() => Math.random() - 0.5);
  }, [localStorageData, techFilteredQuestions]);

  return { notAnsweredQuestions };
}
