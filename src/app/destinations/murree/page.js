"use client";

import "@/destinations/murree/murree.css";
import { MurreeHeroSection, MurreeSection2 } from "@/components/data/murree";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";

export default function MurreePage() {
    return (
        <main className="murree-page">
            <HeroSection data={MurreeHeroSection} />
            <AboutSection data={MurreeSection2} />
            <NearbySection />
        </main>
    );
}