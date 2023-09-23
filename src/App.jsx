import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/ProductContext";
import OrderPage from "./Page/OrderPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {" "}
      <Toaster />
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />}></Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
