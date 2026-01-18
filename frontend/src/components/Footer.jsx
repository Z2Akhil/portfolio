const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="py-5 border-t border-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center gap-1 text-center">
                    {/* Copyright */}
                    <div className="text-slate-500 text-sm font-medium">
                        © {currentYear}<span className="ml-1 opacity-50">All rights reserved.</span>
                    </div>
                    {/* Built with */}
                    <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">
                        Built with Passion & Modern Tech
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

