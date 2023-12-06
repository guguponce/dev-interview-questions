"use client";
import React, { useMemo } from "react";
import { TypeQuestion, iTechAnswered } from "../lib/types";
import { useParams } from "next/navigation";
import useLocalStorage from "../lib/hooks/useLocalStorage";
import StatisticsChart from "./StatisticsChart";
import QuestionsAccordion from "./QuestionsAccordion";
import StartLearning from "./StartLearning";

export default function PersonalTechData({
  techQuestions,
}: {
  techQuestions: TypeQuestion[];
}) {
  const { tech }: { tech: string } = useParams();
  const { localStorageData } = useLocalStorage();

  const techAnswered: iTechAnswered = useMemo(() => {
    if (!localStorageData) return { all: [] };
    const ans = localStorageData
      ?.filter((item) => item.tech === tech)
      .sort((a, b) => Number(a.date) - Number(b.date));
    const correct = ans?.filter((item) => item.answer);
    return {
      correct,
      incorrect: ans?.filter((item) => !item.answer),
      first: ans[0],
      last: ans[ans.length - 1],
      all: ans,
    };
  }, [localStorageData, tech]);
  const techQuestionsQuantity = useMemo(
    () => techQuestions.filter((q) => q.tech === tech).length,
    []
  );

  return (
    <>
      {techAnswered.incorrect?.length || techAnswered.correct?.length ? (
        <div className="personalTechData">
          <StatisticsChart
            techQuestionsQuantity={techQuestionsQuantity}
            techAnswered={techAnswered}
            tech={tech}
          />
          <QuestionsAccordion
            allQuestions={techQuestions}
            techAnswered={techAnswered}
            tech={tech}
          />
        </div>
      ) : (
        <StartLearning tech={tech} />
      )}
    </>
  );
}
