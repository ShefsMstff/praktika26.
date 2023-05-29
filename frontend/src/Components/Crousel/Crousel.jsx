import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Crousel.scss'
const Crousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
    <div>
      <h3 className='slider1'>
<p className="celine">Celinenin 13 yasi var</p>
<h2 className="car">o Balaca Usaqdi</h2>
<p className="lorem">Bacardiginz qeder ona komek edin </p>
<button className="crslbtn">onu qoruyun</button>
    </h3>
    </div>
    <div>
    <h3 className='slider2'>
    <p className="mark">Ricardin 13 yasi var</p>
<h2 className="love">o Balaca Usaqdi</h2>
<p className="ipsum">Bacardiginz qeder ona komek edin </p>
<button className="crslbtn">onu qoruyun</button>
      </h3>
    </div>
   </Slider>
  )
}

export default Crousel
