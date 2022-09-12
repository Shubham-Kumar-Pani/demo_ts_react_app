import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Label,
} from "recharts";

const data = [
  { name: "Affiliates", value: 20 },
  { name: "Circular", value: 50 },
  { name: "Direct Mail", value: 10 },
  { name: "Display", value: 10 },
  { name: "Email", value: 10 },
  { name: "Out of Home", value: 10 },
];

const COLORS = [
  "#9278FE ",
  "#ff8000",
  "#4E9409",
  "#00bfff",
  "#ACACAC",
  "#ff00ff",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DoughnutChartWithLabel = () => {
  return (
    <ResponsiveContainer width={340} height={335}>
      <PieChart width={300} height={400} margin={{ right: 25 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={90}
          innerRadius={40}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={0}
            />
          ))}
        </Pie>
        <Label
          value="Media Spend Distribution"
          offset={0}
          position="insideBottom"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutChartWithLabel;
