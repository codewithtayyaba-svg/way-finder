"use client";
import "./nearby-section.css";

export const NearbySection = (props) => {
    // You can destructure props here in the future if needed
    return (
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
    );
}