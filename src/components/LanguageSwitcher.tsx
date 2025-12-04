/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { type SupportedLanguage, supportedLanguages } from "../i18n/i18n";

const languageNames: Record<SupportedLanguage, string> = {
    "en-US": "English",
    "ja-JP": "日本語",
};

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang: SupportedLanguage) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="dropdown dropdown-end">
            <label
                tabIndex={0}
                className="btn btn-ghost btn-sm gap-1 hover:bg-base-content/10"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                    {languageNames[i18n.language as SupportedLanguage] ||
                        languageNames["en-US"]}
                </span>
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-neutral rounded-box w-40 z-100"
            >
                {supportedLanguages.map((lang) => (
                    <li key={lang}>
                        <button
                            onClick={() => handleLanguageChange(lang)}
                            className={`${
                                i18n.language === lang
                                    ? "text-primary font-bold"
                                    : "hover:text-primary"
                            } transition-colors`}
                        >
                            {languageNames[lang]}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
