import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState();
  const [card,setCard]=useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);


  const handelItemInCard=(e)=>{
    const item=data?.find(({id})=>id===(e.target.value)*1)
  
    const cardItem=([...card,item])
    setCard([...new Set(cardItem)])
  }

  const sideOpen=(first)=>{
   setOpen(first)
  }
console.log(open)
// console.log([...new Set(card)])
  return (
    <Context.Provider value={{ data, handelItemInCard ,card,open,setOpen,sideOpen}}>{children}</Context.Provider>
  );
}

export function productData() {
  return useContext(Context);
}
