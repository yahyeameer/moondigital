import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
    Services: [
        { name: "Mobile Apps", href: "#" },
        { name: "Management Systems", href: "#" },
        { name: "AI Agents", href: "#" },
        { name: "WhatsApp AI", href: "#" },
        { name: "E-commerce", href: "#" },
    ],
    Company: [
        { name: "About", href: "#" },
        { name: "Work", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ],
    Socials: [
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "LinkedIn", href: "#", icon: Linkedin },
        { name: "Instagram", href: "#", icon: Instagram },
    ]
}

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4 block">
                            AARTECH
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Building the future of business through custom software and AI.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.Services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.Company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {footerLinks.Socials.map((social) => (
                                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-white transition-colors">
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} AARTECH. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Additional bottom links if needed */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
