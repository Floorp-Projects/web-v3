import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CustomizationCard() {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      {/* Background accent line */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-0 group-hover:h-full bg-primary rounded-full transition-all duration-500" />

      <div className="flex flex-col gap-8 p-6 md:p-10 md:flex-row-reverse items-center">
        {/* Text content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
            {t("customizationCard.title")}
          </h3>
          <p className="text-base-content/70 text-lg leading-relaxed">
            {t("customizationCard.description")}
          </p>
          <a
            className="inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-4 transition-all duration-300"
            href="https://docs.floorp.app/docs/features/design-customization"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("customizationCard.learnMore")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-base-200 to-base-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500" />

            <img
              src="/customizeble.svg"
              alt="Customization Screenshot"
              className="relative z-10 w-full h-full max-w-[280px] max-h-[280px] object-contain group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-10 h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent" />
    </div>
  );
}
