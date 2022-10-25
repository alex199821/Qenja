import Wrapper from "../assets/wrappers/ProductOptions";
import SizeButton from "./SizeButton";
import ColorButton from "./ColorButton";
import IncrementerContainer from "./IncrementContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProductOptions = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id,
    availability,
    colorList,
    description,
    matter,
    name,
    price,
    sizeList,
    image,
  } = product;
  const formik = useFormik({
    initialValues: {
      id: id,
      name: name,
      image: image,
      color: "",
      size: "",
      amount: 1,
      price: price,
    },
    validationSchema: Yup.object({
      color: Yup.string().required("Color is required."),
      size: Yup.string().required("Size is required."),
    }),
    onSubmit: (values) => {
      dispatch(addToCart(values));
      navigate("/cart/");
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <h3 className="productName">{name}</h3>
      <p className="productDescription">{description}</p>
      <p className="deliveryTime">Delivery in 24 Hours</p>

      <section className="additionalInfoContainer">
        <p className="availabilityInfo">Available: {availability}</p>
        <p className="matterInfo">Matter: {matter}</p>
      </section>
      <section className="productOptionsContainer">
        <div className="colorSelectionContainer">
          <p className="colorLabel">Color: </p>
          {colorList.map((color, index) => {
            return (
              <div key={index}>
                <ColorButton
                  color={color}
                  onChange={(e) => {
                    formik.setFieldValue("color", e.target.value);
                  }}
                  value={formik.values.color}
                />
              </div>
            );
          })}
        </div>
        <div className="sizeSelectionContainer">
          <p className="sizeLabel">Size: </p>
          {sizeList.map((size, index) => {
            return (
              <div key={index}>
                <SizeButton
                  size={size}
                  onChange={(e) => {
                    formik.setFieldValue("size", e.target.value);
                  }}
                  value={formik.values.size}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="errorsContainer">
        <div className="validationOptionsError colorError">
          {formik.touched.color && formik.errors.color ? (
            <p>{formik.errors.color}</p>
          ) : null}
        </div>
        <div className="validationOptionsError sizeError">
          {formik.touched.size && formik.errors.size ? (
            <p>{formik.errors.size}</p>
          ) : null}
        </div>
      </section>
      <section className="purchaseContainer">
        <span className="priceQuantityContainer">
          <div className="priceContainer">
            <p className="priceLabel">PRICE</p>
            <p className="price">₾ {price}</p>
          </div>

          <div className="quantityContainer">
            <p className="quantity">QUANTITY</p>
            <IncrementerContainer
              onChange={(amount) => {
                formik.setFieldValue("amount", amount);
              }}
              value={formik.values.amount}
            />
          </div>
        </span>

        <div className="buyContainer">
          <button className="prodPurchaseButton" type="submit">
            <FaShoppingCart className="cartIcon" /> BUY NOW
          </button>
        </div>
      </section>
    </Wrapper>
  );
};
export default ProductOptions;

// id: id,
// name: name,
// color: null,
// size: null,
// amount: 1,
// price: price,

//      dispatch(addToCart(productParameters));
