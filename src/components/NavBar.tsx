import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box
      id="navbar"
      sx={{
        width: "100vw",
        height: "fit-content",
        position: "fixed",
        left: 0,
        top: 0,
        background:
          "linear-gradient(90deg, hsl(205, 34%, 48%,0.5)  30%,  hsl(205, 37%, 60%,0.5) 90%)",
        zIndex: 100,
        "&::before": {
          zIndex: 5,

          width: ["50px", "50px", "116px"],
          background:
            "linear-gradient(180deg, hsl(205, 34%, 48%,0.5)  30%,  hsl(205, 37%, 60%,0.5) 90%)",

          content: "''",
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
        },
      }}
    >
      <Link style={{ color: "inherit", textDecoration: "none" }} to={"/"}>
        <Box
          sx={{
            display: ["none", "none", "block"],
            zIndex: 900,
            position: "relative",
            background: "transparent",
            backgroundColor: "transparent",
            width: "116px",
            height: "100px",
            padding: "0.25rem 1rem",
            textAlign: "start",
            "& h4": {
              fontSize: "2rem",
              fontWeight: "bold",
              margin: 0,
            },
            "& h6": {
              fontSize: "1rem",
              fontWeight: "bold",
              margin: 0,
            },
          }}
        >
          <Typography variant="h4">Dev</Typography>
          <Typography variant="h6">Interview</Typography>
          <Typography variant="h6">Questions</Typography>
        </Box>

        <Box
          sx={{
            display: ["flex", "flex", "none"],
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 900,
            position: "relative",
            background: "transparent",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            // margin: "1rem",
            textAlign: "start",
            "& h4": {
              fontSize: "2rem",
              fontWeight: "bold",
              margin: 0,
            },
            "& h6": {
              fontSize: "1rem",
              fontWeight: "bold",
              margin: 0,
            },
          }}
        >
          <Typography variant="h5">Dev</Typography>
          <Typography variant="h6">IQ</Typography>
        </Box>
      </Link>
    </Box>
  );
}