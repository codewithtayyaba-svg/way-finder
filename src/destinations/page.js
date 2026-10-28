"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./murree/murree.css";

const attractions = [
    {
        name: "Mall Road",
        category: "Shopping & Food",
        description:
            "Explore Murree's famous shopping street, local markets, restaurants and cafes.",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Kashmir Point",
        category: "Nature",
        description:
            "Enjoy peaceful mountain scenery, fresh air and beautiful views of the surrounding hills.",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Patriata",
        category: "Adventure",
        description:
            "Visit New Murree for its forest scenery and chairlift and cable car attractions.",
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    },
];

const travelTips = [
    {
        icon: "🌦️",
        title: "Check the Weather",
        description:
            "Check the forecast before travelling, especially during winter and the monsoon season.",
    },
    {
        icon: "🚗",
        title: "Plan Your Transport",
        description:
            "Plan your route and check traffic conditions before leaving for Murree.",
    },
    {
        icon: "🏨",
        title: "Book Accommodation",
        description:
            "Compare hotel locations, prices and reviews before making a reservation.",
    },
    {
        icon: "🧥",
        title: "Pack Accordingly",
        description:
            "Carry warm clothing because mountain temperatures can change quickly.",
    },
];

export const MurreePage = () => {
    const [saved, setSaved] = useState(false);

    return (
        <main className="murree-page">
            {/* Navigation Bar */}
            <header className="murree-navbar">
                <Link href="/" className="murree-brand">
                    <span className="murree-brand-icon">W</span>
                    <span>
                        <strong>wayfinder</strong>
                        <small>EXPLORE MORE</small>
                    </span>
                </Link>

                <nav className="murree-nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/#destinations">Destinations</Link>
                    <Link href="/#trip-planner">Trip Planner</Link>
                    <Link href="/#travel-buddy">Travel Buddy</Link>
                </nav>

                <Link href="/#trip-planner" className="murree-nav-button">
                    Plan Your Trip ↗
                </Link>
            </header>

            {/* Hero Section */}
            <section className="murree-hero">
                <Image
                    className="murree-hero-image"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
                    alt="Mountain landscape representing a Murree getaway"
                    width={2000}
                    height={1200}
                    priority
                    unoptimized
                />

                <div className="murree-hero-overlay"></div>

                <div className="murree-hero-content">
                    <div className="murree-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/#destinations">Destinations</Link>
                        <span>/</span>
                        <span>Murree</span>
                    </div>

                    <span className="murree-eyebrow">
                        DISCOVER THE BEAUTY OF PAKISTAN
                    </span>

                    <h1>
                        Welcome to
                        <br />
                        <span>Murree.</span>
                    </h1>

                    <p>
                        Misty mountains, peaceful pine forests and unforgettable
                        moments in one of Pakistan&apos;s most loved hill stations.
                    </p>

                    <div className="murree-hero-buttons">
                        <Link href="#attractions" className="murree-primary-button">
                            Explore Attractions <span>→</span>
                        </Link>

                        <Link href="#trip-info" className="murree-outline-button">
                            Travel Guide
                        </Link>
                    </div>

                    <button
                        className={`murree-save-button ${saved ? "is-saved" : ""}`}
                        onClick={() => setSaved(!saved)}
                    >
                        {saved ? "♥ Saved to Favorites" : "♡ Save Destination"}
                    </button>
                </div>

                <div className="murree-hero-caption">
                    <span>📍</span> Murree, Punjab, Pakistan
                </div>
            </section>

            {/* Quick Information */}
            <section className="murree-quick-info">
                <div className="murree-info-item">
                    <span>📍</span>
                    <div>
                        <small>LOCATION</small>
                        <strong>Punjab, Pakistan</strong>
                    </div>
                </div>

                <div className="murree-info-item">
                    <span>🌲</span>
                    <div>
                        <small>EXPERIENCE</small>
                        <strong>Nature & Mountains</strong>
                    </div>
                </div>

                <div className="murree-info-item">
                    <span>🚗</span>
                    <div>
                        <small>TRIP TYPE</small>
                        <strong>Family & Adventure</strong>
                    </div>
                </div>

                <div className="murree-info-item">
                    <span>📅</span>
                    <div>
                        <small>TRIP PLANNING</small>
                        <strong>Plan Before You Go</strong>
                    </div>
                </div>
            </section>

            {/* About Murree */}
            
            <section className="murree-section murree-about">
                <div className="murree-about-content">
                    <span className="murree-section-label">
                        YOUR NEXT MOUNTAIN ESCAPE
                    </span>

                    <h2>
                        A little closer to
                        <br />
                        <span>nature.</span>
                    </h2>

                    <p>
                        Murree is a popular hill station in Punjab, Pakistan,
                        known for its green hills, pine forests, cool weather
                        and scenic mountain views. It is a favorite destination
                        for families, couples and nature lovers.
                    </p>

                    <p>
                        Whether you want to explore busy markets, enjoy peaceful
                        viewpoints or discover nearby mountain attractions,
                        Way Finder helps you organize your journey in one place.
                    </p>

                    <Link href="#trip-info" className="murree-text-link">
                        Explore the travel guide ↗
                    </Link>
                </div>

                <div className="murree-about-visual">
                    <Image
                        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85"
                        alt="A scenic landscape surrounded by mountains"
                        width={1000}
                        height={667}
                        loading="lazy"
                    />

                    <div className="murree-image-note">
                        <span>✦</span>
                        <div>
                            <strong>Find your peaceful escape</strong>
                            <small>Discover Murree with Way Finder</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions */}
            <section
                className="murree-section murree-attractions"
                id="attractions"
            >
                <div className="murree-section-heading">
                    <div>
                        <span className="murree-section-label">
                            PLACES WORTH EXPLORING
                        </span>

                        <h2>
                            Popular <span>attractions.</span>
                        </h2>

                        <p>
                            Add these beautiful places to your Murree travel itinerary.
                        </p>
                    </div>

                    <span className="murree-heading-decoration">✳</span>
                </div>

                <div className="murree-attraction-grid">
                    {attractions.map((place, index) => (
                        <article className="murree-attraction-card" key={place.name}>
                            <div className="murree-attraction-image">
                                <Image
                                    src={place.image}
                                    alt={place.name}
                                    width={900}
                                    height={600}
                                    loading="lazy"
                                />

                                <span className="murree-place-number">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="murree-attraction-info">
                                <span className="murree-place-category">
                                    {place.category}
                                </span>

                                <h3>{place.name}</h3>

                                <p>{place.description}</p>

                                <Link href="#trip-info" className="murree-place-link">
                                    Add to your plan <span>↗</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Travel Planning */}
            <section className="murree-planning" id="trip-info">
                <div className="murree-planning-content">
                    <span className="murree-section-label">
                        TRAVEL SMARTER
                    </span>

                    <h2>
                        Make your Murree trip
                        <br />
                        <span>stress-free.</span>
                    </h2>

                    <p>
                        A little preparation can make your mountain trip more
                        comfortable. Use these tips before starting your journey.
                    </p>

                    <div className="murree-tips-grid">
                        {travelTips.map((tip) => (
                            <article className="murree-tip-card" key={tip.title}>
                                <span className="murree-tip-icon">{tip.icon}</span>

                                <div>
                                    <h3>{tip.title}</h3>
                                    <p>{tip.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <Link href="/#trip-planner" className="murree-primary-button">
                        Create My Trip Plan <span>→</span>
                    </Link>
                </div>
            </section>

            {/* Nearby Services */}
            <section className="murree-section murree-services">
                <div className="murree-section-heading">
                    <div>
                        <span className="murree-section-label">
                            PLAN WITH CONFIDENCE
                        </span>

                        <h2>
                            Useful services <span>nearby.</span>
                        </h2>

                        <p>
                            Plan accommodation, transport and essential services
                            before you travel.
                        </p>
                    </div>
                </div>

                <div className="murree-service-grid">
                    <article className="murree-service-card">
                        <span>🏨</span>
                        <h3>Hotels & Resorts</h3>
                        <p>Explore accommodation options for your stay.</p>
                        <small>Live listings coming soon</small>
                    </article>

                    <article className="murree-service-card">
                        <span>🍽️</span>
                        <h3>Restaurants</h3>
                        <p>Discover food places to consider during your trip.</p>
                        <small>Live listings coming soon</small>
                    </article>

                    <article className="murree-service-card">
                        <span>🏥</span>
                        <h3>Hospitals</h3>
                        <p>Identify healthcare services before your journey.</p>
                        <small>Verified listings coming soon</small>
                    </article>

                    <article className="murree-service-card">
                        <span>🚗</span>
                        <h3>Transport</h3>
                        <p>Plan how you will reach and explore Murree.</p>
                        <small>Transport integration coming soon</small>
                    </article>
                </div>

                <p className="murree-disclaimer">
                    Note: These are planning previews. Live weather, maps,
                    verified service listings and booking information require
                    API or database integration.
                </p>
            </section>

            {/* Final Call to Action */}
            <section className="murree-final-cta">
                <span className="murree-section-label">
                    YOUR NEXT ADVENTURE STARTS HERE
                </span>

                <h2>
                    Ready to explore
                    <br />
                    <span>Murree?</span>
                </h2>

                <p>
                    Choose your travel dates, organize your budget and get
                    ready for your next journey.
                </p>

                <Link href="/#trip-planner" className="murree-cta-button">
                    Plan Your Murree Trip ↗
                </Link>
            </section>

            {/* Footer */}
            <footer className="murree-footer">
                <Link href="/" className="murree-brand">
                    <span className="murree-brand-icon">W</span>
                    <span>
                        <strong>wayfinder</strong>
                        <small>EXPLORE MORE</small>
                    </span>
                </Link>

                <p>Discover more. Travel smarter. Explore Pakistan.</p>

                <Link href="/#destinations">Explore More Destinations ↗</Link>

                <small>© 2026 Way Finder · Academic Project Prototype</small>
            </footer>
        </main>
    );
}