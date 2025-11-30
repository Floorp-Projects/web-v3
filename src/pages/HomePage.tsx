import { HeroSection } from "../components/HeroSection";
import { AboutUsSection } from "../components/AboutUsSection";
import { DescriptionSection } from "../components/DescriptionSection";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("heroSection.pageTitle");
  }, [t]);

  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <AboutUsSection />
    </>
  );
}

