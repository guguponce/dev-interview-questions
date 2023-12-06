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
export default function ControlledAccordions({
  techAnswered,
  tech,
  allQuestions,
}: {
  techAnswered: iTechAnswered;
  tech: string;
  allQuestions: TypeQuestion[];
}) {
  const [typeExpanded, setTypeExpanded] = useState<string | false>(false);
  const [questionExpanded, setQuestionExpanded] = useState<string | false>(
    false
  );
  const handleChangeTypeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setTypeExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ width: "95%", margin: "0 auto" }}>
      {["incorrect", "correct"].map((type: string) => (
        <Accordion
          key={type}
          expanded={typeExpanded === type}
          onChange={handleChangeTypeExpanded(type)}
          sx={{
            backgroundColor: "#2a3e50 !important",

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
            {" "}
            <Typography sx={{ width: "95%", flexShrink: 0 }}>
              {type === "correct" ? "Correct" : "Incorrect"} answers
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
