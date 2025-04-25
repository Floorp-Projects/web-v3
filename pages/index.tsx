import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Carousel from "../components/Carousel";
interface IndexPageProps {
    images: string[];
}

export default function IndexPage({ images }: IndexPageProps) {
    return (
        <section className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="w-full max-w-7/12">
                    <Carousel images={images} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">
                        Unlimited Customization,<br />for Everyone.
                    </h1>
                    <p className="py-6">
                        Floorp
                        は、あなたの操作スタイルに合わせて進化する、日本発のオープンソースブラウザーです。
                    </p>
                    <a href="/download" className="btn btn-primary">
                        今すぐダウンロード
                    </a>
                </div>
            </div>
        </section>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const dir = path.join(process.cwd(), "public/slideshow");
    let files: string[] = [];
    try {
        files = fs.readdirSync(dir).filter((file) =>
            /\.(png|jpe?g|webp)$/i.test(file)
        );
    } catch (error) {
        console.error("Error reading image directory:", error);
    }

    return {
        props: {
            images: files,
        },
    };
};
