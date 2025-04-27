import React from "react";
import { HeroSection } from "../../components/HeroSection";
import { AboutUsSection } from "../../components/AboutUsSection";
import { DescriptionSection } from "../../components/DescriptionSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticPaths, GetStaticProps } from "next";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>{t("heroSection.pageTitle")}</title>
            </Head>
            <HeroSection />
            <DescriptionSection />
            <AboutUsSection />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const locale = params?.locale as string || "en-US";
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const locales = i18n.locales;
    const paths = locales.map((locale) => ({
        params: { locale },
    }));

    return {
        paths,
        fallback: false,
    };
};
