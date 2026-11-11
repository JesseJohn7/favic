"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SNIPPET, draw, makeZip, type Source } from "@/lib/favicon";
import { BTN, GHOST } from "@/lib/ui";

type Loaded = { img: HTMLImageElement; w: number; h: number };
const PREVIEW_SIZES = [16, 32, 48, 180, 192, 512];

export default function Generator() {
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [char, setChar] = useState("F");
  const [bg, setBg] = useState("#2F5BFF");
  const [previews, setPreviews] = useState<{ size: number; url: string }[]>([]);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const src = useMemo<Source>(
    () => (loaded ? { type: "img", ...loaded } : { type: "text", char, bg }),
    [loaded, char, bg]
  );

  useEffect(() => {
    setPreviews(PREVIEW_SIZES.map((size) => ({ size, url: draw(src, size).toDataURL() })));
    const url = draw(src, 32).toDataURL();
    let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [src]);

  function loadFile(file?: File) {
    if (!file || !file.type.startsWith("image/")) {
      setMsg("That file isn’t an image. Try a PNG, JPG, SVG or WEBP.");
      return;
    }
    const img = new Image();
    img.onload = () => {
      setLoaded({ img, w: img.naturalWidth || 512, h: img.naturalHeight || 512 });
      setMsg(`Loaded ${file.name}. Your favicon is in the tab above.`);
    };
    img.onerror = () => setMsg("Couldn’t read that image. Try a PNG or JPG.");
    img.src = URL.createObjectURL(file);
  }

  async function download() {
    setBusy(true);
    try {
      const blob = await makeZip(src);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "favicons.zip";
      a.click();
      setMsg("Downloaded favicons.zip. Paste snippet.html into your site’s <head>.");
    } catch {
      setMsg("Something went wrong making the ZIP. Try again.");
    }
    setBusy(false);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setMsg("Snippet copied.");
    } catch {
      setMsg("Couldn’t copy. Select the snippet further down the page instead.");
    }
  }

  const tabIcon = previews.find((p) => p.size === 32)?.url;

  return (
    <>
      <div
        id="tool"
        className="animate-rise mt-12 overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_40px_80px_-40px_rgba(18,24,38,.35)]"
      >
        <div className="flex items-end gap-3 bg-tab px-4 pt-3">
          <div className="flex gap-1.5 pb-3.5">
            <i className="size-[11px] rounded-full bg-[#C3CAD9]" />
            <i className="size-[11px] rounded-full bg-[#C3CAD9]" />
            <i className="size-[11px] rounded-full bg-[#C3CAD9]" />
          </div>
          <div className="flex items-center gap-2 rounded-t-[10px] bg-white px-4 py-[9px] text-[.85rem] sm:min-w-[170px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {tabIcon && <img src={tabIcon} alt="" className="size-4" />}
            <span>My awesome site</span>
          </div>
        </div>

        <div className="grid gap-8 p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <label
              tabIndex={0}
              className={`grid cursor-pointer place-items-center rounded-[14px] border-2 border-dashed px-5 py-9 text-center transition ${
                over ? "scale-[1.015] border-brand bg-[#F0F4FF]" : "border-line hover:border-brand hover:bg-[#F0F4FF]"
              }`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  fileRef.current?.click();
                }
              }}
              onDragOver={(e) => { e.preventDefault(); setOver(true); }}
              onDragLeave={() => setOver(false)}
              onDrop={(e) => { e.preventDefault(); setOver(false); loadFile(e.dataTransfer.files[0]); }}
            >
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => loadFile(e.target.files?.[0])}
              />
              <div>
                <b>Drop an image here</b>
                <br />
                <span className="text-[.9rem] text-mute">PNG, JPG, SVG or WEBP. Square works best.</span>
              </div>
            </label>

            <p className="mb-2.5 mt-[18px] text-[.9rem] text-mute">
              No logo yet? Make one from a letter or emoji.
            </p>
            <div className="flex gap-2.5">
              <input
                type="text"
                value={char}
                maxLength={4}
                aria-label="Letter or emoji"
                className="min-w-0 flex-1 rounded-[10px] border border-line px-3.5 py-2.5"
                onChange={(e) => { setLoaded(null); setChar(e.target.value); }}
              />
              <input
                type="color"
                value={bg}
                aria-label="Background colour"
                className="h-11 w-[46px] cursor-pointer rounded-[10px] border border-line bg-white p-[3px]"
                onChange={(e) => { setLoaded(null); setBg(e.target.value); }}
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] content-start gap-3">
              {previews.map((p) => (
                <div
                  key={p.size}
                  className="checker flex flex-col items-center gap-2 rounded-xl border border-line px-2 py-3.5 text-[.78rem] text-mute transition hover:-translate-y-0.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.url} alt={`${p.size} pixel preview`} className="size-16 object-contain" />
                  <span>{p.size}×{p.size}</span>
                </div>
              ))}
            </div>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              <button className={BTN} onClick={download} disabled={busy}>
                {busy ? "Making ZIP…" : "Download ZIP"}
              </button>
              <button className={GHOST} onClick={copy}>Copy HTML snippet</button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3.5 min-h-[1.4em] text-[.9rem] text-mute" aria-live="polite">{msg}</p>
    </>
  );
}