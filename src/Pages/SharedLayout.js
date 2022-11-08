import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SessionPopup from "../Components/SessionPopup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../features/cart/cartSlice";
const SharedLayout = () => {
  const dispatch = useDispatch();
  const { sessionGoing, cart } = useSelector((store) => store.cart);

  // State of popup which asks if user wants to continue old session
  const [popupOpen, setPopupOpen] = useState(true);

  // Get amount of tabs with Qenja website open in browser (this is done to ensure that user does not recieve popup on every new tab)
  const [pagesOpen, setPagesOpen] = useState(
    JSON.parse(localStorage.getItem("pagesOpen"))
  );

  // When page is opened clear all user data if no items in cart
  useEffect(() => {
    if (cart.length < 1) {
      dispatch(resetState());
    }
  }, [dispatch, cart.length]);

  // When page is opened add page to localstorate
  const addTab = () => {
    let pagesOpen = JSON.parse(localStorage.getItem("pagesOpen"));
    localStorage.setItem("pagesOpen", JSON.stringify(pagesOpen + 1));
  };

  // When page is closed remove page from localstorate
  const removeTab = () => {
    let pagesOpen = JSON.parse(localStorage.getItem("pagesOpen"));
    localStorage.setItem("pagesOpen", JSON.stringify(pagesOpen - 1));
  };

  // When page is opened add event lister load and launch addTab function
  useEffect(() => {
    window.addEventListener("load", addTab);
    return () => window.removeEventListener("load", addTab);
  }, []);

  // When page is closed add event lister beforeunload and launch removeTab function
  useEffect(() => {
    window.addEventListener("beforeunload", removeTab);
    return () => window.removeEventListener("beforeunload", removeTab);
  }, []);

  // If there are no cart items in localstorage dispatch to reducer to reset all user data
  const handleReset = () => {
    if (JSON.parse(localStorage.getItem("cart")) == null) {
      dispatch(resetState());
    }
  };
  window.addEventListener("storage", handleReset);

  return (
    <>
      <Header />
      {pagesOpen < 0 && sessionGoing && popupOpen && (
        <SessionPopup setPopupOpen={setPopupOpen} />
      )}
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
