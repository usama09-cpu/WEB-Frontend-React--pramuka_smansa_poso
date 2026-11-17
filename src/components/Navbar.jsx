import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Beranda', href: '#Head', id: 'Head' },
    { name: 'Profil', href: '#Profil', id: 'Profil' },
    { name: 'Struktur Organisasi', href: '#StrukturOrganisasi', id: 'StrukturOrganisasi' },
    { name: 'Galeri', href: '#Galeri', id: 'Galeri' },
    { name: 'Kontak', href: '#Foot', id: 'Foot' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('#Head, #Profil, #StrukturOrganisasi, #Galeri, #Foot');
            let currentSection = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full max-w-full z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-4">
                <div className="relative flex items-center justify-center h-12">
                    {/* Navbar Desktop */}
                    <div className="hidden lg:flex items-center justify-center gap-8 rounded-full bg-white/90 px-10 py-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`text-sm font-medium cursor-pointer transition-all duration-200 ${
                                    activeSection === link.id ? 'underline text-primary-500' : 'hover:text-primary-400'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Toggle Button */}
                    <div className="lg:hidden fixed right-5 top-5">
                        <button
                            onClick={handleToggle}
                            className="p-3 bg-white/90 rounded-lg text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5"
                            aria-label="Toggle Menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary-500"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <>
                                        <path d="M4 6h16" />
                                        <path d="M7 12h13" />
                                        <path d="M10 18h10" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-screen backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                } lg:hidden`}
            >
                <button
                    onClick={handleToggle}
                    className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-zinc-800 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    aria-label="Tutup Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-500"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        className={`text-lg transition-all duration-200 my-2 ${
                            activeSection === link.id
                                ? 'text-primary-500 font-semibold'
                                : 'text-zinc-800 hover:text-primary-400'
                        }`}
                        onClick={handleToggle}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
