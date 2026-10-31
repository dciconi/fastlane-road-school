# Fastlane Road School

An interactive nine-lesson course on the ideas in *The Millionaire Fastlane* (2011) by MJ DeMarco, in English, Portuguese and Spanish. It is an unofficial study companion that summarizes the book in its own words. Educational only, not financial advice.

It's a static site with no build step:

- `index.html`: page markup and styles
- `js/core.js`: helpers, shared course structure and answer keys
- `js/en.js`, `js/pt.js`, `js/es.js`: lesson text and interface strings for each language
- `js/app.js`: tools, quizzes, routing and the language switch

Progress is saved in each visitor's browser (`localStorage`).

## Deploy

On Vercel, import the repository and keep the defaults (Framework: Other, no build command, output directory `.`). Any other static host works too.

To preview locally, run `python3 -m http.server` in this folder and open http://localhost:8000.
