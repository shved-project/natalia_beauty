import axios from "axios";
import SectionTitle from "../../global-components/SectionTitle";
import Section from "../../global-sections/Section";
import Service from "./components/Service";

interface ServiceData {
	id: number;
	documentId: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	price: number;
	additional: boolean;
	image: {url: string};
}

const Price = async () => {
	const services = await axios.get(`${process.env.URL_API}/api/services?populate=image`, {
		headers: {
			Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
		},
	});

	const servicesData: ServiceData[] = services.data.data;

	return (
		<section>
			<Section paddingY={0}>
				<header className='flex items-center justify-between border-t-2 border-b-2 px-[36px] py-[15px] max-sm:px-0 max-sm:flex-col max-sm:gap-2'>
					<SectionTitle textCenter={false}>Прайс</SectionTitle>
					<p className='font-light text-right max-w-[210px] max-sm:text-center'>
						Неизменное качество по приемлемым ценам!
					</p>
				</header>
				<div className='grid grid-cols-4 gap-[40px] mt-[72px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[60px]'>
					{servicesData.map((service) => {
						return (
							<Service
								key={service.id}
								name={service.name}
								price={service.price}
								image={service.image.url}
								additional={service.additional}
							/>
						);
					})}
				</div>
			</Section>
		</section>
	);
};

export default Price;
