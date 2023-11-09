import { initializeApp } from "firebase/app";
import { getFirestore, query } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { typeQuestion } from "../../utils/interfaces";
import { getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addQuestion = async (question: typeQuestion) => {
  try {
    addDoc(collection(db, "devQuestions"), question);
    console.log("Question added: ", question.id);
  } catch (error) {
    console.error("Error adding question: ", error);
  }
};

export const getQuestions = async () => {
  const retrievedQuestions: typeQuestion[] = [];

  getDocs(collection(db, "devQuestions"))
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retrievedQuestions.push(doc.data() as typeQuestion);
      });
      return retrievedQuestions;
    })
    .then((data: typeQuestion[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw new Error(`Error: ${error.message}`);
    });
  return retrievedQuestions;
};

export const fetchQuestions = async () => {
  console.log("starting");
  try {
    const querySnapshot = await getDocs(collection(db, "devQuestions"));
    const retrievedQuestions = querySnapshot.docs.map(
      (doc) => doc.data() as typeQuestion
    );

    console.log("questions fetched adsfasdf");
    console.log(retrievedQuestions);

    return retrievedQuestions;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
