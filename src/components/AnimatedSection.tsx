import { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const baseClasses = "transition-all duration-700 ease-out";
  
  const animationClasses = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "fade-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    "fade-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    scale: isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

