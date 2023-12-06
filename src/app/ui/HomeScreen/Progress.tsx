"use client";
import type { TypeQuestion } from "@/app/lib/types";
import { useMemo, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import ReactApexCharts from "react-apexcharts";
import Stack from "@mui/material/Stack";

import { useRouter } from "next/navigation";
import useLocalStorage from "@/app/lib/hooks/useLocalStorage";
import MUIThemeProvider from "@/app/ThemeProvider";
import { monserrat } from "../fonts";

export default function Progress({
  allQuestions,
}: {
  allQuestions: { [key: string]: TypeQuestion[] };
}) {
  const { technologiesLearned, localStorageData } = useLocalStorage();
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1);
  }, []);

  const progress = useMemo(
    () =>
      localStorageData
        ? technologiesLearned?.map((tech) => {
            const totalFromCurrentTech = allQuestions[tech].length;
            const answeredFromCurrentTech =
              localStorageData.filter((q) => q.tech === tech) || [];
            return {
              tech,
              correct: answeredFromCurrentTech?.filter((q) => q.answer).length,
              answered: answeredFromCurrentTech?.length,
              total: totalFromCurrentTech,
            };
          })
        : [],
    [localStorageData, technologiesLearned, allQuestions]
  );
  return (
    <MUIThemeProvider>
      {!!progress?.length && (
        <Box my={6} id="progress-container">
          <Typography
            mb={2}
            width={["60%", "60%", "100%"]}
            mx={"auto"}
            variant="body1"
            fontStyle={"italic"}
            className={monserrat.className}
          >
            So far you have been learning
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={4}
            flexWrap={"wrap"}
          >
            {progress.map((t) => {
              return (
                <Box
                  role="button"
                  onClick={() => router.push(`/${t.tech}`)}
                  sx={{
                    p: 4,
                    borderRadius: "0.5rem",
                    boxShadow: "0px 5px 5px 5px #e9eff550",
                    "&:hover": {
                      boxShadow: "0px 5px 7px 7px #e9eff550",
                      transform: "scale(1.01)",
                      cursor: "pointer",
                    },
                  }}
                  key={t.tech}
                >
                  <Typography variant="h4">{t.tech}</Typography>

                  {display && (
                    <ReactApexCharts
                      labels={["✔", "✘"]}
                      series={[
                        Number(((100 * t.correct) / t.answered).toFixed(2)),
                        Number(
                          (
                            (100 * (t.answered - t.correct)) /
                            t.answered
                          ).toFixed(2)
                        ),
                      ]}
                      options={{
                        dataLabels: {
                          style: {
                            fontSize: "16px",
                            colors: ["#9dd89f", "#ffa9a1"],
                          },
                        },
                        legend: {
                          show: true,
                          floating: true,
                          fontSize: "12px",
                          position: "left",

                          offsetX: 60,
                          offsetY: -2,
                          markers: {
                            width: 0,
                          },
                          labels: {
                            useSeriesColors: true,
                          },
                          formatter: function (seriesName: string) {
                            return seriesName;
                          },
                          itemMargin: {
                            vertical: 3,
                          },
                        },
                        labels: ["✔", "✘"],
                        chart: {
                          foreColor: "#e9eff5",
                          height: 250,
                          type: "radialBar",
                        },
                        fill: {
                          colors: ["#9dd89f", "#ffa9a1"],
                        },
                        colors: ["#9dd89f", "#ffa9a1"],

                        plotOptions: {
                          radialBar: {
                            offsetY: 0,
                            startAngle: 0,
                            endAngle: 270,
                            dataLabels: {
                              name: {
                                fontSize: "22px",
                              },
                              value: {
                                fontSize: "16px",
                              },
                              total: {
                                show: true,
                                label: "Answered",
                                formatter: function () {
                                  return t.answered?.toString();
                                },
                              },
                            },
                          },
                        },
                      }}
                      type="radialBar"
                      height={250}
                      width={250}
                    />
                  )}

                  <Typography variant="caption">
                    Total {t.tech} questions: {t.total}
                  </Typography>
                  {display && (
                    <LinearProgress
                      // aria-name={"progress-bar" + t.tech}
                      variant="determinate"
                      value={(t.answered / t.total) * 100}
                    />
                  )}

                  <Typography variant="caption">
                    Answered: {((t.answered * 100) / t.total).toFixed(2)}%
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}
    </MUIThemeProvider>
  );
}
