"use client";

import Image from "next/image";
import {EffectFade, Parallax} from "swiper/modules";
import {useEffect, useState} from "react";
import {Swiper as SwiperType} from "swiper/types";
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";

interface Slide {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	subtitle: string;
	image: {
		url: string;
	};
}

const Offer = () => {
	const [slides, setSlides] = useState<null | Slide[]>(null);

	const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
	const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);

	useEffect(() => {
		const getSlides = async () => {
			const responseSlides = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/sliders?populate=image`, {
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
				},
			});

			const responseSlidesData = responseSlides.data.data;

			setSlides(responseSlidesData);
		};

		getSlides();
	}, []);

	const handleNext = () => {
		imageSwiper?.slideNext();
		textSwiper?.slideNext();
	};

	return (
		<section>
			{slides ? (
				<div className='flex h-[calc(100vh-100px)]'>
					<div className='w-1/2'>
						<Swiper
							modules={[EffectFade]}
							effect='fade'
							fadeEffect={{crossFade: true}}
							className='h-full'
							noSwiping={true}
							allowTouchMove={false}
							speed={800}
							loop
							onSwiper={setImageSwiper}
						>
							{slides.map((slide) => {
								return (
									<SwiperSlide key={slide.id}>
										<div className='relative h-full'>
											<Image
												src={`${process.env.NEXT_PUBLIC_URL_API}${slide.image.url}`}
												alt=''
												fill
												className='object-cover'
											/>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<div className='flex items-center w-1/2 pl-[43px] bg-pink-light'>
						<div className='relative max-w-[688px] pr-[68px]'>
							<p className='uppercase text-md mb-[19px]'>ставрополь российский проспект</p>
							<Swiper
								modules={[Parallax]}
								parallax
								speed={800}
								loop
								onSwiper={setTextSwiper}
								noSwiping={true}
								allowTouchMove={false}
							>
								<SwiperSlide>
									<article>
										<h1 className='text-2xl mb-[31px]' data-swiper-parallax='-1200'>
											Маникюр
											<br /> Брови
										</h1>
										<p className='text-md max-w-[470px]' data-swiper-parallax='-500'>
											Привет! Я Наталья - ваш мастер эстетичных бровей и аккуратных ногтей.
										</p>
									</article>
								</SwiperSlide>
								<SwiperSlide>
									<article>
										<h1 className='text-2xl mb-[31px]' data-swiper-parallax='-1200'>
											Проф
											<br /> материалы
										</h1>
										<p className='text-md max-w-[470px]' data-swiper-parallax='-500'>
											В работе использую только качественные безопасные гели и одноразовые
											материалы
										</p>
									</article>
								</SwiperSlide>
							</Swiper>
							<a
								href='https://wa.me/79283047291'
								target='_blank'
								className='block max-w-[460px] py-[18px] text-[2.25rem] bg-[#000000] text-white rounded-[10px] text-center font-medium mt-[66px]'
							>
								Записаться
							</a>
							<button
								type='button'
								className='flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer w-[68px] h-[120px]'
								onClick={handleNext}
							>
								<svg
									width='34'
									height='76'
									viewBox='0 0 34 76'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.00001 0.999999L31.5 38L2.00001 74.5' stroke='#7D7D7D' strokeWidth='3' />
								</svg>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div>Загрузка...</div>
			)}
		</section>
	);
};

export default Offer;
