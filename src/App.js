import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
