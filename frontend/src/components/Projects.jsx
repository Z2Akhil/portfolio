const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A full-stack web application built with React and Node.js. Focused on performance and scalability.',
            tags: ['React', 'Node.js', 'MongoDB'],
            github: '#',
            live: '#',
            icon: '🚀',
        },
        {
            title: 'Project Two',
            description: 'An e-commerce platform with payment integration. Seamless UX and high level security.',
            tags: ['Next.js', 'Stripe', 'PostgreSQL'],
            github: '#',
            live: '#',
            icon: '🛒',
        },
        {
            title: 'Project Three',
            description: 'A real-time chat application with WebSocket. Scalable architecture with modern UI.',
            tags: ['React', 'Socket.io', 'Express'],
            github: '#',
            live: '#',
            icon: '💬',
        },
        {
            title: 'Project Four',
            description: 'A portfolio tracker application for monitoring investments and crypto assets.',
            tags: ['Vue.js', 'Firebase', 'Chart.js'],
            github: '#',
            live: '#',
            icon: '📊',
        },
        {
            title: 'Project Five',
            description: 'An AI-powered task management tool with smart scheduling and reminders.',
            tags: ['Python', 'FastAPI', 'OpenAI'],
            github: '#',
            live: '#',
            icon: '🤖',
        },
        {
            title: 'Project Six',
            description: 'A social media dashboard for analytics and content scheduling.',
            tags: ['React', 'GraphQL', 'AWS'],
            github: '#',
            live: '#',
            icon: '📱',
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
                            className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)] hover:-translate-y-2"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-900/0 group-hover:from-purple-600/5 group-hover:to-purple-900/10 transition-all duration-500" />

                            {/* Icon Header */}
                            <div className="relative p-6 pb-0">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:border-purple-500/40 transition-all duration-300">
                                    {project.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative p-6 pt-2 space-y-4">
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

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-3 border-t border-slate-800/50">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-sm font-semibold transition-colors duration-300 group/link"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                        </svg>
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-sm font-semibold transition-colors duration-300 group/link"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Corner Gradient */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
