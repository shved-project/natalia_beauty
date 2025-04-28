"use client";

import {useEffect, useState} from "react";
import Logo from "./Logo";
import Section from "./Section";
import nav from "@/app/ui/nav.json";
import clsx from "clsx";

const Header = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isOpenedBurger, setIsOpenedBurger] = useState(false);

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
		<header
			className={`flex items-center justify-center bg-white fixed z-50 top-0 left-0 w-full h-[100px] transition-shadow duration-200 ${
				hasScrolled ? "shadow-lg" : "shadow-none"
			}`}
		>
			<div className='w-full'>
				<Section paddingY={0}>
					<div className='flex items-center justify-between'>
						<Logo />
						<nav className='flex gap-[2.25rem] max-lg:hidden'>
							{nav.map((navLink) => (
								<a
									className="relative font-medium text-sm after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full"
									href={`#${navLink.link}`}
									key={navLink.link}
								>
									{navLink.text}
								</a>
							))}
						</nav>
						<div className='hidden max-lg:block'>
							<button
								type='button'
								className='flex items-center justify-center w-[60px] h-[60px] relative z-50 cursor-pointer'
								onClick={() => setIsOpenedBurger((prev) => !prev)}
							>
								<div
									className={clsx(
										"absolute w-3/4 h-[3px] bg-black transition-[translate,rotate] duration-240",
										{
											"delay-[0ms,120ms] translate-y-0 rotate-45": isOpenedBurger,
											"delay-[120ms,0ms] -translate-y-[13px] rotate-0": !isOpenedBurger,
										}
									)}
								></div>
								<div
									className={clsx(
										"absolute w-3/4 h-[3px] bg-black transition-opacity duration-0 delay-120",
										{
											"opacity-100": !isOpenedBurger,
											"opacity-0": isOpenedBurger,
										}
									)}
								></div>
								<div
									className={clsx(
										"absolute w-3/4 h-[3px] bg-black transition-[translate,rotate] duration-240",
										{
											"delay-[0ms,120ms] translate-y-0 -rotate-45": isOpenedBurger,
											"delay-[120ms,0ms] translate-y-[13px] rotate-0": !isOpenedBurger,
										}
									)}
								></div>
							</button>
							<div
								className={`fixed w-[100vw] min-h-[100vh] top-0 left-0 ${
									isOpenedBurger ? "pointer-events-auto" : "pointer-events-none"
								}`}
							>
								<div
									onClick={() => setIsOpenedBurger((prev) => !prev)}
									className={`
										absolute inset-0 transition-colors duration-300 ${isOpenedBurger ? "bg-black-opacity" : "bg-[#00000000]"}
										
									`}
								></div>
								<nav
									className={clsx(
										"flex flex-col items-center gap-5 absolute right-0 top-0 min-h-[100vh] py-25 px-35 bg-white transition-transform duration-300 max-sm:px-25",
										isOpenedBurger ? "translate-x-[0%]" : "translate-x-[100%]"
									)}
								>
									{nav.map((navLink) => (
										<a
											className='relative text-sm'
											href={`#${navLink.link}`}
											key={navLink.link}
											onClick={() => setIsOpenedBurger((prev) => !prev)}
										>
											{navLink.text}
										</a>
									))}
								</nav>
							</div>
						</div>
					</div>
				</Section>
			</div>
		</header>
	);
};

export default Header;
