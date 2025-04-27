interface SectionProps {
	children: React.ReactNode;
	paddingY?: number;
}

const Section = ({children, paddingY = 228}: SectionProps) => {
	return (
		<div className='max-w-[1210px] mx-auto' style={{paddingBlock: `${paddingY}px`}}>
			{children}
		</div>
	);
};

export default Section;
