import { useState, useEffect } from 'react';
import Threads from './Threads';
import Particles from './Particles';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        >
            {/* Background Effect - Particles for mobile, Threads for desktop */}
            <div className="absolute inset-0 z-0">
                {isMobile ? (
                    <Particles
                        particleColors={["#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />
                ) : (
                    <Threads
                        amplitude={2.3}
                        distance={0.1}
                        enableMouseInteraction={true}
                    />
                )}
            </div>

            {/* Content - Above background */}
            <div className="relative z-10 max-w-4xl w-full px-4">
                <div className="space-y-8">
                    {/* Greeting badge */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider uppercase border border-purple-500/20 backdrop-blur-sm">
                            B-tech CSE @ NIT Jamshedpur
                        </span>
                    </div>

                    {/* Main headline - Personal introduction */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                        Full Stack Developer<br />
                        <span className="hero-gradient-text">passionate about code.</span>
                    </h1>

                    {/* Description - Conversational and personal */}
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <p className="text-white-400 text-lg sm:text-xl leading-relaxed">
                            B.Tech CSE student at NIT Jamshedpur. I love turning ideas into
                            real products — from healthcare platforms to multiplayer games.
                            Currently exploring backend systems and real-time applications.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center items-center px-4 sm:px-0">
                        <a
                            href="#projects"
                            className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-purple-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] active:scale-95 text-center"
                        >
                            <span className="flex items-center justify-center gap-2">
                                See My Work
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/5 font-bold rounded-2xl transition-all duration-300 active:scale-95 text-center"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>

            {/* Elegant scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
            </div>
        </section>
    )
}

export default Hero

