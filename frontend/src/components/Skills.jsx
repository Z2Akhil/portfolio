const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux', 'Next.js']
        },
        {
            title: 'Backend & Database',
            skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Cloudinary']
        },
        {
            title: 'Tools & Workflow',
            skills: ['Git', 'Docker', 'Postman', 'Vite', 'Figma', 'GitHub']
        }
    ]

    return (
        <section id="skills">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-left">
                    <h2 className="section-title">
                        Technical <span className="hero-gradient-text">Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive set of tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="card group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors shrink-0">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 md:justify-end">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-5 py-2 bg-slate-900/50 text-slate-300 text-sm font-medium rounded-xl border border-slate-800 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
