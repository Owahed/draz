import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import ShapingCard from "./components/ShapingCard";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShapingCard />}></Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
