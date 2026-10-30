"use client";

import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { SkarduHeroSecetion } from "@/components/data/skardu";
import { SkarduSection2 } from "@/components/data/skardu";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { NearbySection } from "@/components/sections/nearby-section/nearby-section";
export default function SkarduPage() {
    return (
        <main className="murree-page">
            <HeroSection data={SkarduHeroSecetion} />;
            <AboutSection data={SkarduSection2} />
            <NearbySection/>
        </main>
    )
}