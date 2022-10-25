import Wrapper from "../assets/wrappers/ShopInfoForMobile";
import landingpagetable2 from "../assets/images/landingpagetable2.png";

const ShopInfoForMobile = () => {
  return (
    <Wrapper>
      <div>
        <p className="shortDescription">
          Versatile elegance for dining room, <b>office or</b> living room. This
          seating solution offers great appeal. Versatile elegance for dining
          room, office or living room. This seating solution offers great
          appeal.
        </p>
        <p className="longDescription">
          Versatile elegance for dining room, office or living room. This
          seating solution offers great appeal. Versatile elegance for dining
          room, office or living room. This seating solution offers great
          appeal.
        </p>
      </div>
      <img src={landingpagetable2} alt="Qenja Products" />
    </Wrapper>
  );
};
export default ShopInfoForMobile;
