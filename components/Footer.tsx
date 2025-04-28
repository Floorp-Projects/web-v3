/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Ampersand } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
    const { t } = useTranslation("common");

    return (
        <footer className="bg-neutral p-10 flex flex-col items-center gap-10">
            <div className="sm:footer-horizontal footer flex flex-col justify-center md:gap-50 sm:gap-20 gap-10 sm:flex-row text-neutral-content text-center">
                <nav>
                    <h6 className="footer-title">{t("footer.resources")}</h6>
                    <a
                        className="link link-hover"
                        href="https://docs.floorp.app"
                    >
                        {t("footer.docs")}
                    </a>
                    <a
                        className="link link-hover"
                        href="https://blog.floorp.app"
                    >
                        {t("footer.blog")}
                    </a>
                </nav>
                <nav>
                    <h6 className="footer-title">{t("footer.sns")}</h6>
                    <a
                        className="link link-hover"
                        href="https://twitter.com/Floorp_Browser"
                    >
                        Twitter (X)
                    </a>
                    <a
                        className="link link-hover"
                        href="https://github.com/Floorp-Projects/Floorp"
                    >
                        GitHub
                    </a>
                    <a
                        className="link link-hover"
                        href="https://reddit.com/r/Floorp"
                    >
                        Reddit
                    </a>
                    <a
                        className="link link-hover"
                        href="https://discord.gg/NSbeFYt45Y"
                    >
                        Discord
                    </a>
                </nav>
                <nav>
                    <h6 className="footer-title">{t("footer.legal")}</h6>
                    <Link
                        className="link link-hover"
                        href="/terms"
                    >
                        {t("footer.terms")}
                    </Link>
                    <Link
                        className="link link-hover"
                        href="/privacy"
                    >
                        {t("footer.privacy")}
                    </Link>
                    <Link
                        className="link link-hover"
                        href="https://mozilla.org/en-US/MPL/2.0/"
                    >
                        {t("footer.license")}
                    </Link>
                </nav>
            </div>

            <div className="items-center flex md:flex-row gap-5 justify-center flex-col">
                <Image
                    src="/Floorp_Logo_B_Dark.svg"
                    alt="Floorp Logo"
                    width={200}
                    height={200}
                    className="rounded-full"
                />

                <Ampersand />

                <a
                    className="link link-hover"
                    href="https://ablaze.one"
                >
                    <Image
                        src="/Ablaze_Logo_Dark.svg"
                        alt="Ablaze Logo"
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                </a>
            </div>

            <div className="text-center text-neutral-content">
                <p>
                    {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
}
