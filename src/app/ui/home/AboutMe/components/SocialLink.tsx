const SocialLink = ({children, href}: {children: React.ReactNode; href: string}) => {
	return (
		<a
			href={href}
			target='_blank'
			className='flex items-center justify-center rounded-full w-[64px] h-[64px] bg-black hover:bg-[#4d4d4d] transition-colors duration-200'
		>
			{children}
		</a>
	);
};

export default SocialLink;
