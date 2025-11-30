import { useTranslation } from "react-i18next";

export function LoadingOverlay() {
  const { ready } = useTranslation();

  if (ready) return null;

  return (
    <div className="fixed inset-0 bg-base-100 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img 
          src="/Floorp_Logo_B_Dark.svg" 
          alt="Floorp" 
          className="w-32 h-auto animate-pulse"
        />
        <span className="loading loading-dots loading-lg text-primary" />
      </div>
    </div>
  );
}

