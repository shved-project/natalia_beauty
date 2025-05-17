import Footer from "./ui/global-sections/Footer";
import Header from "./ui/global-sections/Header";
import AboutMe from "./ui/home/AboutMe";
import Advantages from "./ui/home/Advantages";
import Discount from "./ui/home/Discount";
import Offer from "./ui/home/Offer";
import Price from "./ui/home/Price";
import WhyChooseMe from "./ui/home/WhyChooseMe";

export default function Home() {
	return (
		<>
			<Header />
			<main className='mt-[100px]'>
				<Offer />
				<AboutMe />
				<WhyChooseMe />
				<Advantages />
				<Discount />
				<Price />
			</main>
			<Footer />
		</>
	);
}
