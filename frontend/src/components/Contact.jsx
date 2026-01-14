const Contact = () => {
    return (
        <section id="contact" className="py-20" style={{ background: 'var(--background)' }}>
            <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Let's Create<br />
                        Something <span className="text-purple-500">Amazing</span>
                    </h2>
                </div>

                {/* Contact Form */}
                <form className="space-y-5 max-w-xl">
                    <div>
                        <label className="block text-slate-400 text-sm mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-400 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your@email.com"
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-400 text-sm mb-2">Message</label>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
