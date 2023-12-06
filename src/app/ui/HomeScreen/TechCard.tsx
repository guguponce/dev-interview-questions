import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CustomIcon from "../components/CustomIcon";
import { useMemo } from "react";

export default function TechCard({
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
    <div
      style={{
        backgroundColor: selected ? "#a4c0d5" : "#729ebe",
        outline: selected ? "2px solid #a4c0d5" : "none",
      }}
      onClick={() => handleSelectTech(techName)}
      className="techCard"
    >
      <div className="cardActionArea">
        {" "}
        <div
          className="techIconBox"
          style={{
            // width: selected ? "50%" : "75%",
            paddingTop: selected ? "1rem" : 0,
          }}
        >
          <CustomIcon name={techName} />
        </div>
        {selected && (
          <div className="techNameBox">
            <h4 className="techName">{techName}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
