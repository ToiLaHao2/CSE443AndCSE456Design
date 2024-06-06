import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//import requied modules
import { EffectFade, Autoplay } from "swiper";

import slider_1 from "../assets/img/slider_1.png";
import slider_2 from "../assets/img/slider_2.png";
import slider_3 from "../assets/img/slider_3.png";

const slides = [
    {
        title: "TUF Airline",
        bg: slider_1,
        btnText: "BOOK YOUR FLIGHT NOW",
    },
    {
        title: "TUF Airline",
        bg: slider_2,
        btnText: "BOOK YOUR FLIGHT NOW",
    },
    {
        title: "TUF Airline",
        bg: slider_3,
        btnText: "BOOK YOUR FLIGHT NOW",
    },
];

const HeroCarousel = () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect={"fade"}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="heroSlider h-[500px] lg:h-[650px]"
        >
            {slides.map((slide, index) => {
                //destructure slide
                const { title, bg, btnText } = slide;
                return (
                    <SwiperSlide
                        className="h-full relative flex justify-center
            items-center"
                        key={index}
                    >
                        <div className="z-20 text-white text-center">
                            <div className="uppercase font-tertiary tracking-[6px] mb-5">
                                Enjoy your journey with
                            </div>
                            <h1
                                className="text-[32px] font-bold uppercase tracking-
              [2px] max-w-[920px] lg:text-[68px] leading-tight mb-6"
                            >
                                {title}
                            </h1>
                            <button
                                className="btn btn-lg mx-auto p-4 bg-blue-500 rounded-3xl"
                                onClick={() => {
                                    window.location.href = "/flights";
                                }}
                            >
                                {btnText}
                            </button>
                        </div>

                        <div className="absolute top-0 w-full h-full">
                            <img
                                className="object-cover h-full w-full"
                                src={bg}
                                alt=""
                            />
                        </div>
                        {/* overlay */}
                        <div className="absolute w-full h-full bg-black/70"></div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HeroCarousel;
