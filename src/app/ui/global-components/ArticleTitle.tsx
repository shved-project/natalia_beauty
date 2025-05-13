import {ReactNode} from "react";

const ArticleTitle = ({children}: {children: ReactNode}) => {
	return <h3 className='text-lg font-semibold max-lg:text-md'>{children}</h3>;
};

export default ArticleTitle;
