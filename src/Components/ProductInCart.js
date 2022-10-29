import Wrapper from "../assets/wrappers/ProductInCart";
import trashcan from "../assets/images/trashcan.png";
import IncrementerContainer from "./IncrementContainer";
import { RemoveButton } from "../assets/wrappers/Buttons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { handleItemAmount } from "../features/cart/cartSlice";
const ProductInCart = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, image, price, amount } = data;

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  const handleAmount = (value) => {
    dispatch(handleItemAmount({ value, id }));
  };
  return (
    <Wrapper>
      <section className="productInfoContainer">
        <img src={image} alt="Product Alt Text" />
        <p className="productName">{name}</p>
      </section>
      {/* <section className="productPurchaseContainer"> */}

      <span className="priceQuantityContainer">
        <div className="priceContainer">
          <p className="priceLabel">PRICE</p>
          <p className="price">$ {price * amount}</p>
        </div>

        <div className="quantityContainer">
          <p className="quantity">QUANTITY</p>
          <IncrementerContainer
            onChange={handleAmount}
            value={amount}
            className={"incrementContainer"}
          />
        </div>
      </span>
      {/* </section> */}
      <RemoveButton onClick={handleRemove}>
        <img src={trashcan} alt="Trash Bin" style={{ height: 12 }} />
        &nbsp;&nbsp;<i> Remove</i>
      </RemoveButton>
    </Wrapper>
  );
};
export default ProductInCart;
