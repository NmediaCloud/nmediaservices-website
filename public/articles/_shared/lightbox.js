/**
 * Click an article image to read it full size.
 *
 * Screenshots of real software carry detail that a column-width figure
 * throws away. Any image that is not already inside a link becomes its own
 * trigger; images that already link somewhere are left alone, because
 * hijacking an existing destination is worse than a small picture.
 *
 * Self-contained on purpose: one script tag per article, no stylesheet edit,
 * no dependency. Closes on click, on Escape, and restores the scroll lock.
 */
(function () {
  "use strict";

  var CSS =
    ".nm-zoomable{cursor:zoom-in}" +
    ".nm-lb{position:fixed;inset:0;z-index:9999;display:none;align-items:center;" +
    "justify-content:center;background:rgba(42,38,34,.92);padding:2.5rem 1.5rem;" +
    "backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}" +
    ".nm-lb.open{display:flex}" +
    ".nm-lb img{max-width:100%;max-height:100%;width:auto;height:auto;" +
    "object-fit:contain;box-shadow:0 24px 80px rgba(0,0,0,.45);cursor:zoom-out}" +
    ".nm-lb-close{position:absolute;top:1rem;right:1.25rem;background:none;border:0;" +
    "color:#FAF8F5;font:500 2rem/1 'Space Grotesk',system-ui,sans-serif;cursor:pointer;" +
    "padding:.25rem .6rem;opacity:.75}" +
    ".nm-lb-close:hover{opacity:1}" +
    ".nm-lb-hint{position:absolute;bottom:1.1rem;left:0;right:0;text-align:center;" +
    "color:#DDD6CF;font:400 .7rem/1 'JetBrains Mono',ui-monospace,monospace;" +
    "letter-spacing:2px;text-transform:uppercase;opacity:.7}";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var imgs = [].slice
      .call(document.querySelectorAll("article img, figure img, .body img, .hero img"))
      .filter(function (img) {
        // Leave anything that already has a destination, and skip the small
        // chrome images (brand mark, avatars) that gain nothing from zooming.
        return !img.closest("a") && img.naturalWidth !== 0 !== false && !img.closest(".nm-brand") &&
               !img.closest(".nm-site-header");
      });
    if (!imgs.length) return;

    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var box = document.createElement("div");
    box.className = "nm-lb";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="nm-lb-close" aria-label="Close">×</button>' +
      '<img alt="">' +
      '<p class="nm-lb-hint">Click anywhere or press Esc to close</p>';
    document.body.appendChild(box);

    var full = box.querySelector("img");
    var lastFocus = null;

    function open(src, alt) {
      lastFocus = document.activeElement;
      full.src = src;
      full.alt = alt || "";
      box.classList.add("open");
      document.body.style.overflow = "hidden";
      box.querySelector(".nm-lb-close").focus();
    }

    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
      full.removeAttribute("src");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    imgs.forEach(function (img) {
      img.classList.add("nm-zoomable");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", "Enlarge image" + (img.alt ? ": " + img.alt : ""));
      img.addEventListener("click", function () {
        open(img.currentSrc || img.src, img.alt);
      });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(img.currentSrc || img.src, img.alt);
        }
      });
    });

    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) close();
    });
  });
})();
