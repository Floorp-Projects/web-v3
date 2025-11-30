import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero h-[65vh] px-4 mt-4 md:mt-12">
        <div className="hero-content text-center flex-col gap-10 md:gap-12">
          <AnimatedSection animation="fade-up" delay={0}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mx-auto">
              {t("heroSection.title")}
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="max-w-2xl text-base md:text-xl lg:text-2xl">
              {t("heroSection.description")}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <Link
              to="/download"
              className="btn btn-primary font-bold text-lg px-6 py-3 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              {t("heroSection.downloadButton")}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section>
        <AnimatedSection animation="scale" delay={300}>
          <div className="flex justify-center mx-4 md:mx-10">
            <div className="w-full max-w-[90rem] flex flex-col items-center">
              {/* ディスプレイ部 */}
              <div className="relative border-8 border-gray-700 rounded-[0.8rem] shadow-2xl overflow-hidden w-[85%] bg-black hover:shadow-3xl transition-shadow duration-500">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="/screenshot.avif"
                    alt="Floorp Screenshot"
                    width={1300}
                    height={900}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-48 h-2 rounded-b-lg bg-gray-600 mt-[-4px] z-10" />
              <div className="w-full h-8 bg-gray-700 rounded-t-[1rem] mt-[-5px]" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div className="h-10 md:h-20" />
    </>
  );
}
