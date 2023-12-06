import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { iTechAnswered } from "@/app/lib/types";
import { bonanova, monserrat } from "../ui/fonts";
import MUIThemeProvider from "../ThemeProvider";
export default function StatisticsChart({
  techAnswered,
  tech,
  techQuestionsQuantity,
}: {
  techAnswered: iTechAnswered;
  tech: string;
  techQuestionsQuantity: number;
}) {
  return (
    <MUIThemeProvider>
      <Card
        sx={{
          position: "relative",
          maxWidth: ["100%", "100%", "80%"],
          mx: "auto",
        }}
      >
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
              className={bonanova.className}
            >
              We currently have{" "}
              <span className={monserrat.className}>
                {techQuestionsQuantity}
              </span>{" "}
              questions about {tech}.
            </Typography>
            {techAnswered.all.length ? (
              <Typography
                sx={{
                  "& span": {
                    fontWeight: "bold",
                  },
                }}
                className={bonanova.className}
              >
                So far you have answered{" "}
                <span className={monserrat.className}>
                  {techAnswered.all.length}
                </span>{" "}
                of them.
              </Typography>
            ) : (
              <Typography className={bonanova.className}>
                {" "}
                "You still haven't answered any of them."{" "}
              </Typography>
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
            {!!techAnswered.correct?.length && (
              <Box
                height={"3rem"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  background:
                    "linear-gradient(-45deg,  #9dd89f 30%, #4caf50 90%)",

                  borderRadius:
                    techAnswered.correct?.length &&
                    techAnswered.incorrect?.length
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
                  background:
                    "linear-gradient(45deg,  #fe786b 30%, #f64231 90%)",
                  borderRadius:
                    techAnswered.correct?.length &&
                    techAnswered.incorrect?.length
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
            <Typography variant="subtitle1">
              Would you like to answer some more?
            </Typography>
            <Link href={`/questions/${tech}`}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  width: "fit-content",
                  margin: "0.5rem auto",
                  fontWeight: 600,
                  color: "#fefefe !important",
                  background:
                    "linear-gradient(90deg, #6bbd6e 40%, #9dd89f 100%) !important",
                  transition: "transform 0.2s",
                  marginTop: "2rem",
                  "&:hover": {
                    transform: "scale(1.01)",
                    background:
                      "linear-gradient(-90deg,  #6bbd6e 40%, #9dd89f 100%)",
                  },
                  "&:active": {
                    transform: "scale(0.99)",
                  },
                }}
              >
                Continue
              </Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </MUIThemeProvider>
  );
}
