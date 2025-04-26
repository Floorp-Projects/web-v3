import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    const features = [
        {
            title: "多様なウェブページの閲覧方法を提供",
            description:
                "Floorp はタブグループに加え、ログイン情報を分離できるコンテナー機能を統合したワークスペース機能を搭載。さらに、ウェブパネルを利用して、SNS やチャットに簡単にアクセスできます。",
            linkUrl: "https://docs.floorp.app/docs/features/workspaces",
            linkText: "Floorp の独自機能について詳しく",
            imageSrc: "/Workspaces.svg",
            imageAlt: "Workspaces Feature",
        },
        {
            title: "様々な操作方法をサポート",
            description:
                "マウスジェスチャーやカスタマイズ可能なキーボードショートカットを使用して、より効率的にブラウジングできます。もちろん、マウス操作でも簡単に操作できるように設計されています。",
            linkUrl: "https://docs.floorp.app/docs/features/panel-sidebar",
            linkText: "Floorp のジェスチャー機能について詳しく",
            imageSrc: "/MouseGesture.svg",
            imageAlt: "Mouse Gesture Feature",
        },
        {
            title: "開発・研究志向",
            description:
                "Floorpは実験的なブラウザー開発を積極的に行っています。新しい技術やアイデアを日々取り入れ、コミュニティからのフィードバックをもとに精力的に改善を続けるブラウザーです。",
            linkUrl: "https://docs.floorp.app/docs/values/research",
            linkText: "Floorp の開発体制について詳しく",
            imageSrc: "/research.svg",
            imageAlt: "Research and Development",
        },
        {
            title: "持続可能なウェブを目指して",
            description:
                "ユーザーの権利を尊重し、オープンで持続可能なウェブエコシステムの構築に貢献します。次世代に繋ぐインターネットの未来を共に創りましょう。",
            linkUrl: "https://docs.floorp.app/docs/values/sustainable-web",
            linkText: "Floorp が行っていること",
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
