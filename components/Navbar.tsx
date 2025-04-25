/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content shadow-sm flex flex-row justify-between px-4">
            <Image
                src="/Floorp_Logo_B_Dark.svg"
                alt="Floorp Logo"
                width={140}
                height={50}
                className="h-auto"
            />

            <div className="dropdown dropdown-left md:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                    <Menu className="w-6 h-6" />
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
                >
                    <li>
                        <a href="/download">Download</a>
                    </li>
                    <li>
                        <details>
                            <summary>Blog & Release Notes</summary>
                            <ul className="rounded-t-none p-2 z-[1]">
                                <li>
                                    <a href="https://blog.floorp.app/">Blog</a>
                                </li>
                                <li>
                                    <a
                                        href="https://blog.floorp.app/category/notice/"
                                        target="_blank"
                                    >
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blog.floorp.app/releases/">
                                        Release Notes
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2">
                                <li>
                                    <a href="https://docs.floorp.app">
                                        Floorp Docs
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
                            <summary>Blog & Release Notes</summary>
                            <ul className="bg-neutral rounded-t-none p-2 z-[1]">
                                <li>
                                    <a href="https://blog.floorp.app/">Blog</a>
                                </li>
                                <li>
                                    <a
                                        href="https://blog.floorp.app/category/notice/"
                                        target="_blank"
                                    >
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blog.floorp.app/releases/">
                                        Release Notes
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Documents</summary>
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
                                        Floorp Docs
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-center hidden md:flex">
                <a className="btn btn-primary" href="/download">Download</a>
            </div>
        </div>
    );
}
