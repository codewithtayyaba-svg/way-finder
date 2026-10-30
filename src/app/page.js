"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { destinations } from "@/components/data/destinations";

const services = [
    {
        icon: "🗺️",
        title: "Interactive Map",
        description:
            "Discover tourist attractions and useful places around your destination.",
        link: "#destinations",
        color: "mint",
    },
    {
        icon: "🌦️",
        title: "Weather Updates",
        description:
            "Check weather conditions before planning your next adventure.",
        link: "#weather",
        color: "blue",
    },
    {
        icon: "🧳",
        title: "Trip Planner",
        description:
            "Organize your destination, travel dates, interests and activities.",
        link: "#trip-planner",
        color: "peach",
    },
    {
        icon: "🤝",
        title: "Travel Buddy",
        description:
            "Find people with similar travel plans and explore together.",
        link: "#travel-buddy",
        color: "purple",
    },
    {
        icon: "🤖",
        title: "AI Travel Assistant",
        description:
            "Get personalized travel suggestions for your next journey.",
        link: "#ai-assistant",
        color: "yellow",
    },
    {
        icon: "💰",
        title: "Budget Planner",
        description:
            "Estimate your trip expenses and plan within your budget.",
        link: "#budget",
        color: "green",
    },
];

const reviews = [
    {
        name: "Ayesha Khan",
        location: "Lahore, Pakistan",
        initials: "AK",
        rating: 5,
        review:
            "The destination ideas made it easier to organize our family trip. Everything felt simple and well organized.",
    },
    {
        name: "Hamza Ali",
        location: "Islamabad, Pakistan",
        initials: "HA",
        rating: 5,
        review:
            "I love the idea of bringing trip planning, destination discovery and budget estimation into one place.",
    },
    {
        name: "Sara Ahmed",
        location: "Multan, Pakistan",
        initials: "SA",
        rating: 4,
        review:
            "A beautiful concept for exploring Pakistan. I would love to use the buddy matching feature for group trips.",
    },
];

const navItems = [
    { icon: "⌂", label: "Home", href: "#home" },
    { icon: "🧭", label: "Destinations", href: "#destinations" },
    { icon: "🏥", label: "Hospitals", href: "#nearby" },
    { icon: "🏨", label: "Hotels", href: "#nearby" },
    { icon: "🗺️", label: "Trip Planner", href: "#trip-planner" },
    { icon: "💰", label: "Budget Planner", href: "#budget" },
    { icon: "👥", label: "Travel Buddy", href: "#travel-buddy" },
    { icon: "🌤️", label: "Weather", href: "#weather" },
    { icon: "✨", label: "AI Assistant", href: "#ai-assistant" },
];

