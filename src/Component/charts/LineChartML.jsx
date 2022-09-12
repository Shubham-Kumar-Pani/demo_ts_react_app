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
    uv: 1500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020-01",
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2020-07",
    uv: 2150,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2021-01",
    uv: 1700,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2019-07",
    uv: 1500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020-01",
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2020-07",
    uv: 2150,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2021-01",
    uv: 1700,
    pv: 3908,
    amt: 2000,
  },
];
const LineChartML = () => {
  return (
    <ResponsiveContainer width={1000} height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name">
          <Label value="Week Date" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#9D86FF"
          strokeWidth={1}
          dot={false}
        ></Line>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#073bf7"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartML;
