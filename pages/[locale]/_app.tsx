import type { AppProps } from "next/app";
import "../globals.css";
import Layout from "../../components/Layout";
import { appWithTranslation } from "next-i18next";
import "../../i18n/i18n";

function LocaleApp({ Component, pageProps, router }: AppProps) {
    const locale = router.query.locale as string;

    return (
        <Layout>
            <Component {...pageProps} locale={locale} />
        </Layout>
    );
}

export default appWithTranslation(LocaleApp);
