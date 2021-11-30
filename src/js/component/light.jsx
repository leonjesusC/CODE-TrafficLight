import React, { useState, useEffect } from "react";

//create your first component
const Light = () => {
	let [selectionRed, changeRed] = useState("");
	let [selectionYellow, changeYellow] = useState("");
	let [selectionGreen, changeGreen] = useState("");

	return (
		<div>
			<div className="text-center mt-5 box container">
				<div className="row">
					<span
						className={selectionRed}
						id="red"
						onClick={() =>
							changeRed(
								"selected",
								changeYellow(""),
								changeGreen("")
							)
						}></span>
				</div>
				<div className="row">
					<span
						className={selectionYellow}
						id="yellow"
						onClick={() =>
							changeYellow(
								"selected",
								changeRed(""),
								changeGreen("")
							)
						}></span>
				</div>
				<div className="row">
					<span
						className={selectionGreen}
						id="green"
						onClick={() =>
							changeGreen(
								"selected",
								changeYellow(""),
								changeRed("")
							)
						}></span>
				</div>
			</div>
		</div>
	);
};

export default Light;
