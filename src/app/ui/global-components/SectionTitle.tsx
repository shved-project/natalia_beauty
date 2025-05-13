import {ReactNode} from "react";

const SectionTitle = ({children, textCenter = true}: {children: ReactNode; textCenter?: boolean}) => {
	return <h2 className={`text-xl font-semibold max-lg:text-lg ${textCenter && "text-center"}`}>{children}</h2>;
};

export default SectionTitle;
