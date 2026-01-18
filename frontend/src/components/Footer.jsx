const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-slate-900 mt-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-slate-500 text-sm font-medium">
                        © {currentYear} <span className="text-slate-300">Your Name</span>.
                        <span className="ml-1 opacity-50">All rights reserved.</span>
                    </div>

                    <div className="flex gap-8">
                        {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                            <a
                                key={platform}
                                href="#"
                                className="text-slate-500 hover:text-purple-400 text-sm font-bold tracking-tight transition-all duration-300"
                            >
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-900/50 text-center">
                    <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">
                        Built with Passion & Modern Tech
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
