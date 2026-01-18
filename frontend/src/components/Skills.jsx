const Skills = () => {
    // Tech stacks organized in three rows
    const techRows = [
        // Row 1 - Frontend & UI
        [
            { name: 'React', icon: '⚛️', color: '#61DAFB' },
            { name: 'Next.js', icon: '▲', color: '#ffffff' },
            { name: 'TypeScript', icon: '📘', color: '#3178C6' },
            { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
            { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
            { name: 'Redux', icon: '🔄', color: '#764ABC' },
            { name: 'HTML5', icon: '🌐', color: '#E34F26' },
            { name: 'CSS3', icon: '🎯', color: '#1572B6' },
        ],
        // Row 2 - Backend & Database
        [
            { name: 'Node.js', icon: '🟢', color: '#339933' },
            { name: 'Express', icon: '⚡', color: '#ffffff' },
            { name: 'MongoDB', icon: '🍃', color: '#47A248' },
            { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
            { name: 'Python', icon: '🐍', color: '#3776AB' },
            { name: 'REST APIs', icon: '🔗', color: '#FF6B6B' },
            { name: 'GraphQL', icon: '◈', color: '#E10098' },
            { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
        ],
        // Row 3 - Tools & DevOps
        [
            { name: 'Git', icon: '📦', color: '#F05032' },
            { name: 'GitHub', icon: '🐙', color: '#ffffff' },
            { name: 'Docker', icon: '🐳', color: '#2496ED' },
            { name: 'VS Code', icon: '💻', color: '#007ACC' },
            { name: 'Figma', icon: '🎨', color: '#F24E1E' },
            { name: 'Postman', icon: '📮', color: '#FF6C37' },
            { name: 'Vite', icon: '⚡', color: '#646CFF' },
            { name: 'Linux', icon: '🐧', color: '#FCC624' },
        ],
    ];

    // Component for a single sliding row
    const MarqueeRow = ({ items, direction = 'left', speed = 25 }) => {
        const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

        return (
            <div className="relative flex overflow-hidden group py-4">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                {/* First set of items */}
                <div
                    className={`flex gap-6 ${animationClass} group-hover:[animation-play-state:paused]`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {items.map((tech, index) => (
                        <div
                            key={`${tech.name}-1-${index}`}
                            className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-default shrink-0"
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span
                                className="text-sm font-semibold whitespace-nowrap"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div
                    className={`flex gap-6 ${animationClass} group-hover:[animation-play-state:paused]`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {items.map((tech, index) => (
                        <div
                            key={`${tech.name}-2-${index}`}
                            className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-default shrink-0"
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span
                                className="text-sm font-semibold whitespace-nowrap"
                                style={{ color: tech.color }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="section-title">
                        Technical <span className="hero-gradient-text">Expertise</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        A comprehensive set of tools and technologies I use to bring ideas to life.
                    </p>
                </div>
            </div>

            {/* Sliding rows - full width */}
            <div className="space-y-2">
                {/* Row 1 - Left to Right */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-3 text-center">Frontend & UI</p>
                    <MarqueeRow items={techRows[0]} direction="left" speed={30} />
                </div>

                {/* Row 2 - Right to Left */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-3 text-center">Backend & Database</p>
                    <MarqueeRow items={techRows[1]} direction="right" speed={35} />
                </div>

                {/* Row 3 - Left to Right */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-3 text-center">Tools & DevOps</p>
                    <MarqueeRow items={techRows[2]} direction="left" speed={28} />
                </div>
            </div>
        </section>
    )
}

export default Skills

