import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}

export function productData() {
  return useContext(Context);
}
