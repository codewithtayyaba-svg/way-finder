"use client";

import "@/destinations/murree/murree.css";
import { SkarduHeroSecetion, SkarduSection2 } from "@/components/data/skardu";
import { HeroSection } from "@/components/sections/hero-section/hero-section";

import { AboutSection } from "@/components/sections/about-section/about-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";
import { PlacesSection } from "@/components/sections/placesection/placesection";
import { PlacesSectionData } from "@/components/data/skardu";
import { nearbySites } from "@/components/data/skardu";
export default function SkarduPage() {
    return (
        <main className="murree-page">
            <HeroSection data={SkarduHeroSecetion} />;
            <AboutSection data={SkarduSection2} />
            <NearbySection data={nearbySites} />
            <PlacesSection
    title={<>Popular <span>attractions.</span></>}
    subtitle="PLACES WORTH EXPLORING"
    description="Explore the beautiful attractions of Skardu."
    attractions={PlacesSectionData}
/>
        </main>
    )
}