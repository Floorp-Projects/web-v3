import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CustomizationCard() {
    return (
        <div className="card p-4 md:p-8 bg-base-200 shadow-xl rounded-2xl">
            <div className="card-body">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold flex-1 leading-tight">
                        Flexible UI Customization
                    </h2>
                    <p className="text-base md:text-lg flex-1 md:text-left">
                        Floorp の一番の特徴は、カスタマイズ性です。Floorp は
                        Firefox 系で初めて、UI
                        のカスタマイズを可能にしたブラウザーであり、誰もが簡単に自分の好みに合わせてブラウジング体験を調整でき、誰でも簡単にウェブにアクセスできるよう設計されています。
                    </p>
                </div>

                <div className="divider opacity-20" />

                <div className="my-4 md:my-6">
                    <a
                        className="inline-flex items-center gap-2 md:gap-3 text-lg md:text-xl underline hover:text-primary transition-colors"
                        href="https://docs.floorp.app/docs/features/design-customization"
                    >
                        <ArrowRight />
                        Learn More About Customization
                    </a>
                </div>

                <div className="mt-6 md:mt-8 bg-primary-content rounded-2xl aspect-auto max-h-90 py-8 md:py-12 flex justify-center">
                    <Image
                        src="/customizeble.svg"
                        alt="Customization Screenshot"
                        width={1000}
                        height={600}
                        className="object-contain max-w-full md:max-w-4xl"
                    />
                </div>
            </div>
        </div>
    );
}
