import ArticleTitle from "@/app/ui/global-components/ArticleTitle";
import {ReactNode} from "react";

interface ArticleProps {
	icon: ReactNode;
	title: string;
	subtitle: string;
}

const Article = ({icon, title, subtitle}: ArticleProps) => {
	return (
		<article className='flex flex-col items-center gap-[24px] max-w-[270px] text-center max-lg:gap-3 max-lg:max-w-[400px]'>
			{icon}
			<ArticleTitle>{title}</ArticleTitle>
			<p>{subtitle}</p>
		</article>
	);
};

export default Article;
