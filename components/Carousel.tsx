import Image from "next/image";
import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel(
    { images }: { images: string[] },
) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay(),
    ]);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <Image
                                src={"/slideshow/" + image}
                                alt={`Slide ${index + 1}`}
                                layout="responsive"
                                width={500}
                                height={300}
                                className="p-3"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <SelectedSnapDisplay
                    selectedSnap={selectedSnap}
                    snapCount={snapCount}
                />
            </div>
        </section>
    );
}

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type PropType = ComponentPropsWithRef<"button">;

const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
            </svg>
            {children}
        </button>
    );
};

const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
            </svg>
            {children}
        </button>
    );
};

type UseSelectedSnapDisplayType = {
    selectedSnap: number;
    snapCount: number;
};

export const useSelectedSnapDisplay = (
    emblaApi: EmblaCarouselType | undefined,
): UseSelectedSnapDisplayType => {
    const [selectedSnap, setSelectedSnap] = useState(0);
    const [snapCount, setSnapCount] = useState(0);

    const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
        setSnapCount(emblaApi.scrollSnapList().length);
        setSelectedSnap(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        updateScrollSnapState(emblaApi);
        emblaApi.on("select", updateScrollSnapState);
        emblaApi.on("reInit", updateScrollSnapState);
    }, [emblaApi, updateScrollSnapState]);

    return {
        selectedSnap,
        snapCount,
    };
};

type SnapPropType = {
    selectedSnap: number;
    snapCount: number;
};

export const SelectedSnapDisplay: React.FC<SnapPropType> = (props) => {
    const { selectedSnap, snapCount } = props;

    return (
        <div className="embla__selected-snap-display">
            {selectedSnap + 1} / {snapCount}
        </div>
    );
};
