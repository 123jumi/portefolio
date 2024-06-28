"use client";
import styled from "styled-components";

const BioSection = styled.section`
	max-width: 100%;
	margin: 0;
	display: flex;
`;

const BioContainer = styled.div`
	width: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	margin: 0 0 10px 0;
	font-size: 3.5rem;
	font-weight: 400;
	color: rgb(170, 184, 199);
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
	margin: 0 0 0 50px;
	line-height: 1.5;
	color: rgb(170, 184, 199);
	border: none;
	text-align: justify;
`;
const FlexColum = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Bio = () => {
	return (
		<BioSection className="flex">
			<BioContainer className="flex-column">
				<Title>Biographie</Title>
				<FlexColum>
					<Paragraph>
						Passionné par le développement web, je suis déterminé à me perfectionner
						chaque jour afin de créer des sites et des applications web offrant une
						expérience utilisateur captivante et des solutions techniques innovantes.
					</Paragraph>
					<Paragraph>
						Passionné par le développement web, je suis déterminé à me perfectionner
						chaque jour afin de créer des sites et des applications web offrant une
						expérience utilisateur captivante et des solutions techniques innovantes.
					</Paragraph>
				</FlexColum>
			</BioContainer>
		</BioSection>
	);
};
