// ==UserScript==
// @name         Github Custom UI like Reverse1999
// @namespace    https://github.com
// @version      1.2.0
// @description  Github Reverse1999 wannabe with a bit animations
// @author       Threeguana
// @match        https://github.com/*
// @updateURL    https://github.com/Threeguana/github-reverse1999-theme/raw/refs/heads/main/Reverse1999.user.js
// @downloadURL  https://github.com/Threeguana/github-reverse1999-theme/raw/refs/heads/main/Reverse1999.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Crimson+Pro:wght@300;400;500&display=swap');

    :root, [data-color-mode] {
      /* Custom Reverse 1999 Palette */
      --r99-navy:        #0d1b2e;
      --r99-navy-mid:    #152641;
      --r99-navy-light:  #1e3557;
      --r99-gold:        #c9a84c;
      --r99-gold-light:  #e2c97e;
      --r99-gold-dim:    #8a6f2e;
      --r99-cream:       #f0e8d2;
      --r99-cream-dim:   #c9bfa0;
      --r99-rose:        #c4836a;
      --r99-rose-light:  #e8a98e;
      --r99-teal:        #4a8fa3;
      --r99-teal-light:  #7bbccc;
      --r99-border:      rgba(201,168,76,0.35);
      --r99-border-strong: rgba(201,168,76,0.65);
      --r99-glow:        0 0 18px rgba(201,168,76,0.15);

      /* Typography */
      --r99-font-title: 'Playfair Display', 'IM Fell English', Georgia, serif;
      --r99-font-body:  'Crimson Pro', Georgia, serif;

      /* Overriding GitHub's Native Variables */
      --color-canvas-default: var(--r99-navy) !important;
      --color-canvas-subtle: var(--r99-navy-mid) !important;
      --color-canvas-inset: rgba(7, 16, 30, 0.8) !important;
      --color-fg-default: var(--r99-cream) !important;
      --color-fg-muted: var(--r99-cream-dim) !important;
      --color-border-default: var(--r99-border) !important;
      --color-border-muted: rgba(201,168,76,0.15) !important;
      --color-accent-fg: var(--r99-gold) !important;
      --color-accent-emphasis: var(--r99-gold-light) !important;
      --color-btn-text: var(--r99-cream) !important;
      --color-btn-bg: var(--r99-navy-mid) !important;
      --color-btn-border: var(--r99-border) !important;
      --color-btn-hover-bg: var(--r99-navy-light) !important;
      --color-btn-hover-border: var(--r99-gold) !important;
    }

    @keyframes r99-fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes r99-floating {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0px); }
    }

    @keyframes r99-pulseGlow {
      0% { box-shadow: 0 0 5px rgba(201,168,76,0.2), inset 0 1px 0 rgba(201,168,76,0.1); }
      50% { box-shadow: 0 0 20px rgba(201,168,76,0.6), inset 0 1px 0 rgba(201,168,76,0.3); border-color: var(--r99-gold-light) !important; }
      100% { box-shadow: 0 0 5px rgba(201,168,76,0.2), inset 0 1px 0 rgba(201,168,76,0.1); }
    }

    main, .Box, .timeline-comment, .Box-row, .BorderGrid-row {
      animation: r99-fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards !important;
      opacity: 0; /* Mulai dari tidak terlihat agar animasinya berjalan mulus */
    }

    .Box:nth-child(1) { animation-delay: 0.1s !important; }
    .Box:nth-child(2) { animation-delay: 0.2s !important; }
    .Box:nth-child(3) { animation-delay: 0.3s !important; }

    .AppHeader-globalBar-start .octicon-mark-github,
    .avatar {
      animation: r99-floating 6s ease-in-out infinite !important;
    }

    .btn, .Button, [class*="btn-"] {
      transition: all 0.3s ease !important;
    }
    .btn:hover, .Button:hover, [class*="btn-"]:hover {
      animation: r99-pulseGlow 2s infinite !important;
      transform: translateY(-2px) !important; /* Sedikit terangkat saat disentuh kursor */
    }

    *, *::before, *::after {
      box-sizing: border-box !important;
    }

    html { scroll-behavior: smooth; }

    body {
      background-color: var(--r99-navy) !important;
      background-image:
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.07) 0%, transparent 70%),
        repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.03) 39px, rgba(201,168,76,0.03) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.03) 39px, rgba(201,168,76,0.03) 40px) !important;
      font-family: var(--r99-font-body) !important;
    }

    h1, h2, h3, h4, h5, h6, .markdown-body h1, .markdown-body h2 {
      font-family: var(--r99-font-title) !important;
      color: var(--r99-gold-light) !important;
      letter-spacing: 0.02em !important;
    }

    p, li, td, th, span:not([class*="label"]):not([class*="Counter"]) {
      font-family: var(--r99-font-body) !important;
    }

    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: var(--r99-navy); }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, var(--r99-gold-dim), var(--r99-gold));
      border-radius: 4px;
      border: 1px solid var(--r99-navy);
    }
    ::-webkit-scrollbar-thumb:hover { background: var(--r99-gold-light); }

    .AppHeader, header[role="banner"] {
      background: linear-gradient(180deg, #07101e 0%, #0d1b2e 60%, rgba(13,27,46,0.95) 100%) !important;
      border-bottom: 1px solid var(--r99-border-strong) !important;
      box-shadow: 0 2px 24px rgba(0,0,0,0.5), var(--r99-glow) !important;
    }

    .AppHeader-globalBar-start .octicon-mark-github {
      color: var(--r99-gold) !important;
      filter: drop-shadow(0 0 8px rgba(201,168,76,0.5)) !important;
    }

    .Box, .box, [class*="Box--"], .border, .BorderGrid, .TimelineItem-badge {
      background: rgba(21,38,65,0.7) !important;
      border-color: var(--r99-border) !important;
      backdrop-filter: blur(4px) !important;
      box-shadow: 0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,168,76,0.08) !important;
      transition: transform 0.3s ease, box-shadow 0.3s ease !important; /* Tambahan transisi halus */
    }

    .Box:hover {
      box-shadow: 0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,168,76,0.15) !important;
    }

    .Box-header {
      background: linear-gradient(135deg, rgba(30,53,87,0.9) 0%, rgba(21,38,65,0.8) 100%) !important;
      border-bottom: 1px solid var(--r99-border) !important;
    }

    .markdown-body code, .markdown-body pre, .react-code-view {
      background: rgba(7,16,30,0.9) !important;
      border: 1px solid rgba(201,168,76,0.2) !important;
      font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
    }

    .pl-k { color: var(--r99-rose) !important; } /* keywords */
    .pl-s, .pl-pds { color: var(--r99-teal-light) !important; } /* strings */
    .pl-c { color: #6a7d6a !important; font-style: italic !important; } /* comments */
    .pl-en { color: var(--r99-gold-light) !important; } /* functions */
    .pl-c1 { color: var(--r99-gold) !important; } /* constants */

    .markdown-body h1::before, .markdown-body h2::before {
      content: '◆ '; color: var(--r99-gold) !important; font-size: 0.7em !important;
    }

    .markdown-body blockquote {
      border-left: 3px solid var(--r99-gold) !important;
      background: rgba(201,168,76,0.06) !important;
      color: var(--r99-cream-dim) !important;
      font-style: italic !important;
    }

    hr, .markdown-body hr {
      height: 1px !important;
      background: linear-gradient(90deg, transparent, var(--r99-gold-dim), var(--r99-gold), var(--r99-gold-dim), transparent) !important;
      border: none !important;
    }

    .js-calendar-graph-svg rect[data-level="0"] { fill: rgba(21,38,65,0.8) !important; stroke: rgba(201,168,76,0.1) !important; }
    .js-calendar-graph-svg rect[data-level="1"] { fill: rgba(138,111,46,0.35) !important; stroke: none !important; }
    .js-calendar-graph-svg rect[data-level="2"] { fill: rgba(180,145,60,0.55) !important; stroke: none !important; }
    .js-calendar-graph-svg rect[data-level="3"] { fill: rgba(201,168,76,0.75) !important; stroke: none !important; }
    .js-calendar-graph-svg rect[data-level="4"] { fill: var(--r99-gold) !important; stroke: none !important; }

    ::selection {
      background: rgba(201,168,76,0.25) !important;
      color: var(--r99-cream) !important;
    }
  `);
})();
