import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Submit from "./Pages/Submit";
import NotFound from "./Pages/NotFound";
import Contacts from "./Pages/Contacts";
import Success from "./Pages/Success";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./features/products/productsSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  // Dispatch to reducer to get all products list
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="submit" element={<Submit />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="success" element={<Success />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
