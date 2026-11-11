# favicraft

Generate every favicon your site needs from one image.

## Use it

```bash
npx favicraft logo.png public
```

Or in code:

```js
import { generate } from "favicraft";
await generate("logo.png", "public");
```

## What you get

`favicon.ico`, 16 and 32 px PNGs, an Apple touch icon, two Android icons,
`site.webmanifest`, and `snippet.html` with the tags to paste in your `<head>`.

Prefer a browser? Use the web version. It runs on your device and uploads nothing.