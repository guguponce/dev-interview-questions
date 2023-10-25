import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CustomIcon from "../../components/CustomIcon";

export default function ActionAreaCard({
  techName,
  handleSelectTech,
  selectedTech,
}: {
  techName: string;
  handleSelectTech: (name: string) => void;
  selectedTech: string[];
}) {
  return (
    <Card
      onClick={() => handleSelectTech(techName)}
      sx={{
        maxWidth: 200,
        backgroundColor: selectedTech.includes(techName)
          ? "#a4c0d5"
          : "#729ebe",
        outline: selectedTech.includes(techName) ? "2px solid #a4c0d5" : "none",
        outlineOffset: "0.25rem",
        width: ["200px", "200px", "auto"],
      }}
    >
      <CardActionArea>
        {" "}
        <CardContent
          sx={{
            margin: "0 auto",
            width: "50%",
            aspectRatio: 1,
            padding: "1rem",
          }}
        >
          <CustomIcon name={techName} />
        </CardContent>
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
      </CardActionArea>
    </Card>
  );
}
