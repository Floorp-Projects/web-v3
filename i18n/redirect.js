import { useEffect } from "react";
import { useRouter } from "next/router";
import i18nextConfig from "../next-i18next.config";

export const useRedirect = (to) => {
  const router = useRouter();
  to = to || router.asPath;

  useEffect(() => {
    // Skip redirection if already on a locale path
    if (
      router.pathname.startsWith("/[locale]") ||
      router.asPath.match(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}(\/|$)/)
    ) {
      return;
    }

    // Get browser language
    const browserLang = navigator.language;
    let detectedLocale = i18nextConfig.i18n.defaultLocale;

    // Check if browser language exactly matches one of our locales
    if (i18nextConfig.i18n.locales.includes(browserLang)) {
      detectedLocale = browserLang;
    } else {
      // Try to match based on language part only (e.g., 'en' from 'en-GB')
      const langPart = browserLang.split("-")[0];
      const matchedLocale = i18nextConfig.i18n.locales.find(
        (locale) => locale.split("-")[0] === langPart
      );
      if (matchedLocale) {
        detectedLocale = matchedLocale;
      }
    }

    router.replace(`/${detectedLocale}${to === "/" ? "" : to}`);
  }, [router, to]);

  return null;
};
