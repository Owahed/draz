import { BsHandbag } from "react-icons/bs";
import { productData } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { card, sideOpen } = productData();
  return (
    <div className="bg-silver">
      {/* <div className="  fixed inset-x-0 z-50"> */}
      <div className="   inset-x-0 z-50">
        <nav className="flex items-center justify-between flex-wrap bg-silver p-6 container mx-auto px-4 md:container md:mx-auto">
          <div className=" text-shades mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">
              Draz shopping
            </Link>
          </div>

          <Link onClick={() => sideOpen(true)} className="relative ">
            <a
              href="#"
              className=" inline-block text-sm px-4 py-2 leading-none border rounded text-shades border-shades hover:border-transparent hover:text-white hover:bg-shades mt-4 lg:mt-0"
            >
              <BsHandbag />
            </a>
            <span className="absolute p-2 w-6 h-6 rounded-full bottom-8 end-0 inline-flex items-center justify-center bg-orange text-white">
              {card.length}
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
