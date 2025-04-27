import { useEffect } from "react";
import { useRouter } from "next/router";
import i18nextConfig from "../next-i18next.config";

export default function RootIndex() {
    const router = useRouter();

    useEffect(() => {
        const browserLang = navigator.language;
        let detectedLocale = i18nextConfig.i18n.defaultLocale;

        if (i18nextConfig.i18n.locales.includes(browserLang)) {
            detectedLocale = browserLang;
        } else {
            const langPart = browserLang.split("-")[0];
            const matchedLocale = i18nextConfig.i18n.locales.find(
                (locale) => locale.split("-")[0] === langPart,
            );
            if (matchedLocale) {
                detectedLocale = matchedLocale;
            }
        }

        router.replace(`/${detectedLocale}`);
    }, [router]);

    return null;
}
