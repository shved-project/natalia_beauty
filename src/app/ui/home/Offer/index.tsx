"use client";

import Image from "next/image";
import {Autoplay, EffectFade, Pagination, Parallax} from "swiper/modules";
import {useEffect, useRef, useState} from "react";
import {Swiper as SwiperType} from "swiper/types";
import {Swiper, SwiperSlide} from "swiper/react";
import axios from "axios";
import "./swiper.css";

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

	const paginationRef = useRef(null!);

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
				<div className='flex min-h-[calc(100vh-100px)]'>
					<div className='w-1/2'>
						<Swiper
							modules={[EffectFade, Autoplay]}
							effect='fade'
							fadeEffect={{crossFade: true}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
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
					<div className='flex items-center w-1/2 pl-[43px] bg-pink-light py-10'>
						<div className='relative max-w-[688px] pr-[68px]'>
							<p className='uppercase text-md mb-[19px]'>ставрополь российский проспект</p>
							<Swiper
								modules={[Parallax, Pagination, Autoplay]}
								parallax
								pagination={{
									el: paginationRef.current,
									bulletClass: "offer-swiper-bullet",
									bulletActiveClass: "offer-swiper-bullet-active",
								}}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								speed={800}
								loop
								onSwiper={setTextSwiper}
								noSwiping={true}
								allowTouchMove={false}
							>
								{slides.map((slide) => {
									return (
										<SwiperSlide key={slide.id}>
											<article>
												<h1 className='text-2xl mb-[31px]' data-swiper-parallax='-1200'>
													{slide.title.split(" ").map((word) => {
														return (
															<span key={word}>
																{word} <br />
															</span>
														);
													})}
												</h1>
												<p className='text-md max-w-[470px]' data-swiper-parallax='-500'>
													{slide.subtitle}
												</p>
											</article>
										</SwiperSlide>
									);
								})}
							</Swiper>
							<a
								href='https://wa.me/79283047291'
								target='_blank'
								className='block max-w-[460px] py-[18px] text-[2.25rem] bg-[#000000] text-white rounded-[10px] text-center font-medium mt-[66px]'
							>
								Записаться
							</a>
							<div
								ref={paginationRef}
								className='flex items-center justify-center gap-[15px] mt-[65px]'
							></div>
							<button
								type='button'
								className='flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer w-[68px] h-[120px] group'
								onClick={handleNext}
							>
								<svg
									width='34'
									height='76'
									viewBox='0 0 34 76'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M2.00001 0.999999L31.5 38L2.00001 74.5'
										strokeWidth='3'
										className='stroke-[#7d7d7d] transition-colors group-hover:stroke-black'
									/>
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
