import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StrukturOrganisasi = () => {

  const strukturData = [
    {
      img: '../../public/strukturOrganisasi/list/muhammad farrel.png',
      jabatan: 'Pradana PA',
      nama: 'Muhammad Farrel',
    },
    {
      img: '../../public/strukturOrganisasi/list/Lasmatiur Aritonang.png',
      jabatan: 'Pradana PI',
      nama: 'Lasmatiur Aritonang',
    },
    {
      img: '../../public/strukturOrganisasi/list/moh rizkhy.png',
      jabatan: 'Juru Adat PA',
      nama: 'Moh Rizkhy',
    },
    {
      img: '../../public/strukturOrganisasi/list/Azizah Azzahra.png',
      jabatan: 'Juru Adat PI',
      nama: 'Azizah Azzahra',
    },
    {
      img: '../../public/strukturOrganisasi/list/Ricky Alfatah akili.png',
      jabatan: 'Kerani PA',
      nama: 'Ricky Alfatah',
    },
    {
      img: '../../public/strukturOrganisasi/list/meysilia michell rawung.png',
      jabatan: 'Kerani PI',
      nama: 'Meysilia Michell',
    },
    {
      img: '../../public/strukturOrganisasi/list/Sicillia Ayom Sari.png',
      jabatan: 'Juru Uang PI',
      nama: 'Sicillia Ayom Sari',
    },
    {
      img: '../../public/strukturOrganisasi/list/Khalifah Rahmat.png',
      jabatan: 'Juru Uang PA',
      nama: 'Khalifah Rahmat',
    },
    // Tambahkan data lainnya jika diperlukan
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Ubah ke 500 untuk animasi yang lebih halus
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, // Nonaktifkan mode pusat
    centerPadding: '0', // Tidak ada padding di sekitar slide aktif
    autoplay: false, // Matikan autoplay
    autoplaySpeed: 2000,
    draggable: true, // Izinkan geser manual
    swipe: true, // Izinkan swipe pada slider
    swipeToSlide: true, // Swipe untuk berpindah slide
    touchThreshold: 10, // Sensitivitas geser
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className="profil mt-20 px-6 lg:px-20 pt-24" id='StrukturOrganisasi'>
      <h1 className="text-2xl md:text-[24px] lg:text-[28px] font-bold text-primary-500 text-center mb-2">
        Struktur Organisasi
      </h1>
      <div className="content-struktur-organisasi flex flex-col justify-center items-center">
        <p className="mb-2">Berikut adalah struktur organisasi Pramuka SMAN 1 Poso:</p>
        <img
          src="../../public/strukturOrganisasi/struktur.png"
          alt="Profil Pramuka SMAN 1 Poso"
          className="w-full max-w-[700px] h-auto object-cover rounded-lg mb-8 object-contain"
        />
      </div>
      <div className="slider-container w-full max-w-[700px] mx-auto">
        <Slider {...settings}>
          {strukturData.map((item, index) => (
            <div key={index} className="p-4 flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <img src={item.img} alt={item.nama} className="w-24 h-auto object-cover max-w-[150px] object-contain"/>
              </div>
              <p className="text-gray-600 text-center">{item.jabatan}</p>
              <p className="text-lg font-semibold text-center">{item.nama}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
