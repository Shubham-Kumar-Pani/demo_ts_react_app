import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const TinyBarchart = ({ width, height }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart width={200} height={40} data={data}>
        <Tooltip cursor={false}></Tooltip>
        <XAxis axisLine={false} tickLine={false} dataKey="name"></XAxis>
        <YAxis width={40} axisLine={false} tickLine={false}></YAxis>
        <Bar dataKey="uv" fill="#8884d8" barSize={3} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default TinyBarchart;
