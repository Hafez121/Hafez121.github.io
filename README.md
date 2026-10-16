# hafez121.github.io

Portfolio site of Hafez Fandy. Built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages by a GitHub Action on every push to `main`.

## Run it locally

```bash
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # production build into _site/
```

## Where things live

| What | Where |
| --- | --- |
| Site details (email, WhatsApp, form IDs) | `src/_data/site.json` |
| Services | `src/_data/services.json` |
| Case studies | `src/work/*.md` |
| Insights articles | `src/insights/*.md` |
| Reviews | `src/reviews/*.md` |
| Layouts and partials | `src/_includes/` |
| Styles and scripts | `src/assets/` |
| Lab experiments | `src/lab/` |

## Adding content

**A case study:** add a Markdown file to `src/work/`. Copy the front matter from an existing one. Set `concept: false` and `type: "Client project"` for real client work.

**Proof for a service:** add the case study's file name (without `.md`) to that service's `proof` list in `src/_data/services.json`. Service cards with no proof are not clickable.

**An article:** add a Markdown file to `src/insights/` with `title`, `description`, `date`, `category` and `group` (`business` or `developer`).

**A review:** copy `docs/review-template.md` into `src/reviews/` and fill it in. Only publish what the client agreed to in writing.

**Forms:** create the forms in Tally and put their IDs in `src/_data/site.json` under `tally`. Until then, the website check page uses WhatsApp and email buttons.
