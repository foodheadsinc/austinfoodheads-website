"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  content: string;
}

export default function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border transition-all font-medium text-sm uppercase tracking-wider ${
        copied
          ? "border-green-600 text-green-600 bg-green-50"
          : "border-[#191439] text-[#191439] hover:bg-[#191439] hover:text-white"
      }`}
      aria-label="Copy Markdown reference"
    >
      {copied ? (
        <>
          <Check size={16} />
          <span>Copied to Clipboard!</span>
        </>
      ) : (
        <>
          <Copy size={16} />
          <span>Copy Raw Markdown</span>
        </>
      )}
    </button>
  );
}
