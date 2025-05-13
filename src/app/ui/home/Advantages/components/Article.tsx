import ArticleTitle from "@/app/ui/global-components/ArticleTitle";
import Image from "next/image";

interface ArticleProps {
	imageSrc: string;
	title: string;
	subtitle: string;
}

const Article = ({imageSrc, title, subtitle}: ArticleProps) => {
	return (
		<article className='max-w-[327px]'>
			{/* <Image alt='' src='/images/sections/advantages/advantage-1.jpg' width={327} height={392} /> */}
			<Image alt='' src={imageSrc} width={327} height={392} />
			<div className='flex gap-[20px] mt-[27px]'>
				<div className='w-[20px] bg-yellow' />
				<div>
					<ArticleTitle smallText>{title}</ArticleTitle>
					<p className='font-medium mt-[15px]'>{subtitle}</p>
				</div>
			</div>
		</article>
	);
};

export default Article;
