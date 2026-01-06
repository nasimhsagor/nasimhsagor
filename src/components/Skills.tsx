import React from 'react';

const Skills = () => {
    // Skills Data
    const skills = [
        { name: "ASP.NET Core / C#", percent: 95 },
        { name: "SQL Server / PostgreSQL", percent: 90 },
        { name: "Angular / React", percent: 85 },
        { name: "Web API / REST", percent: 95 },
        { name: "Docker / DevOps", percent: 80 },
        { name: "System Design", percent: 85 },
        { name: "AWS / Cloud", percent: 75 },
        { name: "JavaScript / TypeScript", percent: 90 }
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-3">My Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="relative">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-gray-700">{skill.name}</span>
                                <span className="font-bold text-gray-500">{skill.percent}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
