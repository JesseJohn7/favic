"use client";

import { useState } from "react";

export default function CopyCmd({ text }: { text: string }) {
  const [ok, setOk] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1500);
    } catch {}
  }

  return (
    <div className="mt-3.5 flex max-w-[560px] items-center justify-between gap-4 rounded-xl bg-[#0B1020] py-3.5 pl-5 pr-4">
      <code className="overflow-x-auto whitespace-nowrap font-mono text-[.95rem] text-[#C9D4F0]">
        <em className="mr-1.5 not-italic text-[#7C96FF]">$</em>
        {text}
      </code>
      <button
        onClick={copy}
        className="cursor-pointer rounded-lg bg-[#1B2440] px-3.5 py-[7px] text-[.82rem] font-semibold text-white transition hover:bg-brand"
      >
        {ok ? "Copied" : "Copy"}
      </button>
    </div>
  );
}