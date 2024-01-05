import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { BIBLIOGRAPHY_LINKS } from "@/app/lib/data";
import Stack from "@mui/material/Stack";
import CustomIcon from "@/app/ui/components/CustomIcon";
import api from "@/app/api";

import BiblioCard from "./BiblioCard";
import PersonalTechData from "./PersonalTechData";
import dynamic from "next/dynamic";

const DynamicPersonalTechData = dynamic(async () => PersonalTechData, {
  ssr: false,
});

export default async function TechPage({
  params: { tech },
}: {
  params: { tech: string };
}) {
  const techQuestions = await api.getTechQuestions(tech.split("%2B"));
  const currentTech = tech.split("%2B")[0];
  return (
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
        mx={"auto"}
        gap={2}
        zIndex={300}
      >
        <Box
          height={["50% !important", "75%"]}
          width={["40px", "40px", "50px"]}
          // sx={{ backgroundColor: "red" }}
          mt={["0.25rem", "0.25rem", "0"]}
          alignSelf={["flex-start", "flex-start", "center"]}
        >
          <CustomIcon name={currentTech} />
        </Box>
        <Typography alignSelf="center" variant="h4" fontSize={["2rem"]}>
          {currentTech}
        </Typography>
      </Stack>
      <DynamicPersonalTechData techQuestions={techQuestions[0][currentTech]} />
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
          If you want to learn more about {currentTech}, you can visit some of
          the following links:
        </Typography>
        <Stack spacing={2}>
          {BIBLIOGRAPHY_LINKS[currentTech].map(({ type, links }) => (
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
                direction={["column", "column", "row"]}
                flexWrap={"wrap"}
                gap={2}
                justifyContent={"center"}
                alignItems={"center"}
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
  );
}
