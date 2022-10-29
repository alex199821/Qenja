import CoverImage from "../Components/CoverImage";
import QenjaAnimation from "../Components/QenjaAnimation";
import MainLanding from "../Components/MainLanding";
import ImageCollection from "../Components/ImageCollection";
import ShopPreview from "../Components/ShopPreview";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLandingPage } from "../features/ui/uiSlice";
const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandingPage());
  }, []);

  const { landingIsLoading, landingPage } = useSelector((store) => store.ui);
  if (landingIsLoading) {
    return <Loading />;
  }

  const {
    landingUpperCoverImage,
    landingUpperCoverText,
    landingLowerCoverImage,
  } = landingPage[0];

  return (
    <>
      <MainLanding />
      <QenjaAnimation className="animationGreen" />
      <ImageCollection />
      <CoverImage text={landingUpperCoverText} image={landingUpperCoverImage} />
      <ShopPreview />
      <QenjaAnimation className="animationYellow" />
      <CoverImage image={landingLowerCoverImage} />
    </>
  );
};

export default Landing;
