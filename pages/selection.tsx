/** @format */

import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import { carList } from "../lib/api-util";
//import { getRandomIntNumberBetween } from "../../lib/api-util";
import { getRandomIntNumberBetween } from "../lib/api-util";

const CrList: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Container>
				<Header>Choose a ride, or swipe up for more</Header>

				<CraList>
					{carList &&
						carList.map((car, index) => {
							return (
								<Link href='/confirmation   '>
								<Car key={index}>
									<CarImage src={car.imgUrl} alt='Car Image' />
									<CarDatils>
										<Services>{car.service}</Services>
										<Time>
											{getRandomIntNumberBetween(1, 20)} min away
										</Time>
									</CarDatils>
									<Price>
										{" "}
										Rs: {getRandomIntNumberBetween(200, 700)}.00
									</Price>
								</Car>
								</Link>
							);
						})}
				</CraList>
			</Container>
		</Wrapper>
	);
};

export default CrList;

const Wrapper = tw.div`
w-full   flex-1 p-5 `;

const Container = tw.div`
 max-w-[1300px] mx-auto p-5 pb-8`;

const Header = tw.div`  p-5 text-2xl 
h-20 md:bg-gray-200 text-2xl  items-center mt-8 md:rounded-lg lg:shadow-sm  max-w-[610px] mb-[3rem] md:mb-0`;

const CraList = tw.div`lg:p-5`;

const Car = tw.div`
 items-center lg:p-2  max-w-[600px] text-[1.1rem]  mb-8 space-x-8 lg:flex`;
const CarImage = tw.img`
cursor-pointer
`;

const CarDatils = tw.div` flex-1 lg:pt-10 `;

const Services = tw.div`font-medium`;
const Time = tw.div` text-blue-500`;

const Price = tw.div`text-blue-500 `;
