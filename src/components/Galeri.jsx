import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root'); // Sesuaikan dengan elemen root di aplikasi kamu

const Galeri = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedLink, setSelectedLink] = useState('');
  const modalRef = useRef(null);

  const galeriData = [
    {
      img: '/galeri/camp 1000 megalitikum.jpeg',
      alt: '',
      title: 'Camp 1000 Megalitikum 2023',
      link: '',
    },
    {
      img: '/galeri/hari lingkungan hidup sedunia.jpeg',
      alt: '',
      title: 'Hari Lingkungan Hidup Sedunia 2024',
      link: '',
    },
    {
      img: '/galeri/pelantikan bantara.jpeg',
      alt: '',
      title: 'Pelantikan Bantara 2023',
      link: '',
    },
    {
      img: '/galeri/mubes.jpeg',
      alt: '',
      title: 'Mubes 2024',
      link: '',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (img, title, link) => {
    setSelectedImage(img);
    setSelectedTitle(title);
    setSelectedLink(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
    setSelectedTitle('');
    setSelectedLink('');
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalIsOpen]);

  return (
    <div className="galeri mt-20 px-6 lg:px-20 py-24" id='Galeri'>
      <h1 className="text-2xl md:text-[24px] lg:text-[28px] font-bold text-primary-500 text-center mb-6">
        Galeri
      </h1>
      <div className="slider-container w-full max-w-[700px] mx-auto">
        <Slider {...settings}>
          {galeriData.map((item, index) => (
            <div key={index} className="p-2">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(item.img, item.title, item.link)}
              />
              <p className="text-center mt-2 text-lg">{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div
          className="bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto relative"
          ref={modalRef}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer p-2 rounded-full transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[70vh] object-contain"
            />
            <h2 className="mt-4 text-center text-2xl font-bold">{selectedTitle}</h2>
            <a href={selectedLink} className="mt-2 text-center text-lg text-blue-500 hover:underline">
              Dokumentasi lengkap klik disini
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Galeri;
