import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function IndexPage() {
    return (
        <>
            <section className="hero h-[65vh] px-4 mt-4 md:mt-12">
                <div className="hero-content text-center flex-col gap-10 md:gap-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mx-auto">
                        Unlimited Customization For Everyone
                    </h1>
                    <p className="max-w-2xl text-base md:text-xl lg:text-2xl">
                        Enable more advanced customization than your default
                        browser. Try Floorp, based on the smart Firefox, which
                        enhances functionality and flexibility while maintaining
                        security and privacy.
                    </p>
                    <a
                        href="/download"
                        className="btn btn-primary font-bold text-lg px-6 py-3"
                    >
                        Download
                    </a>
                </div>
            </section>

            <section>
                <div className="flex justify-center mx-4 md:mx-10">
                    <div className="w-full max-w-[90rem] flex flex-col items-center">
                        {/* ディスプレイ部 */}
                        <div className="relative border-8 border-gray-700 rounded-[0.8rem] shadow-2xl overflow-hidden w-[85%] bg-black">
                            <div className="h-full w-full flex items-center justify-center">
                                <Image
                                    src="/screenshot.png"
                                    alt="Floorp Screenshot"
                                    width={1300}
                                    height={900}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="w-48 h-2 rounded-b-lg bg-gray-600 mt-[-4px] z-10" />
                        <div className="w-full h-8 bg-gray-700 rounded-t-[1rem] mt-[-5px]" />
                    </div>
                </div>
            </section>

            <div className="h-10 md:h-20" />

            <section className="py-16 md:py-16 flex flex-col mx-auto max-w-[90%] lg:max-w-[85%] xl:max-w-[75%]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 leading-tight">
                    What can Floorp do for you?
                </h2>

                <div className="card p-4 md:p-8 bg-base-100  shadow-xl rounded-2xl">
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6">
                            <h2 className="text-2xl md:text-4xl font-bold flex-1 leading-tight">
                                Flexible UI Customization
                            </h2>
                            <p className="text-base md:text-lg flex-1 md:text-left">
                                Floorp
                                の一番の特徴は、カスタマイズ性です。Floorp は
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

                        <div className="mt-6 md:mt-8 md:bg-base-200 rounded-2xl py-8 md:py-12 flex justify-center">
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

                <div className="mt-16 md:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="card p-4 md:p-8 bg-base-100  shadow-xl rounded-2xl">
                            <div className="card-body">
                                <div className="flex flex-col gap-4 mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                        多様なウェブページの閲覧方法を提供
                                    </h2>
                                    <p className="text-base ">
                                        Floorp
                                        はタブグループに加え、ログイン情報を分離できるコンテナー機能を統合したワークスペース機能を搭載。さらに、ウェブパネルを利用して、SNS
                                        やチャットに簡単にアクセスできます。
                                    </p>
                                </div>

                                <div className="divider opacity-20" />

                                <div className="my-4">
                                    <a
                                        className="inline-flex items-center gap-2 text-lg underline hover:text-primary transition-colors"
                                        href="https://docs.floorp.app/docs/features/workspaces"
                                    >
                                        <ArrowRight />
                                        Floorp の独自機能について詳しく
                                    </a>
                                </div>

                                <div className="mt-6 bg-base-200 rounded-xl p-4 flex justify-center">
                                    <Image
                                        src="/Workspaces.svg"
                                        alt="Workspaces Feature"
                                        width={400}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="card p-4 md:p-8 bg-base-100  shadow-xl rounded-2xl">
                            <div className="card-body">
                                <div className="flex flex-col gap-4 mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                        様々な操作方法をサポート
                                    </h2>
                                    <p className="text-base ">
                                        マウスジェスチャーやカスタマイズ可能なキーボードショートカットを使用して、
                                        より効率的にブラウジングできます。もちろん、マウス操作でも簡単に操作できるように設計されています。
                                    </p>
                                </div>

                                <div className="divider opacity-20" />

                                <div className="my-4">
                                    <a
                                        className="inline-flex items-center gap-2 text-lg underline hover:text-primary transition-colors"
                                        href="https://docs.floorp.app/docs/features/panel-sidebar"
                                    >
                                        <ArrowRight />
                                        Floorp のジェスチャー機能について詳しく
                                    </a>
                                </div>

                                <div className="mt-6 bg-base-200 rounded-xl p-4 flex justify-center">
                                    <Image
                                        src="/MouseGesture.svg"
                                        alt="Panel Sidebar Feature"
                                        width={400}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="card p-4 md:p-8 bg-base-100  shadow-xl rounded-2xl">
                            <div className="card-body">
                                <div className="flex flex-col gap-4 mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                        開発・研究志向
                                    </h2>
                                    <p className="text-base ">
                                        Floorpは実験的なブラウザー開発を積極的に行っています。
                                        新しい技術やアイデアを日々取り入れ、コミュニティからのフィードバックをもとに精力的に改善を続けるブラウザーです。
                                    </p>
                                </div>

                                <div className="divider opacity-20" />

                                <div className="my-4">
                                    <a
                                        className="inline-flex items-center gap-2 text-lg underline hover:text-primary transition-colors"
                                        href="https://docs.floorp.app/docs/values/research"
                                    >
                                        <ArrowRight />
                                        Floorp の開発体制について詳しく
                                    </a>
                                </div>

                                <div className="mt-6 bg-base-200 rounded-xl p-4 flex justify-center">
                                    <Image
                                        src="/Research.svg"
                                        alt="Research and Development"
                                        width={400}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="card p-4 md:p-8 bg-base-100 shadow-xl rounded-2xl">
                            <div className="card-body">
                                <div className="flex flex-col gap-4 mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                        持続可能なウェブを目指して
                                    </h2>
                                    <p className="text-base ">
                                        環境に配慮したブラウザ開発。ユーザーの権利を尊重し、
                                        オープンで持続可能なウェブエコシステムの構築に貢献します。
                                        次世代に繋ぐインターネットの未来を共に創りましょう。
                                    </p>
                                </div>

                                <div className="divider opacity-20" />

                                <div className="my-4">
                                    <a
                                        className="inline-flex items-center gap-2 text-lg underline hover:text-primary transition-colors"
                                        href="https://docs.floorp.app/docs/values/sustainable-web"
                                    >
                                        <ArrowRight />
                                        Floorp が行っていること
                                    </a>
                                </div>

                                <div className="mt-6 bg-base-200 rounded-xl p-4 flex justify-center">
                                    <Image
                                        src="/update.svg"
                                        alt="Sustainable Web"
                                        width={400}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-base-200">
                <div className="container mx-auto px-4 md:px-8 max-w-[90%] lg:max-w-[85%] xl:max-w-[75%]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
                        私たちについて
                    </h2>

                    <div className="bg-base-100 rounded-2xl p-6 md:p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex flex-col items-center md:items-start md:w-1/2">
                                <Image
                                    src="/Floorp_Logo_B_Dark.svg"
                                    alt="Floorp Logo"
                                    width={300}
                                    height={300}
                                    className="mb-6"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Floorp プロジェクト
                                </h3>
                                <p className="text-base mb-6">
                                    Floorp は2021年に日本で始まった、Firefox
                                    派生のオープンソースブラウザプロジェクトです。「ユーザー中心」の理念のもと、より高いカスタマイズ性とプライバシー保護を実現し、ウェブブラウジングの新たな可能性を追求しています。
                                </p>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <a
                                        href="https://github.com/floorp-Projects"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://docs.floorp.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline"
                                    >
                                        ドキュメント
                                    </a>
                                </div>
                            </div>

                            <div className="md:w-1/2">
                                <div className="prose max-w-none">
                                    <h4 className="text-xl font-semibold mb-3">
                                        私たちの理念
                                    </h4>
                                    <p>
                                        私たちは、ウェブが誰でも自由にアクセスできる場所であるべきだと信じています。
                                        Floorpは、ユーザーのプライバシーを尊重し、オープンソースの精神を大切にしながら、より良いウェブ体験を提供することを目指しています。
                                    </p>

                                    <h4 className="text-xl font-semibold mb-3 mt-6">
                                        コミュニティに参加する
                                    </h4>
                                    <p>
                                        開発に貢献、翻訳、フィードバックの提供など、さまざまな形でFloorpプロジェクトに参加できます。私たちはオープンソースの精神を大切にし、コミュニティからの貢献を歓迎しています。
                                    </p>

                                    <div className="mt-4">
                                        <a
                                            href="https://discord.gg/floorp"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:underline"
                                        >
                                            <ArrowRight size={16} />
                                            Discordコミュニティに参加
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
