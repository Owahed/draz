import { useParams } from "react-router-dom";
import { productData } from "../context/ProductContext";

const ProductPage = () => {
  const { data } = productData();

  const { id } = useParams();
  const product = data?.find((el) => el.id === id * 1);
  return (
    <div className="flex">
      <div className="m-5 p-5">
        <img src={product.image} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
