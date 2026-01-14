const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A full-stack web application built with React and Node.js.',
            tags: ['React', 'Node.js', 'MongoDB'],
            github: '#',
            live: '#',
        },
        {
            title: 'Project Two',
            description: 'An e-commerce platform with payment integration.',
            tags: ['Next.js', 'Stripe', 'PostgreSQL'],
            github: '#',
            live: '#',
        },
        {
            title: 'Project Three',
            description: 'A real-time chat application with WebSocket.',
            tags: ['React', 'Socket.io', 'Express'],
            github: '#',
            live: '#',
        },
    ]

    return (
        <section id="projects" className="py-20" style={{ background: 'var(--background)' }}>
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-zinc-800 hover:border-purple-500"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center">
                                <span className="text-slate-500">Project Image</span>
                            </div>

                            <div className="p-5 space-y-3">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="text-slate-400 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.github}
                                        className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        GitHub →
                                    </a>
                                    <a
                                        href={project.live}
                                        className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        Live Demo →
                                    </a>
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
