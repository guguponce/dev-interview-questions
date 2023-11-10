import { collection, getDocs } from "firebase/firestore";
import { typeQuestion } from "../../utils/interfaces";
import { createContext, useState, useEffect } from "react";
import { db } from "./firebase";

export const QuestionsContext = createContext<typeQuestion[]>([]);

const QuestionsProvider = ({ children }: { children: JSX.Element }) => {
  const [allQuestions, setAllQuestions] = useState<typeQuestion[]>([]);

  const fetchQuestions = async () => {
    let retrievedQuestions: typeQuestion[] = [];
    getDocs(collection(db, "questionsDB"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedQuestions = [
            ...retrievedQuestions,
            ...(Object.values(doc.data()) as typeQuestion[]),
          ];
        });
        return retrievedQuestions;
      })
      .then((data: typeQuestion[]) => {
        setAllQuestions(data.flat());
      })
      .catch((error: Error) => {
        throw new Error(`Error: ${error.message}`);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <QuestionsContext.Provider value={allQuestions}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
