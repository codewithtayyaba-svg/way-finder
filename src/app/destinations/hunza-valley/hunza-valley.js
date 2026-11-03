"use client";
import "@/destinations/murree/murree.css";
import { hunzavalleyherosection, hunzavalleysection2 } from "@/components/data/hunza-valley";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";
import { nearbySites } from "@/components/data/hunza-valley";
import { PlacesSection } from "@/components/sections/placesection/placesection";
import { PlacesSectionData } from "@/components/data/hunza-valley";
export default function HunzaValleyPage() {
    return (
        <>
            <HeroSection data ={hunzavalleyherosection} />
            <AboutSection data={hunzavalleysection2} />
            <NearbySection data={nearbySites} />
            <PlacesSection
                title={<>Popular <span>attractions.</span></>}
                subtitle="PLACES WORTH EXPLORING"
                description="Add these beautiful places to your Hunza Valley travel itinerary."
                attractions={PlacesSectionData}
            />
        </>
    )
}