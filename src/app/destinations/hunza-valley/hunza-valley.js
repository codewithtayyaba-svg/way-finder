"use client";

import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { hunzavalleyherosection } from "@/components/data/hunza-valley";
import { hunzavalleysection2 } from "@/components/data/hunza-valley";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { HunzaValleyPage as DestinationPage } from "@/destinations/page";
import { HunzaValleyHeroSection } from "@/components/sections/nearby-section/nearby-section";

export default function HunzaValleyPage() {
    return (
        <>
            <HunzaValleyHeroSection />
            <AboutSection data={hunzavalleysection2} />
            <nearby-section data={hunzavalleyherosection} />
            <DestinationPage />
        </>
    )
}