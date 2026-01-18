import Threads from './Threads';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        >
            {/* Threads Background Effect - Full screen behind content */}
            <div className="absolute inset-0 z-0">
                <Threads
                    amplitude={2.3}
                    distance={0.1}
                    enableMouseInteraction={true}
                />
            </div>

            {/* Content - Above background */}
            <div className="relative z-10 max-w-4xl w-full px-4">
                <div className="space-y-10">
                    {/* Professional greeting with subtle animation delay */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wider uppercase border border-purple-500/20 backdrop-blur-sm">
                            B.Tech CSE @ NIT Jamshedpur
                        </span>
                    </div>

                    {/* Main headline - Expansive and bold */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                        Building <span className="hero-gradient-text">scalable</span><br />
                        web apps.
                    </h1>

                    {/* Professional title and description - Simple yet impactful */}
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl text-slate-200 font-medium">
                            Full Stack Engineer | MERN Stack
                        </h2>
                        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
                            I specialize in MERN stack development, scalable backend systems, and
                            real-time communication. Built production apps including a healthcare platform
                            and multiplayer games.
                        </p>
                    </div>

                    {/* CTA Buttons - Premium feel */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 justify-center items-center px-4 sm:px-0">
                        <a
                            href="#projects"
                            className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-purple-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] active:scale-95 text-center"
                        >
                            <span className="flex items-center justify-center gap-2">
                                View Projects
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/5 font-bold rounded-2xl transition-all duration-300 active:scale-95 text-center"
                        >
                            Get in Touch
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

