import * as React from "react";
import { slider } from "./Projects.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SlideProject from "../SlideProject/SlideProject";
import { projects } from "../../data/projects";


const Projects = () => {

  const result = projects.map((item) => {
    return (
      <SwiperSlide key={item.title}>
        <SlideProject img={item.img} title={item.title} link={item.link} />
      </SwiperSlide>
    )
  })


  return (<div id="portfolio" className={slider} style={{ color: "#fff" }}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >

      {result}
    </Swiper>

  </div>);
}

export default Projects;