# Favic

**One image in. Every favicon out.**

Generate every favicon your site needs from a single image. One command gives you the `.ico`, PNGs, Apple and Android icons, a web manifest and the HTML to paste. Free, open source, and everything runs on your own device.

[![npm](https://img.shields.io/npm/v/favicraft)](https://www.npmjs.com/package/favicraft)
[![npm downloads](https://img.shields.io/npm/dm/favicraft)](https://www.npmjs.com/package/favicraft)
[![GitHub stars](https://img.shields.io/github/stars/JesseJohn7/favicraft?style=flat)](https://github.com/JesseJohn7/favicraft)

[Website](https://your-site-link) · [npm](https://www.npmjs.com/package/favicraft) · [Report an issue](https://github.com/JesseJohn7/favicraft/issues)

## Quick start

Open a terminal in your project folder and run:

```bash
npx favicraft logo.png public
```

- `favicraft` is the tool.
- `logo.png` is your image. A square image of 512 × 512 px or larger looks sharpest. SVG works too.
- `public` is the folder where the icons are saved.

There is nothing to install first. `npx` downloads and runs it for you.

### Image already in your public folder?

Use its path as the first argument. If your image is `public/jesse.png`, run this from your project root:

```bash
npx favicraft public/jesse.png public
```

Paths start from the folder your terminal is open in. If you are inside `public`, run `npx favicraft jesse.png .` instead.

## What you get

| File | Purpose |
| --- | --- |
| `favicon.ico` | Browser tabs and bookmarks (16, 32 and 48 px) |
| `favicon-16x16.png`, `favicon-32x32.png` | Modern browsers |
| Apple touch icon | iPhone and iPad home screens |
| Two Android icons | Android home screens and installs |
| `site.webmanifest` | Web app manifest |
| `snippet.html` | The tags to paste into your `<head>` |

## Add it to your site

Open `snippet.html`, copy the tags and paste them into your site. You do not import anything.

| Setup | Where to paste |
| --- | --- |
| Vite, React, Vue, Svelte or plain HTML | Inside the `<head>` of `index.html` |
| Next.js (App Router) | Put `favicon.ico` in your `app` folder and Next adds the tag for you, or add the links through the `metadata` export in `app/layout.tsx` |
| Next.js (Pages Router) | Inside `<Head>` from `next/head`, or in `pages/_document.tsx` |

## Use it in code

```js
import { generate } from "favicraft";

await generate("logo.png", "public");
```

## Prefer a browser?

The web version needs no terminal. Drop in a logo (or type a letter or an emoji), check the live tab preview and download one ZIP. Copy the files into your site's public folder, then paste the snippet.

Try it: [your site link](https://your-site-link)

## Privacy

Your images never leave your device. The CLI and the web tool both run locally, with no upload step, no server and no sign-up.

## Contributing

Contributions are welcome. This project uses an **issue first, then PR** workflow:

1. Open an issue describing the bug or idea.
2. Wait for the maintainer to approve it.
3. Make your changes and open a pull request that links the issue (for example `Closes #12`).
4. If the PR is accepted, it is merged.

Pull requests without an approved issue may be closed without review. Read the full guide in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Author

Built by [Jesse John](https://github.com/JesseJohn7). If Favic saved you time, a ⭐ on GitHub helps a lot.