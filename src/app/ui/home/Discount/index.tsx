import Image from "next/image";
import SectionTitle from "../../global-components/SectionTitle";
import Section from "../../global-sections/Section";
import ArticleTitle from "../../global-components/ArticleTitle";

const Discount = () => {
	return (
		<section>
			<Section>
				<SectionTitle>Скидка 10% на первое посещение</SectionTitle>
				<div className='flex items-center justify-between gap-5 mt-[44px] max-lg:flex-col'>
					<div className='w-full max-w-[660px] h-[342px] relative rounded-[60px] overflow-hidden shrink-0 max-xl:max-w-[500px] max-lg:h-auto max-lg:aspect-[16/12]'>
						<Image alt='' src='/images/sections/discount/discount-1.jpg' className='object-cover' fill />
					</div>
					<div className='flex flex-col items-baseline gap-[36px] max-w-[425px] max-lg:items-center max-lg:text-center max-sm:gap-[20px]'>
						<ArticleTitle>Маникюр - это по любви</ArticleTitle>
						<p className='font-medium'>
							Подобрать себе мастера “на века” - задача не из легких... Дарю скидку 10% чтобы вам было
							проще начать!
						</p>
						<a
							href='https://wa.me/79283047291'
							target='_blank'
							className='block w-full max-w-[386px] text-lg font-semibold bg-yellow py-[20px] rounded-[60px] text-center max-sm:text-md'
						>
							Записаться
						</a>
					</div>
				</div>
			</Section>
		</section>
	);
};

export default Discount;
