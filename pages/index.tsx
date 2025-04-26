import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutUsSection } from "../components/AboutUsSection";
import { DescriptionSection } from "../components/DescriptionSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

export default function Home() {
    return (
        <>
            <HeroSection />
            <DescriptionSection />
            <AboutUsSection />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en-US", ["common"])),
        },
    };
};
