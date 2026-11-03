"use client";
import "@/destinations/fairy-meadows/fairy-meadows.css";
import { FairyMeadowsHeroSection , FairyMeadowsSection2 ,FairyMeadowsAttractions } from "@/components/data/fairy-meadows";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";
import { nearbySites } from "@/components/data/hunza-valley";
import { PlacesSection } from "@/components/sections/placesection/placesection";
export default function FairyMeadowsPage() {
    return (
        <>
            <HeroSection data ={FairyMeadowsHeroSection } />
            <AboutSection data={FairyMeadowsSection2} />
            <PlacesSection data={FairyMeadowsAttractions} />
            <NearbySection data={nearbySites} />
        </>
    )
}