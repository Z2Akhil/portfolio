const Skills = () => {
    const skills = [
        { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'MongoDB', level: 70, color: 'from-emerald-400 to-emerald-600' },
    ]

    const tools = [
        'Git', 'VS Code', 'Figma', 'Docker', 'Postman', 'GitHub'
    ]

    return (
        <section id="skills" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-indigo-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Skills Bars */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                        {skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-slate-300 font-medium">{skill.name}</span>
                                    <span className="text-indigo-400">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
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
                                    className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-default"
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
