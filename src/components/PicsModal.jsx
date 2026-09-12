import React, { useEffect, useState } from "react";

/**
 * PicsModal — full-screen photo-gallery overlay.
 *
 * Usage:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>View Stills</button>
 *   <PicsModal open={open} onClose={() => setOpen(false)} pics={PICS} />
 *
 * `pics` is an array of file names (e.g. ["pic_01.jpg", …]) — all
 * served from /images/pics/.
 */
export default function PicsModal({ open, onClose, pics, basePath = "/images/pics", title = "Studio Gallery", initialZoom = null }) {
  const [zoomed, setZoomed] = useState(null);

  // When the modal opens with an initialZoom, jump straight to that image.
  useEffect(() => {
    if (open && initialZoom) setZoomed(initialZoom);
    if (!open) setZoomed(null);
  }, [open, initialZoom]);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, zoomed, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#4E4A46]/92 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* ── Header bar ─────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-8 py-5 border-b border-primary/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">
            [ STILLS · {pics.length} ]
          </span>
          <span className="font-headline text-lg font-bold text-white tracking-tight uppercase">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="font-label text-xs tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
        >
          CLOSE
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </div>

      {/* ── Grid (or zoomed viewer) ───────────────────── */}
      {zoomed ? (
        <div
          className="flex-1 flex items-center justify-center p-8 cursor-zoom-out"
          onClick={() => setZoomed(null)}
        >
          <img
            src={`${basePath}/${zoomed}`}
            alt="Studio still"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <div
          className="flex-1 overflow-y-auto p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
            {pics.map((file) => (
              <button
                key={file}
                type="button"
                onClick={() => setZoomed(file)}
                className="group relative aspect-[4/3] bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all"
              >
                <img
                  src={`${basePath}/${file}`}
                  alt="Studio still"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer hint ───────────────────────────────── */}
      <div className="px-8 py-3 border-t border-primary/30 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
          {zoomed ? "Click image · Esc to close zoom" : "Click image to enlarge · Esc to close gallery"}
        </p>
      </div>
    </div>
  );
}


// File names for /about — 24 stills under public/images/pics/
export const ABOUT_PICS = [
  "pic_01.jpg", "pic_02.jpg", "pic_03.jpg", "pic_04.jpg", "pic_05.jpg",
  "pic_06.jpg", "pic_07.jpg", "pic_08.jpg", "pic_09.jpg", "pic_10.jpg",
  "pic_11.jpg", "pic_12.jpg", "pic_13.jpg", "pic_14.jpg", "pic_15.jpg",
  "pic_16.jpg", "pic_17.jpg", "pic_18.jpg", "pic_19.jpg", "pic_20.jpg",
  "pic_21.jpg", "pic_22.jpg", "pic_23.jpg", "pic_24.jpg",
];

// File names for /animation-vfx — 78 lighting/render stills under public/images/render-light/
export const RENDER_LIGHT_PICS = [
  "rl_01.png", "rl_02.png", "rl_03.png", "rl_04.png", "rl_05.png",
  "rl_06.png", "rl_07.png", "rl_08.png", "rl_09.png", "rl_10.png",
  "rl_11.png", "rl_12.png", "rl_13.png", "rl_14.png", "rl_15.png",
  "rl_16.png", "rl_17.png", "rl_18.png", "rl_19.png", "rl_20.png",
  "rl_21.png", "rl_22.png", "rl_23.png", "rl_24.png", "rl_25.png",
  "rl_26.png", "rl_27.png", "rl_28.png", "rl_29.png", "rl_30.png",
  "rl_31.png", "rl_32.png", "rl_33.png", "rl_34.png", "rl_35.png",
  "rl_36.jpg", "rl_37.jpg", "rl_38.png", "rl_39.png", "rl_40.png",
  "rl_41.png", "rl_42.png", "rl_43.png", "rl_44.png", "rl_45.png",
  "rl_46.png", "rl_47.png", "rl_48.png", "rl_49.png", "rl_50.png",
  "rl_51.png", "rl_52.png", "rl_53.png", "rl_54.png", "rl_55.png",
  "rl_56.png", "rl_57.png", "rl_58.png", "rl_59.png", "rl_60.png",
  "rl_61.png", "rl_62.png", "rl_63.png", "rl_64.png", "rl_65.png",
  "rl_66.png", "rl_67.jpg", "rl_68.jpg", "rl_69.jpg", "rl_70.jpg",
  "rl_71.jpg", "rl_72.jpg", "rl_73.jpg", "rl_74.jpg", "rl_75.jpg",
  "rl_76.jpg", "rl_77.jpg", "rl_78.jpg",
];

// File names for /motion-graphics — 136 architectural render stills under public/images/archi-renders/
export const ARCHI_RENDER_PICS = Array.from({ length: 131 }, (_, i) =>
  `ar_${String(i + 1).padStart(3, "0")}.jpg`
);
