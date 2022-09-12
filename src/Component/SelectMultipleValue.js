import { Icon } from "@iconify/react";
import React, { useState } from "react";

const SelectMultipleValue = ({ module, items, styles }) => {
	const [showItems, setShowItems] = useState(false);

	const dropDown = () => {
		showItems ? setShowItems(false) : setShowItems(true);
	};
	return (
		<div className="select-box--box">
			<div className="select-box--container" style={styles}>
				<div className="select-box--selected-item" onClick={() => dropDown()}>
					{module}
					<Icon icon="gridicons:dropdown" width="20" />
				</div>

				<div
					style={{
						display: showItems ? "flex" : "none",
						flexDirection: "column",
					}}
					className={"select-box--items"}
				>
					{items.map((item) => (
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div key={item.id}>{item.value}</div>
							<input type="checkbox" name="demo 1"></input>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectMultipleValue;
