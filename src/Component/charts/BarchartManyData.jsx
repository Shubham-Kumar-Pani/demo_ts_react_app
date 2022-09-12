import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2019-07",
    uv: 2000,
    pv: 2900,
    amt: 2400,
    amt1: 2100,
    amt12: 2200,
    amt13: 4300,
    amt14: 2400,
    amt15: 2500,
    amt16: 2600,
    amt17: 2800,
    amt18: 2800,
    amt19: 2800,
    amt20: 2800,
    amt21: 2800,
    amt22: 2800,
    amt23: 2800,
    amt24: 2800,
    amt25: 2800,
    amt26: 2800,
    amt27: 2800,
  },
  {
    name: "2020-01",
    uv: 2000,
    pv: 1398,
    amt: 2210,
    amt1: 2100,
    amt12: 2200,
    amt13: 5330,
    amt14: 2480,
    amt15: 2580,
    amt16: 2690,
    amt17: 2800,
    amt18: 2800,
    amt19: 2800,
    amt20: 2800,
    amt21: 2800,
    amt22: 2800,
    amt23: 2800,
    amt24: 2800,
    amt25: 2800,
    amt26: 2800,
    amt27: 2800,
  },
  {
    name: "2020-07",
    uv: 2000,
    pv: 2800,
    amt: 2290,
    amt1: 2100,
    amt12: 2200,
    amt13: 4300,
    amt14: 2400,
    amt15: 2500,
    amt16: 3600,
    amt17: 2800,
    amt18: 2800,
    amt19: 2800,
    amt20: 2800,
    amt21: 2800,
    amt22: 2800,
    amt23: 2800,
    amt24: 2800,
    amt25: 2800,
    amt26: 2800,
    amt27: 2800,
  },
  {
    name: "2021-07",
    uv: 2780,
    pv: 2908,
    amt: 2000,
    amt1: 2100,
    amt12: 2200,
    amt13: 2300,
    amt14: 4400,
    amt15: 2500,
    amt16: 3900,
    amt17: 2800,
    amt18: 2800,
    amt19: 2800,
    amt20: 2800,
    amt21: 2800,
    amt22: 2800,
    amt23: 2800,
    amt24: 2800,
    amt25: 2800,
    amt26: 2800,
    amt27: 2800,
  },
  {
    name: "2021-07",
    uv: 2780,
    pv: 2908,
    amt: 2000,
    amt1: 2100,
    amt12: 2200,
    amt13: 2300,
    amt14: 4400,
    amt15: 2500,
    amt16: 3900,
    amt17: 2800,
    amt18: 2800,
    amt19: 2800,
    amt20: 2800,
    amt21: 2800,
    amt22: 2800,
    amt23: 2800,
    amt24: 2800,
    amt25: 2800,
    amt26: 2800,
    amt27: 2800,
  },
];
const BarchartManyData = () => {
  return (
    <ResponsiveContainer width={950} height={300}>
      <BarChart width={1000} height={300} data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip cursor={false} wrapperStyle={{ display: "none" }} />
        <Bar barSize={3} dataKey="pv" fill="#ff8000" />
        <Bar barSize={3} dataKey="uv" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt1" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt12" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt13" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt14" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt15" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt16" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt17" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt18" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt19" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt20" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt21" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt22" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt23" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt24" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt25" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt26" fill="#ff8000" />
        <Bar barSize={3} dataKey="amt27" fill="#ff8000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarchartManyData;
