"use client";

import {useEffect, useState} from "react";
import Logo from "./Logo";
import Section from "./Section";
import nav from "@/app/ui/nav.json";

const Header = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='h-5000'>
			<header
				className={`flex items-center justify-center bg-white fixed w-full h-[100px] transition-shadow duration-200 ${
					hasScrolled ? "shadow-lg" : "shadow-none"
				}`}
			>
				<div className='w-full'>
					<Section paddingY={0}>
						<div className='flex items-center justify-between'>
							<Logo />
							<nav className='flex gap-[2.25rem]'>
								{nav.map((navLink) => (
									<a
										className="relative after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
										href={`#${navLink.link}`}
										key={navLink.link}
									>
										{navLink.text}
									</a>
								))}
							</nav>
						</div>
					</Section>
				</div>
			</header>
		</div>
	);
};

export default Header;
