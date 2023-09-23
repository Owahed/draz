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
          <div className="flex items-center flex-shrink-0 text-shades mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">
              Draz shopping
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-shades hover:border-shades">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-shades mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-shades mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-shades"
              >
                Blog
              </a>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
