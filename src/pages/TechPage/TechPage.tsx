import React, { useContext, useMemo } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import StatisticsChart from "./StatisticsChart";
import { iTechAnswered } from "../../utils/interfaces";
import QuestionsAccordion from "./QuestionsAccordion";
import StartLearning from "./StartLearning";
import { BIBLIOGRAPHY_LINKS } from "../../utils/constants";
import Stack from "@mui/material/Stack";
import BiblioCard from "./BiblioCard";
import CustomIcon from "../../components/CustomIcon";
import NavBar from "../../components/NavBar";
import { QuestionsContext } from "../../services/firebase/QuestionsContext";

export default function TechPage() {
  const { tech } = useParams();
  const allQuestions = useContext(QuestionsContext);
  const { localStorageData } = useLocalStorage();
  const techAnswered: iTechAnswered = useMemo(() => {
    if (!localStorageData) return { all: [] };
    const ans = localStorageData
      ?.filter((item) => item.tech === tech)
      .sort((a, b) => a.date - b.date);
    const correct = ans?.filter((item) => item.answer);
    return {
      correct,
      incorrect: ans?.filter((item) => !item.answer),
      first: ans[0],
      last: ans[ans.length - 1],
      all: ans,
    };
  }, [localStorageData, tech]);
  if (!tech) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: [
            "0 0 66px 50px",
            "0 0 66px 50px",
            "0 0 66px 100px",
            "0 0 66px",
          ],
          width: [
            "calc(100vw - 50px)",
            "calc(100vw - 50px)",
            "calc(100vw - 116px * 2)",
          ],
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          height={["50px", "50px", "100px"]}
          mb={4}
          mx={"100px"}
          gap={2}
          zIndex={300}
        >
          <Box height={"75%"}>
            <CustomIcon name={tech} />
          </Box>
          <Typography alignSelf="center" variant="h4" fontSize={["2rem"]}>
            {tech}
          </Typography>
        </Stack>
        {techAnswered.incorrect?.length || techAnswered.correct?.length ? (
          <>
            <StatisticsChart
              allQuestions={allQuestions}
              techAnswered={techAnswered}
              tech={tech}
            />

            <QuestionsAccordion
              allQuestions={allQuestions}
              techAnswered={techAnswered}
              tech={tech}
            />
          </>
        ) : (
          <StartLearning tech={tech} />
        )}
        <Box my={5}>
          <Typography
            color={"#eee"}
            variant="subtitle1"
            sx={{
              backgroundColor: "#1c2835",
              width: ["80%", "80%", "fit-content"],
              margin: "0 auto",
              borderRadius: "0.5rem 0.5rem 0 0",
              padding: "1rem 2rem",
            }}
          >
            If you want to learn more about {tech}, you can visit some of the
            following links:
          </Typography>
          <Stack spacing={2}>
            {BIBLIOGRAPHY_LINKS[tech].map(({ type, links }) => (
              <Box
                key={type}
                sx={{
                  padding: "1rem 1rem 2rem",
                  backgroundColor: "hsla(208, 36%, 27%, 0.5)",
                  width: "100%",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  my={2}
                  gap={2}
                  height={"3rem"}
                >
                  <Box height={"100%"}>
                    <CustomIcon name={type} />
                  </Box>
                  <Typography variant="h5">{type}</Typography>
                </Stack>
                <Stack
                  direction="row"
                  flexWrap={"wrap"}
                  gap={2}
                  justifyContent={"center"}
                >
                  {links.map(({ name, description, url, logo }) => (
                    <React.Fragment key={name}>
                      <BiblioCard
                        description={description}
                        title={name}
                        imageUrl={logo}
                        linkUrl={url}
                      ></BiblioCard>
                    </React.Fragment>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
