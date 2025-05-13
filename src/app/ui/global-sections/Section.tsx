interface SectionProps {
	children: React.ReactNode;
	paddingY?: number;
}

const Section = ({children, paddingY = 228}: SectionProps) => {
	return (
		<div
			className={`max-w-[1250px] mx-auto px-[20px] ${paddingY === 228 && "max-lg:!py-[80px]"}`}
			style={{paddingBlock: `${paddingY}px`}}
		>
			{children}
		</div>
	);
};

export default Section;
