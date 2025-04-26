import Image, { ImageProps } from "next/image";
import { useTheme } from "../hooks/useTheme";

interface ThemeImageProps extends Omit<ImageProps, "src"> {
    lightSrc: string;
    darkSrc: string;
}

export const ThemeImage = (
    { lightSrc, darkSrc, alt, ...props }: ThemeImageProps,
) => {
    const { theme } = useTheme();
    const src = theme === "dark" ? darkSrc : lightSrc;

    return <Image src={src} alt={alt} {...props} />;
};
