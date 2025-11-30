/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Ampersand } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral p-10 flex flex-col items-center gap-10">
      <div className="sm:footer-horizontal footer flex flex-col justify-center md:gap-50 sm:gap-20 gap-10 sm:flex-row text-neutral-content text-center">
        <nav>
          <h6 className="footer-title">{t("footer.resources")}</h6>
          <a 
            className="link link-hover hover:text-primary transition-colors" 
            href="https://docs.floorp.app"
          >
            {t("footer.docs")}
          </a>
          <a 
            className="link link-hover hover:text-primary transition-colors" 
            href="https://blog.floorp.app"
          >
            {t("footer.blog")}
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">{t("footer.sns")}</h6>
          <a 
            className="link link-hover hover:text-primary transition-colors" 
            href="https://twitter.com/Floorp_Browser"
          >
            Twitter (X)
          </a>
          <a
            className="link link-hover hover:text-primary transition-colors"
            href="https://github.com/Floorp-Projects/Floorp"
          >
            GitHub
          </a>
          <a 
            className="link link-hover hover:text-primary transition-colors" 
            href="https://reddit.com/r/Floorp"
          >
            Reddit
          </a>
          <a 
            className="link link-hover hover:text-primary transition-colors" 
            href="https://floorp.app/discord"
          >
            Discord
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">{t("footer.legal")}</h6>
          <Link 
            className="link link-hover hover:text-primary transition-colors" 
            to="/terms"
          >
            {t("footer.terms")}
          </Link>
          <Link 
            className="link link-hover hover:text-primary transition-colors" 
            to="/privacy"
          >
            {t("footer.privacy")}
          </Link>
          <a
            className="link link-hover hover:text-primary transition-colors"
            href="https://mozilla.org/en-US/MPL/2.0/"
          >
            {t("footer.license")}
          </a>
        </nav>
      </div>

      <div className="items-center flex md:flex-row gap-5 justify-center flex-col">
        <img
          src="/Floorp_Logo_B_Dark.svg"
          alt="Floorp Logo"
          width={200}
          height={200}
          className="hover:opacity-80 transition-opacity"
        />

        <Ampersand className="text-neutral-content/50" />

        <a 
          className="link link-hover hover:opacity-80 transition-opacity" 
          href="https://ablaze.one"
        >
          <img
            src="/Ablaze_Logo_Dark.svg"
            alt="Ablaze Logo"
            width={200}
            height={200}
          />
        </a>
      </div>

      <div className="text-center text-neutral-content/80">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
