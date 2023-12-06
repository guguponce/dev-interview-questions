import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import type { TypeQuestion, TechQuestions } from "./lib/types";
import { db } from "./lib/firebase";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  getQuestions: async (): Promise<{ [key: string]: TypeQuestion[] }> => {
    let retrievedQuestions: { [key: string]: TypeQuestion[] } = {};
    try {
      const querySnapshot = await getDocs(collection(db, "questionsDB"));
      querySnapshot.forEach((doc) => {
        retrievedQuestions = {
          ...retrievedQuestions,
          ...(doc.data() as { [key: string]: TypeQuestion[] }),
        };
      });
      return retrievedQuestions;
    } catch (error) {
      throw new Error(`Error: ${(error as Error).message}`);
    } finally {
      return retrievedQuestions || [];
    }
  },
  addQuestion: async (question: {
    [key: string]: TypeQuestion[];
  }): Promise<void> => {
    try {
      addDoc(collection(db, "questionsDB"), question);
      console.log("Question added: ", question.id);
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  },
  getD: async (tech: string): Promise<TypeQuestion[] | undefined> => {
    try {
      const res = await getDoc(doc(db, "questionsDB", tech));
      if (res.exists()) {
        return Object.values(res.data())[0] as TypeQuestion[];
      }
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  },
  updateTechQuestions: async (
    tech: string,
    question: TechQuestions
  ): Promise<void> => {
    try {
      setDoc(doc(db, "questionsDB", tech), question).then((val) =>
        console.log("Question added: ", val)
      );
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  },
  getTechQuestions: async (tech: string[]): Promise<TechQuestions[]> => {
    let retrievedQuestions: TechQuestions[] = [] as TechQuestions[];
    try {
      const querySnapshot = await getDocs(collection(db, "questionsDB"));
      querySnapshot.forEach((doc) => {
        tech.includes(Object.keys(doc.data())[0]) &&
          (retrievedQuestions = [...retrievedQuestions, doc.data()]);
      });
    } catch (error) {
      throw new Error(`Error: ${(error as Error).message}`);
    } finally {
      return retrievedQuestions || [];
    }
  },
};

export default api;
