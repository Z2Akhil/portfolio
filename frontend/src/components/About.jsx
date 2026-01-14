const About = () => {
    return (
        <section id="about" className="py-20" style={{ background: 'var(--background)' }}>
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        About <span className="text-purple-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
                </div>

                <div className="space-y-6">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        I'm a passionate developer with experience in building web applications.
                        I love turning ideas into reality through code and creating solutions
                        that make a difference.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies,
                        contributing to open source, or learning something new.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                            <h4 className="text-purple-400 font-semibold">Name:</h4>
                            <p className="text-slate-300">Your Name</p>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-semibold">Email:</h4>
                            <p className="text-slate-300">your@email.com</p>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-semibold">Location:</h4>
                            <p className="text-slate-300">Your City, Country</p>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-semibold">Available:</h4>
                            <p className="text-emerald-400">Open for opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
