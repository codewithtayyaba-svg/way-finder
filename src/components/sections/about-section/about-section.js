import Image from "next/image";
import Link from "next/link";
import "./about-section.css";

export const AboutSection = (data) => {
    return (
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
                    {data.data.description}
                </p>

                <Link href="#trip-info" className="murree-text-link">
                    Explore the travel guide ↗
                </Link>
            </div>

            <div className="murree-about-visual">
                <Image
                    src={data.data.imageUrl}
                    alt="A scenic landscape surrounded by mountains"
                    width={2560}
                    height={1440}
                    sizes="(max-width: 768px) 100vw, 50vw"
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
    )
}