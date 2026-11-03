"use client";
import "./placesection.css";

import Image from "next/image";
import Link from "next/link";

export const PlacesSection = ({ title, subtitle, description, attractions }) => {
return (
    <section
        className="murree-section murree-attractions"
        id="attractions"
    >

        <div className="murree-section-heading">

            <div>
                <span className="murree-section-label">
                    {subtitle}
                </span>

                <h2>{title}</h2>

                <p>{description}</p>
            </div>

            <span className="murree-heading-decoration">
                ✳
            </span>

        </div>


        <div className="murree-attraction-grid">

            {attractions.map((place, index) => (

                <article
                    className="murree-attraction-card"
                    key={place.name}
                >

                    <div className="murree-attraction-image">

                        <Image
                            src={place.image}
                            alt={place.name}
                            width={900}
                            height={600}
                            loading="lazy"
                            unoptimized
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

                        <Link
                            href="/#trip-planner"
                            className="murree-place-link"
                        >
                            Add to your plan <span>↗</span>
                        </Link>

                    </div>

                </article>

            ))}

        </div>

    </section>
);
};
