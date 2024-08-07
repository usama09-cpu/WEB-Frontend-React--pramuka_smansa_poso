import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full max-w-full z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-4">
                <div className="relative flex items-center justify-center h-12">
                    {/* Navbar Desktop */}
                    <div className="hidden lg:flex items-center justify-center gap-8 rounded-full bg-white/90 px-10 py-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                        <a href="#Head" className="text-sm font-medium hover:text-primary-400 cursor-pointer transition-all duration-200 ">Beranda</a>
                        <a href="#Profil" className="text-sm font-medium hover:text-primary-400 cursor-pointer transition-all duration-200">Profil</a>
                        <a href="#StrukturOrganisasi" className="text-sm font-medium hover:text-primary-400 cursor-pointer transition-all duration-200">Struktur Organisasi</a>
                        <a href="#Galeri" className="text-sm font-medium hover:text-primary-400 cursor-pointer transition-all duration-200">Galeri</a>
                        <a href="#Foot" className="text-sm font-medium hover:text-primary-400 cursor-pointer transition-all duration-200">Kontak</a>
                    </div>

                    {/* Toggle Button */}
                    <div className="lg:hidden fixed right-5 top-5">
                        <button
                            onClick={handleToggle}
                            className="p-3 bg-white/90 rounded-lg text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5"
                            aria-expanded={isOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-primary-500 ${isOpen ? 'hidden' : 'block'}`}>
                                <path d="M4 6h16"></path>
                                <path d="M7 12h13"></path>
                                <path d="M10 18h10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-primary-500 ${isOpen ? 'block' : 'hidden'}`}>
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-full h-screen backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden`}>
                <button
                    onClick={handleToggle}
                    className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-zinc-800 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                    <span className="sr-only">Close main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <a href="#Head" className="text-primary-500 font-semibold text-lg hover:text-primary-400 transition-all duration-200 my-2" onClick={handleToggle}>Beranda</a>
                <a href="#Profil" className="text-zinc-800 text-lg hover:text-primary-400 transition-all duration-200 my-2" onClick={handleToggle}>Profil</a>
                <a href="#StrukturOrganisasi" className="text-zinc-800 text-lg hover:text-primary-400 transition-all duration-200 my-2" onClick={handleToggle}>Struktur Organisasi</a>
                <a href="#Galeri" className="text-zinc-800 text-lg hover:text-primary-400 transition-all duration-200 my-2" onClick={handleToggle}>Galeri</a>
                <a href="#Foot" className="text-zinc-800 text-lg hover:text-primary-400 transition-all duration-200 my-2" onClick={handleToggle}>Kontak</a>
            </div>
        </nav>
    );
};

export default Navbar;
