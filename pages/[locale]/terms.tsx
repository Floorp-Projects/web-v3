import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticPaths, GetStaticProps } from "next";
import { i18n } from "../../next-i18next.config";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Terms() {
    const { t } = useTranslation("common");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setTitle(t("terms.title"));
        setContent(t("terms.content"));
    }, [t]);

    return (
        <>
            <Head>
                <title>{t("terms.pageTitle")}</title>
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                <div
                    className="prose max-w-none space-y-4"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{ __html: content }}
                />
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