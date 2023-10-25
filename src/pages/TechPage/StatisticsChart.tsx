import { Stack } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { iTechAnswered, typeQuestion } from "../../utils/interfaces";
export default function StatisticsChart({
  techAnswered,
  tech,
  allQuestions,
}: {
  techAnswered: iTechAnswered;
  tech: string;
  allQuestions: typeQuestion[];
}) {
  return (
    <Card sx={{ position: "relative", maxWidth: "80%" }}>
      <CardContent
        sx={{
          background: "linear-gradient(-45deg, #729ebe 30%,#3a6282 90%)",
        }}
      >
        <Box sx={{ margin: "1rem" }}>
          <Typography
            variant="subtitle1"
            sx={{
              "& span": {
                fontWeight: "bold",
              },
            }}
          >
            We currently have{" "}
            <span>{allQuestions.filter((q) => q.tech === tech).length}</span>{" "}
            questions about {tech}.
          </Typography>
          {techAnswered.all.length ? (
            <Typography
              sx={{
                "& span": {
                  fontWeight: "bold",
                },
              }}
            >
              So far you have answered <span>{techAnswered.all.length}</span> of
              them.
            </Typography>
          ) : (
            <Typography> "You still haven't answered any of them." </Typography>
          )}
        </Box>
        <Stack
          sx={{
            width: "80%",
            margin: "0 auto",
            borderRadius: "1rem",
          }}
          justifyContent={"center"}
          direction={"row"}
        >
          {techAnswered.correct?.length && (
            <Box
              height={"3rem"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                background:
                  "linear-gradient(-45deg,  #9dd89f 30%, #4caf50 90%)",

                borderRadius:
                  techAnswered.correct?.length && techAnswered.incorrect?.length
                    ? "1rem 0 0 1rem"
                    : "1rem",
              }}
              width={`${
                ((techAnswered.correct?.length || 0) * 100) /
                techAnswered.all?.length
              }%`}
            >
              <Typography variant="h5" sx={{ alignSelf: "center" }}>
                {techAnswered.correct?.length}
              </Typography>
            </Box>
          )}
          {!!techAnswered.incorrect?.length && (
            <Box
              height={"3rem"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                background: "linear-gradient(45deg,  #fe786b 30%, #f64231 90%)",
                borderRadius:
                  techAnswered.correct?.length && techAnswered.incorrect?.length
                    ? "0 1rem 1rem 0"
                    : "1rem",
              }}
              width={`${
                ((techAnswered.incorrect?.length || 0) * 100) /
                techAnswered.all?.length
              }%`}
            >
              <Typography variant="h5" sx={{ alignSelf: "center" }}>
                {techAnswered.incorrect?.length}
              </Typography>
            </Box>
          )}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: "hsl(207,40%,27%)",
        }}
      >
        <Stack sx={{ margin: "0 auto" }} alignItems={"center"}>
          <Typography variant="h6">
            Would you like to answer some more?
          </Typography>
          <Link to={`/questions/${tech}`}>
            <Button
              variant="contained"
              size="medium"
              sx={{ width: "fit-content", margin: "0.5rem auto" }}
            >
              Continue
            </Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  );
}
