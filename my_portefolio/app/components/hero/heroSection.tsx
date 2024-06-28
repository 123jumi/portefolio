"use client";
import styled from "styled-components";

const HeroSection = styled.section`
	max-width: 100%;
	margin: 300px 0;
	display: flex;
`;

const HeroContainer = styled.div`
	width: 48%;
	margin: 0 0 0 100px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin: 0 0 10px 0;
	font-size: 3.5rem;
	font-weight: 400;
	color: var(--text-color);
`;

const Subtitle = styled.h2`
	margin: 0 0 20px 25px;
	font-size: 2rem;
	font-weight: 400;
	color: var(--skills-text-color);
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
	margin: 0 0 0 50px;
	line-height: 1.5;
	color: var(--skills-text-color);
	border: none;
	text-align: justify;
`;

export const Hero = () => {
	return (
		<HeroSection className="flex">
			<HeroContainer className="flex-column">
				<Title>Julien Minville</Title>
				<Subtitle>Développeur web full-stack</Subtitle>
				<Paragraph>
					Passionné par le développement web, je suis déterminé à me perfectionner chaque
					jour afin de créer des sites et des applications web offrant une expérience
					utilisateur captivante et des solutions techniques innovantes.
				</Paragraph>
				<p>. </p>
			</HeroContainer>
		</HeroSection>
	);
};
