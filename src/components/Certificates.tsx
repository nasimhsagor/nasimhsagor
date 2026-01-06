import React from 'react';

const Certificates = () => {
    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        // Custom legacy function replacement or just ignore for now if not implemented
        console.log("Image clicked", e.currentTarget.src);
        // TODO: Implement a proper lightbox if needed
    };

    return (
        <section id="certificates" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-3">Certificates</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img
                                src="/img/certificates/file.webp"
                                alt="Certificate"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                                onClick={handleImageClick}
                            />
                        </div>
                    </div>
                    {/* Repeating for grid */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src="/img/certificates/file.webp" alt="Certificate" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" onClick={handleImageClick} />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src="/img/certificates/file.webp" alt="Certificate" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" onClick={handleImageClick} />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src="/img/certificates/file.webp" alt="Certificate" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" onClick={handleImageClick} />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src="/img/certificates/file.webp" alt="Certificate" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" onClick={handleImageClick} />
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                            <img src="/img/certificates/file.webp" alt="Certificate" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" onClick={handleImageClick} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
