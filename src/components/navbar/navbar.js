"use client";
import Link from "next/link";
import { useState } from "react";
import "./navbar.css";
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Destinations", href: "/#destinations" },
        { name: "Trip Planner", href: "/#trip-planner" },
        { name: "Travel Buddy", href: "/travel-buddy" },
        { name: "AI Assistant", href: "/#ai-assistant" },
    ];

    return (
        <header className="main-navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link href="/" className="navbar-brand">
                    <span className="navbar-logo">W</span>
                    <span>Way Finder</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Navigation Links */}
                <nav className={`navbar-links ${menuOpen ? "navbar-open" : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Explore Button */}
                <Link href="/#destinations" className="navbar-button">
                    Login
                </Link>

            </div>
        </header>
    );
}