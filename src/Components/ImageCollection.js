import { useEffect, useState } from "react";
import { ImageCollectionWrapper } from "../assets/wrappers/ImageCollection";
import { imageCollectionData } from "../utils/links";
import AnimationImageCover from "./AnimationImageCover";
const ImageCollection = () => {
  const [width] = useState(window.innerWidth);

  if (width > 769) {
    return (
      <ImageCollectionWrapper>
        {imageCollectionData.map((data) => {
          const { id, image } = data;
          return (
            <div key={id} className="imageContainer">
              {id !== 2 ? (
                <img src={image} alt="Qenja Product" />
              ) : (
                <AnimationImageCover key={id} image={image} />
              )}
            </div>
          );
        })}
      </ImageCollectionWrapper>
    );
  } else {
    return (
      <ImageCollectionWrapper>
        {imageCollectionData.slice(0, 2).map((data) => {
          const { id, image } = data;
          return (
            <div key={id} className="imageContainer">
              <AnimationImageCover image={image} />
            </div>
          );
        })}
      </ImageCollectionWrapper>
    );
  }
};

export default ImageCollection;
