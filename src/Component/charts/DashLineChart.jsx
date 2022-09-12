import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "2019-07",
    Predicted: 4000,
    Actual: 2400,
    amt: 2400,
  },
  {
    name: "2020-01",
    Predicted: 3000,
    Actual: 1398,
    amt: 2210,
  },
  {
    name: "2020-07",
    Predicted: 2000,
    Actual: 9800,
    amt: 2290,
  },
  {
    name: "2021-01",
    Predicted: 2780,
    Actual: 3908,
    amt: 2000,
  },
];

const DashLineChart = () => {
  return (
    <ResponsiveContainer width={500} height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" tickLine={false} strokeDasharray="5 5" />
        <YAxis tickLine={false} strokeDasharray="5 5" />
        <Legend />
        <Line
          type="monotone"
          dataKey="Actual"
          stroke="#F4B519"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Predicted"
          stroke="#FB5D5F"
          strokeDasharray="5 5"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DashLineChart;
