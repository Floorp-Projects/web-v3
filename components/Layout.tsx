/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppBackground } from "./AppBackground";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppBackground />
            <div className="z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
            </div>
        </>
    );
}
