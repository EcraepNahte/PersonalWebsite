// app/brainrotenergy/page.tsx
import React from "react";

export default function BrainRotLanding() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
            {/* Navbar */}
            <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-black/40">
                <h1 className="text-2xl font-bold tracking-wider text-lime-400">
                    BRAIN ROT ENERGY™
                </h1>
                <nav className="space-x-6 text-sm">
                    <a href="#products" className="hover:text-lime-400">
                        Products
                    </a>
                    <a href="#about" className="hover:text-lime-400">
                        About
                    </a>
                    <a href="#contest" className="hover:text-lime-400">
                        Contest
                    </a>
                    <a href="#contact" className="hover:text-lime-400">
                        Contact
                    </a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative text-center py-32 px-6 bg-[url('/brainrot_hero.jpg')] bg-cover bg-center">
                <div className="bg-black/70 p-10 rounded-2xl inline-block">
                    <h2 className="text-5xl font-extrabold mb-4 text-lime-400 drop-shadow-md">
                        FEED YOUR FOCUS.
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
                        Engineered for gamers, creators, and overachievers.
                        Brain Rot Energy rewires your limits with
                        neuro-optimized performance compounds.*
                    </p>
                    <a
                        href="#contest"
                        className="px-6 py-3 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-300 transition"
                    >
                        Join the Brainwave Challenge
                    </a>
                </div>
                <p className="text-xs text-gray-500 absolute bottom-4 w-full italic">
                    *Results may vary. Some users report “heightened awareness”
                    and “neural synchronization.”
                </p>
            </section>

            {/* Product Showcase */}
            <section id="products" className="py-16 px-8 text-center">
                <h3 className="text-3xl font-bold text-lime-400 mb-10">
                    Our Current Lineup
                </h3>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {[
                        {
                            name: "Brain Rot Original",
                            desc: "Lime-berry fusion with 160mg caffeine.",
                            src: "/brain-rot-original.jpg",
                        },
                        {
                            name: "NeuroBurn",
                            desc: "Spicy cinnamon boost with thermogenic focus.",
                            src: "/brain-rot-neuroburn.jpg",
                        },
                        {
                            name: "MindSpark",
                            desc: "Zero sugar, full nootropic enhancement.",
                            src: "/brain-rot-mindspark.jpg",
                        },
                    ].map((p) => (
                        <div
                            key={p.name}
                            className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-lime-400 transition"
                        >
                            <img
                                src={p.src}
                                alt={p.name}
                                className="w-40 mx-auto mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                {p.name}
                            </h4>
                            <p className="text-gray-400 text-sm">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-8 bg-gray-900">
                <h3 className="text-3xl font-bold text-lime-400 mb-6 text-center">
                    About Us
                </h3>
                <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
                    <p>
                        Founded by <strong>NeuroFuel Beverages, Inc.</strong> in
                        2017, Brain Rot Energy has redefined the energy
                        experience. Our drinks combine cutting-edge biochemistry
                        with passion and purpose — unlocking potential at the
                        cellular level.
                    </p>
                    <p>
                        Whether you’re scaling leaderboards or scaling
                        mountains, Brain Rot helps you stay sharp, stay wired,
                        and stay alive. <em>Because focus is survival.</em>
                    </p>
                </div>
            </section>

            {/* Contest Signup */}
            <section
                id="contest"
                className="py-20 px-8 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.2),rgba(0,0,0,1))]"
            >
                <h3 className="text-3xl font-bold text-lime-400 mb-4 text-center">
                    Join the Brainwave Challenge
                </h3>
                <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
                    Win a VIP trip for four to <em>Zombie Panic Live!</em> —
                    including convention passes, exclusive merch, and a private
                    tasting session with the Brain Rot team. Sign up below for
                    your chance to ascend.
                </p>

                <form
                    className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl border border-gray-700"
                    // onSubmit={(e) => e.preventDefault()}
                >
                    <label className="block mb-4">
                        <span className="block text-sm font-medium text-gray-300 mb-1">
                            Full Name
                        </span>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="block text-sm font-medium text-gray-300 mb-1">
                            Email Address
                        </span>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="block text-sm font-medium text-gray-300 mb-1">
                            Favorite Flavor
                        </span>
                        <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white">
                            <option>Brain Rot Original</option>
                            <option>NeuroBurn</option>
                            <option>MindSpark</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-lime-400 text-black font-bold py-2 rounded hover:bg-lime-300 transition"
                    >
                        Submit Entry
                    </button>
                    <p className="text-xs text-gray-500 mt-4 text-center italic">
                        By entering, you consent to limited cognitive
                        performance testing under controlled conditions.*
                    </p>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-700">
                © 2025 NeuroFuel Beverages, Inc. |{" "}
                <a href="#" className="hover:text-lime-400">
                    Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-lime-400">
                    Neural Consent Agreement
                </a>
            </footer>
        </div>
    );
}
