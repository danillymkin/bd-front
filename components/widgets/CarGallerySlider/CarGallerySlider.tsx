import React, { FunctionComponent, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './CarGallerySlider.module.scss';
import slide from '../../../public/slide4.jpg';

interface CarGallerySliderProps {
  paginationRef: React.RefObject<HTMLDivElement>;
}

type Props = CarGallerySliderProps;

const cx = classNames.bind(classes);

const CarGallerySlider: FunctionComponent<Props> = ({
  paginationRef,
}): JSX.Element => {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const [disabledControl, setDisabledControl] = useState<
    'prev' | 'next' | null
  >('prev');

  return (
    <>
      <button
        className={cx({
          control: true,
          prev: true,
          disable: disabledControl === 'prev',
        })}
        ref={prevRef}
      >
        <FaArrowLeft height={18} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, EffectCreative]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={(swiper) => {
          if (swiper.isBeginning) {
            setDisabledControl('prev');
          }
          if (swiper.isEnd) {
            setDisabledControl('next');
          }
          if (!swiper.isBeginning && !swiper.isEnd) {
            setDisabledControl(null);
          }
        }}
        pagination={{
          type: 'fraction',
          el: paginationRef.current,
          currentClass: classes.current,
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
      >
        <SwiperSlide className={classes.slide}>
          <Image src={slide} alt={'Slide'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide} alt={'Slide'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide} alt={'Slide'} />
        </SwiperSlide>
      </Swiper>

      <button
        className={cx({
          control: true,
          next: true,
          disable: disabledControl === 'next',
        })}
        ref={nextRef}
      >
        <FaArrowRight height={18} />
      </button>
    </>
  );
};

export default CarGallerySlider;
