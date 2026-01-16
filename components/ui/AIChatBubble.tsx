"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { chatWithGemini, Message } from "@/app/actions"
import { cn } from "@/lib/utils"

export function AIChatBubble() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: "model", content: "Hello! I'm your AARTECH AI assistant. How can I help you scale your business today?" }
    ])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isOpen])

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return

        const userMessage: Message = { role: "user", content: inputValue }
        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)

        try {
            const response = await chatWithGemini(messages, userMessage.content)

            if (response.success && response.message) {
                setMessages((prev) => [...prev, { role: "model", content: response.message }])
            } else {
                setMessages((prev) => [...prev, { role: "model", content: response.message || "An error occurred." }])
            }
        } catch (error) {
            console.error("Chat Error:", error)
            setMessages((prev) => [...prev, { role: "model", content: "Sorry, something went wrong." }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-card border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                                    <Image src="/icon.png" alt="AARTECH" width={32} height={32} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm">AARTECH AI</h4>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10" onClick={() => setIsOpen(false)}>
                                <X className="w-4 h-4 text-muted-foreground" />
                            </Button>
                        </div>

                        {/* Chat Area */}
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/40">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "")}>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 overflow-hidden",
                                        msg.role === "model" ? "bg-primary/20" : "bg-white/10"
                                    )}>
                                        {msg.role === "model" ? (
                                            <Image src="/icon.png" alt="AI" width={32} height={32} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-xs font-semibold">ME</span>
                                        )}
                                    </div>
                                    <div className={cn(
                                        "p-3 text-sm max-w-[80%]",
                                        msg.role === "model" ? "bg-white/10 rounded-2xl rounded-tl-sm text-white/90" : "bg-primary rounded-2xl rounded-tr-sm text-white"
                                    )}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1 overflow-hidden">
                                        <Image src="/icon.png" alt="AI" width={32} height={32} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce"></span>
                                        <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 rounded-full bg-white/50 animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about our services..."
                                    disabled={isLoading}
                                    className="w-full bg-black/50 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50 placeholder:text-white/20 disabled:opacity-50"
                                />
                                <Button
                                    size="icon"
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-primary/90 transition-colors border border-white/10 overflow-hidden"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Image src="/icon.png" alt="Chat" width={56} height={56} className="w-full h-full object-cover" />}
            </motion.button>
        </>
    )
}
