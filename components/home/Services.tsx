"use client"
import { motion } from "framer-motion"
import { Smartphone, Layout, Bot, MessageSquare, ShoppingBag } from "lucide-react"

const services = [
    {
        title: "Mobile Apps",
        description: "Native iOS & Android development with a focus on high-end UX.",
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Management Systems",
        description: "Custom ERP/SaaS for specialized niches (Hotels, Schools, Enterprises).",
        icon: Layout,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "AI Agent Integration",
        description: "Custom LLM-powered agents for websites and internal apps.",
        icon: Bot,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "WhatsApp AI",
        description: "Intelligent automation for sales and customer support via WhatsApp.",
        icon: MessageSquare,
        color: "from-orange-500 to-red-500",
    },
    {
        title: "E-commerce",
        description: "Scalable web apps with AI-driven conversion optimization.",
        icon: ShoppingBag,
        color: "from-pink-500 to-rose-500",
    },
]

import { SpotlightCard } from "@/components/ui/SpotlightCard";

import { ShaderAnimation } from "@/components/ui/shader-lines"

export function Services() {
    return (
        <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-black">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <ShaderAnimation />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>

            {/* Background Elements - More Dynamic */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-900/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        Core Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-base sm:text-lg"
                    >
                        Scalable, high-performance solutions tailored to your business needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard className="h-full p-8 group hover:-translate-y-1 transition-transform duration-300">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500`} />

                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
