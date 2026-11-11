import Generator from "@/components/Generator";
import Reveal from "@/components/Reveal";
import CopyCmd from "@/components/CopyCmd";
import { SNIPPET } from "@/lib/favicon";
import { BTN, GHOST, H2, LEAD, WRAP } from "@/lib/ui";

const GITHUB = "https://github.com/YOURNAME/favicraft";
const NPM = "https://www.npmjs.com/package/favicraft";

const STEPS = [
  ["1", "Add your image", "Drop in a logo, or type a letter or emoji to make one. Square images of 512 × 512 px or larger look sharpest."],
  ["2", "Check the preview", "See every size at once and watch the icon appear in the browser tab above."],
  ["3", "Download and paste", "Get one ZIP, copy the files into your site’s public folder, and paste the snippet into your <head>."],
];

const FAQ = [
  ["What is a favicon?", "It’s the small icon shown in a browser tab, in bookmarks and on a phone’s home screen. Sites need it in several sizes because browsers, iPhones and Android phones each ask for different ones."],
  ["Is Favicraft free?", "Yes. There are no trials, no watermarks and no sign-up."],
  ["What do I get in the ZIP?", "favicon.ico (16, 32 and 48 px), 16 and 32 px PNGs, an Apple touch icon, two Android icons, site.webmanifest and a snippet.html with the tags to paste."],
  ["What size should my image be?", "A square image of 512 × 512 px or larger gives the sharpest result. An SVG works too."],
  ["Are my files uploaded?", "No. Everything runs in your browser and nothing is sent to a server."],
];

const NAV = [
  ["How it works", "#how"],
  ["Features", "#features"],
  ["Privacy", "#privacy"],
  ["npm", "#npm"],
  ["FAQ", "#faq"],
];

const BX = "overflow-hidden rounded-[20px] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(18,24,38,.35)]";

