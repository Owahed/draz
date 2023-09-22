import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-silver">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <nav className="flex items-center justify-between flex-wrap bg-silver p-6">
          <div className="flex items-center flex-shrink-0 text-shades mr-6">
            {/* <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <span className="font-semibold text-xl tracking-tight">
              Draz shopping
            </span>
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
            <div className="relative ">
              <a
                href="#"
                className=" inline-block text-sm px-4 py-2 leading-none border rounded text-shades border-shades hover:border-transparent hover:text-white hover:bg-shades mt-4 lg:mt-0"
              >
                <BsHandbag />
              </a>
              <span className="absolute p-2 w-6 h-6 rounded-full bottom-8 end-0 inline-flex items-center justify-center bg-offBlack text-white">
                1
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
