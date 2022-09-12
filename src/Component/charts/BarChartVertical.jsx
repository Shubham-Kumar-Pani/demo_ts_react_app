import React from "react";
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
const BarChartVertical = () => {
  const data = [
    { name: "Tv", SPEED_CHANGE: 0.1 },
    { name: "Search", SPEED_CHANGE: 0.2 },
    { name: "Radio", SPEED_CHANGE: 0.3 },
  ];
  return (
    <div>
      <ResponsiveContainer width={500} height={300}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar dataKey="SPEED_CHANGE" fill="#F8A226" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartVertical;
