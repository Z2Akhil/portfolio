const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24"
            style={{ background: 'var(--background)' }}
        >
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Let's Create<br />
                        Something <span className="text-purple-500">Amazing</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-xl">
                        I craft beautiful, user-friendly web applications with modern technologies.
                        Passionate about creating impactful digital experiences.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-all duration-300"
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
