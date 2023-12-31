"use client";
import React, { useState, useMemo } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { TypeQuestion } from "@/app/lib/types";
import AnswerIcon from "./AnswerIcon";
import MUIThemeProvider from "@/app/ThemeProvider";
import { Box } from "@mui/material";

export default function Question({
  currentQuestion,
  handleGetNextQuestion,
  handleAddToLocalStorage,
  handleShowExplanation,
}: {
  handleShowExplanation: (boolean: boolean) => void;
  currentQuestion: TypeQuestion;
  handleGetNextQuestion: (
    currentQuestion: TypeQuestion,
    answer: boolean
  ) => void;
  handleAddToLocalStorage: (
    currentQuestion: TypeQuestion,
    answer: boolean
  ) => void;
}) {
  const [answerSubmitted, setAnswerSubmitted] = useState<string | null>(null);
  const [formValue, setFormValue] = useState<string>("");
  console.log(currentQuestion);
  const randomizedAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    const answers =
      typeof currentQuestion?.incorrectAnswers === "boolean"
        ? ["true", "false"]
        : [
            currentQuestion?.correctAnswer as string,
            ...currentQuestion.incorrectAnswers,
          ].sort(() => Math.random() - 0.5);
    setFormValue(answers[0]);
    return answers;
  }, [currentQuestion]);

  const handleSubmitAnswer = (val: string) => {
    if (!currentQuestion) return;
    handleAddToLocalStorage(
      currentQuestion,
      val === String(currentQuestion.correctAnswer)
    );
    setAnswerSubmitted(val);
    handleShowExplanation(true);
  };
  const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((e.target as HTMLInputElement).value);
  };

  const handleNext = () => {
    handleGetNextQuestion(
      currentQuestion,
      String(currentQuestion.correctAnswer) === answerSubmitted
    );
    setAnswerSubmitted(null);
    handleShowExplanation(false);
  };

  console.log("currentQuestion.", currentQuestion);
  return (
    <MUIThemeProvider>
      <FormControl
        fullWidth
        // sx={{
        //   outline:
        //     !!answerSubmitted &&
        //     currentQuestion.correctAnswer === answerSubmitted
        //       ? "2px solid #6bbd6e50"
        //       : "2px solid #fe786b50",
        //   borderRadius: "0 0 0.25rem 0.25rem",
        // }}
      >
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{
            textAlign: "start",
            m: "0.5rem",
          }}
        >
          <Typography>{currentQuestion.question}</Typography>
          {currentQuestion.codeSnippet && (
            <Box
              sx={{
                bgcolor: "#2a3e50",
                color: "#fefefe",
                fontStyle: "italic",
                width: "fit-content",
                px: "1.5rem",
                py: "0.25rem",
                borderRadius: "0.25rem",
                mt: "0.5rem",
              }}
            >
              <Typography variant="body2">
                {currentQuestion.codeSnippet
                  .split(/(;|{|})(?![^()]*\))/)
                  .map((item) => {
                    if (item.match(/(;|{)(?![^()]*\))/)) {
                      return (
                        <React.Fragment key={item + Math.random()}>
                          {item}
                          <br />
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={item + Math.random()}>
                        {item}
                      </React.Fragment>
                    );
                  })}
              </Typography>
            </Box>
          )}
        </FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          defaultValue={randomizedAnswers[0]}
          value={formValue}
          onChange={handleChangeAnswer}
        >
          {randomizedAnswers.map((answer) => (
            <Stack
              width={"100%"}
              direction={"row"}
              key={answer + Math.random()}
              alignItems={"center"}
              mb={"0.1rem"}
              sx={{
                backgroundColor: "#1c283520",
              }}
            >
              <FormControlLabel
                control={<Radio />}
                label={answer}
                value={answer}
                sx={{
                  display: "block",
                  flex: 1,
                  color:
                    answerSubmitted &&
                    answer === answerSubmitted &&
                    answer !== String(currentQuestion.correctAnswer)
                      ? "#fe786b"
                      : answerSubmitted &&
                        answer === String(currentQuestion.correctAnswer)
                      ? "#9dd89f"
                      : "#f5f7fa",
                  fontWeight:
                    answerSubmitted &&
                    answer === String(currentQuestion.correctAnswer)
                      ? 800
                      : 400,
                  m: "0 0.5rem",
                }}
              />
              <Box minWidth={answerSubmitted ? "2rem" : "0"}>
                {answer === answerSubmitted &&
                  answer !== String(currentQuestion.correctAnswer) &&
                  AnswerIcon(false, "#fe786b")}
                {answerSubmitted &&
                  answer === String(currentQuestion.correctAnswer) &&
                  AnswerIcon(true, "#6bbd6e")}
              </Box>
            </Stack>
          ))}
        </RadioGroup>

        {answerSubmitted ? (
          <Button
            sx={{ fontWeight: 600, color: "#cedde9" }}
            onClick={handleNext}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-end",
              width: "fit-content",
              m: "0.5rem 1rem 0.5rem auto",
              fontWeight: 600,
              color: "#1c2835",
              background:
                "linear-gradient(45deg, #6bbd6e 20%, #c8eac9 90%) !important",
              transition: "transform 0.2s",
              "&:hover": {
                boxShadow: "0px 0px 5px 5px #2a3e50",
                background: "linear-gradient(-45deg, #6bbd6e 20%, #c8eac9 90%)",
              },
              "&:active": {
                transform: "scale(0.99)",
              },
            }}
            onClick={() => handleSubmitAnswer(formValue)}
          >
            Submit
          </Button>
        )}
      </FormControl>
    </MUIThemeProvider>
  );
}
