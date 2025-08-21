"use client";
import React from 'react';
import Image from 'next/image'
import GirlWIthHeadphone from '../assets/image.png'
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
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
                    <div className='bg-[#d9f1f4] h-100 rounded-sm flex justify-between px-20 mt-5'>
                        {/* text */}
                        <div className='flex flex-col justify-center'>
                            <h2 className='font-bold text-5xl'>Save Up to 50% on Selected Headphones</h2>
                            <Button variant={'outline'} className='self-start mt-5'>Order Now</Button>
                        </div>
                        <Image src={GirlWIthHeadphone} alt='girl with headphone'></Image>
                    </div>
            </SwiperSlide>
                            <SwiperSlide> 
                    <div className='bg-[#d9f1f4] h-100 rounded-sm flex justify-between px-20 mt-5'>
                        {/* text */}
                        <div className='flex flex-col justify-center'>
                            <h2 className='font-bold text-5xl'>Save Up to 50% on Selected Headphones</h2>
                            <Button variant={'outline'} className='self-start mt-5'>Order Now</Button>
                        </div>
                        <Image src={GirlWIthHeadphone} alt='girl with headphone'></Image>
                    </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;