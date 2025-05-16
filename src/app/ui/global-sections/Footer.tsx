import SectionTitle from "../global-components/SectionTitle";
import Section from "./Section";

const Footer = () => {
	return (
		<footer className='mt-[228px] bg-[#000000] text-white max-lg:mt-[80px]'>
			<Section paddingY={65}>
				<div className='flex justify-between gap-5 max-md:flex-col max-md:gap-10'>
					<div className='flex flex-col max-w-[460px] shrink-0 max-md:max-w-full max-md:text-center'>
						<SectionTitle textCenter={false}>
							<span className='uppercase'>Natalia beauty</span>
						</SectionTitle>
						<p>
							Жду ваши ручки и бровки по адресу:{" "}
							<a
								href='https://yandex.ru/maps/36/stavropol/house/ulitsa_generala_margelova_3_1/YEgYfg5jSUEGQFpvfXxzdH5kZg==/?ll=41.893041%2C45.025272&z=17.59'
								target='_blank'
								className='underline'
							>
								г. Ставрополь, ул. Генерала Маргелова 3/1
							</a>
						</p>
						<a
							href='https://wa.me/79283047291'
							target='_blank'
							className='block w-full max-w-[325px] mt-[25px] uppercase bg-pink text-[#000000] text-md text-center font-medium py-[15px] rounded-[10px] max-md:mx-auto'
						>
							Записаться
						</a>
					</div>
					<div
						style={{position: "relative", overflow: "hidden"}}
						className='max-w-[588px] w-full h-[230px] max-md:max-w-full'
					>
						<a
							href='https://yandex.ru/maps/36/stavropol/?utm_medium=mapframe&utm_source=maps'
							style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}
						>
							Ставрополь
						</a>
						<a
							href='https://yandex.ru/maps/36/stavropol/house/ulitsa_generala_margelova_3_1/YEgYfg5jSUEGQFpvfXxzdH5kZg==/?ll=41.914204%2C45.023540&utm_medium=mapframe&utm_source=maps&z=15.2'
							style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}
						>
							Улица Генерала Маргелова, 3/1 на карте Ставрополя — Яндекс Карты
						</a>
						<iframe
							src='https://yandex.ru/map-widget/v1/?ll=41.914204%2C45.023540&mode=whatshere&whatshere%5Bpoint%5D=41.893041%2C45.025272&whatshere%5Bzoom%5D=17&z=15.2'
							allowFullScreen={true}
							style={{position: "relative"}}
							title='Yandex Map'
							className='w-full h-full'
						></iframe>
					</div>
				</div>
			</Section>
		</footer>
	);
};

export default Footer;
