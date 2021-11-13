import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./sliders.module.scss";

export default function SliderSales() {
  return (
    <Swiper
      className={styles.swiperContainer}
      modules={[Pagination, Navigation]}
      pagination={{clickable : true}}
      navigation={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.swiperSlider}>
          <Link href="/" as={"a"} passHref>
              <div className={styles.container}>
                <Image src="/banner-1.jpg" layout="fill" alt="banner" />
              </div>
          </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlider}>
          <Link href="/" as={"a"} passHref>
              <div className={styles.container}>
                <Image src="/banner-2.jpg" layout="fill" alt="banner" />
              </div>
          </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlider}>
          <Link href="/" as={"a"} passHref>
              <div className={styles.container}>
                <Image src="/banner-3.jpg" layout="fill" alt="banner" />
              </div>
          </Link>
      </SwiperSlide>
    </Swiper>
  )
}