"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

export interface Project {
    id: string
    title: string
    category: string
    description: string
    image: string
    videoLoop?: string
    demoUrl?: string
    walkthroughUrl?: string
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <SpotlightCard className="group h-full flex flex-col bg-card/50 border-white/5 hover:border-white/20">
                    {/* Media Container */}
                    <div className="aspect-video relative overflow-hidden rounded-t-xl bg-muted z-20">
                        {project.videoLoop && isHovered ? (
                            <video
                                src={project.videoLoop}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover transform scale-105 transition-transform duration-700"
                            />
                        ) : (
                            project.image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white/20 font-mono">No Image</div>
                            )
                        )}

                        {/* Overlay Actions */}
                        <div className={cn(
                            "absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4 transition-all duration-300",
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <Button size="icon" className="rounded-full h-12 w-12 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black border border-white/20 transition-all duration-300" onClick={() => window.open(project.demoUrl, '_blank')}>
                                <ExternalLink className="h-5 w-5" />
                            </Button>
                            <Button size="icon" className="rounded-full h-12 w-12 bg-primary text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/25" onClick={() => setShowModal(true)}>
                                <Play className="h-5 w-5 fill-current pl-1" />
                            </Button>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-xs font-semibold text-white tracking-wide z-30">
                            {project.category}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                    </div>
                </SpotlightCard>
            </motion.div>

            {/* Walkthrough Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <h3 className="text-lg font-semibold text-white">Tech Walkthrough: {project.title}</h3>
                                <Button variant="ghost" size="icon" onClick={() => setShowModal(false)} className="hover:bg-white/10 rounded-full">
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="aspect-video bg-black">
                                {/* Embed Placeholder */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={project.walkthroughUrl?.replace("watch?v=", "embed/") || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                                    title="Video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </motion.div>
                        {/* Close on click outside */}
                        <div className="absolute inset-0 -z-10" onClick={() => setShowModal(false)} />
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
