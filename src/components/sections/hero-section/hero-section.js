import "./hero-sectoin.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HeroSection = (data) => {
    const [saved, setSaved] = useState(false);
    console.log("data", data)
    return (
        <section className="murree-hero">
            <Image
                className="murree-hero-image"
                src={data.data.imageUrl}
                alt="Mountain landscape representing a Murree getaway"
                width={2000}
                height={1333}
                sizes="100vw"
                priority
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
                    <span>{data.data.title}</span>
                </h1>

                <p>
                    {data.data.description}
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
    )
}