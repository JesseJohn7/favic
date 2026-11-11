import JSZip from "jszip";

export type Source =
  | { type: "text"; char: string; bg: string }
  | { type: "img"; img: HTMLImageElement; w: number; h: number };

export const SIZES: [string, number][] = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["android-chrome-192x192.png", 192],
  ["android-chrome-512x512.png", 512],
];

export const SNIPPET = `<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;

export function draw(src: Source, size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const x = c.getContext("2d")!;
  x.imageSmoothingQuality = "high";

  if (src.type === "text") {
    x.fillStyle = src.bg;
    x.beginPath();
    x.roundRect(0, 0, size, size, size * 0.22);
    x.fill();
    x.fillStyle = "#fff";
    x.font = `700 ${size * 0.6}px system-ui, sans-serif`;
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillText(Array.from(src.char || "F")[0], size / 2, size * 0.54);
  } else {
    const s = Math.min(size / src.w, size / src.h);
    const w = src.w * s;
    const h = src.h * s;
    x.drawImage(src.img, (size - w) / 2, (size - h) / 2, w, h);
  }
  return c;
}

const toBlob = (c: HTMLCanvasElement) =>
  new Promise<Blob>((res, rej) =>
    c.toBlob((b) => (b ? res(b) : rej(new Error("Could not export image"))), "image/png")
  );

async function makeIco(src: Source): Promise<ArrayBuffer> {
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(
    sizes.map(async (s) => new Uint8Array(await (await toBlob(draw(src, s))).arrayBuffer()))
  );
  let off = 6 + 16 * pngs.length;
  const buf = new ArrayBuffer(off + pngs.reduce((a, p) => a + p.length, 0));
  const dv = new DataView(buf);
  dv.setUint16(2, 1, true);
  dv.setUint16(4, pngs.length, true);
  pngs.forEach((p, i) => {
    const e = 6 + i * 16;
    dv.setUint8(e, sizes[i]);
    dv.setUint8(e + 1, sizes[i]);
    dv.setUint16(e + 4, 1, true);
    dv.setUint16(e + 6, 32, true);
    dv.setUint32(e + 8, p.length, true);
    dv.setUint32(e + 12, off, true);
    new Uint8Array(buf, off).set(p);
    off += p.length;
  });
  return buf;
}

export async function makeZip(src: Source): Promise<Blob> {
  const z = new JSZip();
  for (const [name, size] of SIZES) z.file(name, await toBlob(draw(src, size)));
  z.file("favicon.ico", await makeIco(src));
  z.file(
    "site.webmanifest",
    JSON.stringify(
      {
        name: "My App",
        icons: [
          { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
        display: "standalone",
      },
      null,
      2
    )
  );
  z.file("snippet.html", SNIPPET);
  return z.generateAsync({ type: "blob" });
}