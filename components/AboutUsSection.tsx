import { ArrowRight } from "lucide-react";
import { ThemeImage } from "./ThemeImage";
import { useTranslation } from "next-i18next";

export function AboutUsSection() {
    const { t } = useTranslation("common");

    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-8 max-w-[90%] lg:max-w-[85%] xl:max-w-[75%]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 leading-tight">
                    {t("aboutUs.title")}
                </h2>

                <div className="bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex flex-col items-center md:items-start md:w-1/2">
                            <ThemeImage
                                lightSrc="/Floorp_Logo_B_Light.svg"
                                darkSrc="/Floorp_Logo_B_Dark.svg"
                                alt="Floorp Logo"
                                width={300}
                                height={300}
                                className="mb-6"
                            />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {t("aboutUs.projectName")}
                            </h3>
                            <p className="text-base mb-6">
                                {t("aboutUs.projectDescription")}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <a
                                    href="https://github.com/floorp-Projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    {t("aboutUs.github")}
                                </a>
                                <a
                                    href="https://docs.floorp.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    {t("aboutUs.documentation")}
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="prose max-w-none">
                                <h4 className="text-xl font-semibold mb-3">
                                    {t("aboutUs.philosophy.title")}
                                </h4>
                                <p>
                                    {t("aboutUs.philosophy.description")}
                                </p>

                                <div className="mt-4">
                                    <a
                                        href="https://github.com/sponsors/surapunoyousei"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <ArrowRight size={16} />
                                        {t("aboutUs.philosophy.donateButton")}
                                    </a>
                                </div>

                                <h4 className="text-xl font-semibold mb-3 mt-6">
                                    {t("aboutUs.community.title")}
                                </h4>
                                <p>
                                    {t("aboutUs.community.description")}
                                </p>

                                <div className="mt-4">
                                    <a
                                        href="https://floorp.app/discord"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <ArrowRight size={16} />
                                        {t("aboutUs.community.joinButton")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
