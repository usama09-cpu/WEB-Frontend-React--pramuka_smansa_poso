import "./assets/css/index.css";
import Navbar from "./components/Navbar.jsx";
import Head from "./components/Head.jsx";
import Profil from "./components/Profil.jsx";
import StrukturOrganisasi from "./components/StrukturOrganisasi.jsx";
import Galeri from "./components/Galeri.jsx"
import Foot from "./components/Foot.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className="container flex items-center justify-center w-full max-w-full top-0 left-0 bg-gray-100">
      <div className="pages container lg:w-[1226px] md:w-[768px] sm:w-[540px]top-0 left-0 bg-white">
        <Navbar />
        <Head />
        <Profil/>
        <StrukturOrganisasi/>
        <Galeri/>
        <Foot/>
      </div>
    </div>
  );
};

export default App;
