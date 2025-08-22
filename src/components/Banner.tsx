"use client";
import React from 'react';
import Image from 'next/image'
import GirlWIthHeadphone from '@/app/assets/image.png'
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Banner = () => {
    return (
        <div>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper lg:h-100 h-max rounded-xl"
                >
                <SwiperSlide> 
                    <div className='bg-[#d9f1f4] rounded-xl flex flex-col lg:flex-row justify-between lg:px-20 mt-5'>
                        {/* text */}
                        <div className='flex flex-col justify-center lg:w-sm p-4'>
                            <h2 className='font-bold text-xl lg:text-5xl text-gray-900'>Save Up to 50% on Selected Subscription</h2>
                            <Button className='self-start mt-2 lg:mt-5' asChild>
                                <Link href='/products'>Order Now</Link></Button>
                        </div>
                        <Image src={GirlWIthHeadphone} alt='girl with headphone'></Image>
                    </div>
            </SwiperSlide>
                            <SwiperSlide> 
                    <div className='bg-[#d9f1f4] lg:h-100 rounded-xl flex flex-col lg:flex-row justify-between lg:px-20 mt-5'>
                        {/* text */}
                        <div className='flex flex-col justify-center lg:w-sm p-4'>
                            <h2 className='font-bold text-xl lg:text-5xl text-gray-900'>Save Up to 50% on Selected Subscription</h2>
                            <Button className='self-start mt-2 lg:mt-5' asChild>
                                <Link href='/products'>Order Now</Link></Button>
                        </div>
                        <Image src={GirlWIthHeadphone} alt='girl with headphone'></Image>
                    </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;