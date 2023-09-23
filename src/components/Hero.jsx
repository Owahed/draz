import img1 from "../../img/banner.png";

const Hero = () => {
  return (
    <div className="bg-silver">
      <div className="container mx-auto px-4 md:container md:mx-auto h-auto flex justify-between items-center">
        <div className="">
          <h1 className="text-4xl font-extrabold text-72-bold  m-5">
            She is very <br />
            much herself.
          </h1>
          <p className="text-18 mb-35 m-5">
            Use code HOLIDAY at checkout. Ends 11/29/23
          </p>
          <a className=" m-5 text-white bg-shades hover:bg-white hover:text-shades hover:border-shades  border-transparent border-2 mt-2 py-2 px-4 rounded">
            View Collection
          </a>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
