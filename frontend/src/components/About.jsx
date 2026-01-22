const About = () => {
    // Profile image - add your image to public folder or use a URL
    const profileImage = import.meta.env.VITE_PROFILE_IMAGE || '/profile.jpg';

    return (
        <section id="about">
            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="section-title">
                        About <span className="hero-gradient-text">Me</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Profile Image - Left/Top */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            {/* Gradient ring around image */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-sm opacity-75" />
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-900">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        e.target.src = 'https://ui-avatars.com/api/?name=AK&size=256&background=a855f7&color=fff&bold=true';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* About Text - Right/Bottom */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <p className="text-slate-300 text-xl leading-relaxed font-light">
                            I'm a full-stack developer passionate about building web applications
                            with clean architecture, scalable backends, and seamless real-time experiences.
                            Currently pursuing B.Tech in CSE at NIT Jamshedpur.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I've shipped production applications including a healthcare booking platform
                            and multiplayer typing games. Strong foundation in performance optimization,
                            system design, and data structures & algorithms.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-purple-400">2+</p>
                                <p className="text-slate-500 text-sm uppercase tracking-wider">Years Innovation</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-purple-400">5+</p>
                                <p className="text-slate-500 text-sm uppercase tracking-wider">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

