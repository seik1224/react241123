import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Step02 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // 슬라이드 변경 시작 시
        onSlideChangeTransitionStart={(swiper)=>{
            // console.log(swiper);
            // console.log(`현재슬라이드 : ${swiper.activeIndex + 1}`);
            const currentSlide = swiper.slides[swiper.activeIndex];
            if(swiper.activeIndex === 3){
                currentSlide.style.backgroundColor = 'red';
            }
        }}
        // 슬라이드 변경 완료 시
        onSlideChangeTransitionEnd={(swiper)=>{
            console.log(swiper);
            console.log(`현재슬라이드 : ${swiper.activeIndex + 1}`);
            const currentSlide = swiper.slides[swiper.activeIndex];
            console.log(currentSlide)
            if(currentSlide === 2){
                currentSlide.style.backgroundColor = 'yellow';
            }
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Step02