export default function Home() {
  return (
    <>
      {/* nav */}
      <div className="sticky top-0 z-20 border-b border-line/70 bg-bg/70 backdrop-blur-lg">
        <div className={WRAP}>
          <nav className="flex h-16 items-center justify-between">
            <a href="#" className="font-display text-xl font-extrabold tracking-[-.03em]">Favicraft</a>
            <ul className="hidden gap-7 md:flex">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[.95rem] text-mute transition hover:text-ink">{label}</a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5">
              <a href={GITHUB} className={`${GHOST} !px-4 !py-2 !text-[.88rem]`}>Star</a>
              <a href="#tool" className={`${BTN} !px-4 !py-2 !text-[.88rem]`}>Get started</a>
            </div>
          </nav>
        </div>
      </div>

      <div className={WRAP}>
        {/* hero */}
        <header className="pb-6 pt-16">
          <a
            href="#npm"
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 text-[.88rem] text-mute transition hover:border-brand"
          >
            <b className="rounded-full bg-brand px-2.5 py-0.5 text-[.78rem] font-semibold text-white">New</b>
            The npm package is live: npx favicraft
          </a>
          <h1 className="mt-[22px] max-w-[10.5em] font-display text-[clamp(2.8rem,7.4vw,5.4rem)] font-extrabold leading-[1.02] tracking-[-.03em]">
            One image in. Every favicon out.
          </h1>
          <p className="mt-[22px] max-w-[33em] text-[1.2rem] text-mute">
            Drop in a logo and get the .ico, PNGs, Apple and Android icons, a manifest and the HTML to
            paste. Free, no sign-up, and your image never leaves your device.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3">
            <a href="#tool" className={BTN}>Start for free</a>
            <a href={GITHUB} className={GHOST}>View source</a>
          </div>
          <Generator />
        </header>

        {/* formats */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <span className="mr-1.5 text-[.9rem] text-mute">Works with</span>
          {["PNG", "JPG", "SVG", "WEBP", "GIF"].map((f) => (
            <span key={f} className="rounded-full border border-line bg-white px-3.5 py-1 text-[.85rem]">{f}</span>
          ))}
        </div>

        {/* how */}
        <section id="how" className="py-24">
          <Reveal>
            <h2 className={H2}>How it works</h2>
            <p className={LEAD}>
              A favicon is the small icon in your browser tab. Websites need it in several sizes, and
              Favicraft makes all of them from one image.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {STEPS.map(([n, t, d]) => (
                <div key={n} className="border-t-2 border-ink pt-[18px]">
                  <b className="text-[.9rem] text-brand">Step {n}</b>
                  <h3 className="mb-2 mt-1.5 font-display text-[1.3rem] font-bold tracking-[-.03em]">{t}</h3>
                  <p className="text-mute">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* features */}
        <section id="features" className="pb-24">
          <Reveal>
            <h2 className={H2}>Everything a favicon needs</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-6">
              <div className={`${BX} md:col-span-4`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">Every size, one click</h3>
                <p className="text-mute">From 16 px to 512 px: a real .ico file, PNGs, an Apple touch icon, Android icons and a web manifest.</p>
                <div className="mt-6 flex items-end gap-3.5">
                  {[16, 32, 48, 72, 96].map((s) => (
                    <i key={s} className="block rounded-[22%] bg-brand/90" style={{ width: s, height: s }} />
                  ))}
                </div>
              </div>

              <div className={`${BX} border-brand bg-brand text-white md:col-span-2`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">See it in a tab</h3>
                <p className="text-[#DCE5FF]">The preview updates as you type, so you know how it looks before you download.</p>
                <div className="mt-6 flex items-center gap-2 rounded-[10px] bg-tab px-3.5 py-2.5 text-[.85rem] text-ink">
                  <i className="size-4 rounded bg-brand" /> My awesome site
                </div>
              </div>

              <div className={`${BX} md:col-span-2`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">No logo? No problem</h3>
                <p className="text-mute">Type a letter or an emoji, pick a colour, and you have an icon in seconds.</p>
              </div>

              <div className={`${BX} md:col-span-4`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">Paste-ready HTML</h3>
                <p className="text-mute">Every ZIP includes snippet.html with the five tags your site needs.</p>
                <pre className="mt-5 overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[.74rem] leading-[1.65] text-[#C9D4F0]">{SNIPPET}</pre>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* privacy */}
      <section id="privacy" className="mx-3 rounded-[32px] bg-ink py-24 text-white">
        <div className={WRAP}>
          <Reveal>
            <div className="grid items-center gap-14 md:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className={H2}>Your images never leave your device</h2>
                <p className={`${LEAD} !text-[#A9B3C9]`}>
                  Every step runs inside this browser tab. There is no upload, so there is nothing to
                  store, leak or sell.
                </p>
                <ul className="mt-8 grid gap-5">
                  {[
                    ["Runs in your browser", "Resizing and zipping happen on your own device."],
                    ["No upload step", "No server ever receives your image."],
                    ["Check it yourself", "Open your browser’s network panel and watch."],
                  ].map(([t, d]) => (
                    <li key={t}>
                      <b className="block text-[1.05rem]">{t}</b>
                      <span className="text-[#A9B3C9]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div aria-hidden="true" className="overflow-hidden rounded-[14px] border border-[#232B42] bg-[#0B1020] font-mono text-[.82rem] text-[#9FB0D6]">
                <div className="flex gap-[18px] border-b border-[#232B42] px-4 pt-2.5">
                  <span className="pb-2.5">Elements</span>
                  <span className="pb-2.5">Console</span>
                  <span className="border-b-2 border-brand pb-2.5 text-white">Network</span>
                  <span className="pb-2.5">Performance</span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[#232B42] px-4 py-2 text-[#6E7C9E]">
                  <span>Name</span><span>Status</span><span>Type</span><span>Size</span>
                </div>
                <div className="px-5 py-12 text-center">
                  <b className="mb-1 block text-[.95rem] text-white">No requests while you work.</b>
                  Your image hasn’t been sent anywhere.
                </div>
                <div className="flex items-center justify-between border-t border-[#232B42] px-4 py-2.5">
                  <span>0 requests · 0 B transferred</span>
                  <span className="inline-flex items-center gap-2">
                    <i className="animate-blink size-2 rounded-full bg-[#FF5A5F]" /> Recording
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className={WRAP}>
        {/* npm */}
        <section id="npm" className="py-24">
          <Reveal>
            <h2 className={H2}>Prefer the terminal? There’s an npm package</h2>
            <p className={LEAD}>
              Run it in your project folder. The first name is your image and the second is the folder
              where the icons are saved.
            </p>
            <CopyCmd text="npx favicraft logo.png public" />
            <div className="mt-6 grid max-w-[560px] gap-x-7 gap-y-2.5 text-[.95rem] text-mute sm:grid-cols-3">
              <span><b className="text-ink">favicraft</b> the tool</span>
              <span><b className="text-ink">logo.png</b> your image</span>
              <span><b className="text-ink">public</b> output folder</span>
            </div>
            <h3 className="mt-11 font-display text-[1.2rem] font-bold tracking-[-.03em]">
              Then paste this inside your site’s &lt;head&gt;
            </h3>
            <pre className="mt-3.5 overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[.78rem] leading-[1.6] text-[#C9D4F0]">{SNIPPET}</pre>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <a href={NPM} className={GHOST}>View on npm</a>
            </div>
          </Reveal>
        </section>

        {/* faq */}
        <section id="faq" className="pb-24">
          <Reveal>
            <h2 className={H2}>Frequently asked questions</h2>
            <div className="mt-9 max-w-[720px]">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group border-t border-line py-5 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="text-[1.3rem] leading-none text-mute transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-mute">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      </div>

      {/* final CTA */}
      <section className="mx-3 rounded-[32px] bg-black px-6 py-20 text-center text-white">
        <Reveal>
          <h2 className={`${H2} mx-auto !max-w-[12em]`}>Make your favicon in 10 seconds</h2>
          <p className="mx-auto mb-7 mt-4 text-[#DCE5FF]">Free, private and open source. No sign-up.</p>
          <a href="#tool" className={`${BTN} !bg-white !text-ink hover:!bg-ink hover:!text-white`}>Start for free</a>
        </Reveal>
      </section>

      {/* footer */}
      <div className={WRAP}>
        <footer className="grid gap-8 pb-12 pt-16 text-[.92rem] text-mute md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <a href="#" className="font-display text-xl font-extrabold tracking-[-.03em] text-ink">Favicraft</a>
            <p className="mt-2.5 max-w-[280px]">Free, open-source favicon tools that run in your browser.</p>
          </div>
          <div className="grid content-start gap-1">
            <h4 className="mb-2 font-semibold text-ink">Product</h4>
            <a href="#tool" className="transition hover:text-ink">Favicon generator</a>
            <a href="#how" className="transition hover:text-ink">How it works</a>
            <a href="#faq" className="transition hover:text-ink">FAQ</a>
          </div>
          <div className="grid content-start gap-1">
            <h4 className="mb-2 font-semibold text-ink">Open source</h4>
            <a href={GITHUB} className="transition hover:text-ink">GitHub</a>
            <a href={NPM} className="transition hover:text-ink">npm package</a>
            <a href={`${GITHUB}/issues`} className="transition hover:text-ink">Report an issue</a>
          </div>
        </footer>
        <div className="flex flex-wrap justify-between gap-2 border-t border-line pb-10 pt-5 text-[.88rem] text-mute">
          <span>© 2026 Favicraft.</span>
          <span>Built in Nigeria</span>
        </div>
      </div>
    </>
  );
}