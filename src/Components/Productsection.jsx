 
import React from "react";

import { Carousel } from "antd";
import ANDO from "../Assets/pdfimages/ANDO.jpg";
import VISTA3 from "../Assets/pdfimages/VISTA3.jpg";
import VISTA from "../Assets/pdfimages/VISTA1.jpg";
import VISTA4 from "../Assets/pdfimages/VISTA4.jpg";

const sliderData = [
  {
   
    img: ANDO
  },
  {
    img: VISTA3,
  },
  {
    img: VISTA4,
  }
];

const Slider = () => {
  return (
    <>
   
      <Carousel autoplay>
        {sliderData?.map((v, i) => {
          return (
            <div>
              <img src={v?.img} className="img_carousel" />
              
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
