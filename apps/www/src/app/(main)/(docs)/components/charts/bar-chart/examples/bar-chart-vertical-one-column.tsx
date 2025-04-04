/* eslint-disable react/no-unstable-nested-components */

"use client";

import { BarChart, type ChartConfig } from "@jamsr-ui/charts";
import { Card, CardHeader } from "@jamsr-ui/react";

const chartData = [
  { weekday: "Sunday", tablet: 90 },
  { weekday: "Monday", tablet: 135 },
  { weekday: "Tuesday", tablet: 120 },
  { weekday: "Wednesday", tablet: 60 },
  { weekday: "Thursday", tablet: 110 },
  { weekday: "Friday", tablet: 125 },
  { weekday: "Saturday", tablet: 100 },
];

const config: ChartConfig = {
  tablet: {
    color: "var(--ui-primary)",
    label: "Tablet Sales",
  },
};

export const BarChartVerticalOneColumn = () => {
  return (
    <Card>
      <CardHeader heading="Vertical One Column" />
      <BarChart
        layout="vertical"
        height={500}
        width="100%"
        chartData={chartData}
        config={config}
        barChart={{
          margin: { top: 20, right: 14, left: -8, bottom: 5 },
        }}
        yAxis={{
          dataKey: "weekday",
          tickFormatter: (value: string) => value.slice(0, 3),
        }}
      />
    </Card>
  );
};
