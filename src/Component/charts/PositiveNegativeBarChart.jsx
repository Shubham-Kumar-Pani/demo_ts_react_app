import { BarChart, Bar, XAxis, YAxis, ReferenceLine } from "recharts";

const data = [
  {
    name: "",
    uv: 40,
    pv: 24,
    amt: 2400,
  },
  {
    name: "",
    uv: -10,
    pv: 13,
    amt: 2210,
  },
  {
    name: "",
    uv: -20,
    pv: 0,
    amt: 2290,
  },
];

const PositiveNegativeBarChart = ({ height }) => {
  return (
    <BarChart width={400} height={height} data={data}>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis width={200} />
      <ReferenceLine y={0} stroke="#FF8042" strokeDasharray={"5 5"} />
      <Bar barSize={3} dataKey="pv" fill="#FF8042" />
      <Bar barSize={3} dataKey="uv" fill="#FF8042" />
    </BarChart>
  );
};

export default PositiveNegativeBarChart;
