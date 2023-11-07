import { collection, getDocs } from "firebase/firestore";
import { typeQuestion } from "../../utils/interfaces";
import { createContext, useState, useEffect } from "react";
import { db } from "./firebase";

export const QuestionsContext = createContext<typeQuestion[]>([]);

const QuestionsProvider = ({ children }: { children: JSX.Element }) => {
  const [allQuestions, setAllQuestions] = useState<typeQuestion[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchQuestions = async () => {
      console.log("fetching");

      const retrievedQuestions: typeQuestion[] = [];
      getDocs(collection(db, "devQuestions"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            retrievedQuestions.push(doc.data() as typeQuestion);
          });

          return retrievedQuestions;
        })
        .then((data: typeQuestion[]) => {
          console.log("questions fetched");
          setAllQuestions(data);
        })
        .catch((error: Error) => {
          throw new Error(`Error: ${error.message}`);
        });
    };

    fetchQuestions();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <QuestionsContext.Provider value={allQuestions}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
