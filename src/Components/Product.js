import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Product";
import { Link } from "react-router-dom";

const SingleProduct = ({ data, className }) => {
  const { name, description, image, price, id } = data;
  const [mobileInfoVisible, setMobileInfoVisible] = useState(false);
  const toggleVisibility = () => {
    setMobileInfoVisible(!mobileInfoVisible);
  };
  return (
    <Wrapper>
      <div
        className={
          mobileInfoVisible
            ? "productInfoContainerMobileVisible"
            : "productInfoContainerMobile"
        }
      >
        <p className="productName">{name}</p>
        <p className="productDescription">{description}</p>
      </div>
      <img
        onClick={toggleVisibility}
        className={`productImage ${className}`}
        src={image}
        alt="Qenja Product"
      />
      <div
        className={
          mobileInfoVisible
            ? "productPurchaseContainerVisible"
            : "productPurchaseContainer"
        }
      >
        <div className="productInformatonContainer">
          <p className="productName">{name}</p>
          <p className="price">₾ {price}</p>
        </div>
        <Link to={`/shop/${id}/`} className="purchaseButton">
          ADD TO BASKET
        </Link>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
