import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

interface FeatureCardProps {
    title: string;
    description: string;
    linkUrl: string;
    linkText: string;
    imageSrc: string;
    imageAlt: string;
}

export function FeatureCard({
    title,
    description,
    linkUrl,
    linkText,
    imageSrc,
    imageAlt,
}: FeatureCardProps) {
    return (
        <div className="card p-4 md:p-8 bg-base-200 shadow-xl rounded-2xl">
            <div className="card-body">
                <div className="flex flex-col gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        {title}
                    </h2>
                    <p className="text-base">{description}</p>
                </div>

                <div className="divider opacity-20" />

                <div className="my-4">
                    <a
                        className="inline-flex items-center gap-2 text-lg underline hover:text-primary transition-colors"
                        href={linkUrl}
                    >
                        <ArrowRight />
                        {linkText}
                    </a>
                </div>

                <div className="mt-6 bg-primary-content max-h-60 rounded-xl p-4 flex justify-center">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export function FeatureCardSection() {
    const { t } = useTranslation("common");

    const features = [
        {
            title: t("featureCards.browsing.title"),
            description: t("featureCards.browsing.description"),
            linkUrl: "https://docs.floorp.app/docs/features/how-to-use-workspaces",
            linkText: t("featureCards.browsing.linkText"),
            imageSrc: "/Workspaces.svg",
            imageAlt: "Workspaces Feature",
        },
        {
            title: t("featureCards.controls.title"),
            description: t("featureCards.controls.description"),
            linkUrl: "https://docs.floorp.app/docs/features/how-to-use-gesture",
            linkText: t("featureCards.controls.linkText"),
            imageSrc: "/MouseGesture.svg",
            imageAlt: "Mouse Gesture Feature",
        },
        {
            title: t("featureCards.development.title"),
            description: t("featureCards.development.description"),
            linkUrl: "https://docs.floorp.app/docs/values/research",
            linkText: t("featureCards.development.linkText"),
            imageSrc: "/research.svg",
            imageAlt: "Research and Development",
        },
        {
            title: t("featureCards.sustainable.title"),
            description: t("featureCards.sustainable.description"),
            linkUrl: "https://docs.floorp.app/docs/values/sustainable-web",
            linkText: t("featureCards.sustainable.linkText"),
            imageSrc: "/update.svg",
            imageAlt: "Sustainable Web",
        },
    ];

    return (
        <>
            <div className="mt-16 md:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.slice(0, 2).map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>

            <div className="mt-16 md:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.slice(2, 4).map((feature, index) => (
                        <FeatureCard key={index + 2} {...feature} />
                    ))}
                </div>
            </div>
        </>
    );
}
