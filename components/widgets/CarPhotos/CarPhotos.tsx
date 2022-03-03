import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { FaRegImages } from 'react-icons/fa';

import classes from './CarPhotos.module.scss';
import slide1 from '../../../public/slide1.jpg';
import slide2 from '../../../public/slide2.jpg';
import slide3 from '../../../public/slide3.jpg';
import classNames from 'classnames/bind';
import CarGallery from '../CarGallery/CarGallery';

const cx = classNames.bind(classes);

const CarPhotos: FunctionComponent = (): JSX.Element => {
  const [galleryVisible, setGalleryVisible] = useState(false);

  const onClickShowAll = () => {
    setGalleryVisible(true);
  };

  return (
    <>
      <div className={classes.gallery}>
        <div
          className={cx({
            image: true,
            once: false,
          })}
        >
          <Image
            src={slide1}
            alt={'Photo'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>

        <div className={classes.image}>
          <Image
            src={slide2}
            alt={'Photo'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>

        <div className={classes.image}>
          <Image
            src={slide3}
            alt={'Photo'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>

        <button onClick={onClickShowAll} className={classes.showAll}>
          <FaRegImages />
          Показать все
        </button>
      </div>

      <CarGallery visible={galleryVisible} setVisible={setGalleryVisible} />
    </>
  );
};

export default CarPhotos;
