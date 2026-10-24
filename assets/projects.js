/* ------------------------------------------------------------------
   Saif — project cards

   To add a card: copy one block and drop it into the right list below.

     {
       title:      "Name of the thing",
       icon:       "something.webp",     // file lives in /assets/ — optional
       banner:     ["b/one.webp"],       // 256 x 135 background image(s) shown at the
                                         // top of the card, files live in /assets/.
                                         // Several images switch in order, instantly,, e.g.
                                         // ["b/a.webp", "b/b.webp"]; a plain string works
                                         // for one image. No banner? use  banner: ""
                                         // (or delete the line) and no space is reserved.
       video:      "b/clip.mp4",         // optional — an mp4 in /assets/ that opens in a pop-up when the banner
                                         // is clicked (time + seek bar + full screen, no download / save options)
                                         // no banner image? the first frame of the video is used as the banner
       videoLabel: "Prototype",          // optional — small text under the play icon of the banner
       center:     true,                 // optional — centres the icon, title, tags and years (like a card with no icon)
       iconRatio:  "1016 / 561",         // optional — for a NON-square icon (use with center: true): the icon's width / height,
                                         // e.g. "1016 / 561" or 1.811. It keeps the same height as a square icon, gets
                                         // wider to match, and has no rounded clipping (so transparent corners stay as drawn)
       tagsSuffix: "project",            // optional — plain text after the tags, e.g. "ETL pipeline project"
       years:      "2022 – 2023",        // duration of the project
       note:       "ownership transferred", // optional — small line under the years, shown in brackets
       subtitle:   "Secondary title",    // optional — one black line under the years, a bit bigger than desc
       subtitleTag: {                    // optional — makes the start of the subtitle (label) clickable,
                     label: "MASL",      // opening the same pop-up as the tags, but without Wikipedia
                     title: "MASL",      // (no "wiki" link = no picture, no "Read full article")
                     text:  "Line one\nLine two"
                   },
       desc:       "One or two lines.",
       tags:       [{                    // optional — small coloured links under the title
                     label: "ISLR",      // that open a Wikipedia pop-up when clicked
                     wiki:  "https://en.wikipedia.org/wiki/Sign_language_recognition",
                     bold:  "Isolated sign language recognition (ISLR)", // optional — bold part of text
                     text:  "Custom description shown in the pop-up."
                   }],
       descTags:   [{ label: "FFmpeg", wiki: "https://en.wikipedia.org/wiki/FFmpeg", images: 2, text: "..." }],
                                         // optional — in desc, **bold** makes text bold, [[FFmpeg]] becomes a blue
                                         // link (matching label) that opens the Wikipedia pop-up; \n = new paragraph (with a gap);
                                         // {br} = new line with NO gap (same spacing as a wrapped line);
                                         // images: 2 shows the first two pictures of the Wikipedia page
                                         // blue: true makes that link ink blue instead of plum
       availableOn: ["debian", "redhat", "arch", "suse", "void"],
                                         // optional — "Available on:" row of Linux logos under the description
                                         // (choose from debian, redhat, arch, suse, void)
       distroList: [                     // optional — names listed under each logo in the "Distros" pop-up
                     { key: "debian", items: ["Ubuntu", "..."] }   // (same keys as availableOn; pop-up follows availableOn order)
                   ],
       command:    "curl -fsSL https://...", // optional — adds a Download button that opens a pop-up with this command
       source:     "c/Name=1.0.0.zip",   // optional — adds a "Source code" button that downloads this file from /assets/
       sourceBlue: true,                 // optional — makes the "Source code" button blue (same blue as Blueprints)
       downloadBlue: true,               // optional — makes the "Download" button blue too
       titlePrefix: "GPL-3.0 licensed",    // optional — small text right after the title, on the same line (Pluk GPL-3.0 licensed)
       twoRows:    true,                 // optional — Download + Source code on one line, the extra buttons on a second line
       formats:    [                     // optional — rows of the "Supported Formats" pop-up, each row is
                     ["Codecs", "H.264, H.265, VP9, VP8, AV1"]   // [item, what it covers]
                   ],
       buttons:    [{ label: "Distros", url: "https://..." }], // optional — extra centered buttons;
                                         // { label: "Supported Formats", popup: "formats" } opens the formats pop-up (needs formats);
                                         // { label: "Distros", popup: "distros" } opens the distro pop-up instead of a link;
                                         // with command/buttons, Download / Blueprints are replaced
       visit:      "https://...",        // optional — Visit button (opens the website) shown first in the row
       download:   "https://...",        // Download button link
       blueprints: "https://..."         // Blueprints button link
     },

   Commas between blocks, trailing comma on the last one is fine.
   A button with an empty link ("") shows up greyed out and does nothing.
------------------------------------------------------------------ */

var PROJECTS = [
  {
    title: "Untitled",
    tags: [
      {
        label: "Embedded system",
        wiki: "https://en.wikipedia.org/wiki/Embedded_system",
        bold: "embedded system",
        text: "An embedded system is a dedicated computer system combining hardware and software designed to perform a specific function. It is embedded as part of a complete device.\nUnlike general computers like laptops, they operate under strict limits for power, memory, and timing."
      }
    ],
    banner: ["b/i.webp"],
    video: "b/20230325_103823.mp4",
    videoLabel: "Prototype",
    years: "Aug 2022 - Dec 2025",
    note: "ownership transferred",
    desc: "A sign language recognition app that turns hand gestures into text in real time.",
    blueprints: ""
  },
  {
    title: "Hidden Ball",
    icon: "hiddenball.webp",
    iconRatio: "1016 / 561",
    center: true,
    tags: [
      {
        label: "ETL",
        wiki: "https://en.wikipedia.org/wiki/Extract,_transform,_load",
        bold: "Extract, transform, load (ETL)",
        text: "Extract, transform, load (ETL) is a three-phase computing process where data are extracted from an input source, transformed (including cleaning), and loaded into an output data container.\nETL pipelines are fully automatic and run with zero human intervention during their normal day-to-day operations."
      }
    ],
    tagsSuffix: "project",
    banner: ["hb/chrome_572_2021-09-21.webp", "hb/chrome_573_2021-09-21.webp", "hb/chrome_849201_2022-07-07_14-01-12.webp", "hb/chrome_574_2021-09-21.webp"],
    years: "Apr 2021 - Jan 2022",
    desc: "**Hidden Ball** is a MLB archive | 1980 - today\nIt pulls data every 100s (3s if a game is live) to keep things up to date.{br}**Hidden Ball was primarily built to test an ETL workflow/fan project.**",
    visit: "https://hiddenball.github.io/",
    blueprints: "../assets/hb/728829.html"
  },
  {
    title: "Pluk",
    titlePrefix: "GPL-3.0 licensed",
    sourceBlue: true,
    downloadBlue: true,
    version: "1.13.0",
    icon: "pluk.webp",
    banner: ["b/Screenshot (945) 2021-11-13.webp"],
    video: "b/2021-11-13 19-12-00.mkv",
    years: "Late 2021",
    desc: "**Pluk is a Linux tray program that grabs text from anywhere on your screen**. every text is saved to a local [[SQLite]] history, sorted by time/date for each entry.\nThe default shortcut text capture is **Ctrl+Shift+P**, which can be changed in Pluk's settings.\nOn GNOME, Pluk registers the shortcut with the desktop itself, so capture works even when the tray app is closed.",
    availableOn: ["debian", "redhat"],
    distroList: [
      { key: "debian", items: ["Ubuntu", "Linux Mint"] },
      { key: "redhat", items: ["Fedora", "Nobara (unstable)"] }
    ],
    descTags: [
      {
        label: "SQLite",
        wiki: "https://en.wikipedia.org/wiki/SQLite",
        images: 2,
        text: "SQLite is a free and open-source relational database engine written in C. Instead of running as a separate server, it is embedded directly into the application that uses it."
      }
    ],
    command: "curl -fsSL https://osaif.pages.dev/pluk | bash",
    source: "c/Pluk-1.13.0.zip",
    twoRows: true,
    buttons: [
      { label: "Supported Distros", popup: "distros" }
    ]
  }
];

/* ---------------- renderer — nothing below needs editing ---------------- */

