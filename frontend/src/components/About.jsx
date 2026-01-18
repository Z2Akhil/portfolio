const About = () => {
    return (
        <section id="about">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="section-title">
                        About <span className="hero-gradient-text">Me</span>
                    </h2>
                </div>

                <div className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-slate-300 text-xl leading-relaxed font-light">
                                I'm a passionate developer with experience in building web applications.
                                I love turning ideas into reality through code and creating solutions
                                that make a difference.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open source, or learning something new.
                            </p>
                        </div>
                        <div className="card space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <h4 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-1">Email</h4>
                                    <p className="text-slate-200 font-medium">your@email.com</p>
                                </div>
                                <div>
                                    <h4 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-1">Location</h4>
                                    <p className="text-slate-200 font-medium">Your City, Country</p>
                                </div>
                                <div>
                                    <h4 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-1">Status</h4>
                                    <p className="text-emerald-400 font-medium">Available for New Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
