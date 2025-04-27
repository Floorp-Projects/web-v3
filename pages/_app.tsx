import type { AppProps } from "next/app";
import "./globals.css";
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
import "../i18n/i18n";
import { useRouter } from "next/router";
import { useRedirect } from "../i18n/redirect";

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    // Use redirection hook to handle root path redirection
    useRedirect();

    // Extract locale from path or query for passing to components
    const locale = router.query.locale as string ||
            router.asPath.split("/")[1]?.match(/^[a-z]{2}-[A-Z]{2}$/)
        ? router.asPath.split("/")[1]
        : undefined;

    return (
        <Layout>
            <Component {...pageProps} locale={locale} />
        </Layout>
    );
}

export default appWithTranslation(App);
