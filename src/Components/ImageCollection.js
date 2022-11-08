import { useState } from "react";
import { useSelector } from "react-redux";
import { ImageCollectionWrapper } from "../assets/wrappers/ImageCollection";
import AnimationImageCover from "./AnimationImageCover";
const ImageCollection = () => {
  //Use state to get screen width
  const [width] = useState(window.innerWidth);

  const { landingPage } = useSelector((store) => store.ui);
  const { imageCollection } = landingPage[0];

  //Conditiion to display 4 images on desktop screen and 2 images on phone screen
  if (width > 769) {
    return (
      <ImageCollectionWrapper>
        {imageCollection.map((image, index) => {
          return (
            <div key={index} className="imageContainer">
              {index !== 2 ? (
                <img src={image} alt="Qenja Product" />
              ) : (
                //Animation image cover is type of image with scrolling animation over it - its put through separate container
                <AnimationImageCover key={index} image={image} />
              )}
            </div>
          );
        })}
      </ImageCollectionWrapper>
    );
  } else {
    return (
      <ImageCollectionWrapper>
        {imageCollection.slice(0, 2).map((image, index) => {
          return (
            <div key={index} className="imageContainer">
              <AnimationImageCover image={image} />
            </div>
          );
        })}
      </ImageCollectionWrapper>
    );
  }
};

export default ImageCollection;
