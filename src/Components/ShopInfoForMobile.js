import Wrapper from "../assets/wrappers/ShopInfoForMobile";
import { useDispatch, useSelector } from "react-redux";

const ShopInfoForMobile = () => {
  const { shop } = useSelector((store) => store.ui);
  if (shop.length > 0) {
    const {
      shopMobileViewBoldText: {
        shopMobileViewBoldTextStart,
        shopMobileViewBoldTextUnderlined,
        shopMobileViewBoldTextEnd,
      },
      shopMobileViewNormalText,
      shopMobileViewImage,
    } = shop[0];
    return (
      <Wrapper>
        <div>
          <p className="shortDescription">
            {shopMobileViewBoldTextStart}
            <b>{shopMobileViewBoldTextUnderlined}</b>{" "}
            {shopMobileViewBoldTextEnd}
          </p>
          <p className="longDescription">{shopMobileViewNormalText}</p>
        </div>
        <img src={shopMobileViewImage} alt="Qenja Products" />
      </Wrapper>
    );
  }
};
export default ShopInfoForMobile;
