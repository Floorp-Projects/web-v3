import { useTheme } from "../hooks/useTheme";

interface ThemeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lightSrc: string;
  darkSrc: string;
}

export const ThemeImage = ({
  lightSrc,
  darkSrc,
  alt,
  ...props
}: ThemeImageProps) => {
  const { theme } = useTheme();
  const src = theme === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} {...props} />;
};

