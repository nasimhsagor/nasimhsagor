import React from 'react';

const Hire = () => {
    return (
        <section id="hire" className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Text Section */}
                    <div className="w-full md:w-3/4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <h2 className="text-3xl font-bold text-gray-800">Hire Me</h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            I am currently open to new opportunities where I can leverage my expertise in .NET and Full Stack development to build impactful solutions.
                            With a passion for solving complex problems and a commitment to continuous learning, I am ready to contribute to your team's success. Whether you have a project in mind or need a dedicated engineer, let's collaborate to bring your vision to life!
                        </p>
                    </div>

                    {/* Social Icons Section */}
                    <div className="w-full md:w-1/4">
                        <div className="flex justify-center md:justify-end gap-6 flex-wrap">
                            <a href="https://wa.me/8801746330309" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-transform duration-300">
                                <i className="fa fa-whatsapp fa-3x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/nasimhsagor/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform duration-300">
                                <i className="fa fa-linkedin-square fa-3x"></i>
                            </a>
                            <a href="https://twitter.com/nasimhsagor/" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300">
                                <i className="fa fa-twitter-square fa-3x"></i>
                            </a>
                            <a href="https://www.upwork.com/freelancer/nasimhsagor/" target="_blank" rel="noopener noreferrer" className="text-[#6fda44] hover:scale-110 transition-transform duration-300">
                                <i className="fa fa-briefcase fa-3x" title="Upwork"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hire;
