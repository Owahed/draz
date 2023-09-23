import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/ProductContext";
import OrderPage from "./Page/OrderPage";

function App() {
  return (
    <>
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
