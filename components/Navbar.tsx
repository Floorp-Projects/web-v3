/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Menu } from "lucide-react";
import { ThemeImage } from "./ThemeImage";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Navbar() {
    const { t } = useTranslation("common");

    return (
        <div className="navbar bg-neutral text-neutral-content shadow-sm px-4 py-2">
            <div className="flex flex-row justify-between items-center w-full max-w-[80rem] mx-auto">
                <Link href="/" className="normal-case text-xl">
                    <ThemeImage
                        lightSrc="/Floorp_Logo_B_Dark.svg"
                        darkSrc="/Floorp_Logo_B_Dark.svg"
                        alt="Floorp Logo"
                        width={150}
                        height={25}
                        className="h-auto"
                    />
                </Link>

                <div className="dropdown dropdown-left md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <Menu className="w-6 h-6" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
                    >
                        <li>
                            <Link href="/download">{t("navbar.download")}</Link>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    {t("navbar.blogAndReleaseNotes")}
                                </summary>
                                <ul className="rounded-t-none p-2 z-[1]">
                                    <li>
                                        <a href="https://blog.floorp.app/">
                                            {t("navbar.blog")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://blog.floorp.app/categories/notice/"
                                            target="_blank"
                                        >
                                            {t("navbar.news")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://blog.floorp.app/categories/release/">
                                            {t("navbar.releaseNotes")}
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>{t("navbar.resources")}</summary>
                                <ul className="p-2">
                                    <li>
                                        <a href="https://docs.floorp.app">
                                            {t("footer.docs")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Floorp-Projects/Floorp">
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="font-bold text-lg">
                                    {t("navbar.blogAndReleaseNotes")}
                                </summary>
                                <ul className="bg-neutral rounded-t-none p-2 z-[1]">
                                    <li>
                                        <a href="https://blog.floorp.app/">
                                            {t("navbar.blog")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://blog.floorp.app/categories/notice/"
                                            target="_blank"
                                        >
                                            {t("navbar.news")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://blog.floorp.app/categories/release/">
                                            {t("navbar.releaseNotes")}
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="font-bold text-lg">
                                    {t("navbar.resources")}
                                </summary>
                                <ul className="bg-neutral rounded-t-none p-2 z-[1]">
                                    <li>
                                        <a
                                            href="https://github.com/Floorp-Projects/Floorp"
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://docs.floorp.app">
                                            {t("footer.docs")}
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden md:flex items-center gap-4">
                    <Link
                        className="btn btn-primary font-bold text-lg px-6 py-3"
                        href="/download"
                    >
                        {t("navbar.download")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
