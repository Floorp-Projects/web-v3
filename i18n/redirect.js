import { useEffect } from "react";
import { useRouter } from "next/router";
import lngDetector from "./lngDetector";

export const useRedirect = (to) => {
  const router = useRouter();
  to = to || router.asPath;

  useEffect(() => {
    if (
      router.pathname.startsWith("/[locale]") ||
      router.asPath.match(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}(\/|$)/)
    ) {
      return;
    }

    const detectedLng = lngDetector.detect();

    if (to.startsWith("/" + detectedLng) && router.route === "/404") {
      router.replace("/" + detectedLng + router.route);
      return;
    }

    lngDetector.cache(detectedLng);
    router.replace("/" + detectedLng + to);
  }, [router.asPath, to, router]);

  return null;
};
