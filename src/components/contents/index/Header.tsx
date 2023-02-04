import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ICONS

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
type Props = {};

function Header({}: Props) {
  const [slideSet, SetSlideSet] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  });
  return (
    <>
      <div className="relarive">
        <Slider {...slideSet}>
          <div>sdafig</div>
        </Slider>

        <button>
          <BsChevronCompactLeft />
        </button>
        <button>
          <BsChevronCompactRight />
        </button>
      </div>
    </>
  );
}

interface headItem {}

const HeaderItem = ({}: headItem) => {
  return (
    <div>
      <h1>dsf</h1>
    </div>
  );
};

export default Header;
