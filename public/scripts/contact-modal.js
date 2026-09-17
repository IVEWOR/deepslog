/* Contact modal controller — vanilla JS, runs once per page.
 * Handles every [data-cm-root] instance: open/close, ESC, focus,
 * Web3Forms submit (with missing-key guard + mailto fallback),
 * lazy Cal.com embed, and GA4 generate_lead events.
 */
(function () {
  if (window.__cmInit) return;
  window.__cmInit = true;

  var CAL_SCRIPT = "https://app.cal.com/embed/embed.js";
  var calLoading = null;

  function loadCal() {
    if (window.Cal) return Promise.resolve(window.Cal);
    if (calLoading) return calLoading;
    calLoading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = CAL_SCRIPT;
      s.async = true;
      s.onload = function () { resolve(window.Cal); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return calLoading;
  }

  function initCal(ns, container, calLink) {
    return loadCal().then(function (Cal) {
      Cal("init", ns, { origin: "https://app.cal.com" });
      Cal.ns[ns]("inline", {
        elementOrSelector: container,
        config: { layout: "month_view" },
        calLink: calLink,
      });
      Cal.ns[ns]("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#9a3a24" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    });
  }

  function trackLead(formLocation) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { form_location: formLocation });
      }
    } catch (e) {
      /* analytics is best-effort */
    }
  }

  document.querySelectorAll("[data-cm-root]").forEach(function (root, rootIndex) {
    var openBtn = root.querySelector("[data-cm-open]");
    var overlay = root.querySelector("[data-cm-overlay]");
    // Portal the overlay to <body> (same as the old React createPortal).
    // CTA triggers live inside `animate-fade-in-up` wrappers whose final
    // `translateY(0)` transform would otherwise become the containing block
    // for our `position: fixed` overlay, trapping the modal inside a
    // button-height box instead of the viewport.
    if (overlay && overlay.parentElement !== document.body) {
      document.body.appendChild(overlay);
    }
    var closeBtn = root.querySelector("[data-cm-close]");
    var form = root.querySelector("[data-cm-form]");
    var formView = root.querySelector("[data-cm-form-view]");
    var successView = root.querySelector("[data-cm-success-view]");
    var errorBox = root.querySelector("[data-cm-error]");
    var submitBtn = root.querySelector("[data-cm-submit]");
    var noKeyNotice = root.querySelector("[data-cm-nokey]");
    var calOpenBtn = root.querySelector("[data-cm-cal-open]");
    var calBackBtn = root.querySelector("[data-cm-cal-back]");
    var calPane = root.querySelector("[data-cm-cal-pane]");
    var calContainer = root.querySelector("[data-cm-cal]");
    var leftPane = root.querySelector("[data-cm-left]");

    var subject = root.getAttribute("data-cm-subject") || "New Project Inquiry via deepakj.dev";
    var formLocation = root.getAttribute("data-cm-location") || "unknown";
    var calLink = root.getAttribute("data-cm-callink") || "deepslog/meet";
    var mailto = root.getAttribute("data-cm-mailto") || "howdy@deepakj.dev";
    var key = document.body.getAttribute("data-web3forms-key") || "";
    var calNs = "cm" + rootIndex;
    var calReady = false;

    function open() {
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      var first = form ? form.querySelector("input, textarea") : null;
      if (first) first.focus({ preventScroll: true });
    }

    function close() {
      overlay.hidden = true;
      document.body.style.overflow = "";
      // Reset transient UI after close animation
      setTimeout(function () {
        if (calPane) calPane.hidden = true;
        if (leftPane) leftPane.classList.remove("cm-hidden-mobile");
        if (successView) successView.hidden = true;
        if (formView) formView.hidden = false;
        if (errorBox) errorBox.hidden = true;
      }, 250);
    }

    if (openBtn) openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-cm-backdrop")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) close();
    });

    // Missing-key guard: honest disabled state, never a silent 401.
    if (!key && form && submitBtn) {
      submitBtn.disabled = true;
      if (noKeyNotice) {
        noKeyNotice.hidden = false;
        var link = noKeyNotice.querySelector("a");
        if (link) link.href = "mailto:" + mailto;
      }
    }

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!key) return;
        submitBtn.disabled = true;
        var original = submitBtn.textContent;
        submitBtn.textContent = "Sending…";
        if (errorBox) errorBox.hidden = true;

        var data = new FormData(form);
        data.append("access_key", key);
        data.append("subject", subject);
        data.append("page_url", location.href);
        data.append("form_location", formLocation);
        var name = data.get("name");
        var email = data.get("email");
        if (name) data.append("from_name", name);
        if (email) data.append("reply_to", email);

        var ctrl = new AbortController();
        var timer = setTimeout(function () { ctrl.abort(); }, 12000);

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
          signal: ctrl.signal,
        })
          .then(function (res) { return res.json(); })
          .then(function (payload) {
            if (payload && payload.success) {
              formView.hidden = true;
              successView.hidden = false;
              trackLead(formLocation);
            } else {
              throw new Error("bad-response");
            }
          })
          .catch(function () {
            if (errorBox) {
              errorBox.hidden = false;
              var m = errorBox.querySelector("[data-cm-error-mailto]");
              if (m) m.href = "mailto:" + mailto;
            }
          })
          .finally(function () {
            clearTimeout(timer);
            submitBtn.disabled = false;
            submitBtn.textContent = original;
          });
      });
    }

    function showCalendar() {
      if (leftPane) leftPane.classList.add("cm-hidden-mobile");
      calPane.hidden = false;
      if (!calReady && calContainer) {
        calReady = true;
        initCal(calNs, calContainer, calLink).catch(function () {
          calContainer.innerHTML =
            '<p class="stat-caption" style="padding:2rem;text-align:center">Calendar failed to load. <a href="https://cal.com/' +
            calLink +
            '" target="_blank" rel="noopener" style="text-decoration:underline">Open booking page directly</a>.</p>';
        });
      }
    }

    function hideCalendar() {
      calPane.hidden = true;
      if (leftPane) leftPane.classList.remove("cm-hidden-mobile");
    }

    if (calOpenBtn) calOpenBtn.addEventListener("click", showCalendar);
    if (calBackBtn) calBackBtn.addEventListener("click", hideCalendar);
  });

  // Mobile nav toggle (progressive enhancement)
  document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var menu = document.querySelector("[data-nav-menu]");
      if (!menu) return;
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  // Work grid: progressive "load more" (full list renders in HTML for SEO)
  document.querySelectorAll("[data-work-grid]").forEach(function (grid) {
    var step = parseInt(grid.getAttribute("data-work-step") || "6", 10);
    var cards = Array.prototype.slice.call(grid.querySelectorAll("[data-work-card]"));
    var sentinel = grid.parentElement.querySelector("[data-work-sentinel]");
    var endnote = grid.parentElement.querySelector("[data-work-end]");
    var visible = cards.filter(function (c) { return !c.hidden; }).length;
    function render() {
      cards.forEach(function (c, i) { c.hidden = i >= visible; });
      var done = visible >= cards.length;
      if (sentinel) sentinel.hidden = done;
      if (endnote) endnote.hidden = !done || visible === cards.length && cards.length <= step;
    }
    render();
    if (!("IntersectionObserver" in window) || !sentinel) {
      visible = cards.length;
      render();
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          visible = Math.min(visible + step, cards.length);
          render();
          if (visible >= cards.length) io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(sentinel);
  });
})();
