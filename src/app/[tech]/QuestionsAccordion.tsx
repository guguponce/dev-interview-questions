"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { iTechAnswered, TypeQuestion } from "@/app/lib/types";
import ItemAccordionQuestions from "./ItemAccordionQuestions";
import NextAccordion from "./NextAccordion";
type typeAnswer = "correct" | "incorrect";
export default function QuestionsAccordion({
  techAnswered,
  tech,
  allQuestions,
}: {
  techAnswered: iTechAnswered;
  tech: string;
  allQuestions: TypeQuestion[];
}) {
  const [typeExpanded, setTypeExpanded] = useState<string | false>(false);

  const handleChangeTypeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setTypeExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #5183a6 30%,#729ebe 90%)",
        color: "#f5f7fa",
        my: 6,
        padding: "1rem 0 2rem",
        maxWidth: "800px",
      }}
    >
      <Typography variant="subtitle1" sx={{ margin: "1rem" }}>
        Here are the questions you answered.{" "}
        {!!techAnswered.incorrect?.length && (
          <span>
            After you complete all of the questions about {tech}, you will be
            able to see the correct answers.
          </span>
        )}
      </Typography>

      <Box sx={{ width: "95%", margin: "0 auto" }}>
        {["incorrect", "correct"]
          .filter((type: string) => techAnswered[type as typeAnswer]?.length)
          .map((type: string) => (
            <Accordion
              key={type}
              expanded={typeExpanded === type}
              onChange={handleChangeTypeExpanded(type)}
              sx={{
                backgroundColor: "#1c2835",
                "& .css-1tmu6hb-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded":
                  {
                    minHeight: "2.5rem",
                    borderBottom: "1px solid #333",
                  },
                "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
                  margin: "0.5rem 0",
                },
                color:
                  type === "correct" ? "hsl(138, 50%, 74%)" : "hsl(0, 52%,74%)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="correctbh-content"
                id="correct-summary-accordion"
              >
                <Typography sx={{ width: "95%", flexShrink: 0 }}>
                  {type === "correct" ? "Correct" : "Incorrect"} answers
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingTop: 0 }}>
                {techAnswered[type as typeAnswer]?.length &&
                  techAnswered[type as typeAnswer]?.map((ans) => {
                    const currentQuestion = allQuestions.find(
                      (q) => q.id === ans.id
                    ) as TypeQuestion;
                    if (!currentQuestion)
                      return <React.Fragment key={ans.id}></React.Fragment>;
                    return (
                      <React.Fragment key={ans.id}>
                        <ItemAccordionQuestions
                          type={type}
                          currentQuestion={currentQuestion}
                        />
                      </React.Fragment>
                    );
                  })}
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  );
}
