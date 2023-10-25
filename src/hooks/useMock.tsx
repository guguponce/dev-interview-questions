import useLocalStorage from "./useLocalStorage";
import { QUESTIONS_ARRAY } from "../utils/constants";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { typeQuestion } from "../utils/interfaces";

export default function useMock() {
  const [allQuestions, setAllQuestions] = useState<typeQuestion[]>([]);
  const { localStorageData } = useLocalStorage();
  const { params } = useParams();
  const techFilteredQuestions = useMemo(() => {
    if (!params) return QUESTIONS_ARRAY;
    const techs = params.toLowerCase().split("+");
    return allQuestions.filter((question) =>
      techs.includes(question.tech.toLowerCase())
    );
  }, [params, allQuestions]);

  const notAnsweredQuestions: typeQuestion[] = useMemo(() => {
    if (!techFilteredQuestions) return [];
    if (!localStorageData) return QUESTIONS_ARRAY;

    const answeredIDS = localStorageData.map((q) => q.id);
    return techFilteredQuestions
      .filter((question) => !answeredIDS.includes(question.id))
      .sort(() => Math.random() - 0.5);
  }, [localStorageData, techFilteredQuestions]);

  const getQuestions = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: () => QUESTIONS_ARRAY,
        });
      }, 1000);
    });
  useEffect(() => {
    const abortController = new AbortController();
    getQuestions()
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      })
      .then((data: typeQuestion[]) => {
        setAllQuestions(data);
      })
      .catch((error: Error) => {
        throw new Error(`Error: ${error.message}`);
      });
    return () => {
      abortController.abort();
    };
  }, [localStorageData]);

  return { allQuestions, notAnsweredQuestions };
}
