import { useState, useEffect } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            setIsScrolled(window.scrollY > 50)

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

    // Close mobile menu on link click
    const handleNavClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-slate-900/90 backdrop-blur-xl' : 'py-4 sm:py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo / Name */}
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
                        {initials}
                    </div>
                    <span className="hidden sm:inline text-white font-bold text-lg tracking-tight group-hover:text-purple-400 transition-colors">
                        {myName}
                    </span>
                </a>

                {/* Center Navigation - Desktop */}
                <div className="hidden md:flex items-center gap-1 px-2 py-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-full">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                {/* CTA Button - Desktop */}
                <a
                    href="https://drive.google.com/file/d/1l1jcsZfeHHR8nNRW0g8yeDYM32rGLkqq/view?usp=drive_link"
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition-all duration-300"
                >
                    <span>My Resume</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar - Opaque */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-slate-950 border-l border-slate-800 z-50 flex flex-col transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Sidebar Header with Close Button */}
                <div className="flex items-center justify-between p-4 border-b border-slate-800">
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Menu</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <div className="flex-1 overflow-y-auto py-4 px-3">
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={handleNavClick}
                                className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id
                                        ? 'text-purple-400 bg-purple-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sidebar CTA */}
                <div className="p-4 border-t border-slate-800">
                    <a
                        href="https://drive.google.com/file/d/1l1jcsZfeHHR8nNRW0g8yeDYM32rGLkqq/view?usp=drive_link"
                        onClick={handleNavClick}
                        className="block py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white text-center text-sm font-semibold rounded-lg transition-colors"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

