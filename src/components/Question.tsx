import { useState, useMemo } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { typeQuestion } from "../utils/interfaces";
import AnswerIcon from "./AnswerIcon";

export default function Question({
  currentQuestion,
  handleGetNextQuestion,
}: {
  currentQuestion: typeQuestion;
  handleGetNextQuestion: (
    currentQuestion: typeQuestion,
    answer: boolean
  ) => void;
}) {
  const [answerSubmitted, setAnswerSubmitted] = useState<string | null>(null);
  const [formValue, setFormValue] = useState<string>("");

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
    setAnswerSubmitted(val);
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
  };
  return (
    <FormControl fullWidth>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          textAlign: "start",
          m: "0.5rem",
        }}
      >
        <Typography>{currentQuestion.question}</Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group"
        name="radio-buttons-group"
        defaultValue={randomizedAnswers[0]}
        value={formValue}
        onChange={handleChangeAnswer}
      >
        {randomizedAnswers.map((answer) => (
          <Stack direction={"row"} key={answer} alignItems={"center"}>
            <FormControlLabel
              control={<Radio />}
              label={answer}
              value={answer}
              sx={{
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
            {answer === answerSubmitted &&
              answer !== String(currentQuestion.correctAnswer) &&
              AnswerIcon(false, "#fe786b")}
            {answerSubmitted &&
              answer === String(currentQuestion.correctAnswer) &&
              AnswerIcon(true, "#6bbd6e")}
          </Stack>
        ))}
      </RadioGroup>

      {answerSubmitted ? (
        <Button sx={{ fontWeight: 600, color: "#cedde9" }} onClick={handleNext}>
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
            background: "linear-gradient(45deg, #6bbd6e 20%, #c8eac9 90%)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.01)",
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
  );
}
