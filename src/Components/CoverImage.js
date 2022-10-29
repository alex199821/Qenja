import { Wrapper } from "../assets/wrappers/CoverImage";

const CoverImage = ({ text, image }) => {
  if (text) {
    const { standartText, standartTextContiniuation, textUnderlined } = text;
    return (
      <Wrapper>
        {text && (
          <p>
            {standartText} <b>{textUnderlined}</b> {standartTextContiniuation}
          </p>
        )}

        <img src={image} alt="Models in Qenja Clothing" />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <img src={image} alt="Models in Qenja Clothing" />
    </Wrapper>
  );
};
export default CoverImage;
