import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import {
    Beer,
    FileDigit,
    FileText,
    Github,
    Package,
    SquareTerminal,
} from "lucide-react";

import WindowsIcon from "../public/Floorp_Platform_Windows_Gradient.png";
import MacIcon from "../public/Floorp_Platform_Mac_Gradient.png";
import LinuxIcon from "../public/Floorp_Platform_Linux_Gradient.png";

interface GitHubRelease {
    tag_name: string;
    published_at: string;
    name: string;
}

export function DownloadSection() {
    const { t } = useTranslation("common");
    const [releaseInfo, setReleaseInfo] = useState<GitHubRelease | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Remove 'v' prefix from version
    const formatVersion = (version: string | undefined) => {
        if (!version) return "";
        return version.startsWith("v") ? version.substring(1) : version;
    };

    useEffect(() => {
        async function fetchLatestRelease() {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://api.github.com/repos/Floorp-Projects/Floorp/releases/latest",
                );

                if (!response.ok) {
                    throw new Error(
                        `GitHub API responded with status: ${response.status}`,
                    );
                }

                const data = await response.json();
                setReleaseInfo(data);
            } catch (err) {
                console.error("Error fetching release data:", err);
                setError("Failed to fetch latest release information");
                setReleaseInfo(null);
            } finally {
                setLoading(false);
            }
        }

        fetchLatestRelease();
    }, []);

    // Format release date
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    // Get version without 'v' prefix
    const version = formatVersion(releaseInfo?.tag_name);

    // Get the hash file URL
    const getHashesUrl = () => {
        if (!releaseInfo?.tag_name) return "#";
        return `https://github.com/Floorp-Projects/Floorp/releases/download/${releaseInfo.tag_name}/hashes.txt`;
    };

    // Generate download URLs based on version
    const getWindowsDownloadUrl = () => {
        if (!version) return "#";
        return `https://github.com/Floorp-Projects/Floorp/releases/download/${releaseInfo?.tag_name}/floorp-win64.installer.exe`;
    };

    const getPortableDownloadUrl = () => {
        return "https://github.com/Floorp-Projects/Floorp-Portable-v2/releases/latest/download/floorp-win64.portable.7z";
    };

    const getMacOSDownloadUrl = () => {
        if (!version) return "#";
        return `https://github.com/Floorp-Projects/Floorp/releases/download/${releaseInfo?.tag_name}/floorp-macOS-universal.dmg`;
    };

    const getLinuxDownloadUrl = () => {
        if (!version) return "#";
        return `https://github.com/Floorp-Projects/Floorp/releases/download/${releaseInfo?.tag_name}/floorp-${version}.linux-x86_64.tar.bz2`;
    };

    const getLinuxArmDownloadUrl = () => {
        if (!version) return "#";
        return `https://github.com/Floorp-Projects/Floorp/releases/download/${releaseInfo?.tag_name}/floorp-${version}.linux-aarch64.tar.bz2`;
    };

    const isDownloadDisabled = !releaseInfo || error;

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("downloadPage.title")}
                    </h1>
                    <p className="text-xl opacity-80">
                        {t("downloadPage.subtitle")}
                    </p>
                </div>

                {error && (
                    <div className="alert alert-error mb-8">
                        <svg
                            role="img"
                            aria-label="Error"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            {error}{" "}
                            - Please try again later or check the GitHub
                            releases page directly.
                        </span>
                        <a
                            href="https://github.com/Floorp-Projects/Floorp/releases"
                            className="btn btn-sm"
                        >
                            View Releases
                        </a>
                    </div>
                )}

                {/* Terms agreement notice */}
                <div className="text-center mb-8">
                    <p className="text-sm opacity-80">
                        {t("downloadPage.termsAgreement")}{" "}
                        <Link href="/terms" className="link link-primary">
                            {t("footer.terms")}
                        </Link>{" "}
                        <Link href="/privacy" className="link link-primary">
                            {t("footer.privacy")}
                        </Link>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Windows Download */}
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">
                                Windows
                            </h2>
                            <div className="mb-4">
                                <Image
                                    src={WindowsIcon}
                                    alt="Windows"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-2"
                                />
                            </div>
                            <div className="card-actions flex-col gap-2 w-full">
                                <a
                                    href={getWindowsDownloadUrl()}
                                    className={`btn btn-primary btn-lg w-full ${
                                        isDownloadDisabled ? "btn-disabled" : ""
                                    }`}
                                >
                                    {t("downloadPage.windowsDownload")}
                                </a>
                                <a
                                    href={getPortableDownloadUrl()}
                                    className="btn btn-outline w-full"
                                >
                                    {t("downloadPage.portableVersion")}
                                </a>
                            </div>
                            <div className="text-sm mt-3 opacity-70">
                                {t("downloadPage.windows")}
                            </div>
                        </div>
                    </div>

                    {/* macOS Download */}
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">macOS</h2>
                            <div className="mb-4">
                                <Image
                                    src={MacIcon}
                                    alt="macOS"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-2"
                                />
                            </div>
                            <div className="card-actions">
                                <a
                                    href={getMacOSDownloadUrl()}
                                    className={`btn btn-primary btn-lg w-full ${
                                        isDownloadDisabled ? "btn-disabled" : ""
                                    }`}
                                >
                                    {t("downloadPage.macDownload")}
                                </a>
                            </div>
                            <div className="text-sm mt-3 opacity-70">
                                {t("downloadPage.mac")}
                            </div>
                        </div>
                    </div>

                    {/* Linux Download */}
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">Linux</h2>
                            <div className="mb-4">
                                <Image
                                    src={LinuxIcon}
                                    alt="Linux"
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-2"
                                />
                            </div>
                            <div className="card-actions flex-col gap-2">
                                <a
                                    href={getLinuxDownloadUrl()}
                                    className={`btn btn-primary btn-lg w-full ${
                                        isDownloadDisabled ? "btn-disabled" : ""
                                    }`}
                                >
                                    {t("downloadPage.linuxDownload")} (x86_64)
                                </a>
                                <a
                                    href={getLinuxArmDownloadUrl()}
                                    className={`btn btn-outline w-full ${
                                        isDownloadDisabled ? "btn-disabled" : ""
                                    }`}
                                >
                                    {t("downloadPage.linuxDownload")} (ARM64)
                                </a>
                            </div>
                            <div className="text-sm mt-3 opacity-70">
                                {t("downloadPage.linux")}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Version Info & Other Platforms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card bg-base-200 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">
                                {t("downloadPage.latestVersion")}
                            </h2>
                            <div className="overflow-x-auto">
                                {loading
                                    ? (
                                        <div className="flex justify-center p-4">
                                            <span className="loading loading-spinner loading-md">
                                            </span>
                                        </div>
                                    )
                                    : error
                                    ? (
                                        <div className="alert alert-warning">
                                            {error}
                                        </div>
                                    )
                                    : (
                                        <table className="table w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="font-semibold">
                                                        {t("downloadPage.latestVersion")}
                                                    </td>
                                                    <td>{version || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <td className="font-semibold">
                                                        {t("downloadPage.releaseDate")}
                                                    </td>
                                                    <td>
                                                        {formatDate(
                                                            releaseInfo
                                                                ?.published_at ||
                                                                "",
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )}
                            </div>

                            <div className="flex flex-col gap-4 mt-6">
                                <Link
                                    href="https://blog.floorp.app/categories/release/"
                                    className="btn btn-outline flex items-center gap-2"
                                >
                                    <FileText size={18} />
                                    {t("downloadPage.releaseNotes")}
                                </Link>

                                <a
                                    href={getHashesUrl()}
                                    className={`btn btn-outline flex items-center gap-2 ${
                                        isDownloadDisabled ? "btn-disabled" : ""
                                    }`}
                                >
                                    <FileDigit size={18} />
                                    {t("downloadPage.downloadHashes")}
                                </a>

                                <a
                                    href="https://github.com/Floorp-Projects/Floorp"
                                    className="btn btn-outline flex items-center gap-2"
                                >
                                    <Github size={18} />
                                    {t("downloadPage.sourceCode")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">
                                {t("downloadPage.otherPlatforms")}
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Package size={24} />
                                        <span className="text-lg">
                                            {t("downloadPage.winget")}
                                        </span>
                                    </div>
                                    <a
                                        href="https://winstall.app/apps/Ablaze.Floorp"
                                        className="btn btn-sm btn-primary"
                                    >
                                        {t("navbar.download")}
                                    </a>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Beer size={24} />
                                        <span className="text-lg">
                                            {t("downloadPage.brew")}
                                        </span>
                                    </div>
                                    <a
                                        href="https://formulae.brew.sh/cask/floorp"
                                        className="btn btn-sm btn-primary"
                                    >
                                        {t("navbar.download")}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Package size={24} />
                                        <span className="text-lg">
                                            {t("downloadPage.flatpak")}
                                        </span>
                                    </div>
                                    <a
                                        href="https://flathub.org/apps/one.ablaze.floorp"
                                        className="btn btn-sm btn-primary"
                                    >
                                        {t("navbar.download")}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <SquareTerminal size={24} />
                                        <span className="text-lg">
                                            {t("downloadPage.aptDeb")}
                                        </span>
                                    </div>
                                    <a
                                        href="https://ppa.floorp.app/"
                                        className="btn btn-sm btn-primary"
                                    >
                                        {t("navbar.download")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
