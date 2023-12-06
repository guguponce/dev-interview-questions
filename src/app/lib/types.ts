export interface iDevQuestions {
  id: number;
  answer: boolean;
  date: Date;
  tech: "HTML" | "CSS" | "JavaScript" | "React";
}
export type TypeQuestion = {
  id: number;
  tech: "HTML" | "CSS" | "JavaScript" | "React";
  type: string;
  question: string;
  topic: string;
  correctAnswer: boolean | string;
  incorrectAnswers: boolean | string[];
};

export type TechQuestions = {
  [key: string]: TypeQuestion[];
};

export type iTechAnswered =
  | {
      all: never[];
      correct?: undefined;
      incorrect?: undefined;
      first?: undefined;
      last?: undefined;
    }
  | {
      correct: iDevQuestions[];
      incorrect: iDevQuestions[];
      first: iDevQuestions;
      last: iDevQuestions;
      all: iDevQuestions[];
    };
