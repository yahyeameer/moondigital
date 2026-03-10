"use client"
import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Smartphone, Layout, ShoppingBag, Palette, Megaphone, Building2, GraduationCap, Stethoscope, Warehouse, Sparkles } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Magnetic } from "@/components/ui/Magnetic"

const services = [
    {
        title: "iOS & Android Apps",
        description: "Native and cross-platform mobile app development with premium UX for any industry.",
        icon: Smartphone,
        color: "from-sky-500 to-blue-600",
        glow: "rgba(14, 165, 233, 0.3)",
    },
    {
        title: "ERP Systems",
        description: "Enterprise Resource Planning solutions that streamline your entire business workflow.",
        icon: Layout,
        color: "from-emerald-400 to-teal-600",
        glow: "rgba(52, 211, 153, 0.3)",
    },
    {
        title: "Hospital Management",
        description: "Complete digital hospital systems — patient records, scheduling, billing & pharmacy.",
        icon: Stethoscope,
        color: "from-blue-400 to-indigo-600",
        glow: "rgba(96, 165, 250, 0.3)",
    },
    {
        title: "School Management",
        description: "Student enrollment, grading, attendance, and parent portals — all in one platform.",
        icon: GraduationCap,
        color: "from-teal-400 to-emerald-600",
        glow: "rgba(45, 212, 191, 0.3)",
    },
    {
        title: "Business Solutions",
        description: "Custom software for retail, warehouse, electronics, cosmetics, and clothing businesses.",
        icon: Building2,
        color: "from-indigo-400 to-blue-600",
        glow: "rgba(129, 140, 248, 0.3)",
    },
    {
        title: "E-commerce",
        description: "Full-stack online stores with inventory management, payments, and logistics.",
        icon: ShoppingBag,
        color: "from-sky-400 to-indigo-500",
        glow: "rgba(56, 189, 248, 0.3)",
    },
    {
        title: "Warehouse Management",
        description: "Track inventory, shipments, and stock levels with real-time digital dashboards.",
        icon: Warehouse,
        color: "from-teal-500 to-blue-500",
        glow: "rgba(20, 184, 166, 0.3)",
    },
    {
        title: "Graphic Design",
        description: "Brand identity, social media graphics, packaging, and print-ready materials.",
        icon: Palette,
        color: "from-indigo-500 to-teal-500",
        glow: "rgba(99, 102, 241, 0.3)",
    },
    {
        title: "Digital Marketing",
        description: "SEO, social media management, paid ads, and content strategies that convert.",
        icon: Megaphone,
        color: "from-blue-500 to-sky-400",
        glow: "rgba(59, 130, 246, 0.3)",
    },
]

function ServiceCard({ service, index, bentoClass }: { service: any, index: number, bentoClass: string }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={bentoClass}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="h-full w-full relative group perspective-1000"
            >
                <motion.div
                    style={{ rotateX, rotateY }}
                    className="h-full w-full relative transition-transform duration-200 ease-out preserve-3d"
                >
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={1.5}
                    />
                    <SpotlightCard
                        spotlightColor={service.glow}
                        className="h-full w-full p-8 md:p-10 bg-white/[0.01] border border-white/[0.08] rounded-[2.5rem] flex flex-col items-start text-left overflow-hidden relative backdrop-blur-xl transition-colors duration-500 group-hover:bg-white/[0.04] group-hover:border-white/20"
                    >
                        {/* Interactive Background Glow */}
                        <div className={`absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.2] blur-[80px] rounded-full transition-all duration-1000 pointer-events-none z-0`} />

                        {/* Magnetic Icon Container */}
                        <div className="mb-10 z-10 relative">
                            <Magnetic strength={0.3}>
                                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/[0.03] border border-white/[0.08] group-hover:bg-white/[0.08] transition-all duration-500 shadow-2xl relative">
                                    {/* Icon Glow Ring */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white/70 group-hover:text-white transition-colors duration-500 relative z-10" />
                                </div>
                            </Magnetic>
                        </div>

                        <div className="z-10 relative mt-auto">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-2">
                                {service.title}
                                <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-700 text-sky-400 scale-0 group-hover:scale-100" />
                            </h3>
                            <p className="text-white/40 leading-relaxed text-base sm:text-lg font-medium group-hover:text-white/60 transition-colors duration-500">
                                {service.description}
                            </p>
                        </div>

                        {/* Bottom edge accent */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`} />
                    </SpotlightCard>
                </motion.div>
            </div>
        </motion.div>
    )
}

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-sky-400 mb-10 backdrop-blur-md shadow-inner"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        Our Constellation of Services
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white"
                    >
                        Digitalize <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">Everything</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        We architect premium digital experiences that scale. From elite mobile applications to total enterprise digitalization.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        let bentoClass = "col-span-1 h-[400px]";
                        // Dynamic layout for desktop
                        if (index === 0) bentoClass = "md:col-span-2 h-[450px]";
                        if (index === 3) bentoClass = "md:row-span-2 h-full min-h-[400px]";
                        if (index === 6) bentoClass = "md:col-span-2 h-[400px]";

                        return (
                            <ServiceCard
                                key={service.title}
                                service={service}
                                index={index}
                                bentoClass={bentoClass}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
