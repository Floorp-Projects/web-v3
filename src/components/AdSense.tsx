import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
}

export function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (adRef.current && !isAdLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}

// 横長バナー広告用
export function AdBanner({ className = "" }: { className?: string }) {
  return (
    <AdSense
      adSlot="YOUR_BANNER_AD_SLOT"
      adFormat="horizontal"
      className={`my-8 ${className}`}
    />
  );
}

// 記事内広告用
export function AdInArticle({ className = "" }: { className?: string }) {
  return (
    <AdSense
      adSlot="YOUR_IN_ARTICLE_AD_SLOT"
      adFormat="auto"
      className={`my-6 ${className}`}
    />
  );
}

// サイドバー広告用
export function AdSidebar({ className = "" }: { className?: string }) {
  return (
    <AdSense
      adSlot="YOUR_SIDEBAR_AD_SLOT"
      adFormat="rectangle"
      className={className}
    />
  );
}

