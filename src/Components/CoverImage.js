import { Wrapper } from "../assets/wrappers/CoverImage";

const CoverImage = ({ data }) => {
  const { text, image } = data[0];
  return (
    <Wrapper>
      {text && <p>{text}</p>}
      <img src={image} alt="Models in Qenja Clothing" />
    </Wrapper>
  );
};
export default CoverImage;
