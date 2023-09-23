import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [card, setCard] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handelItemInCard = (e) => {
    const item = data?.find(({ id }) => id === e * 1);

    const cardItem = [...card, item];

    setCard([...new Set(cardItem)]);
    toast.success("Product Added to cart!", {
      duration: 2000,
      className: "!shadow-[0_0_3px_rgba(205,205,205,.4)]",
    });
  };

  const sideOpen = (first) => {
    setOpen(first);
  };

  const removeCard = (e) => {
    const newCard = card.filter((el) => el.id !== e.target.value * 1);
    setCard(newCard);
    toast.error("Remove to cart!", {
      duration: 2000,
      className: "!shadow-[0_0_3px_rgba(205,205,205,.4)]",
    });
  };

  const handelCheckOut = () => {
    toast.success("Purchase complete", {
      duration: 2000,
      className: "!shadow-[0_0_3px_rgba(205,205,205,.4)]",
    });
    setCard([]);
    setOpen(false);
  };

  return (
    <Context.Provider
      value={{
        data,
        handelItemInCard,
        card,
        open,
        setOpen,
        sideOpen,
        removeCard,
        handelCheckOut,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function productData() {
  return useContext(Context);
}
