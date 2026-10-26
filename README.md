# Portfolio von Vades Djoko

Persönliche Portfolio-Website: Informatik-Student (B.Sc.) an der THM Gießen mit Schwerpunkt Datenbanken, Datenanalyse und Backend-Entwicklung.

**Live:** https://monsieur-v237.github.io/portfolio

## Inhalt

- Über mich, Studium und Erfahrung
- Kenntnisse inklusive „Aktuell am Lernen“
- Projekte: [Simon Game](https://github.com/Monsieur-v237/simon_game) (Microservices, Java, Vert.x, MariaDB, Docker) und die Case Study [Air-Cargo-Performance](air-cargo.html) (Übungsfall mit synthetischen Daten, Code in [air-cargo-performance](https://github.com/Monsieur-v237/air-cargo-performance))
- Kontakt per E-Mail, LinkedIn und GitHub

## Technik

- Reines HTML, CSS und JavaScript, kein Framework und kein Build-Schritt
- Responsive mit mobilem Menü (`aria-expanded`, Escape schließt)
- Architekturskizze als Inline-SVG mit Textalternative
- Meta- und Open-Graph-Tags für die Link-Vorschau
- Icons: Font Awesome 6.5.2 über cdnjs
- Hosting: GitHub Pages

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite |
| `air-cargo.html` | Case Study Air-Cargo-Performance |
| `style.css` | Gestaltung für beide Seiten |
| `script.js` | Mobiles Menü; blendet den CV-Button ein, sobald `CV_Vades_Djoko.pdf` vorhanden ist |
| `favicon.svg`, `og-image.png` | Favicon und Vorschaubild |

## Lokal ansehen

`index.html` im Browser öffnen. Der CV-Button erscheint nur, wenn die Seite über einen Webserver läuft und `CV_Vades_Djoko.pdf` im Hauptverzeichnis liegt.
