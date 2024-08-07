import Slider from "react-slick";
import logo from "../assets/img/logo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const strukturData = [
  {
    img: "../../public/slider/1.png",
  },
  {
    img: "../../public/slider/2.png",
  },
  {
    img: "../../public/slider/3.png",
  },
  {
    img: "../../public/slider/4.png",
  },
  {
    img: "../../public/slider/5.png",
  },
  {
    img: "../../public/slider/6.png",
  },
  {
    img: "../../public/slider/7.png",
  },
  {
    img: "../../public/slider/8.png",
  },
  {
    img: "../../public/slider/9.png",
  },
  {
    img: "../../public/slider/10.png",
  },
];

const Head = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="head flex flex-col items-center w-full pt-24" id="Head">
      <div className="logo flex flex-col items-center w-full mb-4 px-4">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500 text-center mx-4 border-b-2 border-black mt-4">
          PRAMUKA SMAN 1 POSO KOTA UTARA
        </h1>
        <h1 className="text-xl md:text-[20px] lg:text-[20px] font-bold text-primary-500 text-center mx-4">
          Bungtomo & Cut Nyak Dien
        </h1>
        <h1 className="text-xl md:text-[20px] lg:text-[20px] font-bold text-primary-500 text-center mx-4">
          01-025 & 01-026
        </h1>
      </div>
      <div className="social-icons flex space-x-4 mb-4">
        <a
          href="https://www.instagram.com/scout_smansaposo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 lg:text-2xl md:text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 lg:text-2xl md:text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 lg:text-2xl md:text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 lg:text-2xl md:text-2xl"
        >
          <FaYoutube />
        </a>
      </div>
      <div className="slider w-full max-w-[600px] overflow-hidden border-x-2 border-x-black">
        <Slider {...settings}>
          {strukturData.map((item, index) => (
            <div key={index} className="p-4 flex justify-center">
              <img
                src={item.img}
                alt={`Slide ${index + 4}`}
                className="w-full max-w-[600px] h-auto object-cover object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Head;
