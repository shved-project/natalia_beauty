import Header from "./ui/global-sections/Header";
import AboutMe from "./ui/home/AboutMe";

export default function Home() {
	return (
		<>
			<Header />
			<main className='mt-[100px]'>
				<AboutMe />
			</main>
		</>
	);
}
