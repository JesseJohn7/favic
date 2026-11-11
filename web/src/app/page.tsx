import Generator from "@/components/Generator";
import Reveal from "@/components/Reveal";
import CopyCmd from "@/components/CopyCmd";
import { SNIPPET } from "@/lib/favicon";
import { BTN, GHOST, H2, LEAD, WRAP } from "@/lib/ui";

const NAME = "Favic";
const PKG = "favicraft";
const GITHUB = "https://github.com/JesseJohn7/favicraft";
const NPM = "https://www.npmjs.com/package/favicraft";
const CMD = `npx ${PKG} logo.png public`;

const STEPS = [
  ["1", "Run one command", "Open a terminal in your project folder and run the command above. There is nothing to install first: npx downloads and runs it for you. Use a square image of 512 × 512 px or larger."],
  ["2", "Your icons appear", "Every icon, site.webmanifest and snippet.html are saved into the folder you named (for example public). You do not need to import anything."],
  ["3", "Paste it in your <head>", "Open snippet.html, copy the tags and paste them inside the <head> of your site. That is the only code you add. Done."],
];

const FAQ = [
  ["What is a favicon?", "It’s the small icon shown in a browser tab, in bookmarks and on a phone’s home screen. Sites need it in several sizes because browsers, iPhones and Android phones each ask for different ones."],
  [`Is ${NAME} free?`, "Yes. There are no trials, no watermarks and no sign-up."],
  ["Do I need to install anything?", "No. npx runs the package without installing it. You only paste the snippet into your site’s <head>."],
  ["What do I get?", "favicon.ico (16, 32 and 48 px), 16 and 32 px PNGs, an Apple touch icon, two Android icons, site.webmanifest and a snippet.html with the tags to paste. The npm package writes these straight into your folder, and the web tool gives them to you as a ZIP."],
  ["What size should my image be?", "A square image of 512 × 512 px or larger gives the sharpest result. An SVG works too."],
  ["Are my files uploaded?", "No. Everything runs on your own device and nothing is sent to a server."],
];

const NAV = [
  ["npm", "#npm"],
  ["How it works", "#how"],
  ["Features", "#features"],
  ["Privacy", "#privacy"],
  ["FAQ", "#faq"],
];

const BX = "min-w-0 overflow-hidden rounded-[20px] border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(18,24,38,.35)] sm:p-7";

const DARK_SOLID = "!bg-white !text-ink hover:!bg-white hover:!text-ink active:!bg-white focus-visible:!bg-white focus-visible:!outline-white";
const DARK_GHOST = "!border-white/30 !bg-transparent !text-white hover:!border-white hover:!bg-white/10 hover:!text-white active:!bg-white/20 active:!text-white focus-visible:!outline-white";

