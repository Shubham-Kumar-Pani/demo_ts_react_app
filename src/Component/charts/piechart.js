import React from "react";
import {
	PieChart,
	Pie,
	Sector,
	Cell,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const data = [
	{ name: "New", value: 350 },
	{ name: "Returning", value: 450 },
	{ name: "Others", value: 100 },
];
const data1 = [{ name: "Returning", value: 200 }];
const COLORS = ["#7F37BB", "#00C49F", "#D1BD2D"];

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

const CustomPiechart = () => {
	return (
		<ResponsiveContainer>
			<PieChart>
				<Tooltip></Tooltip>
				<Pie
					data={data}
					innerRadius={70}
					outerRadius={90}
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				{/* <Pie
					dataKey="value"
					startAngle={180}
					endAngle={0}
					data={data}
					cx="50%"
					cy="50%"
					// outerRadius={80}
					fill="#8884d8"
					label
					outerRadius={90}
					innerRadius={80}
				/>
				<Pie
					dataKey="value"
					startAngle={180}
					endAngle={90}
					data={data1}
					// cx="50%"
					// cy="50%"
					// outerRadius={80}
					fill="red"
					label
					outerRadius={70}
					innerRadius={60}
				/> */}
			</PieChart>
		</ResponsiveContainer>
	);
};
export default CustomPiechart;
