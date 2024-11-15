/** @format */

import React from "react";
import tw from "tailwind-styled-components";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchPageComponent: React.FunctionComponent = () => {
	const router = useRouter();

	return (
		<Wrapper>
			<Container>
				<ButtonContainer>
					<ArrowNarrowLeftIcon
						className='h-8 cursor-pointer'
						onClick={() => router.push("/")}
					/>
				</ButtonContainer>
				<InputContainer>
					<IconsImages>
						<CircleImage
							src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'
							alt='Image'
						/>
						<LineImage
							src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'
							alt='Image'
						/>

						<SquireImage
							src='https://img.icons8.com/windows/50/000000/square-full.png'
							alt='Image'
						/>
					</IconsImages>

					<InputBoxes>
						<Input placeholder='Enter pickup location'></Input>
						<Input placeholder='Where'></Input>
					</InputBoxes>

					<PlusIcon
						src='https://img.icons8.com/ios/50/000000/plus-math.png'
						alt='Image'
					/>
				</InputContainer>

				<SavedPlaces>
					<StarIcon
						src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png'
						alt='Image'
					/>
					<SavedPlacesButton> Saved Places</SavedPlacesButton>
				</SavedPlaces>
				<ConfirmButtonContainer>
					<Link href='/selection'>
						<ConfirmButton>Confirm Location</ConfirmButton>
					</Link>
				</ConfirmButtonContainer>
			</Container>
		</Wrapper>
	);
};

export default SearchPageComponent;

const Wrapper = tw.div`
 h-screen w-full bg-gray-200 flex flex-col items-center`;

const Container = tw.div`
w-full max-w-[500px] max-auto mt-[4rem] bg-white shadow-md pb-2 flex flex-col justify-between h-[100%] rounded-[20px] overflow-hidden`;
// Decreased width to 500px, kept the same height, added rounded edges and overflow hidden

const ButtonContainer = tw.div`
h-12 bg-white p-4`;

const InputContainer = tw.div`
bg-white flex space-x-5 pt-[2rem] px-4 items-center justify-center py-4`;

const IconsImages = tw.div`
w-10 flex-col space-y-5 items-center hidden md:flex`;

const CircleImage = tw.img`h-6 cursor-pointer`;  // Increased size

const LineImage = tw.img`h-16`;  // Increased size

const SquireImage = tw.img`h-6 cursor-pointer`;  // Increased size

const InputBoxes = tw.div`flex flex-col flex-1 space-y-6`; // Increased space between inputs

const Input = tw.input`
h-12 bg-gray-200 border p-5 rounded outline-none border-none text-lg`;  // Increased height and padding

const PlusIcon = tw.img`
w-12 h-12 bg-gray-200 rounded-full cursor-pointer`; // Increased size

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-3 space-x-2`;

const StarIcon = tw.img`
bg-gray-400 h-12 w-12 p-3 rounded-full cursor-pointer`;  // Increased size

const SavedPlacesButton = tw.p`
font-bold text-gray-500 text-lg`;  // Increased text size

const ConfirmButton = tw.button`
bg-black p-5 py-[14px] text-white w-full text-[1.1rem] font-bold rounded cursor-pointer`; // Increased padding and font size

const ConfirmButtonContainer = tw.div`
bg-white p-4 mt-auto`; // Moves the button to the bottom
