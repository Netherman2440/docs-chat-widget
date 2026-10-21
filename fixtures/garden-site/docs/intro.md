---
sidebar_position: 1
slug: /
---

# Garden

Garden to osobisty vault wiedzy — trwała baza notatek, researchu i decyzji, która służy
zarówno właścicielowi, jak i agentom AI pracującym na jego projektach.

Ten serwis to interfejs czatu nad tą bazą wiedzy: **Asystent Garden** (przycisk w prawym
górnym roku albo `Ctrl+/`) odpowiada na pytania, cytując źródłowe notatki.

## Co tu działa

- **Korpus**: notatki gardenu zaimportowane do instancji docs-chat (CGC) — import idzie
  przez CI w repozytorium źródłowym, ręcznie nic się nie robi.
- **Odpowiedzi**: grounding w cytowanych dokumentach (`[n]` → karty źródeł pod
  odpowiedzią), streaming na żywo, feedback pod każdą odpowiedzią.
