/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Menu } from "lucide-react";
import { ThemeImage } from "./ThemeImage";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${path}`;
  };

  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm px-4 py-2 sticky top-0 z-50 backdrop-blur-sm bg-neutral/95">
      <div className="flex flex-row justify-between items-center w-full max-w-[80rem] mx-auto">
        <Link to="/" className="normal-case text-xl hover:opacity-80 transition-opacity">
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
          <label tabIndex={0} className="btn btn-ghost hover:bg-base-content/10">
            <Menu className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-neutral rounded-box w-52"
          >
            <li>
              <Link 
                to="/download" 
                className={isActive("/download") ? "text-primary font-bold" : ""}
              >
                {t("navbar.download")}
              </Link>
            </li>
            <li>
              <details>
                <summary>{t("navbar.blogAndReleaseNotes")}</summary>
                <ul className="rounded-t-none p-2 z-[1]">
                  <li>
                    <a href="https://blog.floorp.app/">{t("navbar.blog")}</a>
                  </li>
                  <li>
                    <a
                      href="https://blog.floorp.app/categories/notice/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    <a href="https://docs.floorp.app">{t("footer.docs")}</a>
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
                <summary className="font-bold text-lg hover:text-primary transition-colors">
                  {t("navbar.blogAndReleaseNotes")}
                </summary>
                <ul className="bg-neutral rounded-t-none p-2 z-[1] shadow-lg">
                  <li>
                    <a href="https://blog.floorp.app/" className="hover:text-primary transition-colors">{t("navbar.blog")}</a>
                  </li>
                  <li>
                    <a
                      href="https://blog.floorp.app/categories/notice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {t("navbar.news")}
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.floorp.app/categories/release/" className="hover:text-primary transition-colors">
                      {t("navbar.releaseNotes")}
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-bold text-lg hover:text-primary transition-colors">
                  {t("navbar.resources")}
                </summary>
                <ul className="bg-neutral rounded-t-none p-2 z-[1] shadow-lg">
                  <li>
                    <a
                      href="https://github.com/Floorp-Projects/Floorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.floorp.app" className="hover:text-primary transition-colors">{t("footer.docs")}</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden md:flex items-center gap-4">
          <Link
            className="btn btn-primary font-bold text-lg px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            to="/download"
          >
            {t("navbar.download")}
          </Link>
        </div>
      </div>
    </div>
  );
}
