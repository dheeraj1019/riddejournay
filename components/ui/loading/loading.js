/** @format */

import React from "react";
import Image from "next/image";
import { Circle } from "better-react-spinkit";

const Loading = () => {
	return (
		<div className='overflow-hidden min-h-screen  min-w-screen  grid place-items-center   bg-[#f8f8f8] '>
			<div
				style={{
					padding: "100px",
					paddingTop: "50px",
					textAlign: "center",
					background: "white",
					borderRadius: "6px",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
					display: "grid",
					placeItems: "center",
				}}>
				<div
					className='logo'
					style={{
						position: "relative",
						cursor: "pointer",
						marginBottom: "3rem",
						width: "7rem",
						height: "7rem",
						display: "block",
					}}>
					

				</div>
				<h1>JOURNEY MATE</h1>

				<div>
					<Circle color='black' size={60} />
				</div>
			</div>
		</div>
	);
};

export default Loading;
