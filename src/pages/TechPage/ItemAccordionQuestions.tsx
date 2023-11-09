import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import { typeQuestion } from "../../utils/interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ItemAccordionQuestions({
  currentQuestion,
  handleChangeQuestionExpanded,
  questionExpanded,
  type,
}: {
  type: string;
  currentQuestion: typeQuestion;
  questionExpanded: string | false;
  handleChangeQuestionExpanded: (
    question: string
  ) => (event: React.SyntheticEvent, isQuestionExpanded: boolean) => void;
}) {
  return (
    <Accordion
      expanded={questionExpanded === currentQuestion.question}
      onChange={handleChangeQuestionExpanded(currentQuestion.question)}
      sx={{
        color: type === "correct" ? "hsl(138, 50%, 74%)" : "hsl(0, 52%,74%)",
        textAlign: "left",
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
