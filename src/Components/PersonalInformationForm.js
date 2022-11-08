import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormWrapper from "../assets/wrappers/PersonalInformationForm";
import { CheckoutButton } from "../assets/wrappers/Buttons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setFinalOrder } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../features/cart/cartSlice";
const PersonalInformationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subtotal, itemsInCart, cart } = useSelector((store) => store.cart);

  // Formik is used to validate and submit the form about users information
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      phoneNumber: "",
      email: "",
      comment: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is required."),
      surname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Surname is required."),
      address: Yup.string().required("Address is required."),
      phoneNumber: Yup.string().required("PhoneNumber is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      terms: Yup.boolean().oneOf(
        [true],
        "You must agree to our policy to proceed."
      ),
    }),
    onSubmit: (values) => {
      dispatch(setFinalOrder(values));
      let order = {
        cart: cart,
        orderInformation: values,
        total: subtotal,
      };
      dispatch(addOrder(order));
      navigate("/success/");
    },
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <section className="personalInformationContainer">
        <label className="personalInformationLabel">Personal Information</label>
        <section className="mainFormContainer">
          <section className="inputsContainer">
            <div className="shortInputContainer">
              <label htmlFor="name" className="labelStyle">
                Name*
              </label>
              <input
                className="inputStyle"
                type="text"
                id="name"
                name="name"
                placeholder="Name *"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className="validationError">
                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </div>
            </div>

            <div className="shortInputContainer">
              <label htmlFor="surname" className="labelStyle">
                Surname*
              </label>
              <input
                id="surname"
                name="surname"
                className="inputStyle"
                type="text"
                placeholder="Surname *"
                onChange={formik.handleChange}
                value={formik.values.surname}
              />
              <div className="validationError">
                {formik.touched.surname && formik.errors.surname ? (
                  <p>{formik.errors.surname}</p>
                ) : null}
              </div>
            </div>
          </section>

          <div className="longInputContainer">
            <label htmlFor="address" className="labelStyle">
              Address*
            </label>
            <input
              id="address"
              name="address"
              className="inputStyle"
              type="text"
              placeholder="Address *"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <div className="validationError">
              {formik.touched.address && formik.errors.address ? (
                <p>{formik.errors.address}</p>
              ) : null}
            </div>
          </div>
          <section className="inputsContainer">
            <div className="shortInputContainer">
              <label htmlFor="phoneNumber" className="labelStyle">
                Phone Number*
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className="inputStyle"
                type="number"
                placeholder="Phone Number *"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
              <div className="validationError">
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p>{formik.errors.phoneNumber}</p>
                ) : null}
              </div>
            </div>

            <div className="shortInputContainer">
              <label htmlFor="email" className="labelStyle">
                Email*
              </label>
              <input
                id="email"
                name="email"
                className="inputStyle"
                type="email"
                placeholder="Email *"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="validationError">
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="orderFinalizationContainer">
        <div className="bilingSummaryContainer">
          <p className="billingSummaryLabel">Billing Summary</p>
          <div className="orderReviewContainer">
            <div className="itemsInCartContainer">
              <p className="orderReviewLabel">Order Review</p>
              <p className="itemsInCartLabel">{itemsInCart} items in cart</p>
            </div>
            <div className="subtotalContainer">
              <p className="subtotalLabel">Subtotal</p>
              <p className="priceLabel">$ {subtotal}</p>
            </div>
            <div className="discountContainer">
              <p className="discountLabel">Discount:</p>
              <p className="discountAmount">-$0.99</p>
            </div>
            <div className="totalContainer">
              <p className="totalLabel">Total:</p>
              <p className="totalPrice">$ {subtotal}</p>
            </div>
            <div className="orderCommentContainer">
              <label>Order Comment</label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Type here"
                onChange={formik.handleChange}
                value={formik.values.comment}
              />
            </div>
            <div className="termsCheckboxContainer">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                onChange={() => {
                  formik.setFieldValue("terms", !formik.values.terms);
                }}
                value={formik.values.terms}
              />
              <p className="termsLabel">
                Please check our <b>Privacy & Terms Policy</b>
              </p>
            </div>
            <div className="validationError checkboxValidationError ">
              {formik.touched.terms && formik.errors.terms ? (
                <p>{formik.errors.terms}</p>
              ) : null}
            </div>
          </div>
        </div>
        <CheckoutButton type="submit">PAY $ 40</CheckoutButton>
      </section>
    </FormWrapper>
  );
};
export default PersonalInformationForm;
