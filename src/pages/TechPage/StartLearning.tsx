import { Stack } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function StartLearning({ tech }: { tech: string }) {
  return (
    <Card sx={{ position: "relative", maxWidth: "80%" }}>
      <CardContent
        sx={{
          backgroundColor: "hsl(207,40%,27%)",
        }}
      >
        <Stack sx={{ margin: "0 auto" }} alignItems={"center"}>
          <Typography variant="h5">
            Would you like to take the first step?
          </Typography>
          <Link to={`/questions/${tech}`}>
            <Button
              variant="contained"
              size="medium"
              sx={{ width: "fit-content", margin: "0.5rem auto" }}
            >
              Start learning {tech}
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
