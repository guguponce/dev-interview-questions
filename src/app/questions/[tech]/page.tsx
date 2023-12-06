import { TypeQuestion } from "@/app/lib/types";
import api from "@/app/api";
import CurrentQuestion from "./CurrentQuestion";
import dynamic from "next/dynamic";

const DynamicCurrentQuestion = dynamic(async () => CurrentQuestion, {
  ssr: false,
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function QuestionsPage({
  params: { tech },
}: {
  params: { tech: string };
}) {
  const techQuestions: TypeQuestion[] = (
    await api.getTechQuestions(tech.split("%2B"))
  )
    .map((q) => Object.values(q)[0])
    .flat();
  return <DynamicCurrentQuestion techQuestions={techQuestions} />;
}
