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
       video:      "b/clip.mp4",         // optional — an mp4 in /assets/ that plays inside the banner when it is
                                         // clicked (only a seek bar, no download / save options)
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
       command:    "curl -fsSL https://...", // optional — adds a Download button that opens a pop-up with this command
       buttons:    [{ label: "Supported Distros", url: "https://..." }], // optional — extra centered buttons;
                                         // with command/buttons, Download / Blueprints are replaced
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
        label: "ISLR",
        wiki: "https://en.wikipedia.org/wiki/Sign_language_recognition",
        bold: "Isolated sign language recognition (ISLR)",
        text: "Isolated sign language recognition (ISLR), also known as word-level SLR, is the task of recognizing individual signs from a given segment."
      },
      {
        label: "CSLR",
        wiki: "https://en.wikipedia.org/wiki/Sign_language_recognition",
        bold: "Continuous sign language recognition (CSLR)",
        text: "Continuous sign language recognition (CSLR), involves predicting all signs from a given sequence of sign language.\nThis task is more suitable for real-world transcription and is sometimes considered an extension of ISLR, depending on the approach used."
      }
    ],
    banner: ["b/i.webp"],
    video: "b/20230325_103823.mp4",
    years: "2022 – Mid 2026",
    note: "ownership transferred",
    subtitle: "MASL Real Time Translator",
    subtitleTag: {
      label: "MASL",
      title: "MASL",
      text: "Moroccan Sign Language (MSL)\nAmerican Sign Language (ASL)"
    },
    desc: "A sign language recognition app that turns hand gestures into text in real time.",
    download: "",
    blueprints: ""
  },
  {
    title: "Klem",
    version: "5.4.0",
    icon: "Klem.webp",
    banner: ["b/klem1.webp", "b/klem2.webp"],
    years: "2022 – 2023",
    desc: "A color-picker and palette tool that adapts to whatever is on your screen.",
    command: "curl -fsSL https://osaif.pages.dev/klem",
    buttons: [
      { label: "Supported Distros", url: "" },
      { label: "Supported Formats", url: "" }
    ]
  },
  {
    title: "Hiddenball",
    icon: "hiddenball.webp",
    banner: ["b/hb1.webp", "b/hb2.webp", "b/hb3.webp", "b/hb4.webp", "b/hb5.webp"],
    years: "2024",
    desc: "A baseball archive with live game views, scores and player transactions.",
    download: "",
    blueprints: ""
  },
  {
    title: "Pluk",
    version: "1.13.0",
    icon: "pluk.webp",
    banner: "",
    years: "2021 – 2022",
    desc: "A small video streaming experiment with a clean, fast player.",
    command: "curl -fsSL https://osaif.pages.dev/pluk",
    buttons: [
      { label: "Supported Distros", url: "" }
    ]
  },
  {
    title: "Steno",
    icon: "steno.webp",
    banner: ["b/steno.webp"],
    years: "2023",
    desc: "A shorthand-style notes app built for typing as fast as you think.",
    download: "",
    blueprints: ""
  },
  {
    title: "SVGXL",
    icon: "svgxl.webp",
    banner: "",
    years: "2024 – 2025",
    desc: "An SVG editor and optimizer for crisp, lightweight vector graphics.",
    download: "",
    blueprints: ""
  }
];

/* ---------------- renderer — nothing below needs editing ---------------- */

