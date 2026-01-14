const Skills = () => {
    const skills = [
        { name: 'React', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'JavaScript', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Node.js', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'TypeScript', level: 75, color: 'from-purple-400 to-purple-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'MongoDB', level: 70, color: 'from-purple-400 to-purple-600' },
    ]

    const tools = [
        'Git', 'VS Code', 'Figma', 'Docker', 'Postman', 'GitHub'
    ]

    return (
        <section id="skills" className="py-20" style={{ background: 'var(--background)' }}>
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Skills Bars */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                        {skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                    <span className="text-purple-400">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 bg-zinc-800 text-slate-300 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
