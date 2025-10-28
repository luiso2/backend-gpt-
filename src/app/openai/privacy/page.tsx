'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function OpenAIPrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0A2E1F] to-[#0F3D2A] py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/openai/privacy/general"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            General Privacy Policies
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/openai/privacy/sheet-creator"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Merktop Sheet Creator
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            href="/openai/privacy/essential-pack"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Merktop Essential Pack
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link
                            href="/openai/privacy/doctor-pi"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Doctor Pi
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link
                            href="/openai/privacy/merktop-assistant"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Merktop Assistant
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <Link
                            href="/openai/privacy/la-mattress"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Merktop LA Mattress
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <Link
                            href="/openai/privacy/business-pro"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Merktop Business Pro
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <Link
                            href="/openai/privacy/mercado-ai"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Mercado AI
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        <Link
                            href="/openai/privacy/freedumb"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Freedumb
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <Link
                            href="/openai/privacy/algoritmo"
                            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B8E92D] hover:text-[#7FD858] transition-all duration-300 hover:scale-105 break-words"
                        >
                            Algoritmo
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
