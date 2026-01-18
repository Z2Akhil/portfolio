const Contact = () => {
    return (
        <section id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="section-title">
                        Let's <span className="hero-gradient-text">Connect</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-12">
                    <form className="space-y-8 w-full">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900 transition-all duration-300"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Your Message</label>
                            <textarea
                                placeholder="Describe your project or inquiry"
                                rows="6"
                                className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-slate-900 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group relative px-10 py-5 bg-purple-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] active:scale-95 w-full md:w-auto"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Send Message
                                <svg className="w-5 h-5 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
