import SectionTitle from "../../global-components/SectionTitle";
import Section from "../../global-sections/Section";
import Article from "./components/Article";

const Advantages = () => {
	return (
		<section className='shadow-[4px_4px_24px_#29292967] bg-white'>
			<Section paddingY={105}>
				<SectionTitle>Что вы хотите получить?</SectionTitle>
				<div className='flex justify-between mt-[44px] max-lg:flex-col max-lg:items-center max-lg:gap-20'>
					<Article
						imageSrc='/images/sections/advantages/advantage-1.jpg'
						title='Быстрый и красивый результат'
						subtitle='Я ценю ваше время и работаю в самые короткие сроки. Маникюр 2-3 часа - только не у меня!'
					/>
					<Article
						imageSrc='/images/sections/advantages/advantage-2.jpg'
						title='Трендовые цвета и формы'
						subtitle='Мои клиенты знают, что классика никогда не выходит из моды, а тренды украшают и освежают ее'
					/>
					<Article
						imageSrc='/images/sections/advantages/advantage-3.jpg'
						title='Запись на прием в ближайшее время'
						subtitle='Срочные обстоятельства? Завтра в отпуск? Без паники, найдем ближайшее окошко!'
					/>
				</div>
			</Section>
		</section>
	);
};

export default Advantages;
