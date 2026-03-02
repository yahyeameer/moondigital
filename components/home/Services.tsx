"use client"
import { motion } from "framer-motion"
import { Smartphone, Layout, ShoppingBag, Palette, Megaphone, Building2, GraduationCap, Stethoscope, Warehouse } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { AuroraBackground } from "@/components/ui/AuroraBackground"

const services = [
    {
        title: "iOS & Android Apps",
        description: "Native and cross-platform mobile app development with premium UX for any industry.",
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "ERP Systems",
        description: "Enterprise Resource Planning solutions that streamline your entire business workflow.",
        icon: Layout,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Hospital Management",
        description: "Complete digital hospital systems — patient records, scheduling, billing & pharmacy.",
        icon: Stethoscope,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "School Management",
        description: "Student enrollment, grading, attendance, and parent portals — all in one platform.",
        icon: GraduationCap,
        color: "from-orange-500 to-amber-500",
    },
    {
        title: "Business Solutions",
        description: "Custom software for retail, warehouse, electronics, cosmetics, and clothing businesses.",
        icon: Building2,
        color: "from-indigo-500 to-violet-500",
    },
    {
        title: "E-commerce",
        description: "Full-stack online stores with inventory management, payments, and logistics.",
        icon: ShoppingBag,
        color: "from-pink-500 to-rose-500",
    },
    {
        title: "Warehouse Management",
        description: "Track inventory, shipments, and stock levels with real-time digital dashboards.",
        icon: Warehouse,
        color: "from-teal-500 to-cyan-500",
    },
    {
        title: "Graphic Design",
        description: "Brand identity, social media graphics, packaging, and print-ready materials.",
        icon: Palette,
        color: "from-fuchsia-500 to-purple-500",
    },
    {
        title: "Digital Marketing",
        description: "SEO, social media management, paid ads, and content strategies that convert.",
        icon: Megaphone,
        color: "from-red-500 to-orange-500",
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-[#050508]">
            {/* Lightweight aurora background */}
            <AuroraBackground />

            {/* Top/bottom fade */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050508] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050508] to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                        What We Offer
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        Our Digital Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-base sm:text-lg leading-relaxed"
                    >
                        From mobile apps to marketing — we digitalize every aspect of your business.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard className="h-full p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
                                {/* Hover glow accent */}
                                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 blur-2xl rounded-full transition-all duration-500 pointer-events-none`} />

                                {/* Icon */}
                                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-400">
                                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
                                <p className="text-white/45 leading-relaxed text-sm">
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
