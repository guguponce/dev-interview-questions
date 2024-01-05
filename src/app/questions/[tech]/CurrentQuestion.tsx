"use client";
import { useCallback, useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useLocalStorage from "@/app/lib/hooks/useLocalStorage";
import Link from "next/link";

import { TypeQuestion } from "@/app/lib/types";
import CustomIcon from "@/app/ui/components/CustomIcon";

import React from "react";
import Question from "@/app/ui/components/Question";
import { Stack } from "@mui/material";

export default function Questions({
  techQuestions,
  tech,
}: {
  techQuestions: TypeQuestion[];
  tech: string;
}) {
  const { addToLocalStorage, localStorageData, answeredIDS } =
    useLocalStorage();

  const [currentStrike, setCurrentStrike] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const questionsArray: TypeQuestion[] = useMemo(
    () =>
      !localStorageData
        ? techQuestions
        : techQuestions
            .filter(
              (question) =>
                !answeredIDS.includes(question.id) &&
                !currentStrike.includes(question.id)
            )
            .sort(() => Math.random() - 0.5),
    [currentStrike]
  );
  const currentQuestion = useMemo(
    () => (questionsArray.length ? questionsArray[0] : null),
    [questionsArray]
  );

  const handleGetNextQuestion = (currentQuestion: TypeQuestion) => {
    if (!currentQuestion) return;
    setCurrentStrike((prev) => [...prev, currentQuestion!.id]);
  };

  const handleShowExplanation = useCallback((boolean: boolean) => {
    setShowExplanation(boolean);
  }, []);
  const handleAddToLocalStorage = useCallback(
    (currentQuestion: TypeQuestion, answer: boolean) => {
      addToLocalStorage({
        id: currentQuestion!.id,
        answer,
        date: new Date(),
        tech: currentQuestion!.tech,
      });
    },
    []
  );

  if (!currentQuestion)
    return (
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" mb={4}>
          You have answered all the questions!
        </Typography>
        <Typography variant="body1" mb={4}>
          Check your progress on
        </Typography>
        <Stack alignItems="center" justifyContent="center">
          {tech.split("%2B").map((techName) => (
            <Link href={`/${tech}`}>
              <Button
                variant="contained"
                sx={{
                  width: "fit-content",
                  height: "2rem",
                  fontWeight: 600,
                  color: "#fefefe !important",
                  background:
                    "linear-gradient(90deg, #ee946d 40%, hsl(18, 79%, 78%) 100%) !important",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.01)",
                    background:
                      "linear-gradient(-90deg, #ee946d 40%, hsl(18, 79%, 78%)  100%) !important",
                  },
                  "&:active": {
                    transform: "scale(0.99)",
                  },
                }}
              >
                {techName}
                <Box ml="0.5rem" height={"1.5rem"} width={"1.5rem"}>
                  <CustomIcon name={techName} />
                </Box>
              </Button>
            </Link>
          ))}
        </Stack>
      </Container>
    );

  return (
    <>
      <Box height={"75px"} width={"75px"} mb={2} mx={"auto"}>
        <CustomIcon name={currentQuestion!.tech} />
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "linear-gradient(-45deg, #335571 30%, #2d485f 90%)",
          m: "0 auto",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "start",
            padding: "0.5em 1rem",
            background: "linear-gradient(-45deg, #729ebe 30%, #5183a6 90%)",
          }}
        >
          {currentQuestion!.topic}
        </Typography>
        <Box sx={{ p: 2 }}>
          <Question
            handleAddToLocalStorage={handleAddToLocalStorage}
            currentQuestion={currentQuestion!}
            handleGetNextQuestion={handleGetNextQuestion}
            handleShowExplanation={handleShowExplanation}
          />
        </Box>
      </Box>

      {showExplanation && currentQuestion?.explanation && (
        <Box
          width={"100%"}
          sx={{ my: "1rem" }}
          p={4}
          bgcolor={"hsl(0,0%,100%,0.1)"}
        >
          <h4>Explanation:</h4>
          <Typography sx={{ fontStyle: "italic" }}>
            {currentQuestion!.explanation
              .split("\n")
              .filter((para) => para.trim() !== "")
              .map((item) => (
                <Typography
                  mb={1}
                  sx={{
                    textIndent: item[0] === "-" ? "1.5rem" : "0.5rem",
                  }}
                  key={item + Math.random()}
                >
                  {item}
                  <br />
                </Typography>
              ))}
          </Typography>
        </Box>
      )}

      <Box my={4}>
        <Typography fontStyle={"italic"} variant="body1">
          Check your progress on {currentQuestion!.tech}
        </Typography>
        <Link href={`/${currentQuestion!.tech}`}>
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              height: "2rem",
              fontWeight: 600,
              color: "#fefefe !important",
              background:
                "linear-gradient(90deg, #ee946d 40%, hsl(18, 79%, 78%) 100%) !important",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.01)",
                background:
                  "linear-gradient(-90deg, #ee946d 40%, hsl(18, 79%, 78%)  100%) !important",
              },
              "&:active": {
                transform: "scale(0.99)",
              },
            }}
          >
            Statistics{" "}
            <Box ml="0.5rem" height={"1.5rem"} width={"1.5rem"}>
              <CustomIcon name="Statistics" />
            </Box>
          </Button>
        </Link>
      </Box>
    </>
  );
}
