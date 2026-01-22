const Projects = () => {
    const projects = [
        {
            title: 'Ayropath',
            description: 'A full-featured healthcare platform enabling home sample collections and digital report delivery. Includes secure authentication, intelligent booking system, real-time order tracking, and a comprehensive admin dashboard with analytics.',
            tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'JWT'],
            github: 'https://github.com/Z2Akhil',
            live: 'https://ayropath.com',
            image: '/projects/ayropath.png', // Add your image to public/projects/
        },
        {
            title: 'TypeClash',
            description: 'A competitive typing platform featuring solo practice and real-time multiplayer battles. Includes synchronized gameplay, live progress tracking, and intelligent player matchmaking for seamless competitive experiences.',
            tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
            github: 'https://github.com/Z2Akhil',
            live: '#',
            image: '/projects/typeclash.png', // Add your image to public/projects/
        },
    ]

    return (
        <section id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="section-title">
                        Selected <span className="hero-gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        A showcase of my recent work, featuring web applications and innovative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-purple-500/50 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)] transform-gpu will-change-transform"
                        >
                            {/* Project Image */}
                            <div className="relative h-40 w-full flex-shrink-0 overflow-hidden bg-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative p-6 space-y-4 flex-1 flex flex-col">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800/50 text-slate-400 text-xs font-semibold rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 group-hover:text-slate-300 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions - pushed to bottom */}
                                <div className="flex items-center gap-4 pt-3 border-t border-slate-800/50 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-sm font-semibold transition-colors duration-300"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                        </svg>
                                        Code
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-sm font-semibold transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
