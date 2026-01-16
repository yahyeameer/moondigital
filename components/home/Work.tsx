"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard, Project } from "@/components/work/ProjectCard"
import { cn } from "@/lib/utils"

const projects: Project[] = [
    {
        id: "1",
        title: "Hospitality OS",
        category: "Management Systems",
        description: "All-in-one ERP suite designed for luxury 5-star hotel chains to manage operations seamlessy.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        videoLoop: "", // Add if available or leave empty
        demoUrl: "#",
        walkthroughUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: "2",
        title: "CustomerGenie AI",
        category: "AI Agents",
        description: "Autonomous customer support agent capable of resolving 80% of queries without human intervention.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
        demoUrl: "#",
        walkthroughUrl: "#"
    },
    {
        id: "3",
        title: "FinFlow Mobile",
        category: "Mobile Apps",
        description: "Next-gen fintech application featuring biometric security and AI-powered spending insights.",
        image: "https://images.unsplash.com/photo-1512428559087-560fa0db79b6?q=80&w=1000&auto=format&fit=crop",
        demoUrl: "#",
        walkthroughUrl: "#"
    },
    {
        id: "4",
        title: "ShopScale",
        category: "E-commerce",
        description: "High-performance headless e-commerce store with real-time inventory and AI personalization.",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop",
        demoUrl: "#",
        walkthroughUrl: "#"
    }
]

const filters = ["All", "AI Agents", "Management Systems", "Mobile Apps", "E-commerce"]

import { SpotlightCard } from "@/components/ui/SpotlightCard";

// ... (keep structure, wrap ProjectCard in SpotlightCard mechanism or update ProjectCard to use it)
// Actually, ProjectCard has its own complex layout. It's better to update ProjectCard internally or wrap it.
// Wrapping here is easier for now to maintain the grid layout.

export function Work() {
    const [activeFilter, setActiveFilter] = useState("All")

    const filteredProjects = projects.filter(project =>
        activeFilter === "All" || project.category === activeFilter
    )

    return (
        <section id="work" className="py-24 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                            Selected Work
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Explore our portfolio of high-impact digital solutions.
                        </p>
                    </div>

                    {/* Filter Bar - Glass Effect */}
                    <div className="flex flex-wrap gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                    activeFilter === filter
                                        ? "bg-white text-black shadow-lg shadow-white/10"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
