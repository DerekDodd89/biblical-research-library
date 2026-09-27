"use client";

import { useEffect, useState } from "react";
import { Download, Eye, X } from "lucide-react";

type ResourcePreviewProps = {
  title: string;
  url: string;
  format: string;
};

export default function ResourcePreview({
  title,
  url,
  format,
}: ResourcePreviewProps) {
  const [open, setOpen] = useState(false);

  const normalizedFormat = format
    .trim()
    .toLowerCase();

  const isImage = [
    "png",
    "jpg",
    "jpeg",
    "webp",
    "gif",
  ].includes(normalizedFormat);

  const isPdf = normalizedFormat === "pdf";

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <>
      {/* PREVIEW BUTTON */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-[#101d30] px-4 py-2 text-sm font-bold text-amber-300 transition hover:border-amber-300 hover:bg-[#15243a]"
      >
        <Eye size={17} />
        Preview
      </button>

      {/* FULL SCREEN PREVIEW */}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${title}`}
          className="fixed inset-0 z-[99999] bg-[#050a11]"
        >
          {/* ALWAYS VISIBLE TOOLBAR */}

          <div className="absolute inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between gap-4 border-b border-[#8b6a2b]/40 bg-[#0b1525] px-4 shadow-xl sm:px-6">
            <div className="min-w-0">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                Resource Preview
              </div>

              <div className="mt-1 truncate text-sm font-bold text-white sm:text-lg">
                {title}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={url}
                download
                className="hidden min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-400 sm:inline-flex"
              >
                <Download size={17} />
                Download
              </a>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <X size={19} />
                <span>Close Preview</span>
              </button>
            </div>
          </div>

          {/* SCROLLABLE DOCUMENT AREA */}

          <div className="absolute inset-x-0 bottom-0 top-[72px] overflow-y-auto overflow-x-hidden bg-black/60">
            {isImage && (
              <div className="mx-auto flex min-h-full w-full justify-center p-4 sm:p-8">
                <img
                  src={url}
                  alt={title}
                  className="block h-auto max-w-full self-start bg-white shadow-2xl"
                />
              </div>
            )}

            {isPdf && (
              <iframe
                src={url}
                title={title}
                className="h-full w-full border-0 bg-white"
              />
            )}

            {!isImage && !isPdf && (
              <div className="flex min-h-full items-center justify-center p-8 text-center">
                <div>
                  <p className="text-xl font-bold text-white">
                    Preview unavailable
                  </p>

                  <p className="mt-2 text-sm text-neutral-400">
                    This file type must be downloaded
                    to view.
                  </p>

                  <a
                    href={url}
                    download
                    className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2 text-sm font-bold text-black"
                  >
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE DOWNLOAD */}

          <a
            href={url}
            download
            aria-label="Download resource"
            className="fixed bottom-4 right-4 z-[100000] flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl sm:hidden"
          >
            <Download size={20} />
          </a>
        </div>
      )}
    </>
  );
}