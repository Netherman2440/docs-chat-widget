---
"@comtegra/docusaurus-theme-docs-chat": minor
---

tenant opcjonalny: bez niego widget mówi z docs-chat API 2.0+ po ścieżkach bez segmentu tenanta (/api/v1/chat|feedback|status — jedna instancja = jeden tenant). Z tenantem zachowany stary kształt URL. Klucze sessionStorage bez tenanta biorą host strony z siteConfig.url. Do tego demo fixtures/garden-site (konsument API 2.0+).
