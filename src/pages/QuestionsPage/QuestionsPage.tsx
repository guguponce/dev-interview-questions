import { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import useLocalStorage from "../../hooks/useLocalStorage";
import useMock from "../../hooks/useMock";
import { Link, useParams } from "react-router-dom";
import Question from "../../components/Question";
import { typeQuestion } from "../../utils/interfaces";

import loadingSVG from "../../assets/images/loading/loading.svg";
import { TECHNOLOGIES_SUPPORTED } from "../../utils/constants";
import NavBar from "../../components/NavBar";
import CustomIcon from "../../components/CustomIcon";

export default function QuestionsPage() {
  const { notAnsweredQuestions } = useMock();
  const { params } = useParams();
  const { addToLocalStorage, setLocalStorage, localStorageData } =
    useLocalStorage();
  const [currentStrike, setCurrentStrike] = useState<number[]>([]);
  const questionsArray = useMemo(
    () =>
      currentStrike
        ? notAnsweredQuestions.filter((q) => !currentStrike.includes(q.id))
        : notAnsweredQuestions,
    [notAnsweredQuestions, currentStrike]
  );
  const currentQuestion = useMemo(
    () => (questionsArray.length ? questionsArray[0] : null),
    [questionsArray]
  );

  const handleGetNextQuestion = (
    currentQuestion: typeQuestion,
    answer: boolean
  ) => {
    if (!currentQuestion) return;
    addToLocalStorage({
      id: currentQuestion.id,
      answer,
      date: new Date(),
      tech: currentQuestion.tech,
    });
    setCurrentStrike((prev) => [...prev, currentQuestion.id]);
  };

  if (!params || !TECHNOLOGIES_SUPPORTED.includes(params)) {
    return (
      <>
        <NavBar />
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">No questions found</Typography>
          <Typography my={2} variant="body1" fontStyle={"italic"}>
            Please go back to the homepage
          </Typography>
          <Link to="/">
            <Button variant="contained">Return</Button>
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: [
            "calc(100vw - 50px)",
            "calc(100vw - 50px)",
            "calc(100vw - 116px * 2)",
          ],
          margin: ["66px 0 66px 50px", "66px 0 66px 50px", "116px auto"],
        }}
      >
        {!currentQuestion ? (
          <Container>
            <Box height={"200px"}>
              <CustomIcon name={params} />
            </Box>

            <Typography variant="h3">Loading...</Typography>
          </Container>
        ) : (
          <>
            <Box
              sx={{
                maxWidth: "800px",
                width: "80vw",
                background: "linear-gradient(-45deg, #335571 30%, #2d485f 90%)",
                m: "0 auto",
                borderRadius: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "start",
                  padding: "0.5em 1rem",
                  background:
                    "linear-gradient(-45deg, #729ebe 30%, #5183a6 90%)",
                }}
              >
                {currentQuestion.topic}
              </Typography>
              <Box sx={{ p: 2 }}>
                <Question
                  currentQuestion={currentQuestion}
                  handleGetNextQuestion={handleGetNextQuestion}
                />
              </Box>
            </Box>
            <Box my={4}>
              <Typography fontStyle={"italic"} variant="body1">
                Check your progress on {currentQuestion.tech}
              </Typography>
              <Link to={`/${currentQuestion.tech}`}>
                <Button variant="contained">Statistics</Button>
              </Link>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
