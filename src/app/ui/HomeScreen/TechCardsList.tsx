"use client";
import TechCard from "@/app/ui/HomeScreen/TechCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import useLocalStorage from "@/app/lib/hooks/useLocalStorage";
import { TECHNOLOGIES_SUPPORTED } from "@/app/lib/data";
import React, { useState } from "react";
import MUIThemeProvider from "@/app/ThemeProvider";

export default function TechCardsList() {
  const { technologiesLearned } = useLocalStorage();
  const [selectedTech, setSelectedTech] = useState<string[]>(
    technologiesLearned || []
  );
  const handleSelectTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };
  return (
    <MUIThemeProvider>
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
      <Link href={`/questions/${selectedTech.join("+")}`}>
        <Button
          sx={{
            alignSelf: "flex-end",
            width: "fit-content",
            m: "0.5rem 1rem 0.5rem auto",
            fontWeight: 600,
            color: "#fefefe !important",
            background:
              "linear-gradient(45deg, #6bbd6e 40%, #c8eac9 90%) !important",
            transition: "transform 0.2s",
            marginTop: "2rem",
            "&:hover": {
              transform: "scale(1.01)",
              background: "linear-gradient(-45deg,  #6bbd6e 40%, #c8eac9 90%)",
            },
            "&:active": {
              transform: "scale(0.99)",
            },
          }}
          endIcon={
            <RocketLaunchIcon
              className="StartRocketIcon"
              sx={{ color: "#2a3e50" }}
            />
          }
          disabled={!selectedTech.length}
          variant="contained"
          size="large"
        >
          Start
        </Button>
      </Link>
    </MUIThemeProvider>
  );
}
