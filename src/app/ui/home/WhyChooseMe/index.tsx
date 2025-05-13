import SectionTitle from "../../global-components/SectionTitle";
import Section from "../../global-sections/Section";
import {IoCheckmarkDoneSharp, IoLocationOutline} from "react-icons/io5";
import {GrMoney} from "react-icons/gr";
import Article from "./components/Article";

const WhyChooseMe = () => {
	return (
		<section className='bg-white'>
			<Section>
				<SectionTitle>Скидка 10% на первое посещение</SectionTitle>
				<div className='flex justify-between mt-[48px] max-lg:flex-col max-lg:items-center max-lg:gap-15'>
					<Article
						icon={<IoCheckmarkDoneSharp size={88} />}
						title='Качество'
						subtitle='8 лет опыта, профессиональное оборудование и стерильные инструменты - залог красивых и
							здоровых ногтей.'
					/>
					<Article
						icon={<IoLocationOutline size={88} />}
						title='Расположение'
						subtitle='Ваш мастер рядом с домом - это всегда быстро и удобно! Уютный кабинет оборудован на дому в
							ЖК “Российский”.'
					/>
					<Article
						icon={<GrMoney size={88} />}
						title='Стоимость'
						subtitle='Цена на маникюр и брови ниже рыночной! Доволен клиент - счастлив мастер.'
					/>
				</div>
			</Section>
		</section>
	);
};

export default WhyChooseMe;
