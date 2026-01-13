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
        <section id="projects" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-indigo-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-indigo-500"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                                <span className="text-slate-500">Project Image</span>
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="text-slate-400">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={project.github}
                                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                                    >
                                        GitHub →
                                    </a>
                                    <a
                                        href={project.live}
                                        className="text-slate-400 hover:text-indigo-400 transition-colors"
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
