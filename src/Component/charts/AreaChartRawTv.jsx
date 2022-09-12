import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "2019-07",
    uv: 1,
  },
  {
    name: "2020-01",
    uv: 80,
  },
  {
    name: "2020-07",
    uv: 20,
  },
  {
    name: "2021-01",
    uv: 127,
  },
  {
    name: "2021-07",
    uv: 188,
  },
  {
    name: "2019-07",
    uv: 110,
  },
  {
    name: "2020-01",
    uv: 280,
  },
  {
    name: "2020-07",
    uv: 10,
  },
  {
    name: "2021-01",
    uv: 27,
  },
  {
    name: "2021-07",
    uv: 218,
  },
];

const AreaChartRawTv = () => {
  return (
    <ResponsiveContainer width={480} height={350}>
      <AreaChart width={330} height={350} data={data}>
        <XAxis dataKey="name" tickLine={false} axisLine={false}>
          <Label value="Week Date" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#bcbaba" fill="#d6d6d6" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartRawTv;
