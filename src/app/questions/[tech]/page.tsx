import { TypeQuestion } from "@/app/lib/types";
import api from "@/app/api";
import CurrentQuestion from "./CurrentQuestion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Container } from "@mui/material";

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
  return (
    <Container
      sx={{
        maxWidth: "800px !important",
        width: "80vw",
      }}
    >
      {techQuestions && (
        <DynamicCurrentQuestion tech={tech} techQuestions={techQuestions} />
      )}
    </Container>
  );
}
