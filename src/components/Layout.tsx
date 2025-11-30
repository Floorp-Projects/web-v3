/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { createContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppBackground } from "./AppBackground";
import { useTheme } from "../hooks/useTheme";
import { LoadingOverlay } from "./LoadingOverlay";

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const themeHook = useTheme();

  return (
    <ThemeContext.Provider value={themeHook}>
      <LoadingOverlay />
      <AppBackground />
      <div className="z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

