import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import useLocalStorage from "../../hooks/useLocalStorage";
import Progress from "./Progress";
import TechCard from "./TechCard";
import { TECHNOLOGIES_SUPPORTED } from "../../utils/constants";
function HomeScreen() {
  const { technologiesLearned, localStorageData } = useLocalStorage();
  const [selectedTech, setSelectedTech] = useState<string[]>(
    technologiesLearned || []
  );
  const handleSelectTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };
  return (
    <Container
      id="homescreen-container"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        px: "0 !important",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#3a6282",
          color: "white",
          width: "100%",
          padding: "0.25rem 0.5rem",
          borderRadius: "0 0 0.25rem 0.25rem",
          mb: "1rem",
        }}
        variant="h2"
      >
        Dev Interview Questions
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          width: "80%",
          textAlign: "start",
          fontStyle: "italic",
          padding: "1rem 0.5rem",
          marginBottom: "1rem",
        }}
      >
        This website is designed to help to get developers prepared for their
        future job interviews. For now the content will remain about HTML, CSS,
        JavaScript and React.
      </Typography>
      <Box
        sx={{
          borderRadius: "0.25rem",
          padding: ["1rem", "1rem 2rem"],
          maxWidth: "80%",
          backgroundColor: "#2d485f",
        }}
      >
        <Typography variant="h5">What do you want to learn?</Typography>
        <Stack
          sx={{ marginTop: "1rem" }}
          direction={["column", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          useFlexGap
          gap={2}
        >
          {TECHNOLOGIES_SUPPORTED.map((name) => (
            <React.Fragment key={name}>
              <TechCard
                selectedTech={selectedTech}
                techName={name}
                handleSelectTech={handleSelectTech}
              />
            </React.Fragment>
          ))}
        </Stack>
        <Link to={`/questions/${selectedTech.join("+")}`}>
          <Button
            sx={{
              alignSelf: "flex-end",
              width: "fit-content",
              m: "0.5rem 1rem 0.5rem auto",
              fontWeight: 600,
              color: "#2a3e50",
              background: "linear-gradient(45deg, #6bbd6e 20%, #c8eac9 90%)",
              transition: "transform 0.2s",
              marginTop: "2rem",
              "&:hover": {
                transform: "scale(1.01)",
                background: "linear-gradient(-45deg, #6bbd6e 20%, #c8eac9 90%)",
              },
              "&:active": {
                transform: "scale(0.99)",
              },
            }}
            endIcon={<RocketLaunchIcon />}
            disabled={!selectedTech.length}
            variant="contained"
            size="large"
          >
            Start
          </Button>
        </Link>
      </Box>
      {localStorageData && technologiesLearned && (
        <Progress
          localStorageData={localStorageData}
          technologiesLearned={technologiesLearned}
        ></Progress>
      )}
    </Container>
  );
}

export default HomeScreen;
