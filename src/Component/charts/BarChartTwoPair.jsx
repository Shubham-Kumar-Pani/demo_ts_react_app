import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Radio",
    OPTIMUM_ROI: 36,
    ACTUAL_ROI: 40,
    amt: 2400,
  },
  {
    name: "Search",
    OPTIMUM_ROI: 32,
    ACTUAL_ROI: 36,
    amt: 2210,
  },
  {
    name: "Display",
    OPTIMUM_ROI: 28,
    ACTUAL_ROI: 30,
    amt: 2290,
  },
  {
    name: "Paid Social",
    OPTIMUM_ROI: 22,
    ACTUAL_ROI: 26,
    amt: 2000,
  },
  //   {
  //     name: "Magazine",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Out Of Home",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Circular",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: "Direct Mail",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: "Email",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: "Tv",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
];

const BarChartTwoPair = () => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip cursor={{ fill: "transparent" }} />
      <Legend />
      <Bar dataKey="ACTUAL_ROI" fill="#67A0F7" />
      <Bar dataKey="OPTIMUM_ROI" fill="#469408" />
    </BarChart>
  );
};

export default BarChartTwoPair;
