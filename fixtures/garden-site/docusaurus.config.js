// Garden Docs — konsument widgetu z API docs-chat 2.0+ (bez segmentu tenanta: jedna
// instancja = jeden tenant). To samo co fixture-site, ale na prawdziwym backendzie.
const useFaster = process.env.FIXTURE_FASTER === "true";
const useV4 = process.env.FIXTURE_V4 !== "false";

module.exports = {
  title: "Garden Docs",
  url: "https://docs-chat-api-ui.izajac.cgc-krk-01.comtegra.cloud",
  baseUrl: "/",
  i18n: { defaultLocale: "pl", locales: ["pl"] },
  future: { v4: useV4, faster: useFaster },
  onBrokenLinks: "throw",
  markdown: { hooks: { onBrokenMarkdownLinks: "throw" } },
  presets: [
    [
      "classic",
      {
        docs: { routeBasePath: "/", sidebarPath: require.resolve("./sidebars.js") },
        blog: false,
        theme: { customCss: require.resolve("./src/css/custom.css") },
      },
    ],
  ],
  themes: [
    [
      "@comtegra/docusaurus-theme-docs-chat",
      {
        // API 2.0+: bez `tenant` — ścieżki /api/v1/chat|feedback|status
        apiBaseUrl: "https://docs-chat-api.izajac.cgc-krk-01.comtegra.cloud",
        assistantName: "Asystent Garden",
        examplePrompts: [
          "Jak jest zbudowany garden?",
          "Czym są projekty w craft?",
          "Gdzie trzymam research?",
        ],
        statusProbe: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Garden",
      items: [{ type: "custom-docsChat", position: "right" }],
    },
  },
};
