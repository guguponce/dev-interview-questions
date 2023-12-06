import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { bonanova } from "./ui/fonts";
import TechCardsList from "./ui/HomeScreen/TechCardsList";
import Progress from "./ui/HomeScreen/Progress";
import dynamic from "next/dynamic";
import api from "@/app/api";
const DynamicTechCardsList = dynamic(async () => TechCardsList, {
  ssr: false,
});
const DynamicProgress = dynamic(async () => Progress, {
  ssr: false,
});
export default async function HomeScreen() {
  const allQuestions = await api.getQuestions();

  return (
    <main id="homescreen-container">
      <h1 id="title">Dev Interview Questions</h1>
      <p id="web-description" className={bonanova.className}>
        This website is designed to help to get developers prepared for their
        future job interviews. For now the content will remain about HTML, CSS,
        JavaScript and React.
      </p>
      <div id="tech-cards-container">
        <h4>What do you want to learn?</h4>
        <DynamicTechCardsList />
      </div>
      <DynamicProgress allQuestions={allQuestions} />
    </main>
  );
}
