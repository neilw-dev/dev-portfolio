"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return(
        <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo / Name */}
                <div className="text-lg font-bold text-white">
                    Neil Williamson
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>
                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-white transition">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </nav>

                {/* Mobile Button */}
                <button
                 onClick={() => setOpen(!open)}
                 className="md:hidden text-white p-2 rounded-md hover:bg-zinc-800 transition"
                 >
                  {open ? <X size={24} /> : <Menu size={24} />}  
                 </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-zinc-800 bg-black px-6 py-4 space-y-4 text-zinc-300">
                    <a href="#about" className="block">About</a>
                    <a href="#projects" className="block">Projects</a>
                    <a href="#skills" className="block">Skills</a>
                    <a href="#contact" className="block">Contact</a> 
                </div>
            )}
        </header>
    )
}