(function () {
  var ICON_DIR = '../assets/';

  var SVG_DOWNLOAD = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v8M4.5 7 8 10.5 11.5 7M3 13.5h10"/></svg>';
  var SVG_BLUEPRINT = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 4 2 8l3.5 4M10.5 4 14 8l-3.5 4"/></svg>';

  function el(tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  function buildButton(label, svg, url, variant) {
    var btn = el(url ? 'a' : 'span', 'btn btn--' + variant);
    if (url) {
      btn.href = url;
      btn.target = '_blank';
      btn.rel = 'noopener';
    } else {
      btn.setAttribute('aria-disabled', 'true');
      btn.classList.add('btn--disabled');
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

  // build the banner from images that are already loaded
  function buildBanner(imgs, videoSrc) {
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
    if (videoSrc) attachVideo(banner, videoSrc);
    return banner;
  }

  // pinched-in on a phone? (then a finger on the banner must pan the page, not swipe it)
  function isZoomed() {
    return !!(window.visualViewport && window.visualViewport.scale > 1.01);
  }

  // ---- video inside the banner: tap to play / pause, only a seek bar, nothing to save ----
  var SVG_PLAY = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="31" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.85)" stroke-width="1.5"/><path d="M26 20.5v23L45 32z" fill="#fff"/></svg>';

  function attachVideo(banner, src) {
    banner.classList.add('card__banner--video');
    banner.setAttribute('role', 'button');
    banner.setAttribute('tabindex', '0');
    banner.setAttribute('aria-label', 'Play video');

    var play = el('span', 'card__play');
    play.innerHTML = SVG_PLAY;
    banner.appendChild(play);

    var bar = el('div', 'card__seek');
    bar.setAttribute('role', 'slider');
    bar.setAttribute('tabindex', '0');
    bar.setAttribute('aria-label', 'Seek');
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
    bar.setAttribute('aria-valuenow', '0');
    var track = el('span', 'card__seek-track');
    var fill = el('span', 'card__seek-fill');
    var thumb = el('span', 'card__seek-thumb');
    track.appendChild(fill);
    track.appendChild(thumb);
    bar.appendChild(track);
    banner.appendChild(bar);

    var video = null, raf = 0, dragging = false;

    function setProgress(r) {
      r = Math.min(1, Math.max(0, r || 0));
      fill.style.width = (r * 100) + '%';
      thumb.style.left = (r * 100) + '%';
      bar.setAttribute('aria-valuenow', String(Math.round(r * 100)));
    }

    function tick() {
      if (video && video.duration && !dragging) setProgress(video.currentTime / video.duration);
      raf = (video && !video.paused && !video.ended) ? requestAnimationFrame(tick) : 0;
    }

    function makeVideo() {
      video = document.createElement('video');
      video.className = 'card__video';
      video.preload = 'auto';
      video.controls = false;
      video.draggable = false;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('disablepictureinpicture', '');
      video.setAttribute('disableremoteplayback', '');
      video.setAttribute('controlslist', 'nodownload noplaybackrate noremoteplayback');
      video.addEventListener('contextmenu', function (e) { e.preventDefault(); });

      video.addEventListener('play', function () { banner.classList.add('is-playing'); });
      video.addEventListener('playing', function () {
        banner.classList.add('is-started', 'is-playing');
        banner.setAttribute('aria-label', 'Pause video');
        if (!raf) raf = requestAnimationFrame(tick);
      });
      video.addEventListener('pause', function () {
        if (video.ended) return;
        banner.classList.remove('is-playing');
        banner.setAttribute('aria-label', 'Play video');
      });
      video.addEventListener('timeupdate', function () {
        if (video.duration && !dragging) setProgress(video.currentTime / video.duration);
      });
      video.addEventListener('ended', function () {
        banner.classList.remove('is-playing', 'is-started');
        banner.setAttribute('aria-label', 'Play video');
        video.currentTime = 0;
        setProgress(0);
      });
      video.addEventListener('error', function () {
        banner.classList.remove('is-playing', 'is-started');
        video.remove();
        video = null;
      });

      video.src = ICON_DIR + src;
      banner.insertBefore(video, play);
    }

    function toggle() {
      if (!video) makeVideo();
      if (video.paused || video.ended) {
        banner.classList.add('is-playing');
        var p = video.play();
        if (p && p.catch) p.catch(function () { banner.classList.remove('is-playing'); });
      } else {
        video.pause();
      }
    }

    banner.addEventListener('click', function (e) {
      if (bar.contains(e.target)) return;
      toggle();
    });
    banner.addEventListener('keydown', function (e) {
      if (e.target !== banner) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    // seek bar: tap or drag anywhere along it to jump to that part
    function seekFrom(e) {
      var rect = track.getBoundingClientRect();
      if (!rect.width) return;
      var r = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      setProgress(r);
      if (video && video.duration) video.currentTime = Math.min(r * video.duration, video.duration - 0.1);
    }
    bar.addEventListener('pointerdown', function (e) {
      e.stopPropagation();
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      bar.classList.add('is-drag');
      try { bar.setPointerCapture(e.pointerId); } catch (err) {}
      seekFrom(e);
    });
    bar.addEventListener('pointermove', function (e) {
      if (dragging) seekFrom(e);
    });
    function endDrag(e) {
      e.stopPropagation();
      if (!dragging) return;
      dragging = false;
      bar.classList.remove('is-drag');
      if (video && video.duration) setProgress(video.currentTime / video.duration);
    }
    bar.addEventListener('pointerup', endDrag);
    bar.addEventListener('pointercancel', endDrag);
    bar.addEventListener('click', function (e) { e.stopPropagation(); });
    bar.addEventListener('keydown', function (e) {
      if (!video || !video.duration) return;
      var d = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0;
      if (!d) return;
      e.preventDefault();
      e.stopPropagation();
      video.currentTime = Math.min(Math.max(0, video.currentTime + d), video.duration - 0.1);
      setProgress(video.currentTime / video.duration);
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
    popup.innerHTML =
      '<button type="button" class="wiki-close" aria-label="Close">\u2715</button>' +
      '<h3 class="wiki-title" id="wiki-title"></h3>' +
      '<img class="wiki-img" alt="" hidden>' +
      '<div class="wiki-text"></div>' +
      '<pre class="wiki-code" hidden><code></code></pre>' +
      '<a class="wiki-link" target="_blank" rel="noopener">Read full article \u2192</a>' +
      '<div class="wiki-powered">Powered by <svg class="wiki-powered__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" fill="#000000" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M0,0v455h455V0H0z M385,118.141c0,1.918-1.558,3.47-3.477,3.47h-9.736 c-3.546,0-6.744,2.15-8.081,5.439l-88.815,217.909L230.16,244.55L182.3,344.958L90.709,126.964 c-1.364-3.239-4.535-5.345-8.049-5.345h-9.181c-1.918,0-3.479-1.56-3.479-3.479v-8.099h79.147l-0.223,8.193 c-0.05,1.886-1.593,3.385-3.477,3.385h-13.249c-4.926,0-8.302,4.971-6.495,9.548l64.305,162.675l32.522-70.485l-41.099-96.434 c-1.373-3.215-4.526-5.312-8.031-5.312h-6.392c-1.918,0-3.479-1.552-3.479-3.47v-8.099h59.436v8.099c0,1.918-1.56,3.47-3.477,3.47 c-5.013,0-8.398,5.133-6.421,9.745l24.288,56.572l24.799-56.52c2.021-4.614-1.355-9.788-6.401-9.788h-9.284 c-1.927,0-3.479-1.56-3.479-3.479v-8.099h62.242v8.099c0,1.918-1.552,3.479-3.479,3.479h-10.358c-3.385,0-6.471,1.962-7.903,5.03 l-38.312,81.925l35.772,84.058l62.589-161.542c1.739-4.57-1.637-9.472-6.53-9.472H321.54c-1.918,0-3.479-1.56-3.479-3.479v-8.099 H385V118.141z"/></svg></div>';
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    popup.querySelector('.wiki-close').addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && popup.classList.contains('is-open')) closePopup();
    });
    window.addEventListener('resize', function () {
      if (popup.classList.contains('is-open')) fitCode();
    });
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

  function openWiki(tag, opener) {
    ensurePopup();
    var my = ++reqId;
    lastFocus = opener;

    var url = tag.wiki || '';
    var slug = url.split('/wiki/')[1] || '';
    var fallbackTitle = tag.title || decodeURIComponent(slug).replace(/_/g, ' ') || tag.label || '';

    var titleEl = popup.querySelector('.wiki-title');
    var imgEl = popup.querySelector('.wiki-img');
    var textEl = popup.querySelector('.wiki-text');
    var linkEl = popup.querySelector('.wiki-link');
    var codeEl = popup.querySelector('.wiki-code');

    titleEl.textContent = fallbackTitle;
    popup.querySelector('.wiki-powered').hidden = !url;   // "Powered by" only for Wikipedia pop-ups
    if (url) { linkEl.href = url; linkEl.hidden = false; }
    else { linkEl.removeAttribute('href'); linkEl.hidden = true; }
    imgEl.hidden = true;
    imgEl.removeAttribute('src');
    codeEl.hidden = !tag.code;
    codeEl.firstChild.textContent = tag.code || '';

    // custom description; the term is bold, "\n" starts a new paragraph
    textEl.textContent = '';
    String(tag.text || '').split('\n').forEach(function (para, i) {
      if (!para) return;
      var p = document.createElement('p');
      if (i === 0 && tag.bold && para.indexOf(tag.bold) === 0) {
        var b = document.createElement('strong');
        b.textContent = tag.bold;
        p.appendChild(b);
        p.appendChild(document.createTextNode(para.slice(tag.bold.length)));
      } else {
        p.textContent = para;
      }
      textEl.appendChild(p);
    });

    popup.classList.add('is-open');
    overlay.classList.add('is-open');
    popup.querySelector('.wiki-close').focus();
    if (tag.code) fitCode();

    // article title + picture come from Wikipedia; the text stays custom
    // (no wiki link = nothing to fetch)
    if (!slug) return;
    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + slug)
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (data) {
        if (my !== reqId) return;
        if (data.title) titleEl.textContent = data.title;
        if (data.content_urls && data.content_urls.desktop) linkEl.href = data.content_urls.desktop.page;
        if (data.thumbnail && data.thumbnail.source) {
          imgEl.src = data.thumbnail.source;
          imgEl.hidden = false;
        }
      })
      .catch(function () { /* offline: keep the fallback title and custom text */ });
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
        card.insertBefore(buildBanner(imgs, item.video), card.firstChild);
      });
    }

    var main = el('div', 'card__main');
    // no icon: the title goes in the centre with years + note on one line under it
    var noIcon = !item.icon;
    if (noIcon) main.classList.add('card__main--center');

    // icon slot — stays as an empty placeholder until an image is provided
    var badge = el('span', 'card__icon');
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
    title.textContent = item.title;
    text.appendChild(title);
    if (item.tags && item.tags.length) text.appendChild(buildTags(item.tags));
    if (noIcon && (item.years || item.note)) {
      // one line: "2022 – Mid 2026 (ownership transferred)"
      var line = el('p', 'card__years card__years--line');
      line.appendChild(document.createTextNode(item.years || ''));
      if (item.note) {
        var inline = el('span', 'card__note-inline');
        inline.textContent = (item.years ? ' ' : '') + '(' + item.note + ')';
        line.appendChild(inline);
      }
      text.appendChild(line);
    } else if (item.years) {
      var years = el('p', 'card__years');
      years.textContent = item.years;
      text.appendChild(years);
    }
    if (item.note && !noIcon) {
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
      desc.textContent = item.desc;
      main.appendChild(desc);
    }

    card.appendChild(main);

    if (item.status) {
      var status = el('span', 'card__status');
      status.appendChild(el('span', 'card__dot'));
      status.appendChild(document.createTextNode(item.status));
      card.appendChild(status);
    }

    var actions = el('div', 'card__actions');
    if (item.command || (item.buttons && item.buttons.length)) {
      actions.classList.add('card__actions--center');
      var extra = item.buttons || [];

      // Download opens the pop-up with the install command
      if (item.command) {
        var dl = el('button', 'btn btn--primary');
        dl.type = 'button';
        dl.setAttribute('aria-haspopup', 'dialog');
        dl.innerHTML = SVG_DOWNLOAD;
        dl.appendChild(document.createTextNode('Download'));
        dl.addEventListener('click', function () {
          openWiki({
            title: 'Download ' + item.title + (item.version ? ' ' + item.version : ''),
            text: '',
            code: item.command
          }, dl);
        });
        actions.appendChild(dl);
        // with three buttons, Download sits alone on top on small screens
        if (extra.length > 1) actions.appendChild(el('span', 'card__break'));
      }

      extra.forEach(function (b) {
        actions.appendChild(buildButton(b.label, '', b.url, 'ghost'));
      });
    } else {
      actions.appendChild(buildButton('Blueprints', SVG_BLUEPRINT, item.blueprints, 'ghost'));
      actions.appendChild(buildButton('Download', SVG_DOWNLOAD, item.download, 'primary'));
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
