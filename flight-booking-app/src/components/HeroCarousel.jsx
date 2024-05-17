import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//import requied modules
import { EffectFade, Autoplay } from "swiper";

import plan_1 from "../assets/plan_1.jpg";
import plan_2 from "../assets/plan_2.jpg";
import plan_3 from "../assets/plan_3.jpg";

const slides = [
    {
        title: "Your Luxury Hotel For Vacation",
        bg: plan_1,
        btnText: "See our rooms",
    },
    {
        title: "Your Luxury Hotel For Vacation",
        bg: plan_2,
        btnText: "See our rooms",
    },
    {
        title: "Your Luxury Hotel For Vacation",
        bg: plan_3,
        btnText: "See our rooms",
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
            className="heroSlider h-[500px] lg:h-[600px]"
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
                                Just Enjoy and relax
                            </div>
                            <h1
                                className="text-[32px] font-primary uppercase tracking-
              [2px] max-w-[920px] lg:text-[68px] leading-tight mb-6"
                            >
                                {title}
                            </h1>
                            <button className="btn btn-lg btn-primary mx-auto">
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
