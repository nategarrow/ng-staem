import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";
import styled from 'styled-components';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type SlideProps = {
  featured?: GameType[]
}
type GameType = {
  id: number
  link: string
  image: string
  title: string
  price: number
  tags: string[]
  platforms: string[]
  genre: string
}

const HeroSlider = ({ featured }: SlideProps) => {
  console.log(`featured`, featured);
  return (
    <Hero>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        spaceBetween={150}
        slidesPerView={2}
        pagination={{
          clickable: true
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {featured?.map((game) => {
          return (<SwiperSlide key={game.id}>
            <img src={game.image} alt={`${game.title} Cover Art`} />
          </SwiperSlide>)
        })}
      </Swiper>
    </Hero>
  );
}

export default HeroSlider

const Hero = styled.div`
  max-width: 100%;
  max-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(var(--lightBlue) 4%, var(--background) 70%);
  --swiper-theme-color: var(--white);

  .swiper-slide {
    border-radius: var(--border-radius);
    background: var(--white);
    padding: 0;
    overflow: hidden;
  
    img {
      display: block;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`