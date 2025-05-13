import {ReactNode} from "react";

const ArticleTitle = ({children, smallText}: {children: ReactNode; smallText?: boolean}) => {
	return <h3 className={`font-semibold max-lg:text-md ${smallText ? "text-md" : "text-lg"}`}>{children}</h3>;
};

export default ArticleTitle;
