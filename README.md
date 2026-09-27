# Dinnrm.github.io

A simple personal website hosted on GitHub Pages.

- **Repository**: https://github.com/Dinnrm/Dinnrm.github.io
- **Website (GitHub Pages)**: https://dinnrm.github.io/

## Purpose

This repository holds the static files for my personal website. It is built with plain HTML5 and CSS3 only — no frameworks, no build step, no external dependencies.

## Local development

There is no build process. To preview the site locally, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/ in your browser.

You can also simply open `index.html` directly in a browser, though the local server preview more closely matches how GitHub Pages serves the files.

## Project structure

```
Dinnrm.github.io/
├── index.html      # Home page (must stay at the repository root)
├── css/
│   └── style.css   # Stylesheet, linked from index.html via a relative path
├── .gitignore
└── README.md
```

## Updating and deploying

Every push to the `main` branch triggers GitHub Pages to rebuild and publish the site.

```bash
# 1. Make your edits to index.html and/or css/style.css

# 2. See what changed
git status

# 3. Stage and commit your changes
git add .
git commit -m "Describe your change here"

# 4. Push to GitHub (this deploys the site)
git push origin main
```

Wait a minute or two, then refresh https://dinnrm.github.io/ to see the update.

## Custom domain

A custom domain will be connected in a later step. No DNS or CNAME configuration has been made yet.
