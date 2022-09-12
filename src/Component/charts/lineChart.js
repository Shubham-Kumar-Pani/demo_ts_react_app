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
	Curve,
} from "recharts";

// const data = [
// 	{
// 		name: "Day 1",
// 		uv: 1500,
// 		pv: 2400,
// 		amt: 2400,
// 	},
// 	{
// 		name: "Day 2",
// 		uv: 1200,
// 		pv: 1398,
// 		amt: 2210,
// 	},
// 	{
// 		name: "Day 3",
// 		uv: 2150,
// 		pv: 9800,
// 		amt: 2290,
// 	},
// 	{
// 		name: "Day 4",
// 		uv: 1700,
// 		pv: 3908,
// 		amt: 2000,
// 	},
// 	{
// 		name: "Day 5",
// 		uv: 2250,
// 		pv: 4800,
// 		amt: 2181,
// 	},
// 	{
// 		name: "Day 6",
// 		uv: 2600,
// 		pv: 3800,
// 		amt: 2500,
// 	},
// 	{
// 		name: "Day 7",
// 		uv: 3100,
// 		pv: 4300,
// 		amt: 2100,
// 	},
// ];
const data = [
	{
		name: "1st",
		uv: 10,
		pv: 2400,
		amt: 100,
	},
	{
		name: "2nd",
		uv: 50,
		pv: 1398,
		amt: 200,
	},
	{
		name: "3rd",
		uv: 100,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "4th",
		uv: 200,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "5th",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "6th",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "7th",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "8th",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "9th",
		uv: 3490,
		pv: 4700,
		amt: 2100,
	},
	{
		name: "10th",
		uv: 3490,
		pv: 5300,
		amt: 2100,
	},
	{
		name: "11th",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "12th",
		uv: 3490,
		pv: 3300,
		amt: 2100,
	},
];
const Linechart = ({ chartdata, lineStroke }) => {
	return (
		<ResponsiveContainer width={700} height={330}>
			<LineChart
				data={chartdata}
				margin={
					{
						// top: 5,
						// right: 30,
						// left: 20,
						// bottom: 10,
					}
				}
			>
				<Tooltip></Tooltip>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<XAxis dataKey="name">
					<Label
						style={{ padding: 30 }}
						value="Week Date"
						offset={-10}
						position="insideBottom"
					/>
				</XAxis>
				<YAxis axisLine={false} tickLine={false} />
				{/* <Tooltip /> */}
				{/* <Legend /> */}

				<Line
					type="monotone"
					dataKey="pv"
					stroke={lineStroke}
					// stroke="#FB5D5F"
					strokeWidth={3}
					dot={false}
				></Line>
				{/* <Line
					type="monotone"
					dataKey="uv"
					stroke="#18E6FA"
					strokeWidth={1}
					dot={false}
				/> */}
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Linechart;
