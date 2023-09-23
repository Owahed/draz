import { productData } from "../context/ProductContext";

const Item = ({ el }) => {

  const { handelItemInCard } = productData();

  return (
    // <div className="rounded hover:text-white hover:bg-shades  border-shades border-transparent border-2">
    //   <img className="h-50" src={el.image} alt="" />
    //   <p>{el.category}</p>
    // </div>
    <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden rounded-xl h-96">
        <img
          className="rounded-t-lg w-full h-full object-contain group-hover:scale-125 group-hover:rotate-3 duration-500"
          src={el.image}
          alt=""
        />
      </div>
      <div className="p-6">
        <p className="text-base text-neutral-600 dark:text-neutral-200">
         {el.title}
        </p>
      </div>
      <div className="p-6">
        <button className=" m-5 text-white bg-shades hover:bg-white hover:text-shades hover:border-shades  border-transparent border-2 mt-2 py-2 px-4 rounded" value={el.id} onClick={handelItemInCard}>Add to card</button>
      </div>
    </div>
  );
};

export default Item;
