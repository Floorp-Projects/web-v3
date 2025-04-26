import type { AppProps } from "next/app";
import "./globals.css";
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(App);
