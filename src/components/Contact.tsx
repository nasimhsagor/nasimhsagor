import React from 'react';
// import './Contact.css'; //Styles migrated to Tailwind

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-3">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Feel free to reach out if you want to collaborate with me, or simply have a chat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Email Card */}
                    <div className="bg-gray-800 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-700 group">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                            <i className="fa fa-envelope text-2xl text-green-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">Email Me</h3>
                            <p className="text-gray-400 break-words">nasimhaidarsagor@gmail.com</p>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-gray-800 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-700 group">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                            <i className="fa fa-map-marker text-2xl text-green-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">Location</h3>
                            <p className="text-gray-400">
                                79/C/2 Kuratoli, Kuril<br />
                                Dhaka-1229, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-gray-800 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-700 group">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                            <i className="fa fa-phone text-2xl text-green-500 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">Call Me</h3>
                            <p className="text-gray-400">+8801746330309</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
