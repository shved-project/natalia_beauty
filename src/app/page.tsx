import Header from "./ui/global-sections/Header";
import AboutMe from "./ui/home/AboutMe";
import WhyChooseMe from "./ui/home/WhyChooseMe";

export default function Home() {
	return (
		<>
			<Header />
			<main className='mt-[100px]'>
				<AboutMe />
				<WhyChooseMe />
			</main>
		</>
	);
}
