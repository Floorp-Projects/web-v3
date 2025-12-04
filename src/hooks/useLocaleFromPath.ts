/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages, type SupportedLanguage } from "../i18n/i18n";

export function useLocaleFromPath() {
  const { locale } = useParams<{ locale?: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale && supportedLanguages.includes(locale as SupportedLanguage)) {
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    }
  }, [locale, i18n]);

  return locale;
}
