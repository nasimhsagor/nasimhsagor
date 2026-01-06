import React, { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            category: 'deeplearning',
            title: 'Recipe Generation From Food Images',
            img: '/img/projects/Recipe_Generation_From_Food_Images.webp',
            tag: 'AI / Machine Learning',
            tagColor: 'bg-teal-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600'
        },
        {
            category: 'app',
            title: 'Business Analytics Application using Dash',
            img: '/img/projects/Dash_4U Analysis.webp',
            tag: 'App',
            tagColor: 'bg-purple-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600'
        },
        {
            category: 'website',
            title: 'Website for 4u Mens & Sports Retail shop',
            img: '/img/projects/4U_Shop.webp',
            tag: 'Website',
            tagColor: 'bg-pink-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600',
            demo: '#',
            demoColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            category: 'website',
            title: 'Website for TKM Shopping Complex',
            img: '/img/projects/TKM_Complex.webp',
            tag: 'Website',
            tagColor: 'bg-pink-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600',
            demo: '#',
            demoColor: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            category: 'app',
            title: 'Billing Software using Excel',
            img: '/img/projects/Excel_POS.webp',
            tag: 'App',
            tagColor: 'bg-purple-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600'
        },
        {
            category: 'app',
            title: 'Flask : Blog Application',
            img: '/img/projects/Flask_Blog.webp',
            tag: 'App',
            tagColor: 'bg-purple-500',
            link: '#',
            linkText: 'View on Github',
            btnColor: 'bg-green-500 hover:bg-green-600',
            demo: '#',
            demoColor: 'bg-blue-500 hover:bg-blue-600'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter || (p.category === 'website' && filter === 'website')); // Case sensitivity Check? Lowercase in data.

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-3">Projects</h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['all', 'website', 'app', 'deeplearning'].map(f => (
                        <button
                            key={f}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${filter === f
                                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                            onClick={() => setFilter(f)}
                        >
                            {f === 'deeplearning' ? 'AI / ML' : f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="relative h-48 overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${project.tagColor}`}>
                                        {project.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-gray-800 mb-4 h-14 line-clamp-2">{project.title}</h4>
                                <div className="flex gap-3">
                                    {project.demo && (
                                        <a href={project.demo} className={`flex-1 text-center py-2 rounded-lg text-white font-medium text-sm transition-colors ${project.demoColor}`}>
                                            Demo
                                        </a>
                                    )}
                                    <a href={project.link} className={`flex-1 text-center py-2 rounded-lg text-white font-medium text-sm transition-colors ${project.btnColor}`}>
                                        {project.linkText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
