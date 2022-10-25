import React, { useEffect, useState } from "react";
import SliderWrapper from "../assets/wrappers/SliderWrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = ({ product }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { image, additionalImages } = product;
  return (
    <SliderWrapper>
      <Carousel
        showArrows={false}
        emulateTouch={true}
        showThumbs={width > 769 ? true : false}
      >
        <div>
          <img src={image} alt="Qenja Product" />
        </div>
        {additionalImages &&
          additionalImages.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt="Qenja Product" />
              </div>
            );
          })}
      </Carousel>
    </SliderWrapper>
  );
};
export default Slider;
