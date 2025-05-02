import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticPaths, GetStaticProps } from "next";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Discord() {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>{t("discord.pageTitle")}</title>
            </Head>
            <div className="container mx-auto px-4 md:px-8 max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] py-16 md:py-24">
                <div className="flex flex-col items-center text-center">
                    <svg
                        className="w-20 h-20 text-primary mb-8"
                        viewBox="0 0 127.14 96.36"
                        fill="currentColor"
                    >
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                    </svg>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("discord.heading")}
                    </h1>
                    <p className="text-xl mb-12 max-w-3xl">
                        {t("discord.description")}
                    </p>
                    <div className="mb-16">
                        <a
                            href="https://discord.gg/floorp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            <svg
                                className="w-6 h-6 mr-2"
                                viewBox="0 0 127.14 96.36"
                                fill="currentColor"
                            >
                                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                            </svg>
                            {t("discord.joinButton")}
                        </a>
                    </div>
                    <div className="card bg-base-200 shadow-xl max-w-3xl mx-auto w-full">
                        <div className="card-body py-8">
                            <h2 className="card-title text-2xl mb-6">
                                {t("discord.whyJoin")}
                            </h2>
                            <ul className="space-y-6 text-left">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>
                                        {t("discord.reason1")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>
                                        {t("discord.reason2")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>
                                        {t("discord.reason3")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>
                                        {t("discord.reason4")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
