/* Contact modal controller — vanilla JS, runs once per page.
 *
 * - Portals each overlay to <body> on init. CTA triggers live inside
 *   `animate-fade-in-up` wrappers whose resting `translateY(0)` transform
 *   would otherwise become the containing block for the `position: fixed`
 *   overlay, trapping the dialog inside a button-height box.
 * - One delegated click/submit/keydown layer (no per-instance listeners),
 *   so open/close can never desync regardless of init order or instance
 *   count. Each root and its overlay share a data-cm-id link.
 * - Web3Forms submit with missing-key guard + mailto fallback, 12s
 *   timeout, and GA4 generate_lead events on success.
 */
(function () {
  if (window.__cmInit) return;
  window.__cmInit = true;

  var KEY =
    (document.body && document.body.getAttribute("data-web3forms-key")) || "";

  function trackLead(formLocation) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { form_location: formLocation });
      }
    } catch (e) {
      /* analytics is best-effort */
    }
  }

  // Index + portal every instance. Overlays move to <body>; the trigger
  // button stays in place. Node references stay valid across the move.
  document.querySelectorAll("[data-cm-root]").forEach(function (root, i) {
    var overlay = root.querySelector("[data-cm-overlay]");
    if (!overlay) return;
    var id = "cm" + i;
    root.setAttribute("data-cm-id", id);
    overlay.setAttribute("data-cm-id", id);
    if (overlay.parentElement !== document.body) {
      document.body.appendChild(overlay);
    }
    // Missing-key guard: honest disabled state, never a silent 401.
    if (!KEY) {
      var submitBtn = overlay.querySelector("[data-cm-submit]");
      var noKeyNotice = overlay.querySelector("[data-cm-nokey]");
      if (submitBtn) submitBtn.disabled = true;
      if (noKeyNotice) {
        noKeyNotice.hidden = false;
        var link = noKeyNotice.querySelector("a");
        if (link) {
          link.href =
            "mailto:" + (root.getAttribute("data-cm-mailto") || "howdy@deepakj.dev");
        }
      }
    }
  });

  function findOverlay(id) {
    if (!id) return null;
    return document.querySelector('[data-cm-overlay][data-cm-id="' + id + '"]');
  }

  function overlayConfig(overlay) {
    var id = overlay.getAttribute("data-cm-id");
    var root = document.querySelector('[data-cm-root][data-cm-id="' + id + '"]');
    return {
      subject:
        (root && root.getAttribute("data-cm-subject")) ||
        "New Project Inquiry via deepakj.dev",
      formLocation:
        (root && root.getAttribute("data-cm-location")) || "unknown",
      mailto:
        (root && root.getAttribute("data-cm-mailto")) || "howdy@deepakj.dev",
    };
  }

  function openOverlay(overlay) {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    var first = overlay.querySelector("form input, form textarea");
    if (first && first.focus) first.focus({ preventScroll: true });
  }

  function closeOverlay(overlay) {
    overlay.hidden = true;
    if (!document.querySelector("[data-cm-overlay]:not([hidden])")) {
      document.body.style.overflow = "";
    }
    // Reset transient UI so the next open starts fresh.
    setTimeout(function () {
      var successView = overlay.querySelector("[data-cm-success-view]");
      var formView = overlay.querySelector("[data-cm-form-view]");
      var errorBox = overlay.querySelector("[data-cm-error]");
      if (successView) successView.hidden = true;
      if (formView) formView.hidden = false;
      if (errorBox) errorBox.hidden = true;
    }, 250);
  }

  function closest(el, selector) {
    if (!el || !el.closest) return null;
    return el.closest(selector);
  }

  document.addEventListener("click", function (e) {
    var openBtn = closest(e.target, "[data-cm-open]");
    if (openBtn) {
      var root = closest(openBtn, "[data-cm-root]");
      var overlay = root && findOverlay(root.getAttribute("data-cm-id"));
      if (overlay) openOverlay(overlay);
      return;
    }
    if (closest(e.target, "[data-cm-close]")) {
      var toClose = closest(e.target, "[data-cm-overlay]");
      if (toClose) closeOverlay(toClose);
      return;
    }
    var t = e.target;
    if (t && t.hasAttribute && t.hasAttribute("data-cm-backdrop")) {
      var behind = closest(t, "[data-cm-overlay]");
      if (behind) closeOverlay(behind);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document
      .querySelectorAll("[data-cm-overlay]:not([hidden])")
      .forEach(closeOverlay);
  });

  document.addEventListener("submit", function (e) {
    var form = closest(e.target, "[data-cm-form]");
    if (!form) return;
    e.preventDefault();
    if (!KEY) return;
    var overlay = closest(form, "[data-cm-overlay]");
    if (!overlay) return;
    var cfg = overlayConfig(overlay);
    var submitBtn = form.querySelector("[data-cm-submit]");
    var errorBox = overlay.querySelector("[data-cm-error]");
    var formView = overlay.querySelector("[data-cm-form-view]");
    var successView = overlay.querySelector("[data-cm-success-view]");

    if (submitBtn) submitBtn.disabled = true;
    var original = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) submitBtn.textContent = "Sending…";
    if (errorBox) errorBox.hidden = true;

    var data = new FormData(form);
    data.append("access_key", KEY);
    data.append("subject", cfg.subject);
    data.append("page_url", location.href);
    data.append("form_location", cfg.formLocation);
    var name = data.get("name");
    var email = data.get("email");
    if (name) data.append("from_name", name);
    if (email) data.append("reply_to", email);

    var ctrl = new AbortController();
    var timer = setTimeout(function () {
      ctrl.abort();
    }, 12000);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
      signal: ctrl.signal,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (payload) {
        if (payload && payload.success) {
          if (formView) formView.hidden = true;
          if (successView) successView.hidden = false;
          trackLead(cfg.formLocation);
        } else {
          throw new Error("bad-response");
        }
      })
      .catch(function () {
        if (errorBox) {
          errorBox.hidden = false;
          var m = errorBox.querySelector("[data-cm-error-mailto]");
          if (m) m.href = "mailto:" + cfg.mailto;
        }
      })
      .finally(function () {
        clearTimeout(timer);
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtn) submitBtn.textContent = original;
      });
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
    var cards = Array.prototype.slice.call(
      grid.querySelectorAll("[data-work-card]")
    );
    var sentinel = grid.parentElement.querySelector("[data-work-sentinel]");
    var endnote = grid.parentElement.querySelector("[data-work-end]");
    var visible = cards.filter(function (c) {
      return !c.hidden;
    }).length;
    function render() {
      cards.forEach(function (c, i) {
        c.hidden = i >= visible;
      });
      var done = visible >= cards.length;
      if (sentinel) sentinel.hidden = done;
      if (endnote)
        endnote.hidden = !done || (visible === cards.length && cards.length <= step);
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
