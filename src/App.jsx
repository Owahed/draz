import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/ProductContext";
import { Toaster } from "react-hot-toast";
import ProductPage from "./Page/ProductPage";
import Example from "./components/OrderPage";

function App() {
  return (
    <>
      {" "}
      <Toaster />
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Example />
      </ContextProvider>
    </>
  );
}

export default App;
