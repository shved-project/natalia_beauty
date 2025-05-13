import Image from "next/image";

interface ServiceProps {
	name: string;
	price: number;
	image: string;
	additional: boolean;
}

const Service = ({name, price, image, additional}: ServiceProps) => {
	return (
		<article>
			<div className='w-full aspect-[310/346] relative rounded-[40px] overflow-hidden max-lg:aspect-square'>
				<Image src={`${process.env.URL_API}${image}`} alt='' fill className='object-cover -z-10 scale-140' />
				<div className='absolute bottom-[40px] left-0 bg-[#000000] text-white font-semibold px-[19px] py-[16px] rounded-[0_60px_60px_0]'>
					{name}
				</div>
			</div>
			<div className='w-max ml-[19px] mt-[16px] bg-yellow text-black font-semibold text-lg px-[19px] py-[4px] rounded-[60px] max-sm:ml-0'>
				{additional && "+"}
				{price}р
			</div>
		</article>
	);
};

export default Service;
