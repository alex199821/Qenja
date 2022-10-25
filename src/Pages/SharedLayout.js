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

  const [popupOpen, setPopupOpen] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(
    JSON.parse(localStorage.getItem("pagesOpen"))
  );

  useEffect(() => {
    if (cart.length < 1) {
      dispatch(resetState());
    }
  }, []);

  const addTab = () => {
    let pagesOpen = JSON.parse(localStorage.getItem("pagesOpen"));
    localStorage.setItem("pagesOpen", JSON.stringify(pagesOpen + 1));
  };
  const removeTab = () => {
    let pagesOpen = JSON.parse(localStorage.getItem("pagesOpen"));
    localStorage.setItem("pagesOpen", JSON.stringify(pagesOpen - 1));
  };

  useEffect(() => {
    window.addEventListener("load", addTab);
    return () => window.removeEventListener("load", addTab);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", removeTab);
    return () => window.removeEventListener("beforeunload", removeTab);
  }, []);

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
