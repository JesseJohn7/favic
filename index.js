import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";

const PNG_SIZES = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

export async function generate(input, outDir = "./favicons") {
  try {
    await fs.access(input);
  } catch {
    throw new Error(`Can't find image: ${input}`);
  }

  await fs.mkdir(outDir, { recursive: true });

  for (const [name, size] of Object.entries(PNG_SIZES)) {
    await sharp(input)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(`${outDir}/${name}`);
  }

  const buffers = await Promise.all(
    [16, 32, 48].map((s) =>
      sharp(input)
        .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  await fs.writeFile(`${outDir}/favicon.ico`, await pngToIco(buffers));

  const manifest = {
    name: "My App",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    display: "standalone",
  };
  await fs.writeFile(`${outDir}/site.webmanifest`, JSON.stringify(manifest, null, 2));

  const html = `<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;
  await fs.writeFile(`${outDir}/snippet.html`, html);
}