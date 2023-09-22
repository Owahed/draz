const Item = ({ el }) => {
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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Item;
