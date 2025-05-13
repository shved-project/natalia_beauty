import ArticleTitle from "@/app/ui/global-components/ArticleTitle";
import Image from "next/image";

interface ArticleProps {
	imageSrc: string;
	title: string;
	subtitle: string;
}

const Article = ({imageSrc, title, subtitle}: ArticleProps) => {
	return (
		<article className='max-w-[327px] max-xl:max-w-[312px] max-lg:max-w-[350px]'>
			<Image alt='' src={imageSrc} width={327} height={392} />
			<div className='flex gap-[20px] mt-[27px] max-lg:flex-col-reverse max-lg:text-center'>
				<div className='w-[11px] h-[183px] shrink-0 bg-yellow  max-lg:h-[20px] max-lg:w-full' />
				<div>
					<ArticleTitle smallText>{title}</ArticleTitle>
					<p className='font-medium mt-[15px]'>{subtitle}</p>
				</div>
			</div>
		</article>
	);
};

export default Article;
