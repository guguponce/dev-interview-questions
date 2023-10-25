import { iDevQuestions } from "../utils/interfaces";

export default function useLocalStorage() {
  const localData = localStorage.getItem("devQuestions");
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
    localStorage.setItem("devQuestions", JSON.stringify(devQuestions));
  };
  const addToLocalStorage = (devQuestion: iDevQuestions) => {
    const localStorageData = localStorage.getItem("devQuestions");
    const devQuestions = localStorageData
      ? JSON.parse(localStorageData)
      : ([] as iDevQuestions[]);
    devQuestions.push(devQuestion);
    localStorage.setItem("devQuestions", JSON.stringify(devQuestions));
  };

  return {
    localStorageData,
    setLocalStorage,
    addToLocalStorage,
    technologiesLearned,
  };
}
