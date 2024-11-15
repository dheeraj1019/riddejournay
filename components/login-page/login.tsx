/** @format */

import React from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { auth, provider } from "../../config/firebase";

const LogInComponent: React.FunctionComponent = () => {
	const router = useRouter();

	const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<Wrapper>
			<Container>
				<HeadImage src='/images/Signup.svg' alt='Image' />
				<Content>
					<h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
						JOURNEY MATE
					</h1>
					<Title>Log in to access your account</Title>
					<Button onClick={signInWithGoogleHandler}>
						Sign in with Google
					</Button>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default LogInComponent;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-[#F6F6F6] items-center justify-center overflow-x-hidden p-4`;

const Container = tw.div`bg-[#F6F6F6] shadow-md h-[800px] w-full max-w-[900px] p-6 flex flex-col lg:flex-row mt-[10rem] lg:mt-[4rem] rounded-[5px]`;

const HeadImage = tw.img`w-full lg:w-1/2 object-cover h-[400px] rounded-lg mb-4 lg:mb-0`;

const Content = tw.div`flex flex-col items-start justify-center lg:pl-10 w-full lg:w-1/2`;

const Button = tw.button`
bg-black text-white text-center p-4 rounded-[6px] w-full text-[1.3rem] mt-6`;

const Title = tw.div`text-[1.6rem] lg:text-[2rem] text-gray-500 mt-4`;
