import React from "react";
import './Portfolio.css'
import { Swiper,SwiperSlide } from "swiper/react";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/image4.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'
const Portfolio =() =>{
return (
    <div className="portfolio" id="Portfolio">

        {/* heading */}
        <span>Projets recents</span>
        <span>Portfolio</span>


        {/* Slider */}
        <Swiper
            spaceBetween={-10}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
            <SwiperSlide>
                <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            
            
        </Swiper>
    </div>


)
}
export default Portfolio
