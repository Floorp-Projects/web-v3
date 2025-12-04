import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocaleFromPath } from "../hooks/useLocaleFromPath";

export default function TermsPage() {
  const { t } = useTranslation();
  useLocaleFromPath();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = t("terms.pageTitle");
    setTitle(t("terms.title"));
    setContent(t("terms.content"));
  }, [t]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div
        className="prose max-w-none space-y-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
