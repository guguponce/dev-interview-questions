import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CustomIcon from "../../components/CustomIcon";
import { useMemo } from "react";

export default function ActionAreaCard({
  techName,
  handleSelectTech,
  selectedTech,
}: {
  techName: string;
  handleSelectTech: (name: string) => void;
  selectedTech: string[];
}) {
  const selected = useMemo(
    () => selectedTech.includes(techName),
    [selectedTech, techName]
  );
  return (
    <Card
      onClick={() => handleSelectTech(techName)}
      sx={{
        maxWidth: 200,
        backgroundColor: selected ? "#a4c0d5" : "#729ebe",
        outline: selected ? "2px solid #a4c0d5" : "none",
        outlineOffset: "0.25rem",
        width: "200px",
        height: "175px",
        display: "flex",
      }}
    >
      <CardActionArea>
        {" "}
        <CardContent
          sx={{
            margin: "0 auto",
            width: selected ? "50%" : "75%",
            aspectRatio: 1,
            px: "1rem",
            pt: selected ? "1rem" : "0",
          }}
        >
          <CustomIcon name={techName} />
        </CardContent>
        {selected && (
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={500}
              component="div"
            >
              {techName}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
}
