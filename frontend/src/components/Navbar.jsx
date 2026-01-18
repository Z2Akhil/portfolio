import { useState, useEffect } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)

    // Get name from environment variables
    const myName = import.meta.env.VITE_NAME || 'Akhil Kumar'
    const initials = myName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past threshold for styling
            setIsScrolled(window.scrollY > 50)

            // Update active section
            const sections = navItems.map((item) => document.getElementById(item.id))
            const scrollPosition = window.scrollY + 200

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo / Name - Left */}
                <a
                    href="#home"
                    className="flex items-center gap-2 group"
                >
                    {/* Logo Icon */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
                        {initials}
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight group-hover:text-purple-400 transition-colors">
                        {myName}
                    </span>
                </a>

                {/* Center Navigation */}
                <div className="hidden md:flex items-center gap-1 px-2 py-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-full">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id
                                ? 'text-white'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {item.label}
                            {/* Active indicator dot */}
                            {activeSection === item.id && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Right Side - CTA Button */}
                <a
                    href="#contact"
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]"
                >
                    <span>My Resume</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
