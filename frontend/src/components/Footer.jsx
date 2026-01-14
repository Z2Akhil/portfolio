const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 border-t border-zinc-800" style={{ background: 'var(--background)' }}>
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-400">
                        © {currentYear} <span className="text-purple-400">Your Name</span>. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
