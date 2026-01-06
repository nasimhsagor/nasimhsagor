import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="navigation" className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="logo">
                            <img src="/img/blog/icon.png" alt="Logo" className="h-16 w-auto object-contain" />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-green-500 font-medium transition-colors">About</a>
                        <a href="#portfolio" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-700 hover:text-green-500 font-medium transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden bg-white shadow-lg ">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 bg-gray-50" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
