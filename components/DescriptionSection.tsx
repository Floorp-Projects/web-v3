import { CustomizationCard } from "./CustomizationCard";
import { FeatureCardSection } from "./FeatureCard";

export function DescriptionSection() {
    return (
        <section className="py-16 md:py-16 flex flex-col mx-auto max-w-[90%] lg:max-w-[85%] xl:max-w-[75%]">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 leading-tight">
                What can Floorp do for you?
            </h2>
            <CustomizationCard />
            <FeatureCardSection />
        </section>
    );
}
