import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  centerPadding: '5%',
  };
  return (
    <div className="slider-container mt-5">
      <Slider {...settings}>
        <div> 
          <img src={img3} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img4} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img5} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img6} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img7} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img8} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img9} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img10} alt="" style={{ width: '90%' }} />
        </div>
        <div className="">
        <img src={img11} alt="" style={{ width: '90%' }} />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
