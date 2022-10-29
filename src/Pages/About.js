import Wrapper from "../assets/wrappers/About";
import QenjaAnimation from "../Components/QenjaAnimation";
import EmailSignup from "../Components/EmailSignup";
import Loading from "../Components/Loading";
import { getAboutPage } from "../features/ui/uiSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutPage());
  }, []);

  const { aboutPage, aboutIsLoading } = useSelector((store) => store.ui);

  if (aboutIsLoading) {
    return <Loading />;
  }

  const {
    mainAboutSectionDescription: { standardText, textUnderlined },
    mainAboutSectionHeader,
    mainAboutSectionImage,
    minorAboutSectionImage,
    minorAboutSectionTextOne: {
      highlighted,
      minorAboutSectionTextOneStandardText,
    },
    minorAboutSectionTextTwo: {
      standardTextEnd,
      standardTextStart,
      highlightedMinorAboutSectionTextTwo,
    },
  } = aboutPage[0];

  return (
    <Wrapper>
      <section className="mainAboutSection">
        <h1>{mainAboutSectionHeader}</h1>

        <img
          src={mainAboutSectionImage}
          className="coverImage"
          alt="Models in Qenja Clothing"
        />

        <p>
          <b>{textUnderlined}</b> {standardText}
        </p>
      </section>
      <QenjaAnimation className="animationGreen rotateAnimation" />
      <section className="minorAboutSection">
        <div>
          <img src={minorAboutSectionImage} alt="Model in Qenja Clothing" />
        </div>

        <div>
          <p>
            <b>{highlighted}</b> {minorAboutSectionTextOneStandardText}
          </p>
          <br />
          <p>
            {standardTextStart} <b>{highlightedMinorAboutSectionTextTwo}</b>{" "}
            {standardTextEnd}
          </p>
        </div>
      </section>
      <EmailSignup />
    </Wrapper>
  );
};

export default About;