(function () {
  var ICON_DIR = '../assets/';

  var SVG_DOWNLOAD = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10"/></svg>';
  var SVG_VISIT = '<svg viewBox="0 0 362.667 362.667" fill="currentColor" aria-hidden="true"><path d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L0,362.666667 L0,64 L128,63.999444 Z M362.666667,0 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,0 L362.666667,0 Z"/></svg>';
  var SVG_BLUEPRINT = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 4 2 8l3.5 4M10.5 4 14 8l-3.5 4"/></svg>';

  function el(tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  function buildButton(label, svg, url, variant, soon) {
    var btn = el(url ? 'a' : 'span', 'btn btn--' + variant);
    if (url) {
      btn.href = url;
      btn.target = '_blank';
      btn.rel = 'noopener';
    } else {
      btn.setAttribute('aria-disabled', 'true');
      // soon = looks exactly like an active button (no page yet), but does nothing
      btn.classList.add(soon ? 'btn--soon' : 'btn--disabled');
    }
    btn.innerHTML = svg;
    btn.appendChild(document.createTextNode(label));
    return btn;
  }

  // load one banner image completely (resolves with the <img>, or null if it failed)
  function loadImage(src) {
    return new Promise(function (resolve) {
      var im = new Image();
      im.alt = '';
      im.decoding = 'async';
      im.draggable = false;
      im.onload = function () {
        if (im.decode) im.decode().then(function () { resolve(im); }, function () { resolve(im); });
        else resolve(im);
      };
      im.onerror = function () { resolve(null); };
      im.src = ICON_DIR + src;
    });
  }

  // load the first frame of a video to use as the banner (resolves with the <video>, or null if it failed)
  function loadVideoFrame(src) {
    return new Promise(function (resolve) {
      var v = document.createElement('video');
      var done = false;
      function finish(res) {
        if (done) return;
        done = true;
        resolve(res);
      }
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.setAttribute('playsinline', '');
      v.setAttribute('disablepictureinpicture', '');
      v.setAttribute('disableremoteplayback', '');
      v.controls = false;
      v.draggable = false;
      v.preload = 'metadata';
      v.onloadeddata = function () { finish(v); };
      v.onloadedmetadata = function () { setTimeout(function () { finish(v); }, 1500); };
      v.onerror = function () { finish(null); };
      v.src = ICON_DIR + src + '#t=0.1';
    });
  }

  // build the banner from images that are already loaded
  function buildBanner(imgs, videoSrc, videoLabel) {
    var banner = el('div', 'card__banner');
    imgs.forEach(function (im, i) {
      if (!i) im.className = 'is-active';
      banner.appendChild(im);
    });

    if (imgs.length > 1) {
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      var cur = 0;
      var timer = null;

      // swap instantly — the old image disappears, the new one appears
      function show(n) {
        imgs[cur].classList.remove('is-active');
        cur = (n + imgs.length) % imgs.length;
        imgs[cur].classList.add('is-active');
      }

      function startTimer() {
        if (reduce) return;
        clearInterval(timer);
        timer = setInterval(function () { show(cur + 1); }, 2900);
      }
      startTimer();

      function go(dir) { show(cur + dir); startTimer(); }

      // swipe (touch) / drag (mouse) left or right
      // (a second finger = pinch-zoom, which is never treated as a swipe)
      var sx = 0, sy = 0, tracking = false, fingers = 0;
      banner.addEventListener('pointerdown', function (e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        fingers++;
        if (fingers > 1 || isZoomed()) { tracking = false; return; }
        tracking = true; sx = e.clientX; sy = e.clientY;
      });
      banner.addEventListener('pointerup', function (e) {
        fingers = Math.max(0, fingers - 1);
        if (!tracking) return;
        tracking = false;
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      });
      banner.addEventListener('pointercancel', function () {
        fingers = Math.max(0, fingers - 1);
        tracking = false;
      });

      // sideways scroll (trackpad / horizontal wheel)
      var wheelLock = false;
      banner.addEventListener('wheel', function (e) {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 4) return;
        e.preventDefault();
        if (wheelLock) return;
        wheelLock = true;
        setTimeout(function () { wheelLock = false; }, 450);
        go(e.deltaX > 0 ? 1 : -1);
      }, { passive: false });
    }
    if (videoSrc) attachVideo(banner, videoSrc, videoLabel);
    return banner;
  }

  // pinched-in on a phone? (then a finger on the banner must pan the page, not swipe it)
  function isZoomed() {
    return !!(window.visualViewport && window.visualViewport.scale > 1.01);
  }

  // ---- video: clicking the banner opens it in a pop-up (page dims 30%), no download / save options ----
  var SVG_PLAY = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="31" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.85)" stroke-width="1.5"/><path d="M26 20.5v23L45 32z" fill="#fff"/></svg>';
  var SVG_P = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var SVG_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
  var SVG_FS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5v2H6v3zM15 4h5v5h-2V6h-3zM4 15h2v3h3v2H4zM18 15h2v5h-5v-2h3z"/></svg>';
  var SVG_FS_EXIT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4v5H4V7h3V4zM15 4h2v3h3v2h-5zM4 15h5v5H7v-3H4zM15 15h5v2h-3v3h-2z"/></svg>';

  var vOverlay = null, vModal = null, vStage = null, vEl = null, vLast = null;
  var vUI = {};

  function fmtTime(t) {
    if (!isFinite(t) || t < 0) t = 0;
    var s = Math.floor(t), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
    return (h ? h + ':' + (m < 10 ? '0' : '') + m : m) + ':' + (ss < 10 ? '0' : '') + ss;
  }

  function fsElement() { return document.fullscreenElement || document.webkitFullscreenElement || null; }

  function unlockOrientation() {
    try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (err) {}
  }

  function lockLandscape() {
    try {
      if (screen.orientation && screen.orientation.lock) {
        var p = screen.orientation.lock('landscape');
        if (p && p.catch) p.catch(function () {});
      }
    } catch (err) {}
  }

  function toggleFullscreen() {
    if (fsElement()) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      return;
    }
    var req = vStage.requestFullscreen || vStage.webkitRequestFullscreen;
    if (req) {
      var p = req.call(vStage);
      if (p && p.then) p.then(lockLandscape, function () {});
      else lockLandscape();
    } else if (vEl.webkitEnterFullscreen) {
      vEl.webkitEnterFullscreen();   // iPhone: only the video itself can go full screen
    }
  }

  function ensureVideoModal() {
    if (vModal) return;
    vOverlay = el('div', 'vid-overlay');
    vModal = el('div', 'vid-modal');
    vModal.setAttribute('role', 'dialog');
    vModal.setAttribute('aria-modal', 'true');
    vModal.setAttribute('aria-label', 'Video');
    vModal.innerHTML =
      '<div class="vid-stage">' +
        '<button type="button" class="vid-close" aria-label="Close">\u2715</button>' +
        '<video class="vid-video"></video>' +
        '<span class="vid-bigplay">' + SVG_PLAY + '</span>' +
        '<div class="vid-bar">' +
          '<button type="button" class="vid-btn vid-pp" aria-label="Play">' + SVG_P + '</button>' +
          '<span class="vid-time vid-cur">0:00</span>' +
          '<div class="vid-seek" role="slider" tabindex="0" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
            '<span class="vid-track"><span class="vid-fill"></span><span class="vid-thumb"></span></span>' +
          '</div>' +
          '<span class="vid-time vid-dur">0:00</span>' +
          '<button type="button" class="vid-btn vid-fs" aria-label="Full screen">' + SVG_FS + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(vOverlay);
    document.body.appendChild(vModal);

    vStage = vModal.querySelector('.vid-stage');
    vEl = vModal.querySelector('.vid-video');
    vUI.pp = vModal.querySelector('.vid-pp');
    vUI.cur = vModal.querySelector('.vid-cur');
    vUI.dur = vModal.querySelector('.vid-dur');
    vUI.seek = vModal.querySelector('.vid-seek');
    vUI.track = vModal.querySelector('.vid-track');
    vUI.fill = vModal.querySelector('.vid-fill');
    vUI.thumb = vModal.querySelector('.vid-thumb');
    vUI.fs = vModal.querySelector('.vid-fs');

    vEl.controls = false;
    vEl.preload = 'metadata';
    vEl.draggable = false;
    vEl.playsInline = true;
    vEl.setAttribute('playsinline', '');
    vEl.setAttribute('webkit-playsinline', '');
    vEl.setAttribute('disablepictureinpicture', '');
    vEl.setAttribute('disableremoteplayback', '');
    vEl.setAttribute('controlslist', 'nodownload noplaybackrate noremoteplayback nofullscreen');
    vEl.addEventListener('contextmenu', function (e) { e.preventDefault(); });

    var dragging = false;

    function setProgress(r) {
      r = Math.min(1, Math.max(0, r || 0));
      vUI.fill.style.width = (r * 100) + '%';
      vUI.thumb.style.left = (r * 100) + '%';
      vUI.seek.setAttribute('aria-valuenow', String(Math.round(r * 100)));
    }
    function sync() {
      vUI.cur.textContent = fmtTime(vEl.currentTime);
      vUI.dur.textContent = fmtTime(vEl.duration);
      if (!dragging) setProgress(vEl.duration ? vEl.currentTime / vEl.duration : 0);
    }
    function setPlaying(on) {
      vStage.classList.toggle('is-playing', on);
      vUI.pp.innerHTML = on ? SVG_PAUSE : SVG_P;
      vUI.pp.setAttribute('aria-label', on ? 'Pause' : 'Play');
    }
    function toggle() {
      if (vEl.paused || vEl.ended) {
        var p = vEl.play();
        if (p && p.catch) p.catch(function () { setPlaying(false); });
      } else {
        vEl.pause();
      }
    }

    vEl.addEventListener('loadedmetadata', sync);
    vEl.addEventListener('durationchange', sync);
    vEl.addEventListener('timeupdate', sync);
    vEl.addEventListener('play', function () { setPlaying(true); });
    vEl.addEventListener('playing', function () { setPlaying(true); });
    vEl.addEventListener('pause', function () { if (!vEl.ended) setPlaying(false); });
    vEl.addEventListener('ended', function () {
      setPlaying(false);
      vEl.currentTime = 0;
      sync();
    });

    vEl.addEventListener('click', toggle);
    vUI.pp.addEventListener('click', toggle);
    vUI.fs.addEventListener('click', toggleFullscreen);
    vModal.querySelector('.vid-close').addEventListener('click', closeVideo);
    vOverlay.addEventListener('click', closeVideo);

    // seek bar: tap or drag anywhere along it
    function seekFrom(e) {
      var rect = vUI.track.getBoundingClientRect();
      if (!rect.width) return;
      var r = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      setProgress(r);
      if (vEl.duration) {
        vEl.currentTime = Math.min(r * vEl.duration, vEl.duration - 0.1);
        vUI.cur.textContent = fmtTime(vEl.currentTime);
      }
    }
    vUI.seek.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      vUI.seek.classList.add('is-drag');
      try { vUI.seek.setPointerCapture(e.pointerId); } catch (err) {}
      seekFrom(e);
    });
    vUI.seek.addEventListener('pointermove', function (e) { if (dragging) seekFrom(e); });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      vUI.seek.classList.remove('is-drag');
      sync();
    }
    vUI.seek.addEventListener('pointerup', endDrag);
    vUI.seek.addEventListener('pointercancel', endDrag);
    vUI.seek.addEventListener('keydown', function (e) {
      if (!vEl.duration) return;
      var d = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0;
      if (!d) return;
      e.preventDefault();
      e.stopPropagation();
      vEl.currentTime = Math.min(Math.max(0, vEl.currentTime + d), vEl.duration - 0.1);
      sync();
    });

    function onFsChange() {
      var on = fsElement() === vStage;
      vUI.fs.innerHTML = on ? SVG_FS_EXIT : SVG_FS;
      vUI.fs.setAttribute('aria-label', on ? 'Exit full screen' : 'Full screen');
      if (!on) unlockOrientation();
    }
    document.addEventListener('fullscreenchange', onFsChange);
    document.addEventListener('webkitfullscreenchange', onFsChange);

    document.addEventListener('keydown', function (e) {
      if (!vModal.classList.contains('is-open')) return;
      if (e.key === 'Escape' && !fsElement()) { closeVideo(); return; }
      if ((e.key === ' ' || e.key === 'k') && e.target.tagName !== 'BUTTON') { e.preventDefault(); toggle(); }
    });
  }

  function closeVideo() {
    if (!vModal || !vModal.classList.contains('is-open')) return;
    if (fsElement()) { try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (err) {} }
    unlockOrientation();
    vEl.pause();
    vEl.removeAttribute('src');
    vEl.load();
    vStage.classList.remove('is-playing');
    vUI.pp.innerHTML = SVG_P;
    vUI.cur.textContent = '0:00';
    vUI.dur.textContent = '0:00';
    vUI.fill.style.width = '0%';
    vUI.thumb.style.left = '0%';
    vModal.classList.remove('is-open');
    vOverlay.classList.remove('is-open');
    if (vLast && vLast.focus) vLast.focus();
  }

  function openVideo(src, opener) {
    ensureVideoModal();
    vLast = opener;
    vEl.src = ICON_DIR + src;
    vModal.classList.add('is-open');
    vOverlay.classList.add('is-open');
    var p = vEl.play();
    if (p && p.catch) p.catch(function () {});
  }

  function attachVideo(banner, src, label) {
    banner.classList.add('card__banner--video');
    banner.setAttribute('role', 'button');
    banner.setAttribute('tabindex', '0');
    banner.setAttribute('aria-label', 'Play video');
    banner.setAttribute('aria-haspopup', 'dialog');

    // icon + label sit together as one group, centred in the banner
    var group = el('span', 'card__play-group');
    var play = el('span', 'card__play');
    play.innerHTML = SVG_PLAY;
    group.appendChild(play);

    if (label) {
      var tag = el('span', 'card__play-label');
      tag.textContent = label;
      group.appendChild(tag);
    }
    banner.appendChild(group);

    banner.addEventListener('click', function () { openVideo(src, banner); });
    banner.addEventListener('keydown', function (e) {
      if (e.target !== banner) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(src, banner); }
    });
  }

  // ---- Wikipedia pop-up (one shared dialog) ----
  var popup = null, overlay = null, lastFocus = null, reqId = 0;

  function ensurePopup() {
    if (popup) return;
    overlay = el('div', 'wiki-overlay');
    popup = el('div', 'wiki-popup');
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-labelledby', 'wiki-title');
    popup.setAttribute('tabindex', '-1');
    popup.innerHTML =
      '<h3 class="wiki-title" id="wiki-title"></h3>' +
      '<div class="wiki-imgs" hidden></div>' +
      '<div class="wiki-text"></div>' +
      '<div class="wiki-distros" hidden></div>' +
      '<div class="wiki-formats" hidden></div>' +
      '<pre class="wiki-code" hidden tabindex="0" role="button" aria-label="Copy command"><code></code></pre>' +
      '<div class="wiki-foot">' +
        '<a class="wiki-link" target="_blank" rel="noopener">Read full article</a>' +
        '<div class="wiki-powered">Powered by <svg class="wiki-powered__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" fill="#000000" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M0,0v455h455V0H0z M385,118.141c0,1.918-1.558,3.47-3.477,3.47h-9.736 c-3.546,0-6.744,2.15-8.081,5.439l-88.815,217.909L230.16,244.55L182.3,344.958L90.709,126.964 c-1.364-3.239-4.535-5.345-8.049-5.345h-9.181c-1.918,0-3.479-1.56-3.479-3.479v-8.099h79.147l-0.223,8.193 c-0.05,1.886-1.593,3.385-3.477,3.385h-13.249c-4.926,0-8.302,4.971-6.495,9.548l64.305,162.675l32.522-70.485l-41.099-96.434 c-1.373-3.215-4.526-5.312-8.031-5.312h-6.392c-1.918,0-3.479-1.552-3.479-3.47v-8.099h59.436v8.099c0,1.918-1.56,3.47-3.477,3.47 c-5.013,0-8.398,5.133-6.421,9.745l24.288,56.572l24.799-56.52c2.021-4.614-1.355-9.788-6.401-9.788h-9.284 c-1.927,0-3.479-1.56-3.479-3.479v-8.099h62.242v8.099c0,1.918-1.552,3.479-3.479,3.479h-10.358c-3.385,0-6.471,1.962-7.903,5.03 l-38.312,81.925l35.772,84.058l62.589-161.542c1.739-4.57-1.637-9.472-6.53-9.472H321.54c-1.918,0-3.479-1.56-3.479-3.479v-8.099 H385V118.141z"/></svg></div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    overlay.addEventListener('click', closePopup);

    // the install command: one click / tap copies it straight to the clipboard (silently)
    var codeBox = popup.querySelector('.wiki-code');
    function copyCommand() {
      var text = codeBox.firstChild.textContent;
      if (!text) return;
      copyText(text).catch(function () {}).then(function () {
        var sel = window.getSelection && window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();   // nothing stays highlighted
        try { codeBox.focus({ preventScroll: true }); } catch (err) {}
      });
    }
    codeBox.addEventListener('click', copyCommand);
    codeBox.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyCommand(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && popup.classList.contains('is-open')) closePopup();
    });
    window.addEventListener('resize', function () {
      if (popup.classList.contains('is-open')) fitCode();
    });
  }

  // copy text to the user's clipboard (modern API first, old method as a fallback)
  function copyText(text) {
    function legacy() {
      return new Promise(function (resolve, reject) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.setAttribute('aria-hidden', 'true');
        ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px;';
        document.body.appendChild(ta);
        ta.focus({ preventScroll: true });
        ta.select();
        ta.setSelectionRange(0, text.length);
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
        ok ? resolve() : reject();
      });
    }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(legacy);
    }
    return legacy();
  }

  // the install command always stays on ONE line: the text shrinks to fit the pop-up's width
  function fitCode() {
    if (!popup) return;
    var pre = popup.querySelector('.wiki-code');
    if (pre.hidden) return;
    var code = pre.firstChild;
    code.style.fontSize = '';
    var base = parseFloat(getComputedStyle(code).fontSize);
    var avail = code.clientWidth, need = code.scrollWidth;
    if (avail && need > avail) code.style.fontSize = (Math.floor(base * avail / need * 10) / 10) + 'px';
  }

  function closePopup() {
    if (!popup) return;
    popup.classList.remove('is-open');
    overlay.classList.remove('is-open');
    reqId++;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // plain text with [label](https://...) markdown links turned into real links
  function richText(parent, str) {
    var re = /\[(\[\d+\]|[^\[\]]+)\]\((https?:\/\/[^)\s]+)\)/g, last = 0, m;
    while ((m = re.exec(str))) {
      if (m.index > last) parent.appendChild(document.createTextNode(str.slice(last, m.index)));
      var a = document.createElement('a');
      a.href = m[2];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = m[1];
      parent.appendChild(a);
      last = re.lastIndex;
    }
    if (last < str.length) parent.appendChild(document.createTextNode(str.slice(last)));
  }

  function openWiki(tag, opener) {
    ensurePopup();
    var my = ++reqId;
    lastFocus = opener;

    var url = tag.wiki || '';
    var slug = url.split('/wiki/')[1] || '';
    var fallbackTitle = tag.title || decodeURIComponent(slug).replace(/_/g, ' ') || tag.label || '';

    var titleEl = popup.querySelector('.wiki-title');
    var imgsEl = popup.querySelector('.wiki-imgs');
    var textEl = popup.querySelector('.wiki-text');
    var linkEl = popup.querySelector('.wiki-link');
    var codeEl = popup.querySelector('.wiki-code');

    titleEl.textContent = fallbackTitle;
    popup.querySelector('.wiki-powered').hidden = !url;   // "Powered by" only for Wikipedia pop-ups
    popup.querySelector('.wiki-foot').hidden = !url;      // the link + "Powered by" row
    if (url) { linkEl.href = url; linkEl.hidden = false; }
    else { linkEl.removeAttribute('href'); linkEl.hidden = true; }
    imgsEl.hidden = true;
    imgsEl.textContent = '';
    codeEl.hidden = !tag.code;
    codeEl.firstChild.textContent = tag.code || '';
    var distEl = popup.querySelector('.wiki-distros');
    distEl.textContent = '';
    distEl.hidden = true;
    if (tag.distros && tag.distros.length) fillDistros(distEl, tag.distros);
    popup.classList.toggle('wiki-popup--distros', !!(tag.distros && tag.distros.length));
    var fmtEl = popup.querySelector('.wiki-formats');
    fmtEl.textContent = '';
    fmtEl.hidden = true;
    if (tag.formats && tag.formats.length) fillFormats(fmtEl, tag.formats);
    popup.classList.toggle('wiki-popup--formats', !!(tag.formats && tag.formats.length));
    popup.scrollTop = 0;

    // custom description; the term is bold, "\n" starts a new paragraph
    textEl.textContent = '';
    String(tag.text || '').split('\n').forEach(function (para, i) {
      if (!para) return;
      var p = document.createElement('p');
      var at = (i === 0 && tag.bold) ? para.indexOf(tag.bold) : -1;
      if (at >= 0) {
        richText(p, para.slice(0, at));
        var b = document.createElement('strong');
        b.textContent = tag.bold;
        p.appendChild(b);
        richText(p, para.slice(at + tag.bold.length));
      } else {
        richText(p, para);
      }
      textEl.appendChild(p);
    });

    popup.classList.add('is-open');
    overlay.classList.add('is-open');
    popup.focus({ preventScroll: true });
    if (tag.code) fitCode();

    // article title + pictures come from Wikipedia; the text stays custom
    // (no wiki link = nothing to fetch)
    if (!slug) return;

    function addImg(src) {
      var im = document.createElement('img');
      im.className = 'wiki-img';
      im.alt = '';
      im.draggable = false;
      im.src = src;
      imgsEl.appendChild(im);
      imgsEl.hidden = false;
    }

    var wantMany = (tag.images || 1) > 1;

    var summaryP = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + slug)
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); });

    summaryP.then(function (data) {
      if (my !== reqId) return;
      if (data.title) titleEl.textContent = data.title;
      if (data.content_urls && data.content_urls.desktop) linkEl.href = data.content_urls.desktop.page;
      if (!wantMany && data.thumbnail && data.thumbnail.source) addImg(data.thumbnail.source);
    }).catch(function () { /* offline: keep the fallback title and custom text */ });

    // several pictures: the first ones of the article, in page order (e.g. logo, then screenshot)
    if (wantMany) {
      fetch('https://en.wikipedia.org/api/rest_v1/page/media-list/' + slug)
        .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
        .then(function (data) {
          if (my !== reqId) return;
          var skip = /icon|question|ambox|edit-clear|padlock|commons-logo|wikiquote|wiktionary|symbol|nuvola|folder/i;
          var found = [];
          (data.items || []).forEach(function (it) {
            if (found.length >= tag.images || it.type !== 'image' || skip.test(it.title || '')) return;
            var set = it.srcset || [];
            var src = set.length ? set[0].src : (it.original && it.original.source);
            if (!src) return;
            found.push(src.indexOf('//') === 0 ? 'https:' + src : src);
          });
          if (!found.length) throw new Error('no pictures');
          found.forEach(addImg);
        })
        .catch(function () {
          // fall back to the single lead picture
          summaryP.then(function (data) {
            if (my !== reqId || imgsEl.childNodes.length) return;
            if (data.thumbnail && data.thumbnail.source) addImg(data.thumbnail.source);
          }).catch(function () {});
        });
    }
  }

  function buildTags(tags) {
    var row = el('p', 'card__tags');
    tags.forEach(function (tag, i) {
      if (i) {
        var sep = el('span', 'card__tag-sep');
        sep.textContent = '/';
        sep.setAttribute('aria-hidden', 'true');
        row.appendChild(sep);
      }
      var b = el('button', 'card__tag');
      b.type = 'button';
      b.textContent = tag.label;
      b.setAttribute('aria-haspopup', 'dialog');
      b.addEventListener('click', function () { openWiki(tag, b); });
      row.appendChild(b);
    });
    return row;
  }

  // ---- Linux distro logos, embedded right here (no image files). Each one is cropped tight to its
  // artwork, so showing them all at the same height makes them the same size. ----
  var DISTROS = {
    debian: {
      name: 'Debian',
      ratio: 0.804,   // width / height of the logo
      svg: '<svg viewBox="1.982 -0.018 19.318 24.035" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g> <path fill="#A80030" fill-rule="evenodd" d="M2.65603874,5.16700815 C2.68642627,5.33364645 3.03933499,4.93419361 2.7631231,5.55645706 C2.23136472,5.92819947 2.69882551,5.71915014 2.65603874,5.16700815 L2.65603874,5.16700815 Z M2.65866423,5.19930536 C2.65706423,5.17900536 2.65606423,5.15910536 2.65376423,5.13840536 C2.65336423,5.16220536 2.65536423,5.18170536 2.65866423,5.19930536 L2.65866423,5.19930536 Z M2.21290675,6.95977879 C1.868546,7.39990489 2.05448766,7.49365067 2.0181823,7.79306417 C2.14278529,7.41066029 2.16532936,7.18103949 2.21290675,6.95977879 L2.21290675,6.95977879 Z M13.0395111,0 C12.6680035,0.0312799047 12.297905,0.0498318001 11.9324561,0.0968925575 L12.0934114,0.118873031 C12.3623434,0.0203366347 12.7543286,0.0648611837 13.0395111,0 L13.0395111,0 Z M12.4285197,0.467238997 L12.4387115,0.427538997 L12.2886995,0.493438997 L12.4285197,0.467238997 L12.4285197,0.467238997 Z M12.0148829,0.309558336 C12.227032,0.34764843 12.4735139,0.376861794 12.4387115,0.427538997 C12.6709155,0.376673927 12.7236592,0.32975407 12.0148829,0.309558336 L12.0148829,0.309558336 Z M9.80002141,13.2015757 C9.66175108,13.0486518 9.57979397,12.8644479 9.48820866,12.6809015 C9.57580179,13.0035166 9.75530899,13.280527 9.92236998,13.5623279 L9.80002141,13.2015757 L9.80002141,13.2015757 Z M14.1172119,12.9648629 C14.2606016,12.8527531 14.3906527,12.7394692 14.5066608,12.629285 C14.1832002,12.7084241 13.8542916,12.7101619 13.5228937,12.6798683 C13.1252256,12.6855982 13.5980875,12.8847845 14.1172119,12.9648629 L14.1172119,12.9648629 Z M15.6571131,12.147875 C15.8942016,11.8210799 16.0668986,11.4631927 16.1274389,11.0931411 C16.0742724,11.3569068 15.9313054,11.5847428 15.7963697,11.8249781 C15.0532137,12.2929556 15.726671,11.5471224 15.795947,11.2635367 C14.9967126,12.269754 15.6861856,11.8669195 15.6571131,12.147875 L15.6571131,12.147875 Z M16.4451694,10.0977732 C16.4930286,9.38167002 16.3039402,9.60800315 16.240488,9.88135006 C16.3145077,9.91995679 16.3734511,10.3861495 16.4451694,10.0977732 L16.4451694,10.0977732 Z M11.8867574,15.2447735 C11.3145606,14.9767808 10.7906457,14.5723025 10.3596781,14.0769904 C10.5883126,14.4117699 10.8349823,14.7369682 11.153934,14.9926086 C10.6143792,14.8097668 9.89357932,13.6851931 9.68312098,13.6393065 C10.6132989,15.3047501 13.4566704,16.5598445 14.9457536,15.9369705 C14.2566564,15.9625674 13.3814766,15.9512484 12.6074633,15.6651265 C12.3129343,15.5135646 11.9222173,15.2147147 11.9101938,15.1117165 C11.8954932,15.1495717 11.871728,15.1878027 11.8867574,15.2447735 L11.8867574,15.2447735 Z M11.9266054,15.0880452 C11.9135054,15.1006452 11.9080054,15.1174452 11.9105054,15.1383452 C11.9171054,15.1216452 11.9226054,15.1049452 11.9266054,15.0880452 L11.9266054,15.0880452 Z M9.12642322,13.5046996 C9.38774663,13.8598158 9.59505819,14.2443332 9.9288514,14.5219071 C9.68871003,14.0531782 9.510377,13.8593931 9.18217284,13.2257637 L9.12642322,13.5046996 L9.12642322,13.5046996 Z M20.4597996,8.57609506 C20.4664689,8.21097497 20.5613419,8.38475222 20.5982578,8.29485772 C20.5265864,8.25366782 20.3385313,7.97374555 20.2238383,7.43682082 C20.3068756,7.31071489 20.4457565,7.76394474 20.5586178,7.78249664 C20.4859601,7.35556821 20.3609344,7.03004115 20.355909,6.70249453 C20.0262019,6.01335032 20.2392904,6.7944086 19.9717204,6.40669747 C19.6206903,5.31185384 20.2629147,6.15251302 20.3062651,5.65513435 C20.8383052,6.42595387 21.1418049,7.6204611 21.2808736,8.11530355 C21.1746347,7.51196773 21.0029709,6.92760651 20.793358,6.36217292 C20.9550648,6.43013391 20.5332088,5.12083977 21.0035345,5.98794127 C20.5010365,4.13960888 18.8535812,2.41254484 17.337727,1.60217926 C17.523058,1.77182343 17.7574695,1.98509978 17.6732579,2.01849319 C16.9195813,1.56953732 17.0519808,1.53468793 16.9441919,1.3450359 C16.3299598,1.09521936 16.2898971,1.36518467 15.8830705,1.34541163 C14.7254322,0.731555248 14.5023868,0.796792166 13.4371322,0.412086912 L13.4859777,0.638560937 C12.7187747,0.383155349 12.5924339,0.735500461 11.7637043,0.639453306 C11.7133089,0.600095108 12.0293017,0.496955963 12.2892631,0.459194636 C11.5478448,0.556979564 11.5825533,0.313080848 10.8571507,0.48605966 C11.0359534,0.36065824 11.2250418,0.277667862 11.4156332,0.171006205 C10.8111232,0.207734262 9.97238965,0.522740749 10.2312708,0.236243124 C9.24524928,0.676275296 7.49385642,1.29388903 6.5109817,2.21547205 L6.4801245,2.00891195 C6.02975963,2.54954706 4.51625373,3.62358439 4.39564292,4.3237658 L4.27526696,4.35189893 C4.0409025,4.74867465 3.88934056,5.19838199 3.70349284,5.60657066 C3.39694038,6.12884174 3.25420821,5.8075417 3.29784038,5.88940487 C2.6950212,7.11176343 2.3956077,8.13874 2.13691443,8.98099605 C2.32116528,9.25659737 2.14132932,10.6396764 2.21102808,11.7466375 C1.908186,17.2136227 6.04793579,22.5218601 10.5729544,23.7472715 C11.236032,23.9847827 12.2225702,23.9755773 13.0613977,24 C12.0715718,23.7167901 11.9434463,23.8500349 10.9793584,23.5137055 C10.2838267,23.1863467 10.1313254,22.8121151 9.63873733,22.3848109 L9.83364965,22.7293126 C8.86754209,22.3873471 9.27173857,22.3060476 8.48579574,22.0570764 L8.69399967,21.7851855 C8.38082489,21.7615612 7.86447163,21.2572784 7.72328936,20.9783424 L7.38071335,20.9918219 C6.96919004,20.4838287 6.74985497,20.1180041 6.76577672,19.8343715 L6.65512288,20.0314443 C6.52972146,19.8161953 5.14067765,18.1269396 5.86138356,18.519911 C5.72748115,18.3976094 5.54947689,18.3208656 5.35649021,17.9703052 L5.50326153,17.8027276 C5.15650547,17.3564488 4.86507633,16.7845338 4.88715074,16.5941303 C5.07210609,16.8439469 5.20041945,16.8906319 5.32755864,16.9332308 C4.45181525,14.7605455 4.40268795,16.8135124 3.7393755,14.7218918 L3.8798063,14.7101971 C3.77211137,14.5484903 3.70682749,14.3725056 3.62040853,14.1998556 L3.6814654,13.5912595 C3.05098276,12.8623344 3.50501104,10.4917309 3.59603275,9.19164225 C3.65910919,8.66293672 4.12229601,8.10013327 4.47464112,7.21762665 L4.2599088,7.18061679 C4.67025794,6.46488936 6.60256701,4.30638808 7.49751984,4.41741765 C7.93111755,3.87279036 7.41157055,4.41544504 7.3267015,4.27825495 C8.27904778,3.29279705 8.57846129,3.58206572 9.22110834,3.40471899 C9.91429169,2.99328962 8.62617958,3.56515766 8.95490038,3.24775587 C10.1529301,2.94181398 9.80401359,2.55213024 11.3671164,2.39667005 C11.53197,2.49050977 10.9844308,2.5415627 10.8470058,2.66339464 C11.8453326,2.17503361 14.0060883,2.28601622 15.4094101,2.93439322 C17.0381256,3.6956315 18.8678121,5.94534236 18.9399062,8.06204317 L19.0220982,8.08411758 C18.9804856,8.92562216 19.1508342,9.89868082 18.8556947,10.7925534 L19.0566657,10.3693823 C19.0801022,11.012546 18.8683757,11.3244527 18.6775965,11.8769234 L18.3338463,12.0486811 C18.052609,12.5948113 18.3609932,12.3953902 18.1598342,12.8297394 C17.7207414,13.2203625 16.8271976,14.0514404 16.5414514,14.1274327 C16.332496,14.1227361 16.6826807,13.8809508 16.7285673,13.7864066 C16.1408714,14.1898986 16.2568794,14.3922317 15.3580284,14.6371637 L15.331633,14.5789718 C13.1144702,15.621964 10.0350434,13.555142 10.0755758,10.7347372 C10.0517636,10.9137278 10.0081784,10.8690154 9.95905107,10.9414852 C9.84468686,9.49030429 10.6292676,8.03287678 11.9523231,7.43776015 C13.2464469,6.79713268 14.7636162,7.06005296 15.6907883,7.92400768 C15.181621,7.25703181 14.1681239,6.54999325 12.9667595,6.61612254 C11.7901936,6.63467443 10.6894321,7.38252717 10.3220577,8.19425478 C9.71914454,8.57384065 9.64921094,9.65736528 9.38652549,9.85561224 C9.03319407,12.4530655 10.0513878,13.5751499 11.7738491,14.8952464 C11.9110392,14.987818 11.9288397,15.0405617 11.9177085,15.0881391 C11.9182721,15.0875755 11.9185539,15.0869649 11.9191175,15.0864483 C13.9511372,15.8454322 16.0503663,15.6614631 17.8083815,14.2520827 C18.2556466,13.9036358 18.7443364,13.3110554 18.8855656,13.3028362 C18.6728998,13.6223985 18.921871,13.4565117 18.7584264,13.7389701 C19.2043294,13.020002 18.5648761,13.4462259 19.219171,12.497543 L19.4609562,12.83035 C19.3711086,12.2338713 20.2019517,11.5092671 20.1175993,10.5657037 C20.3082377,10.2770925 20.3300772,10.8761544 20.127932,11.5401243 C20.4084179,10.8035906 20.2019517,10.6852342 20.2739989,10.0775305 C20.3519638,10.2817422 20.4541166,10.4988229 20.5066255,10.7144476 C20.3237837,10.0027123 20.6941171,9.51580727 20.7857024,9.10221742 C20.6957609,9.06210775 20.5037606,9.41684817 20.4597996,8.57609506 L20.4597996,8.57609506 Z"></path> </g></svg>'
    },
    redhat: {
      name: 'Red Hat',
      ratio: 4.229,   // width / height of the logo
      svg: '<svg viewBox="-0.375 -0.375 512.75 121.25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g> <g> <g> <path d="M106.250239,69.4471711 C116.718778,69.4471711 131.865107,67.2881917 131.865107,54.8364034 C131.896405,53.875405 131.809279,52.9142084 131.605695,51.9745005 L125.371432,24.8952083 C123.932113,18.9370946 122.668524,16.2341863 112.208352,11.0041005 C104.091259,6.85350441 86.4093853,0 81.1792995,0 C76.3090436,0 74.8948284,6.27610294 69.0873412,6.27610294 C63.4974255,6.27610294 59.3468294,1.58994608 54.1167436,1.58994608 C49.0958613,1.58994608 45.8239196,5.01251422 43.2967422,12.0501176 C43.2967422,12.0501176 36.2591387,31.8993392 35.3553799,34.7779784 C35.2117353,35.3065921 35.1496535,35.8540412 35.1712809,36.4013971 C35.1712809,44.1168196 65.5476191,69.4136985 106.250239,69.4136985 M133.471789,59.8907583 C134.919477,66.7442627 134.919477,67.4639225 134.919477,68.3676814 C134.919477,80.0830735 121.748029,86.5851162 104.434353,86.5851162 C65.3049431,86.6102206 31.0290529,63.6815245 31.0290529,48.5268279 C31.026791,46.4173605 31.4568329,44.3298059 32.2926417,42.3929833 C18.2174348,43.0959069 0,45.606348 0,61.6899078 C0,88.0328039 62.4179358,120.501176 111.840154,120.501176 C149.73108,120.501176 159.287493,103.363231 159.287493,89.8319534 C159.287493,79.1876828 150.082542,67.1040926 133.488525,59.8907583" fill="#EE0000"> </path> <path d="M133.471789,59.8907583 C134.919477,66.7442627 134.919477,67.4639225 134.919477,68.3676814 C134.919477,80.0830735 121.748029,86.5851368 104.434353,86.5851368 C65.3049431,86.6102206 31.0290441,63.6815245 31.0290441,48.5268279 C31.026791,46.4173605 31.4568329,44.3298059 32.2926417,42.3929833 L35.3553799,34.811451 C35.2150906,35.329291 35.1530379,35.8652007 35.1712809,36.4013971 C35.1712809,44.1168196 65.5476191,69.4136985 106.250239,69.4136985 C116.718778,69.4136985 131.865107,67.2547191 131.865107,54.8029309 C131.896405,53.8419325 131.809279,52.8807358 131.605695,51.9410279 L133.471789,59.8907583 Z" fill="#000000"> </path> </g> <path d="M484.715982,77.2379069 C484.715982,87.1876221 490.6992,92.0244054 501.611251,92.0244054 C504.970916,91.9407635 508.30965,91.4690164 511.560967,90.6185583 L511.560967,79.0788971 C509.482877,79.7374596 507.314128,80.0650311 505.134237,80.049601 C500.640548,80.049601 498.975288,78.6437539 498.975288,74.4178446 L498.975288,56.7359706 L511.99611,56.7359706 L511.99611,44.8532157 L498.975288,44.8532157 L498.975288,29.7905686 L484.749455,32.8700431 L484.749455,44.8532157 L475.301828,44.8532157 L475.301828,56.7359706 L484.715982,56.7359706 L484.715982,77.2379069 Z M440.364855,77.5056873 C440.364855,74.4262127 443.452698,72.9283162 448.11375,72.9283162 C450.962769,72.9448768 453.799801,73.2988036 456.565569,73.9827015 L456.565569,79.9659196 C453.839973,81.4546336 450.77556,82.2128093 447.670239,82.1667397 C443.101236,82.1667397 440.364855,80.4094309 440.364855,77.5056873 M444.716286,92.2001363 C449.737169,92.2001363 453.787347,91.145751 457.569745,88.5934691 L457.569745,91.4135314 L471.644952,91.4135314 L471.644952,61.5727539 C471.644952,50.2255598 463.996475,43.9996657 451.235065,43.9996657 C444.105412,43.9996657 437.059441,45.6732931 429.477908,49.1042294 L434.582472,59.5811373 C440.038498,57.2882676 444.624237,55.8824206 448.666047,55.8824206 C454.523743,55.8824206 457.553009,58.1669221 457.553009,62.8363426 L457.553009,65.1208441 C454.104261,64.2281101 450.554808,63.7837254 446.99242,63.7986784 C435.017615,63.7986784 427.804281,68.8195608 427.804281,77.7985721 C427.804281,85.9826103 434.314692,92.2252407 444.69955,92.2252407 M367.344489,91.4386358 L382.48245,91.4386358 L382.48245,67.2965598 L407.829537,67.2965598 L407.829537,91.4135314 L423.009338,91.4135314 L423.009338,29.8073049 L407.888114,29.8073049 L407.888114,53.4807652 L382.541026,53.4807652 L382.541026,29.8073049 L367.403066,29.8073049 L367.344489,91.4386358 Z M309.721496,68.0915328 C309.721496,61.397023 315.001791,56.2924593 321.955713,56.2924593 C325.573566,56.2191092 329.08659,57.509608 331.796642,59.9074946 L331.796642,76.1835216 C329.144693,78.6891855 325.602288,80.0326488 321.955713,79.9157108 C315.09384,79.9157108 309.721496,74.8111471 309.721496,68.1250054 M331.989109,91.4470039 L346.072684,91.4470039 L346.072684,26.7278304 L331.846851,29.8073049 L331.846851,47.3218162 C328.22544,45.2687671 324.12683,44.2065922 319.964096,44.2423417 C306.416082,44.2423417 295.763443,54.7108814 295.763443,68.0915328 C295.68477,74.4336614 298.157924,80.5413852 302.627067,85.0420011 C307.09621,89.542617 313.186428,92.0585709 319.528953,92.0247489 C324.018249,92.0458164 328.396484,90.6294147 332.022582,87.9825951 L331.989109,91.4470039 Z M267.361985,55.6481127 C271.847307,55.6481127 275.629705,58.5518564 277.127601,63.0371779 L257.713523,63.0371779 C259.11937,58.409598 262.642356,55.6481127 267.361985,55.6481127 M243.370536,68.2003186 C243.370536,81.756701 254.458318,92.3172902 268.709255,92.3172902 C276.541832,92.3172902 282.265638,90.2001515 288.165175,85.2713186 L278.742652,76.9031814 C276.541832,79.196051 273.286626,80.4261672 269.420547,80.4261672 C264.444127,80.5663303 259.894511,77.6296995 257.972935,73.037102 L291.1526,73.037102 L291.1526,69.4973799 C291.1526,54.7108814 281.211252,44.0666108 267.65487,44.0666108 C261.217045,43.9694723 255.012168,46.4730827 250.444481,51.0108429 C245.876795,55.5486031 243.332453,61.7368897 243.387272,68.1752142 M218.826789,42.7444451 C223.847672,42.7444451 226.659366,45.907601 226.659366,49.6983672 C226.659366,53.4891333 223.847672,56.6522892 218.826789,56.6522892 L203.856192,56.6522892 L203.856192,42.7444451 L218.826789,42.7444451 Z M188.701495,91.4135314 L203.839455,91.4135314 L203.839455,68.9701873 L215.36238,68.9701873 L226.985723,91.4135314 L243.931201,91.4135314 L230.374819,66.7693672 C237.423069,63.9028714 242.020816,57.0393757 241.989793,49.4305868 C241.989793,38.3428049 233.278562,29.8073049 220.232636,29.8073049 L188.701495,29.8073049 L188.701495,91.4135314 Z" fill="#000000"> </path> </g> </g></svg>'
    },
    arch: {
      name: 'Arch Linux',
      ratio: 0.994,   // width / height of the logo
      svg: '<svg viewBox="95.625 70.625 320.75 322.75" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g><path d="M256 72c-14 35-23 57-39 91 10 11 22 23 41 36-21-8-35-17-45-26-21 43-53 103-117 220 50-30 90-48 127-55-2-7-3-14-3-22v-1c1-33 18-58 38-56 20 1 36 29 35 62l-2 17c36 7 75 26 125 54l-27-50c-13-10-27-23-55-38 19 5 33 11 44 17-86-159-93-180-122-250z" fill="#1793d1"></path></g></svg>'
    },
    suse: {
      name: 'SUSE',
      ratio: 1,   // width / height of the logo
      svg: '<svg viewBox="-0.018 -0.018 24.035 24.035" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g> <path fill="#7AC142" fill-rule="evenodd" d="M24,8.28528691 C22.5804639,5.99050902 20.3366451,4.34898102 17.9130991,3.93053502 C15.8761713,3.57729259 12.1607377,3.53965483 10.1932153,7.25267133 C9.3714001,8.80307066 9.42181398,10.8206616 10.3230483,12.5212667 C11.241893,14.2615813 12.8841423,15.3796644 14.8274936,15.5927148 C16.7549611,15.8023122 18.2031515,15.3565292 19.0170248,14.3047439 C19.8367683,13.2419089 19.9887005,11.7961356 19.4075597,10.6179702 C18.7825658,9.35278909 17.8402407,8.68083428 16.531897,8.56964751 C15.5332879,8.48125058 14.7950354,8.8966471 14.5267369,9.32033084 C14.4504255,9.45292624 14.3098881,9.69739901 14.3085069,10.0565116 C14.3085069,11.0067786 15.1759018,11.2667899 15.3523504,11.2785301 C15.4062173,11.2764583 15.6676098,11.2712788 16.0139462,11.1839178 L16.1817623,11.1276338 L16.381346,11.0720404 C17.0132459,10.9570553 17.6199389,11.3299799 17.7970781,11.9439242 C17.8281551,12.0575281 17.8454202,12.1704413 17.8454202,12.2819734 C17.8454202,12.6897733 17.6375493,13.0709851 17.2138655,13.3534409 C17.0315468,13.4677354 16.8644214,13.5319613 16.6890087,13.5868641 C16.1928119,13.7481194 15.7546255,13.8227043 15.3157486,13.8227043 C13.8112742,13.8209778 11.7163359,12.5278274 11.6900931,10.0989835 C11.6759358,8.72779515 12.3627385,7.48091497 13.5747433,6.67705536 C14.9690668,5.75475767 17.377538,5.4419154 19.61474,6.81379436 C22.365404,8.4957532 23.0836291,11.7950997 22.365404,14.0447326 C21.3219058,17.3022977 18.3851249,19.0436482 14.5118889,18.6973118 C11.7667498,18.4531843 9.21705077,17.003958 7.70014558,14.8233852 C7.02715487,13.8575797 6.52888622,12.7805874 6.25920651,11.7042856 C5.63939208,9.24816303 6.26645782,6.6380364 6.73192292,5.48231556 C7.53228768,3.50084082 8.72510717,1.66935452 10.2982381,6.09512441e-14 L1.0005,-1.26217745e-29 C0.44775,-1.26217745e-29 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,8.28528691 Z"></path> </g></svg>'
    },
    void: {
      name: 'Void Linux',
      ratio: 1.213,   // width / height of the logo
      svg: '<svg viewBox="0.063 -0.188 255.75 210.875" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g> <g> <path d="M128.016818,0 C105.984939,0.0467831409 84.5233718,7.00726851 66.6577572,19.9001677 L90.560442,43.8028525 C101.837891,36.9042577 114.796731,33.2431184 128.016818,33.2206376 C167.789233,33.220559 200.031158,65.4624842 200.03108,105.234899 C199.999253,118.45028 196.33152,131.402095 189.429569,142.67198 L213.377556,166.619966 C226.266359,148.744022 233.217963,127.272821 233.25173,105.234899 C233.25173,47.1152739 186.136443,0 128.016817,0 L128.016818,0 Z" fill="#ABC2AB"> </path> <path d="M189.375878,190.569631 L165.473194,166.666946 C154.195745,173.565541 141.236905,177.226694 128.016818,177.249161 C88.2444027,177.24924 56.0024775,145.007314 56.0025561,105.234899 C56.034383,92.0195183 59.7021028,79.0677038 66.6040664,67.7978188 L42.6560666,43.8498324 C29.7672505,61.7257694 22.8156856,83.1969774 22.7819185,105.234899 C22.7819185,163.354525 69.8971924,210.469799 128.016818,210.469799 C150.048697,210.423002 171.510264,203.462537 189.375878,190.569631 L189.375878,190.569631 Z" fill="#478061"> </path> <circle fill="#ABC2AB" cx="128" cy="105.234899" r="33.5033557"> </circle> <path d="M30.591915,124.810389 C29.4443514,125.630073 28.3992505,126.039915 27.4566121,126.039915 L23.3991586,126.039915 C22.8253766,126.039915 22.3745499,125.937456 22.0466783,125.73254 C21.7188068,125.527615 21.4524084,125.220231 21.2474833,124.810389 L0.468422443,86.2031381 C0.386452331,86.121168 0.345467275,86.0187098 0.345467275,85.8957633 L0.345467275,85.5268978 C0.345467275,85.1170561 0.488914899,84.7891801 0.775810148,84.5432698 C1.10368172,84.2563831 1.61598597,84.1129398 2.3127229,84.1129398 L27.5795668,84.1129398 C28.9320469,84.1129398 29.8132078,84.5227815 30.2230494,85.3424649 L43.0101721,109.994546 L78.8509595,85.3424649 C80.0395082,84.5227815 81.2895344,84.1129398 82.6010382,84.1129398 L86.597001,84.1129398 C87.1298066,84.1129398 87.3962094,84.3383531 87.3962094,84.7891797 C87.3962094,85.1580362 87.0683378,85.6088629 86.4125947,86.1416599 L30.591915,124.810389 L30.591915,124.810389 Z" fill="#000000"> </path> <path d="M86.3530304,126.039915 C84.2218433,126.039915 82.3365666,125.712039 80.6972001,125.056286 C79.0578159,124.359558 77.6848345,123.41692 76.5782559,122.228371 C75.4716773,121.039823 74.6315015,119.646357 74.0577284,118.047976 C73.4839554,116.408601 73.1970689,114.64627 73.1970689,112.760984 C73.1970689,110.342911 73.6069106,107.965822 74.4265939,105.629719 C75.2462773,103.293607 76.3733484,101.059957 77.8078071,98.9287697 C79.2832336,96.7975826 81.0045703,94.8303357 82.9718172,93.027029 C84.9800493,91.2237135 87.1522215,89.6663083 89.4883337,88.3548134 C91.8654312,87.0433183 94.3654749,86.0187098 96.988465,85.2809879 C99.6114725,84.5022898 102.295949,84.1129407 105.041894,84.1129407 L135.165374,84.1129407 C137.337546,84.1129407 139.243324,84.4408122 140.882708,85.0965554 C142.56306,85.7523074 143.956525,86.6744576 145.063104,87.8630061 C146.169682,89.010561 147.009858,90.3835335 147.583631,91.9819237 C148.157422,93.5803141 148.444317,95.3221477 148.444317,97.2074244 C148.444317,99.6255068 148.013983,102.023092 147.153314,104.400181 C146.333614,106.736293 145.18605,108.969938 143.710623,111.101117 C142.235179,113.232304 140.493341,115.220047 138.48511,117.064348 C136.476878,118.867655 134.284213,120.445548 131.907116,121.798028 C129.530036,123.109532 127.029992,124.154637 124.406985,124.933344 C121.783995,125.671057 119.140503,126.039914 116.47651,126.039914 L86.3530309,126.039914 L86.3530304,126.039915 Z M123.361892,100.896012 C124.714381,98.0271121 125.390625,95.8754368 125.390625,94.4409866 C125.390625,93.2524379 124.960282,92.4327502 124.099596,91.9819237 C123.279913,91.5310971 122.050388,91.3056838 120.411022,91.3056838 L112.050205,91.3056838 C110.861674,91.3056838 109.755095,91.4696195 108.730469,91.7974911 C107.746845,92.0843864 106.824699,92.5966906 105.964031,93.3344039 C105.103363,94.0721257 104.263187,95.0557536 103.443504,96.2852875 C102.664806,97.5148126 101.865615,99.0517209 101.045931,100.896012 L98.0950348,107.596962 C96.5376382,111.080629 95.7589399,113.703627 95.7589399,115.465958 C95.7589399,116.654498 96.1073039,117.515166 96.804032,118.047963 C97.5007778,118.539774 98.5048939,118.78568 99.8163801,118.78568 L108.238674,118.78568 C109.509193,118.78568 110.677249,118.601252 111.742843,118.232396 C112.808436,117.822554 113.833045,117.187294 114.816668,116.326617 C115.800292,115.465949 116.74293,114.31839 117.644584,112.88394 C118.546237,111.449489 119.468383,109.687163 120.411021,107.596962 L123.361892,100.896012 L123.361892,100.896012 Z" fill="#000000"> </path> <path d="M144.122693,126.039915 C143.38498,126.039915 143.016123,125.794009 143.016123,125.302197 C143.016123,125.056295 143.077601,124.748912 143.200556,124.380047 L160.475435,85.7113308 C160.967256,84.6457374 161.745963,84.1129407 162.811557,84.1129407 L183.95947,84.1129407 C184.738168,84.1129407 185.127517,84.3793347 185.127517,84.9121228 C185.127517,85.1580332 185.045555,85.424436 184.881633,85.7113312 L167.668205,124.380047 C167.176384,125.486626 166.397677,126.039915 165.332084,126.039915 L144.122693,126.039915 L144.122693,126.039915 Z" fill="#000000"> </path> <path d="M174.348967,126.039915 C173.611254,126.039915 173.242397,125.794009 173.242397,125.302197 C173.242397,125.056295 173.303875,124.748912 173.42683,124.380047 L190.701709,85.7113308 C191.19353,84.6457374 191.972237,84.1129407 193.03783,84.1129407 L242.464949,84.1129407 C244.596136,84.1129407 246.481413,84.4408122 248.120779,85.0965554 C249.760146,85.7523074 251.133118,86.6744576 252.239697,87.8630061 C253.346275,89.010561 254.18646,90.3835335 254.76025,91.9819237 C255.334023,93.5803141 255.62091,95.3221477 255.62091,97.2074244 C255.62091,99.7074769 255.190576,102.16654 254.329908,104.584613 C253.469239,106.961702 252.280691,109.21584 250.764261,111.347027 C249.288835,113.478214 247.526513,115.445461 245.477296,117.248768 C243.469064,119.052083 241.276399,120.609488 238.899302,121.920983 C236.56319,123.191502 234.104131,124.195618 231.522126,124.933331 C228.940104,125.671053 226.35809,126.039914 223.776085,126.039914 L174.348967,126.039914 L174.348967,126.039915 Z M227.833526,100.896012 C229.145029,97.945142 229.800781,95.7934667 229.800781,94.4409866 C229.800781,93.2524379 229.39094,92.4327502 228.571256,91.9819237 C227.751573,91.5310971 226.563024,91.3056838 225.00561,91.3056838 L212.525876,91.3056838 L200.353529,118.785681 L212.771786,118.785681 C214.00132,118.785681 215.148883,118.601253 216.214477,118.232396 C217.28007,117.822554 218.284186,117.187295 219.226825,116.326618 C220.210449,115.424964 221.153087,114.277405 222.05474,112.88394 C222.997379,111.44949 223.940017,109.687164 224.882655,107.596962 L227.833526,100.896013 L227.833526,100.896012 Z" fill="#000000"> </path> </g> </g></svg>'
    }
  };

  // Distros pop-up: logos on one line (soft | between them), the distros listed under each one
  function fillDistros(box, groups) {
    var n = 0;
    groups.forEach(function (g) {
      var d = DISTROS[g.key];
      if (!d) return;
      n++;
      var col = el('div', 'wiki-distro');
      var logo = el('span', 'wiki-distro__logo');
      logo.style.setProperty('--r', d.ratio);
      logo.setAttribute('role', 'img');
      logo.setAttribute('aria-label', d.name);
      logo.innerHTML = d.svg;
      col.appendChild(logo);
      var list = el('ul', 'wiki-distro__list');
      (g.items || []).forEach(function (name) {
        var li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
      });
      col.appendChild(list);
      box.appendChild(col);
    });
    box.hidden = !n;
  }

  // Formats pop-up: a small table — Item | What it covers (rows come from item.formats)
  function fillFormats(box, rows) {
    var table = el('table', 'wiki-formats__table');
    var cols = ['wiki-formats__item', 'wiki-formats__covers'];
    var head = document.createElement('thead');
    var hr = document.createElement('tr');
    ['Item', 'What it covers'].forEach(function (label, i) {
      var th = document.createElement('th');
      th.scope = 'col';
      th.className = cols[i];
      th.textContent = label;
      hr.appendChild(th);
    });
    head.appendChild(hr);
    table.appendChild(head);

    var body = document.createElement('tbody');
    rows.forEach(function (r) {
      var tr = document.createElement('tr');
      cols.forEach(function (cls, i) {
        var td = document.createElement(i === 0 ? 'th' : 'td');
        if (i === 0) td.scope = 'row';
        td.className = cls;
        td.textContent = r[i] == null ? '' : r[i];
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    table.appendChild(body);
    box.appendChild(table);
    box.hidden = false;
  }

  // "Available on:" + the logos, separated by a soft |
  function buildAvailable(keys) {
    var box = el('div', 'card__avail');
    var label = el('p', 'card__avail-label');
    label.textContent = 'available on:';
    box.appendChild(label);

    var list = el('div', 'card__avail-list');
    var n = 0;
    keys.forEach(function (key) {
      var d = DISTROS[key];
      if (!d) return;
      if (n++) {
        var sep = el('span', 'card__avail-sep');
        sep.setAttribute('aria-hidden', 'true');
        list.appendChild(sep);
      }
      var logo = el('span', 'card__distro');
      logo.style.setProperty('--r', d.ratio);
      logo.setAttribute('role', 'img');
      logo.setAttribute('aria-label', d.name);
      logo.innerHTML = d.svg;
      list.appendChild(logo);
    });
    box.appendChild(list);
    return box;
  }

  // description text: "\n" = new line, **bold**, [[Label]] = blue pop-up link taken from item.descTags
  function fillDesc(p, item) {
    var tags = item.descTags || [];
    var parts = String(item.desc).split(/(\*\*|\{br\}|\[\[[^\]]+\]\])/);
    var bold = false;
    var strong = null;   // the <strong> currently open (bold text, may contain a link)

    function target() {
      if (!bold) return p;
      if (!strong) { strong = document.createElement('strong'); p.appendChild(strong); }
      return strong;
    }

    parts.forEach(function (part) {
      if (!part) return;
      if (part === '**') { bold = !bold; strong = null; return; }
      if (part === '{br}') { p.appendChild(document.createElement('br')); strong = null; return; }
      var m = part.match(/^\[\[([^\]]+)\]\]$/);
      if (m) {
        var tag = null;
        tags.forEach(function (t) { if (t.label === m[1]) tag = t; });
        if (tag) {
          var b = el('button', tag.blue ? 'card__tag card__tag--ink' : 'card__tag');
          b.type = 'button';
          b.textContent = tag.label;
          b.setAttribute('aria-haspopup', 'dialog');
          b.addEventListener('click', function () { openWiki(tag, b); });
          target().appendChild(b);
        } else {
          target().appendChild(document.createTextNode(m[1]));
        }
        return;
      }
      part.split('\n').forEach(function (line, i) {
        if (i) { p.appendChild(el('span', 'card__gap')); strong = null; }
        if (line) target().appendChild(document.createTextNode(line));
      });
    });
  }

  function buildCard(item) {
    var card = el('article', 'card');
    if (item.status === 'active') card.classList.add('card--live');

    // banner slot (256 x 135) — one image, or several that switch instantly.
    // Nothing is shown (no empty box) until EVERY image of the banner has
    // loaded; a project whose images aren't ready behaves as if it had no banner.
    var shots = [].concat(item.banner || []).filter(Boolean);
    if (shots.length) {
      Promise.all(shots.map(loadImage)).then(function (loaded) {
        var imgs = loaded.filter(Boolean);
        if (!imgs.length) return;
        card.insertBefore(buildBanner(imgs, item.video, item.videoLabel), card.firstChild);
      });
    } else if (item.video) {
      loadVideoFrame(item.video).then(function (vid) {
        if (!vid) return;
        card.insertBefore(buildBanner([vid], item.video, item.videoLabel), card.firstChild);
      });
    }

    var main = el('div', 'card__main');
    // no icon: the title goes in the centre with years + note on one line under it
    var noIcon = !item.icon;
    if (noIcon || item.center) main.classList.add('card__main--center');

    // icon slot — stays as an empty placeholder until an image is provided
    var badge = el('span', 'card__icon');
    if (!noIcon && item.iconRatio) {
      var rp = String(item.iconRatio).split('/');
      var ir = rp.length > 1 ? parseFloat(rp[0]) / parseFloat(rp[1]) : parseFloat(rp[0]);
      if (isFinite(ir) && ir > 0) {
        badge.classList.add('card__icon--wide');
        badge.style.setProperty('--ir', String(Math.round(ir * 10000) / 10000));
      }
    }
    if (!noIcon) {
      var img = document.createElement('img');
      img.src = ICON_DIR + item.icon;
      img.alt = '';
      img.draggable = false;
      // if the file isn't there yet, fall back to the empty placeholder
      img.onerror = function () { img.remove(); };
      badge.appendChild(img);
    }
    if (!noIcon) main.appendChild(badge);

    var text = el('div', 'card__text');
    var title = el('h3', 'card__title');
    title.appendChild(document.createTextNode(item.title));
    if (item.titlePrefix) {
      var pre = el('span', 'card__title-pre');
      pre.textContent = item.titlePrefix;
      title.appendChild(pre);
    }
    text.appendChild(title);
    if (item.tags && item.tags.length) {
      var tagRow = buildTags(item.tags);
      if (item.tagsSuffix) tagRow.appendChild(document.createTextNode(' ' + item.tagsSuffix));
      text.appendChild(tagRow);
    }
    if (item.years) {
      var years = el('p', 'card__years');
      years.textContent = item.years;
      text.appendChild(years);
    }
    if (item.note) {
      var note = el('p', 'card__note');
      note.textContent = '(' + item.note + ')';
      text.appendChild(note);
    }
    if (item.subtitle) {
      var sub = el('p', 'card__subtitle');
      var st = item.subtitleTag;
      if (st && st.label && item.subtitle.indexOf(st.label) === 0) {
        var sb = el('button', 'card__tag');
        sb.type = 'button';
        sb.textContent = st.label;
        sb.setAttribute('aria-haspopup', 'dialog');
        sb.addEventListener('click', function () { openWiki(st, sb); });
        sub.appendChild(sb);
        sub.appendChild(document.createTextNode(item.subtitle.slice(st.label.length)));
      } else {
        sub.textContent = item.subtitle;
      }
      text.appendChild(sub);
    }
    main.appendChild(text);

    if (item.desc) {
      var desc = el('p', 'card__desc');
      fillDesc(desc, item);
      main.appendChild(desc);
    }

    // "Available on:" row of Linux logos
    if (item.availableOn && item.availableOn.length) main.appendChild(buildAvailable(item.availableOn));

    card.appendChild(main);

    if (item.status) {
      var status = el('span', 'card__status');
      status.appendChild(el('span', 'card__dot'));
      status.appendChild(document.createTextNode(item.status));
      card.appendChild(status);
    }

    var actions = el('div', 'card__actions');
    if (item.visit) {
      actions.classList.add('card__actions--visit');
      actions.appendChild(buildButton('Visit', '', item.visit, 'primary'));
    }
    if (item.command || (item.buttons && item.buttons.length)) {
      actions.classList.add('card__actions--center');
      var extra = item.buttons || [];

      // Download opens the pop-up with the install command
      if (item.command) {
        var dl = el('button', 'btn ' + (item.downloadBlue ? 'btn--blue' : 'btn--primary'));
        dl.type = 'button';
        dl.setAttribute('aria-haspopup', 'dialog');
        dl.innerHTML = SVG_DOWNLOAD;
        dl.appendChild(document.createTextNode('Download'));
        dl.addEventListener('click', function () {
          openWiki({
            title: item.title + (item.version ? ' ' + item.version : ''),
            text: '',
            code: item.command
          }, dl);
        });
        actions.appendChild(dl);
      }

      // Source code downloads the zip straight from /assets/
      if (item.source) {
        var sc = buildButton('Source code', '', ICON_DIR + item.source, item.sourceBlue ? 'blue' : 'primary');
        sc.removeAttribute('target');
        sc.removeAttribute('rel');
        sc.setAttribute('download', '');
        actions.appendChild(sc);
      }

      // twoRows: Download + Source code stay on the first line, everything after goes on a second line
      var rowTwo = null;
      if (item.twoRows) {
        actions.classList.add('card__actions--split');
        var rowOne = el('div', 'card__actions-row');
        while (actions.firstChild) rowOne.appendChild(actions.firstChild);
        actions.appendChild(rowOne);
        rowTwo = el('div', 'card__actions-row');
        actions.appendChild(rowTwo);
      } else if (item.source) {
        actions.classList.add('card__actions--wide');
      }

      extra.forEach(function (b) {
        // "Distros" opens a pop-up with the logos + the distros under each one
        if (b.popup === 'distros' && item.availableOn && item.distroList) {
          var db = el('button', 'btn btn--primary');
          db.type = 'button';
          db.setAttribute('aria-haspopup', 'dialog');
          db.textContent = b.label;
          db.addEventListener('click', function () {
            var lists = {};
            item.distroList.forEach(function (g) { lists[g.key] = g.items; });
            openWiki({
              title: '',
              text: '',
              distros: item.availableOn.map(function (k) { return { key: k, items: lists[k] || [] }; })
            }, db);
          });
          (rowTwo || actions).appendChild(db);
          return;
        }
        // "Supported Formats" opens a pop-up with the formats table
        if (b.popup === 'formats' && item.formats && item.formats.length) {
          var fb = el('button', 'btn btn--primary');
          fb.type = 'button';
          fb.setAttribute('aria-haspopup', 'dialog');
          fb.textContent = b.label;
          fb.addEventListener('click', function () {
            openWiki({
              title: item.title + (item.version ? ' ' + item.version : ''),
              text: '',
              formats: item.formats
            }, fb);
          });
          (rowTwo || actions).appendChild(fb);
          return;
        }
        (rowTwo || actions).appendChild(buildButton(b.label, '', b.url, 'primary', true));
      });
    } else {
      actions.classList.add('card__actions--bp');
      actions.appendChild(buildButton('Blueprints', '', item.blueprints, 'blue', true));
      // Download only shows when the project has a "download" field (even an empty one)
      if (item.download !== undefined) actions.appendChild(buildButton('Download', SVG_DOWNLOAD, item.download, item.downloadBlue ? 'blue' : 'primary'));
    }
    card.appendChild(actions);

    return card;
  }

  function render(panelId, items) {
    var panel = document.getElementById(panelId);
    if (!panel) return;
    panel.innerHTML = '';

    if (!items || !items.length) {
      var empty = el('p', 'empty');
      empty.textContent = 'Nothing here yet.';
      panel.appendChild(empty);
      return;
    }

    items.forEach(function (item) { panel.appendChild(buildCard(item)); });
  }

  // no right-click / long-press menu ("open image", "save image"...) on banners and icons
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest && e.target.closest('.card__banner, .card__icon')) e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  // while the page is pinched-in, banners stop capturing sideways touches so you can pan freely
  (function () {
    var vv = window.visualViewport;
    if (!vv) return;
    function update() { document.documentElement.classList.toggle('is-zoomed', vv.scale > 1.01); }
    vv.addEventListener('resize', update);
    update();
  })();

  render('panel-projects', PROJECTS);
})();
