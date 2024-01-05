"use client";
import { iDevQuestions } from "../types";

export default function useLocalStorage() {
  const localData = window.localStorage.getItem("devQuestions");
  const localStorageData: null | iDevQuestions[] = localData
    ? JSON.parse(localData)
    : null;
  const technologiesLearned = localStorageData?.reduce(
    (acc: string[], curr: iDevQuestions) => {
      if (!acc.includes(curr.tech)) {
        acc.push(curr.tech);
      }
      return acc;
    },
    []
  );
  const setLocalStorage = (devQuestions: iDevQuestions[]) => {
    window.localStorage.setItem("devQuestions", JSON.stringify(devQuestions));
  };
  const addToLocalStorage = (devQuestion: iDevQuestions) => {
    const localStorageData = window.localStorage.getItem("devQuestions");
    const devQuestions = localStorageData
      ? JSON.parse(localStorageData)
      : ([] as iDevQuestions[]);
    devQuestions.push(devQuestion);
    window.localStorage.setItem("devQuestions", JSON.stringify(devQuestions));
  };
  const resetIncorrectFromLocalStorage = () => {
    const localStorageData = window.localStorage.getItem("devQuestions");
    const devQuestions = localStorageData
      ? JSON.parse(localStorageData)
      : ([] as iDevQuestions[]);
    const correctQuestions = devQuestions.filter(
      (q: iDevQuestions) => q.answer
    );
    window.localStorage.setItem(
      "devQuestions",
      JSON.stringify(correctQuestions)
    );
  };
  const answeredIDS = localStorageData?.map((q) => q.id) || [];

  return {
    answeredIDS,
    localStorageData,
    setLocalStorage,
    addToLocalStorage,
    technologiesLearned,
    resetIncorrectFromLocalStorage,
  };
}
