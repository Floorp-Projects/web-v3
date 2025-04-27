import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { DownloadSection } from "../../components/DownloadSection";
import { i18n } from "../../next-i18next.config";
import { useTranslation } from "react-i18next";

export default function DownloadPage() {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>{t("downloadPage.pageTitle")}</title>
                <meta
                    name="description"
                    content="Download Floorp - a fast, customizable, and privacy-focused browser based on Firefox."
                />
            </Head>
            <DownloadSection />
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
