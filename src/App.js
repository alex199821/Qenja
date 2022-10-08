import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NavSidebar from "./Components/NavSidebar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavSidebar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
