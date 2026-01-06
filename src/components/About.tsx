import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4 items-center">

                    {/* Description Column */}
                    <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800 border-l-4 border-green-500 pl-4">Currently, Working as </h2>
                        <h4 className="text-xl font-medium text-gray-600 mb-6 pl-4">Software Engineer at <a href="#" className="text-black font-semibold hover:text-green-500 transition-colors">Mutual Apps</a></h4>

                        <div className="text-gray-600 leading-relaxed text-lg space-y-4 text-justify">
                            <p>
                                I am a passionate and dedicated Software Engineer with over three years of professional experience in web application and backend development. I hold a Bachelor's degree in Computer Science & Engineering from American International University-Bangladesh (AIUB).
                            </p>
                            <p>
                                Currently, I work at Mutual Apps, designing and developing enterprise-level ERP, trade, and business web applications. My core expertise lies in ASP.NET, ASP.NET Core, MVC, Web API, and Angular. I am experienced in building scalable backend systems, managing Linux servers, and deploying with Nginx.
                            </p>
                            <p>
                                I have also contributed to organizations like Q-Soft Precise Assistance, AkijBashir Group. My skillset spans SQL Server, PostgreSQL, MySQL, and modern DevOps practices using Docker and Git. I am a strong advocate for SOLID principles and clean architecture.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a href="https://drive.google.com/file/d/11meY7qDqEpDF-xyS20t4wwpRzump3pTv/view?usp=sharing" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-all shadow-md hover:-translate-y-1">
                                My Resume
                                <i className="fa fa-download"></i>
                            </a>
                        </div>
                    </div>

                    {/* Facts/Stats Column */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                            {/* Experience Count */}
                            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition hover:scale-105">
                                    <div className="text-5xl font-bold text-green-500 mb-2">3+</div>
                                    <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Years Experience</div>
                                </div>
                            </div>

                            {/* Badge Image */}
                            <div className="w-full md:w-2/3 flex justify-center">
                                <img src="/img/blog/Badges.jpg" className="h-[150px] object-contain drop-shadow-lg rounded-lg hover:rotate-3 transition-transform duration-300" alt="Badges" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