export default function Home() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [menuOpen, setMenuOpen] = useState(false);
    const [tripDestination, setTripDestination] = useState("");
    const [days, setDays] = useState("3");
    const [travelers, setTravelers] = useState("2");
    const [budget, setBudget] = useState("30000");
    const [tripResult, setTripResult] = useState(null);
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState([
        {
            from: "assistant",
            text: "Assalam-o-Alaikum! Tell me which place in Pakistan you want to explore. I can help you get started with your travel plan.",
        },
    ]);

    const categories = [
        "All",
        "Mountains",
        "Nature",
        "Adventure",
        "Culture",
        "City",
        "Beach",
    ];

    const filteredDestinations = destinations.filter((destination) => {
        const matchesCategory =
            activeCategory === "All" ||
            destination.category === activeCategory;

        const matchesSearch =
            destination.name.toLowerCase().includes(search.toLowerCase()) ||
            destination.province.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    function handleTripSubmit(event) {
        event.preventDefault();

        const numberOfDays = Math.max(1, Number(days) || 1);
        const numberOfTravelers = Math.max(1, Number(travelers) || 1);
        const totalBudget = Math.max(0, Number(budget) || 0);

        setTripResult({
            days: numberOfDays,
            travelers: numberOfTravelers,
            budget: totalBudget,
            dailyBudget: Math.round(
                totalBudget / numberOfDays / numberOfTravelers
            ),
        });
    }

    function handleChatSubmit(event) {
        event.preventDefault();

        const question = chatInput.trim();

        if (!question) return;

        setChatMessages((previous) => [
            ...previous,
            { from: "user", text: question },
            {
                from: "assistant",
                text:
                    "Thanks for your question! This is the Way Finder demo assistant. A real AI response will be connected through an AI API in the next development stage. For now, explore our destination cards and trip budget planner.",
            },
        ]);

        setChatInput("");
    }

    return (
        <main id="home" className="website-shell">
            <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
                <a href="#home" className="brand">
                    <span className="brand-symbol">W</span>
                    <span>
                        <strong>wayfinder</strong>
                        <small>EXPLORE MORE</small>
                    </span>
                </a>

                <div className="sidebar-label">DISCOVER</div>

                <nav className="sidebar-nav">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`nav-link ${index === 0 ? "nav-active" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span>{item.label}</span>
                            {item.label === "AI Assistant" && (
                                <span className="new-badge">AI</span>
                            )}
                        </a>
                    ))}
                </nav>

                <div className="sidebar-bottom">
                    <div className="sidebar-promo">
                        <span className="promo-icon">🏔️</span>
                        <h3>Your next adventure awaits.</h3>
                        <p>Discover the beauty of Pakistan with Way Finder.</p>
                        <a href="#destinations" className="promo-link">
                            Start exploring ↗
                        </a>
                    </div>

                </div>
            </aside>

            <div className="main-area">
                <header className="topbar">
                    <button
                        className="mobile-menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>

                    <div className="topbar-brand">
                        <span className="topbar-brand-mark">W</span>
                        <span className="topbar-brand-text">Wayfinder</span>
                    </div>


                    <div className="topbar-right">
                        <span className="online-dot"></span>
                        <span className="topbar-location">Discover Pakistan</span>
                        <a href="#login" className="topbar-button topbar-login">
                            Login
                        </a>
                    </div>
                </header>

                <section className="hero-section">
                    <div className="hero-image"></div>
                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <div className="eyebrow hero-eyebrow">
                            <span className="eyebrow-line"></span>
                            YOUR JOURNEY STARTS HERE
                        </div>

                        <h1>
                            Discover Pakistan,
                            <br />
                            <span>Your Way.</span>
                        </h1>

                        <p className="hero-description">
                            From breathtaking mountain peaks to peaceful valleys,
                            find the places, people and experiences that make
                            every journey unforgettable.
                        </p>

                        <a href="#trip-planner" className="hero-design-button">
                            Start Designing Your Trip <span>→</span>
                        </a>
                    </div>



                    <div className="hero-side-label">PAKISTAN · A LAND OF DISCOVERY</div>
                </section>


                <section className="section services-section" id="services">
                    <div className="section-heading">
                        <div>
                            <div className="eyebrow">
                                <span className="eyebrow-line"></span>
                                EVERYTHING IN ONE PLACE
                            </div>
                            <h2>
                                Explore our <span>services.</span>
                            </h2>
                            <p className="section-description">
                                All the tools you need to turn your travel dreams
                                into a well-planned adventure.
                            </p>
                        </div>

                        <a href="#nearby" className="text-link">
                            Discover all services <span>↗</span>
                        </a>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <a
                                href={service.link}
                                key={service.title}
                                className={`service-card ${service.color}`}
                                style={{ "--delay": `${index * 80}ms` }}
                            >
                                <div className="service-card-top">
                                    <span className="service-icon">{service.icon}</span>
                                    <span className="service-arrow"></span>
                                </div>

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                <span className="service-bottom-link">
                                    Explore service <span>→</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="destination-section" id="destinations">
                    <div className="section">
                        <div className="section-heading destination-heading">
                            <div>
                                <div className="eyebrow">
                                    <span className="eyebrow-line"></span>
                                    THE BEAUTY OF PAKISTAN
                                </div>
                                <h2>
                                    Explore popular <span>destinations.</span>
                                </h2>
                                <p className="section-description">
                                    From hidden valleys to vibrant cities, discover
                                    places worth travelling for.
                                </p>
                            </div>

                            <div className="destination-count">
                                <strong>{filteredDestinations.length.toString().padStart(2, "0")}</strong>
                                <span>PLACES TO EXPLORE</span>
                            </div>
                        </div>

                        <div className="destination-toolbar">
                            <div className="category-filters">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`filter-button ${activeCategory === category ? "filter-active" : ""
                                            }`}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <span className="destination-note">
                                Discover somewhere extraordinary ↗
                            </span>
                        </div>

                        <div className="destinations-grid">
                            {filteredDestinations.map((destination, index) => (
                                <article
                                    className="destination-card"
                                    key={destination.name}
                                    style={{ "--delay": `${index * 70}ms` }}
                                >
                                    <div className="destination-image-wrap">
                                        <Link
                                            href={`/destinations/${destination.slug}`}
                                            aria-label={`Open ${destination.name} destination page`}
                                        >
                                            <Image
                                                src={destination.image}
                                                alt={destination.name}
                                                className="destination-image"
                                                fill
                                                sizes="(max-width: 900px) 100vw, 33vw"
                                                loading="lazy"
                                                unoptimized
                                            />
                                        </Link>

                                        <span className="destination-category">
                                            {destination.category}
                                        </span>

                                        <button
                                            className="destination-heart"
                                            aria-label={`Save ${destination.name}`}
                                            onClick={(event) => {
                                                const button = event.currentTarget;
                                                button.classList.toggle("heart-saved");
                                                button.textContent =
                                                    button.classList.contains("heart-saved") ? "♥" : "♡";
                                            }}
                                        >
                                            ♡
                                        </button>
                                    </div>

                                    <div className="destination-info">
                                        <div className="destination-location">
                                            <span>⌖</span> {destination.province}
                                        </div>

                                        <h3>
                                            <Link href={`/destinations/${destination.slug}`}>
                                                {destination.name}
                                            </Link>
                                        </h3>
                                        <p>{destination.description}</p>

                                        <a
                                            href="#trip-planner"
                                            className="destination-link"
                                            onClick={() => setTripDestination(destination.name)}
                                        >
                                            Plan a visit <span>↗</span>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredDestinations.length === 0 && (
                            <div className="empty-state">
                                <span>⌕</span>
                                <h3>No destinations found</h3>
                                <p>Try another place name or choose a different category.</p>
                                <button
                                    className="primary-button"
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("All");
                                    }}
                                >
                                    Show all destinations
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                <section className="planning-section" id="trip-planner">
                    <div className="planning-image">
                        <Image
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
                            alt="Scenic mountain lake for a travel adventure"
                            fill
                            sizes="(max-width: 900px) 100vw, 45vw"
                            loading="lazy"
                            unoptimized
                        />

                        <div className="planning-image-caption">
                            <span>✦</span>
                            <div>
                                <strong>Your journey, your rules.</strong>
                                <small>Make every moment count.</small>
                            </div>
                        </div>
                    </div>

                    <div className="planning-content">
                        <div className="eyebrow">
                            <span className="eyebrow-line"></span>
                            PLAN WITH CONFIDENCE
                        </div>

                        <h2>
                            Great journeys
                            <br />
                            start with a <span>plan.</span>
                        </h2>

                        <p>
                            Create a simple travel budget and estimate how much
                            you can spend per day and per traveller.
                        </p>

                        <form className="trip-form" onSubmit={handleTripSubmit}>
                            <label>
                                Destination
                                <select
                                    value={tripDestination}
                                    onChange={(event) => setTripDestination(event.target.value)}
                                    required
                                >
                                    <option value="">Choose your destination</option>
                                    {destinations.map((destination) => (
                                        <option key={destination.name} value={destination.name}>
                                            {destination.name}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <div className="trip-form-row">
                                <label>
                                    Trip duration
                                    <select
                                        value={days}
                                        onChange={(event) => setDays(event.target.value)}
                                    >
                                        <option value="1">1 day</option>
                                        <option value="2">2 days</option>
                                        <option value="3">3 days</option>
                                        <option value="5">5 days</option>
                                        <option value="7">7 days</option>
                                        <option value="10">10 days</option>
                                        <option value="14">14 days</option>
                                    </select>
                                </label>

                                <label>
                                    Travellers
                                    <select
                                        value={travelers}
                                        onChange={(event) => setTravelers(event.target.value)}
                                    >
                                        <option value="1">1 traveller</option>
                                        <option value="2">2 travellers</option>
                                        <option value="3">3 travellers</option>
                                        <option value="4">4 travellers</option>
                                        <option value="5">5 travellers</option>
                                        <option value="6">6 travellers</option>
                                    </select>
                                </label>
                            </div>

                            <label>
                                Total budget (PKR)
                                <input
                                    type="number"
                                    min="0"
                                    value={budget}
                                    onChange={(event) => setBudget(event.target.value)}
                                    required
                                />
                            </label>

                            <button type="submit" className="primary-button trip-submit">
                                Calculate my budget <span>→</span>
                            </button>
                        </form>

                        {tripResult && (
                            <div className="budget-result" aria-live="polite">
                                <span className="result-icon">✓</span>
                                <div>
                                    <strong>Your estimated daily budget</strong>
                                    <p>
                                        PKR {tripResult.dailyBudget.toLocaleString("en-PK")} per
                                        person, per day.
                                    </p>
                                    <small>
                                        {tripResult.days} days · {tripResult.travelers} traveller(s)
                                        · Total budget PKR{" "}
                                        {tripResult.budget.toLocaleString("en-PK")}
                                    </small>
                                    <small className="result-disclaimer">
                                        This is your budget calculation, not a live trip quotation.
                                    </small>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="section useful-section" id="nearby">
                    <div className="section-heading">
                        <div>
                            <div className="eyebrow">
                                <span className="eyebrow-line"></span>
                                TRAVEL WITH PEACE OF MIND
                            </div>
                            <h2>
                                Everything you need, <span>nearby.</span>
                            </h2>
                            <p className="section-description">
                                Find useful services to make your journey more comfortable
                                and convenient.
                            </p>
                        </div>
                    </div>

                    <div className="useful-grid">
                        <a href="#trip-planner" className="useful-card">
                            <span className="useful-icon">🏨</span>
                            <div>
                                <h3>Hotels & Stays</h3>
                                <p>Explore accommodation options for your journey.</p>
                            </div>
                            <span className="useful-arrow">↗</span>
                        </a>

                        <a href="#trip-planner" className="useful-card">
                            <span className="useful-icon">🏥</span>
                            <div>
                                <h3>Hospitals</h3>
                                <p>Plan ahead for healthcare and medical assistance.</p>
                            </div>
                            <span className="useful-arrow">↗</span>
                        </a>

                        <a href="#trip-planner" className="useful-card">
                            <span className="useful-icon">🚘</span>
                            <div>
                                <h3>Car Rental</h3>
                                <p>Prepare transport options for your next adventure.</p>
                            </div>
                            <span className="useful-arrow">↗</span>
                        </a>

                        <a href="#trip-planner" className="useful-card">
                            <span className="useful-icon">💊</span>
                            <div>
                                <h3>Pharmacies</h3>
                                <p>Include nearby pharmacies in your travel planning.</p>
                            </div>
                            <span className="useful-arrow">↗</span>
                        </a>
                    </div>

                    <p className="feature-note">
                        These service cards are design previews. Live nearby search,
                        verified listings and bookings will be connected later.
                    </p>
                </section>

                <section className="weather-section" id="weather">
                    <div className="weather-copy">
                        <div className="eyebrow">
                            <span className="eyebrow-line"></span>
                            CHECK BEFORE YOU GO
                        </div>
                        <h2>
                            Let the weather
                            <br />
                            guide your <span>adventure.</span>
                        </h2>
                        <p>
                            Check conditions at your destination before you leave.
                            Weather forecasts will help you prepare for changing
                            mountain and coastal conditions.
                        </p>
                        <a href="#trip-planner" className="light-button">
                            Plan around the weather <span>→</span>
                        </a>
                    </div>

                    <div className="weather-visual">
                        <div className="weather-orb">☀️</div>
                        <span className="weather-decoration weather-cloud-one">☁</span>
                        <span className="weather-decoration weather-cloud-two">☁</span>
                        <div className="weather-glass-card">
                            <span>WEATHER PREVIEW</span>
                            <strong>Pakistan</strong>
                            <p>Ready for your next trip?</p>
                            <small>Connect a weather API for live conditions.</small>
                        </div>
                    </div>
                </section>

                <section className="buddy-section" id="travel-buddy">
                    <div className="buddy-illustration">
                        <span className="buddy-sun"></span>
                        <span className="buddy-mountain mountain-back"></span>
                        <span className="buddy-mountain mountain-front"></span>
                        <div className="buddy-people">
                            <span>🧑🏻‍🦱</span>
                            <span>👩🏽‍🦱</span>
                            <span>🧑🏼‍🦰</span>
                        </div>
                        <div className="buddy-note">Better together ✦</div>
                    </div>

                    <div className="buddy-content">
                        <div className="eyebrow">
                            <span className="eyebrow-line"></span>
                            MEET YOUR TRAVEL COMMUNITY
                        </div>
                        <h2>
                            Adventures are
                            <br />
                            better <span>together.</span>
                        </h2>
                        <p>
                            Looking for people who share your destination, dates and
                            interests? Way Finder is designed to help travellers
                            connect and plan journeys together.
                        </p>

                        <div className="buddy-points">
                            <div><span>✓</span> Match by destination and dates</div>
                            <div><span>✓</span> Find travellers with similar interests</div>
                            <div><span>✓</span> Plan group adventures more easily</div>
                        </div>

                        <button
                            className="primary-button"
                            onClick={() =>
                                alert(
                                    "Travel Buddy matching will be available after user accounts and the matching database are implemented."
                                )
                            }
                        >
                            Discover Travel Buddy <span>→</span>
                        </button>
                    </div>
                </section>

                <section className="ai-section" id="ai-assistant">
                    <div className="ai-header">
                        <div className="ai-badge">✧ AI POWERED CONCEPT</div>
                        <h2>
                            Meet your personal
                            <br />
                            <span>travel assistant.</span>
                        </h2>
                        <p>
                            Have a destination in mind? Start a conversation about
                            your next journey.
                        </p>
                    </div>

                    <div className="chat-card">
                        <div className="chat-top">
                            <div className="chat-avatar">✧</div>
                            <div>
                                <strong>Way Finder Assistant</strong>
                                <small><span></span> Demo mode</small>
                            </div>
                            <span className="chat-more">•••</span>
                        </div>

                        <div className="chat-messages" aria-live="polite">
                            {chatMessages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`chat-message ${message.from === "user" ? "user-message" : ""
                                        }`}
                                >
                                    {message.from === "assistant" && (
                                        <span className="message-avatar">✧</span>
                                    )}
                                    <p>{message.text}</p>
                                </div>
                            ))}
                        </div>

                        <form className="chat-form" onSubmit={handleChatSubmit}>
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(event) => setChatInput(event.target.value)}
                                placeholder="Ask about your next adventure..."
                                aria-label="Ask the travel assistant"
                            />
                            <button type="submit" aria-label="Send message">↑</button>
                        </form>

                        <div className="chat-disclaimer">
                            Demo responses only. Live AI requires an API integration.
                        </div>
                    </div>
                </section>

                <section className="reviews-section" id="reviews">
                    <div className="section">
                        <div className="reviews-header">
                            <div>
                                <div className="eyebrow">
                                    <span className="eyebrow-line"></span>
                                    TRAVEL STORIES
                                </div>
                                <h2>
                                    Every journey has
                                    <br />
                                    a <span>story to tell.</span>
                                </h2>
                            </div>

                            <div className="review-summary">
                                <strong>★★★★★</strong>
                                <span>Sample review showcase</span>
                            </div>
                        </div>

                        <div className="reviews-grid">
                            {reviews.map((review, index) => (
                                <article className="review-card" key={review.name}>
                                    <div className="review-top">
                                        <span className="quote-mark">“</span>
                                        <span className="review-stars">
                                            {"★".repeat(review.rating)}
                                            {"☆".repeat(5 - review.rating)}
                                        </span>
                                    </div>

                                    <p className="review-text">{review.review}</p>

                                    <div className="review-author">
                                        <div className={`review-avatar avatar-${index}`}>
                                            {review.initials}
                                        </div>
                                        <div>
                                            <strong>{review.name}</strong>
                                            <small>{review.location}</small>
                                        </div>
                                        <span className="verified-mark">✦</span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <p className="review-disclaimer">
                            These are demonstration reviews for the UI. They are not
                            verified customer testimonials.
                        </p>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="cta-decoration">✦</div>
                    <div className="eyebrow cta-eyebrow">THE WORLD IS WAITING</div>
                    <h2>
                        Your next great story
                        <br />
                        starts <span>in Pakistan.</span>
                    </h2>
                    <p>
                        Find your destination. Plan your journey.
                        Make every mile meaningful.
                    </p>
                    <a href="#destinations" className="cta-button">
                        Start exploring <span>↗</span>
                    </a>
                </section>

                <footer className="site-footer">
                    <a href="#home" className="footer-brand">
                        <span className="brand-symbol">W</span>
                        <strong>wayfinder</strong>
                    </a>

                    <p>Discover more. Travel smarter. Explore Pakistan.</p>

                    <div className="footer-links">
                        <a href="#services">Services</a>
                        <a href="#destinations">Destinations</a>
                        <a href="#trip-planner">Plan a trip</a>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2026 Way Finder · Academic project prototype</span>
                        <a href="#home">Back to top ↑</a>
                    </div>
                </footer>
            </div>
        </main>
    );
}