const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        About <span className="text-indigo-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="flex justify-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                            <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                                <span className="text-slate-500 text-sm">Your Photo</span>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
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
                                <h4 className="text-indigo-400 font-semibold">Name:</h4>
                                <p className="text-slate-300">Your Name</p>
                            </div>
                            <div>
                                <h4 className="text-indigo-400 font-semibold">Email:</h4>
                                <p className="text-slate-300">your@email.com</p>
                            </div>
                            <div>
                                <h4 className="text-indigo-400 font-semibold">Location:</h4>
                                <p className="text-slate-300">Your City, Country</p>
                            </div>
                            <div>
                                <h4 className="text-indigo-400 font-semibold">Available:</h4>
                                <p className="text-emerald-400">Open for opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
