const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Get In <span className="text-indigo-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
                        <p className="text-slate-400">
                            Feel free to reach out if you want to collaborate on a project,
                            have a question, or just want to say hi!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-indigo-400">📧</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Email</h4>
                                    <p className="text-slate-400">your@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-indigo-400">📍</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Location</h4>
                                    <p className="text-slate-400">Your City, Country</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-indigo-400">🔗</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Social</h4>
                                    <div className="flex gap-3 mt-1">
                                        <a href="#" className="text-slate-400 hover:text-indigo-400">GitHub</a>
                                        <a href="#" className="text-slate-400 hover:text-indigo-400">LinkedIn</a>
                                        <a href="#" className="text-slate-400 hover:text-indigo-400">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
