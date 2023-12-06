import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface BiblioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const BiblioCard: React.FC<BiblioCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <a href={linkUrl} target="_blank">
      <Card
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          borderRadius: "0.5rem",
          width: ["100%", 245],
          maxWidth: ["100vw", 245],
          alignItems: ["center", "flex-start"],
          background: "radial-gradient(#fefefe,#f5f7fa)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.01)",
          },
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            height: 140,
            minHeight: 140,
            width: [140, "100%"],
            padding: "0.5rem",
            margin: "0 auto",
          }}
          image={"/bibliography_logos/" + imageUrl}
          alt={title}
        />
        <CardContent
          sx={{
            textAlign: "start",
            backgroundColor: "#cedde9",
            color: "#232323",
            height: "100%",
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="caption" color="#454545" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default BiblioCard;
