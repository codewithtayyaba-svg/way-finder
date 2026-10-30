import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/components/data/destinations";

export function generateStaticParams() {
    return destinations
        .filter(({ slug }) => slug !== "skardu" && slug !== "murree")
        .map(({ slug }) => ({ slug }));
}

export default async function DestinationPage({ params }) {
    const { slug } = await params;
    const destination = destinations.find((item) => item.slug === slug);

    if (!destination) {
        notFound();
    }

    return (
        <main className="destination-detail-page">
            <header className="destination-detail-nav">
                <Link href="/" className="destination-detail-brand">
                    <span>W</span>
                    <strong>wayfinder</strong>
                </Link>
                <Link href="/#destinations" className="destination-detail-back">
                    ← All destinations
                </Link>
            </header>

            <section className="destination-detail-hero">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    className="destination-detail-image"
                    fill
                    sizes="100vw"
                    priority
                    unoptimized
                />
                <div className="destination-detail-overlay" />
                <div className="destination-detail-content">
                    <span>{destination.category} · {destination.province}</span>
                    <h1>{destination.name}</h1>
                    <p>{destination.description}</p>
                    <Link href="/#trip-planner" className="destination-detail-button">
                        Plan your visit <span>→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
