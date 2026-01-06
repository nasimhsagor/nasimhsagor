import React, { useState, useEffect } from 'react';
// import './Home.css'; //Styles migrated to Tailwind

const useTypewriter = (textArray: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

    useEffect(() => {
        const i = loopNum % textArray.length;
        const fullText = textArray[i];

        const handleTyping = () => {
            setDisplayedText(prev =>
                isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayedText === fullText) {
                setTypingSpeedState(pauseDuration);
                setIsDeleting(true);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeedState(typingSpeed);
            } else {
                setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeedState);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

    return displayedText;
};

const Home = () => {
    const roles = [
        "Software Engineer (.NET)",
        "Full Stack Developer",
        "Backend Specialist",
        "Cloud Enthusiast"
    ];

    const typingText = useTypewriter(roles);

    return (
        <div id="home" className="relative h-screen min-h-[600px] w-full bg-cover bg-fixed bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/img/blog/bgwall.jpg')" }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Glass Content */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl w-full mx-4 shadow-xl" data-aos="fade-up" data-aos-duration="1500">

                        {/* Profile Pic */}
                        <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-6">
                            <img src="/img/blog/sagor.png" alt="Nasim Haidar Sagor" className="w-full h-full rounded-full border-4 border-white/80 object-cover shadow-2xl animate-pulse-slow" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#a8e063] text-transparent bg-clip-text drop-shadow-md">
                            Hi, I'm Nasim Haidar Sagor
                        </h1>

                        <h3 className="text-xl md:text-2xl text-white/90 min-h-[30px] mb-8 font-light">
                            I am a <span className="font-bold text-[#48b14d] border-r-2 border-[#48b14d] pr-1 animate-blink">{typingText}</span>
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                            <a href="https://drive.google.com/file/d/11meY7qDqEpDF-xyS20t4wwpRzump3pTv/view?usp=sharing" className="px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 bg-[#48b14d] hover:bg-transparent hover:text-[#48b14d] border-2 border-[#48b14d] transition-all duration-300 shadow-lg hover:-translate-y-1">
                                Download Resume <i className="fa fa-briefcase"></i>
                            </a>
                            <a href="#contact" className="px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 bg-white/10 hover:bg-white hover:text-gray-900 border-2 border-white/30 hover:border-white transition-all duration-300 shadow-lg hover:-translate-y-1 backdrop-blur-sm">
                                Contact Me <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white text-3xl animate-bounce transition-colors" href="#about">
                        <i className="fa fa-angle-down arrow"></i>
                    </a>
                </div>
            </div>

            {/* CSS for custom animations that are cleaner in CSS than inline style injection or complex config */}
            <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite border-color; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite ease-in-out; }
        @keyframes pulse-slow {
            0% { box-shadow: 0 0 20px rgba(72, 177, 77, 0.4); transform: scale(1); }
            50% { box-shadow: 0 0 40px rgba(72, 177, 77, 0.7); transform: scale(1.02); }
            100% { box-shadow: 0 0 20px rgba(72, 177, 77, 0.4); transform: scale(1); }
        }
      `}</style>
        </div>
    );
};

export default Home;
