import React from "react";

import { LineChart, Line, XAxis, YAxis, Label } from "recharts";

const data = [
  {
    name: "0",
    uv: 10,
    pv: 10,
    amt: 16,
  },
  {
    name: "10",
    uv: 40,
    pv: 90,
    amt: 30,
  },
  {
    name: "15",
    uv: 90,
    pv: 120,
    amt: 60,
  },
  {
    name: "20",
    uv: 120,
    pv: 160,
    amt: 90,
  },
  {
    name: "25",
    uv: 130,
    pv: 180,
    amt: 100,
  },
  {
    name: "30",
    uv: 120,
    pv: 160,
    amt: 90,
  },
  {
    name: "35",
    uv: 120,
    pv: 160,
    amt: 90,
  },
];

const LineChartAxisDots = ({ height, width }) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <XAxis dataKey="name">
        <Label value="Response Points" offset={-2} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={1} />
      <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={1} />
    </LineChart>
  );
};

export default LineChartAxisDots;
