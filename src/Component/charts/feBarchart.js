import {
  Bar,
  BarChart,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const FeBarchart = () => {
  const data = [
    { name: "circular", value: 8 },

    { name: "Affiliate", value: 6 },

    { name: "Email", value: 8 },

    { name: "Search", value: 6 },

    { name: "TV", value: 6 },

    { name: "Display", value: 8 },

    { name: "Magazine", value: 9 },

    { name: "Radio", value: 10 },
  ];
  return (
    <ResponsiveContainer width={360} height={400}>
      <BarChart layout="vertical" data={data} barCategoryGap={20}>
        <XAxis type="number" padding={{ left: 10 }} minTickGap={4}>
          <Label value="Channel" offset={-5} position="insideBottom" />
        </XAxis>

        <YAxis type="category" dataKey="name" />

        <Bar dataKey="value" fill="#F8A226" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default FeBarchart;
