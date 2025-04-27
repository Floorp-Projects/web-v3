import { Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                // Get the supported languages from config
                const supportedLocales = ${
                            JSON.stringify(i18nextConfig.i18n.locales)
                        };
                const defaultLocale = "${i18nextConfig.i18n.defaultLocale}";

                // Skip if URL already has locale
                const pathname = window.location.pathname;
                const hasLocale = supportedLocales.some(locale =>
                  pathname.startsWith('/' + locale + '/') || pathname === '/' + locale
                );

                if (hasLocale) return;

                // Detect browser language
                let detectedLocale = defaultLocale;
                const navLang = navigator.language;

                // Try to find exact match
                if (supportedLocales.includes(navLang)) {
                  detectedLocale = navLang;
                } else {
                  // Try to find based on language part only (e.g., 'en' from 'en-GB')
                  const langPart = navLang.split('-')[0];
                  const matchedLocale = supportedLocales.find(
                    locale => locale.split('-')[0] === langPart
                  );
                  if (matchedLocale) {
                    detectedLocale = matchedLocale;
                  }
                }

                // Redirect to detected locale
                const newPath = '/' + detectedLocale + (pathname === '/' ? '' : pathname);
                window.location.replace(newPath + window.location.search);
              })();
            `,
                    }}
                />
            </body>
        </Html>
    );
}
