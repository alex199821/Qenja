import QenjaAnimation from "../Components/QenjaAnimation";
import ProductInCart from "../Components/ProductInCart";
import ErrorComponent from "../Components/ErrorComponent";
import { Wrapper } from "../assets/wrappers/Cart";
import { CheckoutButton } from "../assets/wrappers/Buttons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, subtotal } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(setCart());
  }, [cart, dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      {cart.length > 0 ? (
        <Wrapper>
          <section className="cartHeader">
            <h3>YOUR CART</h3>
          </section>

          <section className="cartMainContainer">
            <div className="itemsSummaryContainer">
              <h3>
                Items Summary (<span>{cart.length}</span>)
              </h3>
              <div className="productInCartContainer">
                {cart.map((item) => {
                  const { id } = item;
                  return <ProductInCart key={id} data={item} />;
                })}
              </div>
            </div>

            <div className="orderSummaryContainer">
              <div className="headerandOrderInfoContainer">
                <h3>Order Summary</h3>
                <div className="orderInfoContainer">
                  <div className="orderInfo subtotal">
                    <p>Subtotal:</p>
                    <p>$ {subtotal}</p>
                  </div>
                  <div className="orderInfo discounts">
                    <p>Discounts:</p>
                    <p>$ 0</p>
                  </div>
                  <div className="orderInfo grandTotal">
                    <p>Grand total:</p>
                    <p>$ {subtotal}</p>
                  </div>
                </div>
                <Link to={`/submit/`} className="checkoutLink">
                  <CheckoutButton>CHECKOUT</CheckoutButton>
                </Link>
              </div>
            </div>
          </section>
        </Wrapper>
      ) : (
        <ErrorComponent error={"No items in Cart"} />
      )}

      <QenjaAnimation className="animationOrange hideOnMobile" />
    </>
  );
};

export default Cart;
