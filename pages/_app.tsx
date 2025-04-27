import type { AppProps } from "next/app";
import "./globals.css";
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
import "../i18n/i18n";
import { useRedirect } from "../i18n/redirect";

function App({ Component, pageProps }: AppProps) {
    useRedirect();
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(App);
