"use client";

import "@/destinations/murree/murree.css";
import { MurreeHeroSection, MurreeSection2 } from "@/components/data/murree";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";
import { nearbySites } from "@/components/data/murree";
import { PlacesSection } from "@/components/sections/placesection/placesection";
import { PlacesSectionData } from "@/components/data/murree";
export default function MurreePage() {
    return (
        <main className="murree-page">
            <HeroSection data={MurreeHeroSection} />
            <AboutSection data={MurreeSection2} />
            <PlacesSection
    title={<>Popular <span>attractions.</span></>}
    subtitle="PLACES WORTH EXPLORING"
    description="Add these beautiful places to your Murree travel itinerary."
    attractions={PlacesSectionData}
/>
<NearbySection data={nearbySites} />
        </main>
    );
}