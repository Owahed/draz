import { Link, useParams } from "react-router-dom";
import { productData } from "../context/ProductContext";

const ProductPage = () => {
  const { data, handelItemInCard } = productData();

  const { id } = useParams();
  const product = data?.find((el) => el.id === id * 1);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto px-4 md:container md:mx-auto h-auto">
      <div className="m-5 p-5">
        <img className="w-96 h-96" src={product.image} alt="" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-black truncate block capitalize lg:m-5">
          {product.title}
        </h1>
        <p className="lg:m-5">{product.description}</p>
        <p className="lg:m-5">${product.price}</p>
        <p>
          <div className="flex items-center lg:m-5">
            <svg
              className="w-4 h-4 text-orange mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-black">
              4.95
            </p>
          </div>
        </p>
        <button
          onClick={() => handelItemInCard(id)}
          className="lg:m-5 text-white bg-shades hover:bg-white hover:text-shades hover:border-shades  border-transparent border-2 mt-2 py-2 px-4 rounded"
        >
          Add Card
        </button>
        <Link to="/">Back to Shopping -> </Link>
      </div>
    </div>
  );
};

export default ProductPage;
