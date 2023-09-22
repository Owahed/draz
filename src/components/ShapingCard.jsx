import { useEffect } from "react";
import { useState } from "react";
import { productData } from "../context/ProductContext";
import Item from "./Item";

const ShapingCard = () => {
  const { data } = productData();
  const [items, setItems] = useState();
  const [categoryName, setCategoryName] = useState();

  const handelChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "all") {
      setItems(data);
    }
    if (e.target.value === "jewelery") {
      const jewelery = data?.filter((el) => el.category === "jewelery");
      setItems(jewelery);
    }
    if (e.target.value === "men's clothing") {
      const manClothing = data?.filter(
        (el) => el.category === "men's clothing"
      );
      setItems(manClothing);
    }
    if (e.target.value === "electronics") {
      const electronics = data?.filter((el) => el.category === "electronics");
      setItems(electronics);
    }
    if (e.target.value === "women's clothing") {
      const womenClothing = data?.filter(
        (el) => el.category === "women's clothing"
      );
      setItems(womenClothing);
    }
  };
  const newData = data;

  console.log(categoryName);

  useEffect(() => {
    const category = [...new Set(newData?.map((el) => el.category))];

    setItems(newData);
    setCategoryName(category);
  }, [data]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(data);

  return (
    <div className="container mx-auto px-4 md:container md:mx-auto h-auto">
      <div className="flex justify-center mt-5 ">
        <button
          className="p-2 m-2 rounded hover:text-white hover:bg-shades  border-shades border-transparent border-2"
          value="all"
          onClick={(e) => handelChange(e)}
        >
          All
        </button>
        {categoryName?.map((el, i) => (
          <button
            className="p-2 m-2 rounded hover:text-white hover:bg-shades  border-shades border-transparent border-2"
            key={i}
            value={el}
            onClick={(e) => handelChange(e)}
          >
            {capitalizeFirstLetter(el)}
          </button>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-5 gap-3 m-5 p-3  ">
          {items?.map((el) => (
            <Item key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapingCard;
