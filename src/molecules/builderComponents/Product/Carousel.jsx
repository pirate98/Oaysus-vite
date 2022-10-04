import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import classes from "./.module.scss";
import { SwiperPrev, SwiperNext } from "../../../assets/svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function Carousel({ images, imageStyle }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  // useEffect(() => {
  // console.log(thumbsSwiper);
  // console.log({ swiper });
  // }, [swiper]);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(e) => console.log("slide change", e)}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        // navigation={true}
      >
        {images.map((url, idx) => {
          return (
            <SwiperSlide key={idx} className={classes.w100}>
              {/* {({ isActive }) =>
                  isActive && ( */}
              <div
                className={classes.image}
                style={{ ...imageStyle, backgroundImage: url }}
              ></div>
              {/* )                } */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        // spaceBetween={10}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        // freeMode={true}
        className={classes.swiperThumbs}
        thumbsContainerClass={classes.swiperWrapper}
      >
        {images.map((url, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                className={classes.thumbnail}
                style={{ backgroundImage: url }}
              ></div>
            </SwiperSlide>
          );
        })}
        <span className={classes.backArrow} onClick={() => swiper.slidePrev()}>
          <SwiperPrev />
        </span>
        <span
          className={classes.arrowContainer}
          onClick={() => swiper.slideNext()}
        >
          <SwiperNext />
        </span>
      </Swiper>
    </>
  );
}
