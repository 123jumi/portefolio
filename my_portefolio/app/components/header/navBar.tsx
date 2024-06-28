"use client";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
	width: 100%;
	position: fixed;
	top: 3vh;
	left: center;
	background-color: rgba(5, 10, 11, 0.3);
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderContainer = styled.div`
	display: flex;
`;

const NavigationList = styled.ul`
	display: flex;
	padding: 10px 0;
	border-bottom: 0.1px solid var(--text-color);
	align-items: center;
	justify-content: space-around;
	white-space: nowrap;
`;

const NavigationItem = styled.li`
	padding: 0 20px;
	list-style: none;
`;

const NavigationLink = styled.a`
	color: var(--text-color);
	text-decoration: none;
	font-size: 1.5rem;
`;

export const NavBar: React.FC = () => {
	return (
		<StyledHeader>
			<HeaderContainer>
				<NavigationList>
					<NavigationItem>
						<Link href="#header" passHref>
							<NavigationLink>À propos</NavigationLink>
						</Link>
					</NavigationItem>
					<NavigationItem>
						<Link href="#bio" passHref>
							<NavigationLink>Bio</NavigationLink>
						</Link>
					</NavigationItem>
					<NavigationItem>
						<Link href="#skills" passHref>
							<NavigationLink>Aptitudes</NavigationLink>
						</Link>
					</NavigationItem>
					<NavigationItem>
						<Link href="#work" passHref>
							<NavigationLink>Projets</NavigationLink>
						</Link>
					</NavigationItem>
					<NavigationItem>
						<Link href="#footer" passHref>
							<NavigationLink>Me joindre</NavigationLink>
						</Link>
					</NavigationItem>
				</NavigationList>
			</HeaderContainer>
		</StyledHeader>
	);
};
