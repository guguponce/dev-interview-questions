"use client";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { TypeQuestion } from "@/app/lib/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ItemAccordionQuestions({
  currentQuestion,
  type,
}: {
  type: string;
  currentQuestion: TypeQuestion;
}) {
  const [questionExpanded, setQuestionExpanded] = useState<string | false>(
    false
  );

  const handleChangeQuestionExpanded =
    (quetion: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setQuestionExpanded(isExpanded ? quetion : false);
    };

  return (
    <Accordion
      expanded={questionExpanded === currentQuestion.question}
      onChange={handleChangeQuestionExpanded(currentQuestion.question)}
      sx={{
        color: type === "correct" ? "hsl(138, 50%, 74%)" : "hsl(0, 52%,74%)",
        textAlign: "left",
        backgroundColor: "#2a3e50",
      }}
    >
      <AccordionSummary
        sx={{
          paddingTop: "0",
          paddingBottom: "0",
          borderBottom:
            questionExpanded === currentQuestion.question
              ? "1px solid #333"
              : "0",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="correctbh-content"
        id="correct-summary-accordion"
      >
        <Typography
          sx={{
            width: "100%",
            flexShrink: 0,
            padding: 0,
            margin: 0,
          }}
        >
          {currentQuestion.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingTop: "0", paddingBottom: "0" }}>
        <List dense={true}>
          <ListItem sx={{ padding: "0", color: "hsl(138, 50%, 74%)" }}>
            <ListItemText primary={"✔ " + currentQuestion.correctAnswer} />
          </ListItem>
          {typeof currentQuestion.incorrectAnswers === "boolean" ? (
            <ListItem sx={{ padding: "0" }}>
              <ListItemText
                sx={{ color: "hsl(0, 52%,74%)" }}
                primary={"✘ " + currentQuestion.incorrectAnswers}
              />
            </ListItem>
          ) : (
            currentQuestion.incorrectAnswers.map((a) => (
              <ListItem sx={{ padding: "0" }} key={a}>
                <ListItemText
                  sx={{ color: "hsl(0, 52%,74%)" }}
                  primary={"✘ " + a}
                />
              </ListItem>
            ))
          )}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
