/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "ja-JP"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
  localePath: "./public/locales",
  react: { useSuspense: false },
};
