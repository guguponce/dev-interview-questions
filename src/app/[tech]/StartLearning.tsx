import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function StartLearning({ tech }: { tech: string }) {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: "80%",
        backgroundColor: "hsl(207,40%,27%)",
      }}
    >
      <CardContent>
        <Stack sx={{ margin: "0 auto" }} alignItems={"center"}>
          <Typography variant="h6" color={"#fefefe"}>
            Would you like to take the first step?
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
              Start learning {tech}
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
