import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutUsSection } from "../components/AboutUsSection";
import { DescriptionSection } from "../components/DescriptionSection";

export default function IndexPage() {
    return (
        <>
            <HeroSection />
            <DescriptionSection />
            <AboutUsSection />
        </>
    );
}