const FULL = "w-full justify-center text-center sm:w-auto";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-current">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* nav */}
      <div className="sticky top-0 z-20 border-b border-line/70 bg-bg/70 backdrop-blur-lg">
        <div className={WRAP}>
          <nav className="flex h-14 items-center justify-between gap-3 sm:h-16">
            <a href="#" className="font-display text-xl font-extrabold tracking-[-.03em]">{NAME}</a>
            <ul className="hidden gap-7 lg:flex">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-[.95rem] text-mute transition hover:text-ink">{label}</a>
                </li>
              ))}
            </ul>
            <div className="flex shrink-0 gap-2">
              <a
                href={GITHUB}
                aria-label="Star on GitHub"
                className={`${GHOST} inline-flex items-center gap-2 !px-3 !py-2 !text-[.88rem] sm:!px-4`}
              >
                <GithubIcon /> <span className="hidden min-[400px]:inline">Star</span>
              </a>
              <a href="#npm" className={`${BTN} !px-3 !py-2 !text-[.88rem] sm:!px-4`}>Get started</a>
            </div>
          </nav>
          {/* mobile and tablet links */}
          <ul className="-mx-1 flex gap-5 overflow-x-auto px-1 pb-2.5 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV.map(([label, href]) => (
              <li key={href} className="shrink-0">
                <a href={href} className="text-[.9rem] text-mute transition hover:text-ink">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={WRAP}>
        {/* hero */}
        <header className="pb-6 pt-10 sm:pt-16">
          <a
            href="#web"
            className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 text-[.82rem] text-mute transition hover:border-brand sm:text-[.88rem]"
          >
            <b className="shrink-0 rounded-full bg-brand px-2.5 py-0.5 text-[.78rem] font-semibold text-white">Also</b>
            <span className="min-w-0">Prefer a browser? There’s a web tool too</span>
          </a>
          <h1 className="mt-5 max-w-[10.5em] break-words font-display text-[clamp(2.3rem,8.5vw,5.4rem)] font-extrabold leading-[1.04] tracking-[-.03em] sm:mt-[22px]">
            One image in. Every favicon out.
          </h1>
          <p className="mt-4 max-w-[33em] text-[1.05rem] text-mute sm:mt-[22px] sm:text-[1.2rem]">
            Run one command and get the .ico, PNGs, Apple and Android icons, a manifest and the HTML to
            paste. Free, no sign-up, and your image never leaves your device.
          </p>
          <div className="mt-6 max-w-full overflow-x-auto sm:mt-[30px]">
            <CopyCmd text={CMD} />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#npm" className={`${BTN} ${FULL}`}>Use the npm package</a>
            <a href="#web" className={`${GHOST} ${FULL}`}>Try it in the browser</a>
            <a href={GITHUB} className={`${GHOST} inline-flex items-center gap-2 ${FULL}`}>
              <GithubIcon /> View source
            </a>
          </div>
        </header>

        {/* web tool: hidden until someone clicks a #web link */}
        <section id="web" className="hidden scroll-mt-28 pb-8 pt-10 target:block sm:pt-16">
          <Reveal>
            <h2 className={H2}>Use it in your browser</h2>
            <p className={LEAD}>
              No terminal needed. Drop in a logo, check the preview and download one ZIP.
            </p>
          </Reveal>
          <div className="min-w-0 max-w-full">
            <Generator />
          </div>
        </section>

        {/* npm */}
        <section id="npm" className="scroll-mt-28 py-16 md:py-24">
          <Reveal>
            <h2 className={H2}>Run it from your terminal</h2>
            <p className={LEAD}>
              Run it in your project folder. The first name is your image and the second is the folder
              where the icons are saved.
            </p>
            <div className="max-w-full overflow-x-auto">
              <CopyCmd text={CMD} />
            </div>
            <div className="mt-6 grid max-w-[560px] gap-x-7 gap-y-2.5 text-[.95rem] text-mute sm:grid-cols-3">
              <span><b className="text-ink">{PKG}</b> the tool</span>
              <span><b className="text-ink">logo.png</b> your image</span>
              <span><b className="text-ink">public</b> output folder</span>
            </div>
            <h3 className="mt-9 font-display text-[1.2rem] font-bold tracking-[-.03em] sm:mt-11">
              Then paste this inside your site’s &lt;head&gt;
            </h3>
            <pre className="mt-3.5 max-w-full overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[.72rem] leading-[1.6] text-[#C9D4F0] sm:text-[.78rem]">{SNIPPET}</pre>
            <div className="mt-6 flex flex-col gap-3 sm:mt-[30px] sm:flex-row sm:flex-wrap">
              <a href={NPM} className={`${GHOST} ${FULL}`}>View on npm</a>
            </div>
          </Reveal>
        </section>

        {/* formats */}
        <div className="flex flex-wrap items-center gap-2.5 pb-2">
          <span className="mr-1.5 text-[.9rem] text-mute">Works with</span>
          {["PNG", "JPG", "SVG", "WEBP", "GIF"].map((f) => (
            <span key={f} className="rounded-full border border-line bg-white px-3.5 py-1 text-[.85rem]">{f}</span>
          ))}
        </div>

        {/* how */}
        <section id="how" className="scroll-mt-28 py-16 md:py-24">
          <Reveal>
            <h2 className={H2}>How it works</h2>
            <p className={LEAD}>
              Three steps. No install and no imports. The only thing you add to your code is one snippet
              inside your site’s &lt;head&gt;.
            </p>
            <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3">
              {STEPS.map(([n, t, d]) => (
                <div key={n} className="min-w-0 border-t-2 border-ink pt-[18px]">
                  <b className="text-[.9rem] text-brand">Step {n}</b>
                  <h3 className="mb-2 mt-1.5 font-display text-[1.3rem] font-bold tracking-[-.03em]">{t}</h3>
                  <p className="text-mute">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-[44em] text-mute">
              <b className="text-ink">No terminal?</b> Use the{" "}
              <a href="#web" className="text-brand underline">web tool</a>: drop in your image, download
              the ZIP, copy the files into your site’s public folder, then do step 3.
            </p>
          </Reveal>
        </section>

        {/* features */}
        <section id="features" className="scroll-mt-28 pb-16 md:pb-24">
          <Reveal>
            <h2 className={H2}>Everything a favicon needs</h2>
            <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-6">
              <div className={`${BX} md:col-span-4`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">Every size, one command</h3>
                <p className="text-mute">From 16 px to 512 px: a real .ico file, PNGs, an Apple touch icon, Android icons and a web manifest.</p>
                <div className="mt-6 flex flex-wrap items-end gap-3.5">
                  {[16, 32, 48, 72, 96].map((s) => (
                    <i key={s} className="block shrink-0 rounded-[22%] bg-brand/90" style={{ width: s, height: s }} />
                  ))}
                </div>
              </div>

              <div className={`${BX} border-brand bg-brand text-white md:col-span-2`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">See it in a tab</h3>
                <p className="text-[#DCE5FF]">The web tool’s preview updates as you type, so you know how it looks before you download.</p>
                <div className="mt-6 flex items-center gap-2 rounded-[10px] bg-tab px-3.5 py-2.5 text-[.85rem] text-ink">
                  <i className="size-4 shrink-0 rounded bg-brand" /> My awesome site
                </div>
              </div>

              <div className={`${BX} md:col-span-2`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">No logo? No problem</h3>
                <p className="text-mute">In the web tool, type a letter or an emoji, pick a colour, and you have an icon in seconds.</p>
              </div>

              <div className={`${BX} md:col-span-4`}>
                <h3 className="mb-2 font-display text-[1.35rem] font-bold tracking-[-.03em]">Paste-ready HTML</h3>
                <p className="text-mute">Every run includes snippet.html with the five tags your site needs.</p>
                <pre className="mt-5 max-w-full overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[.7rem] leading-[1.65] text-[#C9D4F0] sm:text-[.74rem]">{SNIPPET}</pre>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* privacy */}
      <section id="privacy" className="mx-3 scroll-mt-28 rounded-[24px] bg-ink py-16 text-white md:rounded-[32px] md:py-24">
        <div className={WRAP}>
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
              <div className="min-w-0">
                <h2 className={H2}>Your images never leave your device</h2>
                <p className={`${LEAD} !text-[#A9B3C9]`}>
                  Whether you use the terminal or the browser, every step runs on your own device. There
                  is no upload, so there is nothing to store, leak or sell.
                </p>
                <ul className="mt-8 grid gap-5">
                  {[
                    ["Runs locally", "Resizing and zipping happen on your own device."],
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

              <div aria-hidden="true" className="min-w-0 overflow-hidden rounded-[14px] border border-[#232B42] bg-[#0B1020] font-mono text-[.72rem] text-[#9FB0D6] sm:text-[.82rem]">
                <div className="flex gap-[14px] overflow-x-auto border-b border-[#232B42] px-3 pt-2.5 sm:gap-[18px] sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <span className="pb-2.5">Elements</span>
                  <span className="pb-2.5">Console</span>
                  <span className="border-b-2 border-white pb-2.5 text-white">Network</span>
                  <span className="pb-2.5">Performance</span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[#232B42] px-3 py-2 text-[#6E7C9E] sm:px-4">
                  <span>Name</span><span>Status</span><span>Type</span><span>Size</span>
                </div>
                <div className="px-4 py-10 text-center sm:px-5 sm:py-12">
                  <b className="mb-1 block text-[.95rem] text-white">No requests while you work.</b>
                  Your image hasn’t been sent anywhere.
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#232B42] px-3 py-2.5 sm:px-4">
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
        {/* faq */}
        <section id="faq" className="scroll-mt-28 py-16 md:py-24">
          <Reveal>
            <h2 className={H2}>Frequently asked questions</h2>
            <div className="mt-8 max-w-[720px] sm:mt-9">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group border-t border-line py-5 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">{q}</span>
                    <span className="shrink-0 text-[1.3rem] leading-none text-mute transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-mute">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      </div>

      {/* final CTA */}
      <section className="mx-3 rounded-[24px] bg-black px-5 py-14 text-center text-white sm:px-6 md:rounded-[32px] md:py-20">
        <Reveal>
          <h2 className={`${H2} mx-auto !max-w-[12em]`}>Make your favicon in 10 seconds</h2>
          <p className="mx-auto mb-7 mt-4 text-[#DCE5FF]">Free, private and open source. No sign-up.</p>
          <div className="mx-auto flex max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a href="#npm" className={`${BTN} ${DARK_SOLID} ${FULL}`}>Use the npm package</a>
            <a href="#web" className={`${GHOST} ${DARK_GHOST} ${FULL}`}>Try the web tool</a>
          </div>
        </Reveal>
      </section>

      {/* footer */}
      <div className={WRAP}>
        <footer className="grid grid-cols-2 gap-8 pb-10 pt-12 text-[.92rem] text-mute md:grid-cols-[1.6fr_1fr_1fr] md:pb-12 md:pt-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-xl font-extrabold tracking-[-.03em] text-ink">{NAME}</a>
            <p className="mt-2.5 max-w-[280px]">Free, open-source favicon tools for your terminal and your browser.</p>
          </div>
          <div className="grid content-start gap-1">
            <h4 className="mb-2 font-semibold text-ink">Product</h4>
            <a href="#npm" className="transition hover:text-ink">npm package</a>
            <a href="#web" className="transition hover:text-ink">Web generator</a>
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
          <span>© 2026 {NAME}.</span>
          <span>
            Built by{" "}
            <a
              href="https://github.com/JesseJohn7"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-ink"
            >
              Jesse John
            </a>
          </span>
        </div>
      </div>
    </>
  );
}