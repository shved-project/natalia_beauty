import Header from "./ui/global-sections/Header";
import AboutMe from "./ui/home/AboutMe";
import Advantages from "./ui/home/Advantages";
import Discount from "./ui/home/Discount";
import Price from "./ui/home/Price";
import WhyChooseMe from "./ui/home/WhyChooseMe";

export default function Home() {
	return (
		<>
			<Header />
			<main className='mt-[100px]'>
				<AboutMe />
				<WhyChooseMe />
				<Advantages />
				<Discount />
				<Price />
			</main>
		</>
	);
}
