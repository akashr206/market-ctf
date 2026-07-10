import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Trophy, Cpu, Code2, Flag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Landing = () => {
    const [flagInput, setFlagInput] = useState("");

    const handleFlagSubmit = (e) => {
        e.preventDefault();
        if (flagInput.trim() === "ctf{gdg_uvce_ctf_champion}") {
            toast.success("Access Granted!", {
                description:
                    "You found the flag. Register below to secure your spot in the elite bracket.",
            });
            document
                .getElementById("register")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            toast.error("Access Denied", {
                description:
                    "That is not the correct flag. Keep looking in the source.",
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <div className="min-h-screen text-white selection:bg-fuchsia-500/30 font-sans pb-2">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/50 backdrop-blur-md border-b border-white/10"
            >
                <div className="flex items-center gap-3">
                    <img src="/icon.svg" alt="GDG Logo" className="w-8 h-8" />
                    <span className="font-bold text-xl tracking-tight">
                        GDG CTF
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Button
                        variant="outline"
                        className="border-fuchsia-500/50 relative hover:text-fuchsia-400/80 text-fuchsia-400 hover:bg-fuchsia-500/10"
                    >
                        <a
                            href="https://tinyurl.com/2dv468uh"
                            target="_blank"
                            className="absolute inset-0"
                        ></a>
                        Register
                    </Button>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center min-h-[85vh] text-center px-4 pt-20">
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col items-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="font-mono text-fuchsia-400 tracking-widest text-sm uppercase flex items-center gap-2 bg-fuchsia-500/5 px-4 py-2 border-x border-fuchsia-500/30 rounded-sm"
                    >
                        <span className="opacity-40">&lt;</span>
                        <span>12.07.2026 // 09:00 - 18:00 IST</span>
                        <span className="opacity-40">&gt;</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase"
                    >
                        Capture <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-600 ">
                            The Flag <span> </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl"
                    >
                        Think like a hacker. Defend like a pro. Join GDG CTF for
                        a beginner friendly cybersecurity experience and test
                        your skills against the best.
                    </motion.p>

                    {/* Flag Submission UX */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-md mt-4 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
                    >
                        <div className="bg-black rounded-xl p-6 border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50" />

                            <div className="flex items-center gap-2 text-fuchsia-400 font-medium">
                                <Flag size={18} />
                                <span>Found the hidden flag?</span>
                            </div>
                            <p className="text-sm text-zinc-400 text-left">
                                Find and submit the flag to unlock exclusive
                                registration perks.
                            </p>

                            <form
                                onSubmit={handleFlagSubmit}
                                className="flex gap-2"
                            >
                                <Input
                                    value={flagInput}
                                    onChange={(e) =>
                                        setFlagInput(e.target.value)
                                    }
                                    placeholder="ctf{...}"
                                    className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-fuchsia-500"
                                />
                                <Button
                                    type="submit"
                                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Poster & Registration Section */}
            <section id="register" className="mx-10">
                <div className="flex">
                    {/* Left: Poster */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group flex-1"
                    >
                        <img
                            src="/poster.jpeg"
                            alt="GDG CTF Poster"
                            className="relative border border-white/10 shadow-2xl shadow-fuchsia-900/20 object-cover"
                        />
                    </motion.div>

                    {/* Right: Registration CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col flex-1 items-center justify-center gap-8"
                    >
                        <div className="max-w-lg flex flex-col gap-4">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                    Join the Elite. <br />
                                    Claim Your Spot.
                                </h2>
                                <p className="text-zinc-400 text-lg">
                                    Registration is now open for the beginner
                                    friendly cybersecurity showdown. Assemble
                                    your team, sharpen your tools, and prepare
                                    to infiltrate.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-fuchsia-500">
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Exciting Prizes
                                        </h4>
                                        <p className="text-sm text-zinc-400">
                                            Exclusive goodies for top teams
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full sm:w-auto self-start bg-white text-black hover:bg-zinc-200 text-lg h-14 px-8 rounded-xl group relative"
                            >
                                <a
                                    href="https://tinyurl.com/2dv468uh"
                                    target="_blank"
                                    className="absolute inset-0"
                                ></a>
                                Register Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-200 text-sm font-mono">
                <div>© GDG UVCE 2026</div>
                <div>INSPECT IS THE KEY</div>
                <div className="flex gap-3 items-center">
                    <span>Credits: Akash</span>
                    <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="w-8 h-8 border-white/40 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                    >
                        <a
                            href="https://github.com/akashr206"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="w-8 h-8 border-white/40 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                    >
                        <a
                            href="https://linkedin.com/in/akashr206"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
