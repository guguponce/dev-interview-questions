import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function PieArcLabel({
  data,
  size,
}: {
  data: { label: string; value: number }[];
  size: { width: number; height: number };
}) {
  return (
    <PieChart
      series={[
        {
          arcLabelMinAngle: 45,
          innerRadius: 15,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 3,
          data: data
            .map((ans) => ({
              value: ans.value,
              color: ans.label === "✔" ? "#4caf50" : "#f44336",
            }))
            .filter((ans) => ans.value),
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "red",
          fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}
