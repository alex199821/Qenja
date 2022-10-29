import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageCollectionWrapper } from "../assets/wrappers/ImageCollection";
import AnimationImageCover from "./AnimationImageCover";
const ImageCollection = () => {
  const [width] = useState(window.innerWidth);

  const { landingPage } = useSelector((store) => store.ui);
  const { imageCollection } = landingPage[0];
  if (width > 769) {
    return (
      <ImageCollectionWrapper>
        {imageCollection.map((image, index) => {
          return (
            <div key={index} className="imageContainer">
              {index !== 2 ? (
                <img src={image} alt="Qenja Product" />
              ) : (
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
