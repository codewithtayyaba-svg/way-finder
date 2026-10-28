"use client";

import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { SkarduHeroSecetion } from "@/components/data/skardu";
import { SkarduSection2 } from "@/components/data/skardu";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { nearbySites } from "@/components/data/skardu";
export default function SkarduPage() {
    return (
        <>
            <HeroSection data={SkarduHeroSecetion} />;
            <AboutSection data={SkarduSection2} />
            <AboutSection data={nearbySites} />
        </>
    )
}