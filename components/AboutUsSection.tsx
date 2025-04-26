import { ArrowRight } from "lucide-react";
import { ThemeImage } from "./ThemeImage";

export function AboutUsSection() {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-8 max-w-[90%] lg:max-w-[85%] xl:max-w-[75%]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 leading-tight">
                    私たちについて
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
    );
}
