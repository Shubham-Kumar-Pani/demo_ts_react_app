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
		pv: 4300,
		amt: 2100,
	},
	{
		name: "10th",
		uv: 3490,
		pv: 4300,
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
		pv: 4300,
		amt: 2100,
	},
];

const Dashedlinechart = () => {
	return (
		<ResponsiveContainer width={700} height={400}>
			<LineChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<Label value="Pages of my website" offset={0} position="insideBottom" />
				<XAxis dataKey="name" />
				<YAxis />
				<Legend />
				<Line
					type="monotone"
					dataKey="pv"
					stroke="#F4B519"
					strokeWidth={2}
					dot={false}
				/>
				<Line
					type="monotone"
					dataKey="uv"
					stroke="#FB5D5F"
					strokeDasharray="5 5"
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};
export default Dashedlinechart;
