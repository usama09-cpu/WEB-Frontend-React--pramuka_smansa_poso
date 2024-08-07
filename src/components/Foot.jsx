import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Foot = () => {
  return (
    <footer
      className="Foot text-black py-6 border-t-[2px] border-gray-100"
      id="Foot"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">PRAMUKA SMAN 1 POSO</h1>
            <p className="mt-2">
              Jl. Talasa No.6, Lawanga, Kec. Poso Kota Utara, Kabupaten Poso,
              Sulawesi Tengah 94615
            </p>
            <p className="mt-2">Telepon: (123) 456-7890</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/scout_smansaposo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-gray-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="test-sm">
            &copy; {new Date().getFullYear()} PRAMUKA SMAN 1 POSO. All rights
            reserved.
          </p>
          <p className="inline-block text-sm mt-2">Created by : </p>
          &nbsp;
          <a
          className="text-sm mt-2 hover:text-gray-400 underline"
            href="https://www.instagram.com/uusaamaa_/"
            target="_blank"
            rel="noopener noreferrer"
          >it warehouse</a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
