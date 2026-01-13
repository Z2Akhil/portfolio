const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    <p className="text-indigo-400 font-medium text-lg">Hello, I'm</p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                        Your Name
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-400 font-medium">
                        Full Stack Developer
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I craft beautiful, user-friendly web applications with modern technologies.
                        Passionate about creating impactful digital experiences.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
