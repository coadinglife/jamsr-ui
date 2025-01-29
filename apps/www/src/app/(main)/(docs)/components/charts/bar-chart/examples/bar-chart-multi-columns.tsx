/* eslint-disable react/no-unstable-nested-components */

"use client";

import { BarChart, type ChartConfig } from "@jamsr-ui/charts";
import { Card, CardContent, CardHeader } from "@jamsr-ui/react";

const chartData = [
  { weekday: "Sunday", mobile: 125, desktop: 50 },
  { weekday: "Monday", mobile: 210, desktop: 80 },
  { weekday: "Tuesday", mobile: 190, desktop: 70 },
  { weekday: "Wednesday", mobile: 150, desktop: 45 },
  { weekday: "Thursday", mobile: 220, desktop: 90 },
  { weekday: "Friday", mobile: 230, desktop: 85 },
  { weekday: "Saturday", mobile: 180, desktop: 75 },
];

const config: ChartConfig = {
  mobile: {
    color: "var(--ui-primary)",
    label: "Mobile Sales",
  },
  desktop: {
    color: "var(--ui-secondary)",
    label: "Desktop Sales",
  },
};

export const BarChartMultiColumns = () => {
  return (
    <Card>
      <CardHeader heading="Multi Series" />
      <CardContent>
        <BarChart
          height={200}
          width="100%"
          chartData={chartData}
          config={config}
          barChart={{
            margin: { top: 20, right: 14, left: -8, bottom: 5 },
          }}
          xAxis={{
            dataKey: "weekday",
            tickFormatter: (value: string) => value.slice(0, 3),
          }}
        />
      </CardContent>
    </Card>
  );
};
