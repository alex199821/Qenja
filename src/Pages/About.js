import Wrapper from "../assets/wrappers/About";
import cover from "../assets/images/cover.png";
import landingPageImg from "../assets/images/landingPageImg.png";
import QenjaAnimation from "../Components/QenjaAnimation";
import EmailSignup from "../Components/EmailSignup";
import MainLanding from "../Components/MainLanding";

const About = () => {
  return (
    <Wrapper>
      <section className="mainAboutSection">
        <h1>
          We aim to inspire and ignite the spark in you that makes you — you.
        </h1>

        <img
          src={cover}
          className="coverImage"
          alt="Models in Qenja Clothing"
        />

        <p>
          <b>Versatile</b> elegance for dining room, office or living room. This
          seating solution offers great appeal. Versatile elegance for dining
          room, office or living room. This seating solution offers great
          appeal. Versatile elegance for dining room, office or living room.
          This seating solution offers great appeal. Versatile elegance for
          dining room, office or living room. This seating solution offers great
          appeal.
        </p>
      </section>
      <QenjaAnimation className="animationGreen rotateAnimation" />
      <section className="minorAboutSection">
        <div>
          <img src={landingPageImg} alt="Model in Qenja Clothing" />
        </div>

        <div>
          <p>
            <b>
              Versatile elegance for dining room, office or living room. This
              seating solution offers great appeal.
            </b>{" "}
            Versatile elegance for dining room, office or living room. This
            seating solution offers great appeal. Versatile elegance for dining
            room, office or living room. This seating solution offers great
            appeal. Versatile elegance for dining room, office or living room.
            This seating solution offers great appeal.
          </p>
          <br />
          <p>
            Versatile elegance for dining room, office or living room. This
            seating solution offers great appeal. Versatile elegance for dining
            room, office or living room.{" "}
            <b>This seating solution offers great appeal.</b> Versatile elegance
            for dining room, office or living room. This seating solution offers
            great appeal...
          </p>
        </div>
      </section>
      <EmailSignup />
    </Wrapper>
  );
};

export default About;
