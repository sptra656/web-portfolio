!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var s = (e[n] = {
      i: n,
      l: !1,
      exports: {},
    });
    return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          i.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/assets/packs/"),
    i((i.s = 1350));
})({
  1350: function (t, e, i) {
    "use strict";
    i.r(e);
    var n,
      s = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      o = [].slice,
      a =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
          return -1;
        };
    (n = (function () {
      var t, e, i;
      function n() {
        (this.markGlobal = s(this.markGlobal, this)),
          (this.getNewWidget = s(this.getNewWidget, this)),
          (this.documentReady = s(this.documentReady, this)),
          (this.removeEyecatcher = s(this.removeEyecatcher, this)),
          (this.upgradeEyecatcher = s(this.upgradeEyecatcher, this)),
          (this.makeStylesheetAsync = s(this.makeStylesheetAsync, this)),
          (this.setupEyecatcher = s(this.setupEyecatcher, this)),
          (this.getPrivateToken = s(this.getPrivateToken, this)),
          (this.setUnseenCount = s(this.setUnseenCount, this)),
          (this.getUnseenCount = s(this.getUnseenCount, this)),
          (this.getChangelogs = s(this.getChangelogs, this)),
          (this.widgetReady = s(this.widgetReady, this)),
          (this.classicSetHeight = s(this.classicSetHeight, this)),
          (this.setIframeHeight = s(this.setIframeHeight, this)),
          (this.newSetHeight = s(this.newSetHeight, this)),
          (this.setHeight = s(this.setHeight, this)),
          (this.setBadge = s(this.setBadge, this)),
          (this.showWidgetBadge = s(this.showWidgetBadge, this)),
          (this.toggle = s(this.toggle, this)),
          (this.triggerCallback = s(this.triggerCallback, this)),
          (this.reload = s(this.reload, this)),
          (this.hide = s(this.hide, this)),
          (this.updatePosition = s(this.updatePosition, this)),
          (this.setPosition = s(this.setPosition, this)),
          (this.classicSetPosition = s(this.classicSetPosition, this)),
          (this.newSetPosition = s(this.newSetPosition, this)),
          (this.getPosition = s(this.getPosition, this)),
          (this.show = s(this.show, this)),
          (this.setState = s(this.setState, this)),
          (this.migrateLocalStorage = s(this.migrateLocalStorage, this)),
          (this.lsSet = s(this.lsSet, this)),
          (this.lsGet = s(this.lsGet, this)),
          (this.getSeen = s(this.getSeen, this)),
          (this.lsSetState = s(this.lsSetState, this)),
          (this.lsGetState = s(this.lsGetState, this)),
          (this.lsKey = s(this.lsKey, this)),
          (this.onFrameLoad = s(this.onFrameLoad, this)),
          (this.onBodyClick = s(this.onBodyClick, this)),
          (this.attachListeners = s(this.attachListeners, this)),
          (this.postMessageReceive = s(this.postMessageReceive, this)),
          (this.ga = s(this.ga, this)),
          (this.markAllSeen = s(this.markAllSeen, this)),
          (this.markSeen = s(this.markSeen, this)),
          (this.markRead = s(this.markRead, this)),
          (this.trackEvent = s(this.trackEvent, this)),
          (this.onHideWidget = s(this.onHideWidget, this)),
          (this.onReadMore = s(this.onReadMore, this)),
          (this.onShowDetails = s(this.onShowDetails, this)),
          (this.onShowWidget = s(this.onShowWidget, this)),
          (this.onShowWidgetBadge = s(this.onShowWidgetBadge, this)),
          (this.onWidgetUpdate = s(this.onWidgetUpdate, this)),
          (this.onWidgetReady = s(this.onWidgetReady, this)),
          (this.setAction = s(this.setAction, this)),
          (this.makeInaccessible = s(this.makeInaccessible, this)),
          (this.makeAccessible = s(this.makeAccessible, this)),
          (this.getIframeUrl = s(this.getIframeUrl, this)),
          (this.getIframeTarget = s(this.getIframeTarget, this)),
          (this.createIframe = s(this.createIframe, this)),
          (this.destroyIframe = s(this.destroyIframe, this)),
          (this.resetIframe = s(this.resetIframe, this)),
          (this.updateIframeState = s(this.updateIframeState, this)),
          (this.initIframe = s(this.initIframe, this)),
          (this.setStyles = s(this.setStyles, this)),
          (this.createElements = s(this.createElements, this)),
          (this.setup = s(this.setup, this)),
          (this.realInit = s(this.realInit, this)),
          (this.init = s(this.init, this)),
          (this.log = s(this.log, this));
      }
      return (
        30,
        (t = "CaptainAmerica"),
        (i = "HW_frame"),
        (e = "HW_frame_cont"),
        "HW_embed",
        "HW_bottom",
        ".HW_badge_cont {\n  visibility: hidden;\n  pointer-events: none;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  width: 32px;\n  height: 32px;\n}\n\n.HW_absolute {\n  position: absolute !important;\n}\n\n.HW_badge_cont.HW_visible {\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.HW_badge {\n  display: block;\n  border-radius: 20px;\n  background: #CD4B5B;\n  height: 16px;\n  width: 16px;\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  font-size: 11px;\n  cursor: pointer;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  opacity: 0;\n  will-change: scale;\n  transform: scale(0);\n  transition: all 0.3s;\n}\n\n.HW_top {\n  top: -16px;\n}\n\n.HW_bottom {\n  bottom: -16px;\n}\n\n.HW_left {\n  left: -16px;\n}\n\n.HW_right {\n  right: -16px;\n}\n\n.HW_center, .HW_vcenter {\n  left: 50%;\n  margin-left: -16px;\n}\n\n.HW_center, .HW_hcenter {\n  top: 50%;\n  margin-top: -16px;\n}\n\n.HW_badge.HW_softHidden {\n  background: #d4d4d4;\n  opacity: 1;\n  transform: scale(0.6);\n}\n\n.HW_badge.HW_hidden {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.HW_badge.HW_visible {\n  opacity: 1;\n  transform: scale(1.0);\n}\n\n.HW_frame_cont {\n  pointer-events: none;\n  border-radius: 4px;\n  box-shadow: 0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08);\n  background: #fff;\n  border: none;\n  position: fixed;\n  top: -900em;\n  z-index: 2147483647;\n  width: 340px;\n  height: 0;\n  opacity: 0;\n  will-change: height, margin-top, opacity;\n  margin-top: -10px;\n  transition: margin-top 0.15s ease-out, opacity 0.1s ease-out;\n  overflow: hidden;\n}\n\n.HW_frame_cont.HW_visible {\n  opacity: 1;\n  pointer-events: auto;\n  margin-top: 0px;\n}\n\n.HW_frame_cont.HW_visible.HW_bottom {\n  transition: margin-top 0.15s ease-out, opacity 0.1s ease-out, height 0.3s ease-out;\n}\n\n.HW_frame {\n  background: #fff;\n  border: none;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 4px;\n  position: relative;\n  z-index: 2147483647;\n}\n\n.HW_frame_cont.HW_embed {\n  position: static;\n  margin-top: 0;\n}\n\n.HW_notransition {\n  transition: none !important;\n}",
        (n.prototype.postMessage = function () {
          var e, i, n;
          return (i = (e = Array.prototype.slice.call(arguments)).shift()), (n = e), this.iframe.contentWindow.postMessage([t, i, n], "*");
        }),
        (n.prototype.log = function () {
          if (this.localOptions.debug) return console.log("[Headway Debug]", arguments);
        }),
        (n.prototype.warn = function (t) {
          return console.warn("[Headway Error]", t);
        }),
        (n.prototype.init = function (t) {
          var e;
          null == t && (t = HW_config), this.hide();
          try {
            this.realInit(t);
          } catch (i) {
            (e = i), this.warn(e);
          }
          return this;
        }),
        (n.prototype.realInit = function (t) {
          if (
            ((this.localOptions = t),
            (this.position = this.readWidgetPosition(t)),
            (this.badgePosition = t.badgePosition),
            ("v8" === this.position.version || t.__component) && (this.newWidgetPositioning = !0),
            t.__component && (this.newBadgePositioning = !0),
            (this.accountId = this.localOptions.account),
            (this.protocol = this.localOptions.protocol ? this.localOptions.protocol + ":" : "https:"),
            (this.localOptions.enabled = null == this.localOptions.enabled || this.localOptions.enabled),
            this.destroy(),
            this.localOptions.enabled)
          ) {
            if (null == this.accountId) return this.warn("Cannot load widget, 'HW_config.account' is missing");
            if (this.localOptions.apiMode)
              this.localOptions.selector && (delete this.localOptions.selector, this.warn("When in apiMode, 'selector' option is ignored")),
                this.localOptions.trigger && (delete this.localOptions.trigger, this.warn("When in apiMode, 'trigger' option is ignored"));
            else if (null == this.localOptions.selector) return this.warn("Cannot load widget, 'HW_config.selector' is missing");
            return (
              (this.visible = !1),
              (this.currentAlign = "left"),
              null != this.localOptions.callbacks && (this.localCallbacks = this.localOptions.callbacks),
              (this.localOptions.callbacks = null),
              (this.headwayAnimateCssUrl = this.localOptions.headwayAnimateCssUrl || this.protocol + "//cdn.headwayapp.co/headway-animate.css"),
              this.documentReady(this.setup)
            );
          }
        }),
        (n.prototype.readWidgetPosition = function (t) {
          var e, i, n, s;
          return t.widgetPosition
            ? ((e = /^([a-z]+)-([a-z]+)$/.exec(t.widgetPosition))[0],
              (s = e[1]),
              {
                x: e[2],
                y: s,
                version: "v8",
              })
            : "right-center" === (null != (i = t.position) ? i.x : void 0)
            ? {
                x: "right",
                y: "center",
                version: "v8",
              }
            : {
                x: (n = t.position || {}).x || "right",
                y: (s = n.y) || "bottom",
                version: n.version || "v0",
              };
        }),
        (n.prototype.destroy = function () {
          var t;
          return this.removeFromDOM(null != (t = this.elements) ? t.badgeCont : void 0), this.removeFromDOM(this.iframeCont), (this.widgetIsReady = !1), (this.badgeIsReady = !1);
        }),
        (n.prototype.find = function (t) {
          return this.findAll(t)[0];
        }),
        (n.prototype.findAll = function (t) {
          return document.querySelectorAll(t);
        }),
        (n.prototype.removeFromDOM = function (t) {
          var e;
          return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
        }),
        (n.prototype.setup = function () {
          return (
            (this.badgeEl = document.querySelector(this.localOptions.selector)),
            this.badgeEl || this.localOptions.apiMode ? (this.createElements(), this.makeInaccessible(), window.addEventListener("message", this.postMessageReceive)) : this.warn("Element provided by selector does not exist.")
          );
        }),
        (n.prototype.createElements = function () {
          var t;
          return (
            (this.elements = {
              badgeCont: document.createElement("span"),
              badge: document.createElement("span"),
              animate: document.createElement("link"),
              trigger: this.findAll(this.localOptions.trigger),
            }),
            this.find("#HW_styles_cont") ||
              (((t = document.createElement("style")).id = "HW_styles_cont"),
              (t.textContent =
                ".HW_badge_cont {\n  visibility: hidden;\n  pointer-events: none;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  width: 32px;\n  height: 32px;\n}\n\n.HW_absolute {\n  position: absolute !important;\n}\n\n.HW_badge_cont.HW_visible {\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.HW_badge {\n  display: block;\n  border-radius: 20px;\n  background: #CD4B5B;\n  height: 16px;\n  width: 16px;\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  font-size: 11px;\n  cursor: pointer;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  opacity: 0;\n  will-change: scale;\n  transform: scale(0);\n  transition: all 0.3s;\n}\n\n.HW_top {\n  top: -16px;\n}\n\n.HW_bottom {\n  bottom: -16px;\n}\n\n.HW_left {\n  left: -16px;\n}\n\n.HW_right {\n  right: -16px;\n}\n\n.HW_center, .HW_vcenter {\n  left: 50%;\n  margin-left: -16px;\n}\n\n.HW_center, .HW_hcenter {\n  top: 50%;\n  margin-top: -16px;\n}\n\n.HW_badge.HW_softHidden {\n  background: #d4d4d4;\n  opacity: 1;\n  transform: scale(0.6);\n}\n\n.HW_badge.HW_hidden {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.HW_badge.HW_visible {\n  opacity: 1;\n  transform: scale(1.0);\n}\n\n.HW_frame_cont {\n  pointer-events: none;\n  border-radius: 4px;\n  box-shadow: 0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08);\n  background: #fff;\n  border: none;\n  position: fixed;\n  top: -900em;\n  z-index: 2147483647;\n  width: 340px;\n  height: 0;\n  opacity: 0;\n  will-change: height, margin-top, opacity;\n  margin-top: -10px;\n  transition: margin-top 0.15s ease-out, opacity 0.1s ease-out;\n  overflow: hidden;\n}\n\n.HW_frame_cont.HW_visible {\n  opacity: 1;\n  pointer-events: auto;\n  margin-top: 0px;\n}\n\n.HW_frame_cont.HW_visible.HW_bottom {\n  transition: margin-top 0.15s ease-out, opacity 0.1s ease-out, height 0.3s ease-out;\n}\n\n.HW_frame {\n  background: #fff;\n  border: none;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 4px;\n  position: relative;\n  z-index: 2147483647;\n}\n\n.HW_frame_cont.HW_embed {\n  position: static;\n  margin-top: 0;\n}\n\n.HW_notransition {\n  transition: none !important;\n}"),
              document.body.appendChild(t)),
            this.localOptions.apiMode ||
              this.localOptions.embed ||
              (this.global && (this.elements.badgeCont.id = "HW_badge_cont"),
              this.newBadgePositioning && this.elements.badgeCont.classList.add("HW_absolute"),
              this.elements.badgeCont.classList.add("HW_badge_cont"),
              /top-/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_top"),
              /bottom-/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_bottom"),
              /-left/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_left"),
              /-right/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_right"),
              /-center/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_vcenter"),
              /^center$/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_center"),
              /center-/.test(this.badgePosition) && this.elements.badgeCont.classList.add("HW_hcenter"),
              this.elements.badgeCont.addEventListener("click", this.toggle, !1),
              this.badgeEl.appendChild(this.elements.badgeCont),
              this.setStyles(this.elements.badgeCont, "badgeCont"),
              this.global && (this.elements.badge.id = "HW_badge"),
              this.elements.badge.classList.add("HW_badge"),
              this.elements.badgeCont.appendChild(this.elements.badge),
              this.setStyles(this.elements.badge, "badge")),
            this.initIframe()
          );
        }),
        (n.prototype.setStyles = function () {
          var t, e, i;
          return (
            (t = arguments[0]),
            (e = 2 <= arguments.length ? o.call(arguments, 1) : []),
            (t.style.cssText = ""),
            e.forEach(
              ((i = this),
              function (e) {
                var n, s;
                return "string" === typeof (s = (null != (n = i.localOptions.styles) ? n[e] : void 0) || {})
                  ? (t.style.cssText = s)
                  : Object.keys(s).forEach(function (e) {
                      return (t.style[e] = s[e]);
                    });
              })
            )
          );
        }),
        (n.prototype.initIframe = function () {
          return this.iframeCont && this.iframeCont.dataset.account === this.accountId
            ? (document.body.contains(this.iframeCont) || this.getIframeTarget().appendChild(this.iframeCont), this.iframeData ? this.widgetReady(this.updateIframeState(this.iframeData)) : void 0)
            : this.resetIframe();
        }),
        (n.prototype.updateIframeState = function (t) {
          return (t.state = this.state), (t.badgeCount = this.getUnseenCount()), t;
        }),
        (n.prototype.resetIframe = function () {
          return this.destroyIframe(), this.createIframe();
        }),
        (n.prototype.destroyIframe = function () {
          return this.removeFromDOM(this.iframeCont), (this.iframeCont = this.iframe = null), (this.iframeData = null);
        }),
        (n.prototype.createIframe = function () {
          var t, n;
          return (
            (t = document.createElement("iframe")),
            (n = document.createElement("div")),
            this.global && (n.id = e),
            n.classList.add(e),
            this.localOptions.embed && n.classList.add("HW_embed"),
            "top" !== this.position.y && n.classList.add("HW_bottom"),
            (n.dataset.account = this.accountId),
            this.getIframeTarget().appendChild(n),
            this.global && (t.id = i),
            t.classList.add(i),
            (t.src = this.getIframeUrl()),
            (t.referrerPolicy = "strict-origin"),
            (t.sandbox = "allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms allow-popups-to-escape-sandbox"),
            t.addEventListener("load", this.onFrameLoad),
            n.appendChild(t),
            (this.iframeCont = n),
            (this.iframe = t)
          );
        }),
        (n.prototype.getIframeTarget = function () {
          return this.localOptions.embed ? this.badgeEl : document.body;
        }),
        (n.prototype.getIframeUrl = function () {
          var t, e;
          return (t = this.localOptions.debugHost || "headway-widget.net"), (e = this.protocol + "//" + t + "/widgets/" + this.accountId), null != this.localOptions.token && (e = e + "?token=" + this.localOptions.token), e;
        }),
        (n.prototype.makeAccessible = function () {
          return this.iframe.setAttribute("tabindex", "0"), this.iframe.setAttribute("aria-hidden", "false");
        }),
        (n.prototype.makeInaccessible = function () {
          return this.iframe.setAttribute("tabindex", "-1"), this.iframe.setAttribute("aria-hidden", "true");
        }),
        (n.prototype.setAction = function (t, e) {
          if (("onShowDetails" === t.event && this.onShowDetails(t.data), "onReadMore" === t.event)) return this.onReadMore(t.data);
        }),
        (n.prototype.onWidgetReady = function (t) {
          return this.triggerCallback("onWidgetReady", t);
        }),
        (n.prototype.onWidgetUpdate = function (t) {
          return this.triggerCallback("onWidgetUpdate", t);
        }),
        (n.prototype.onShowWidgetBadge = function (t) {
          return this.trackEvent("showBadge", {
            value: t,
          });
        }),
        (n.prototype.onShowWidget = function () {
          return (
            this.triggerCallback("onShowWidget"),
            this.trackEvent("openWidget", {
              action: "user",
            })
          );
        }),
        (n.prototype.onShowDetails = function (t) {
          return (
            this.triggerCallback("onShowDetails", t),
            this.trackEvent("read: " + t.title, {
              action: "user",
            })
          );
        }),
        (n.prototype.onReadMore = function (t) {
          return (
            this.triggerCallback("onReadMore", t),
            this.trackEvent("readMore: " + t.title, {
              action: "user",
            })
          );
        }),
        (n.prototype.onHideWidget = function () {
          return this.triggerCallback("onHideWidget");
        }),
        (n.prototype.trackEvent = function (t, e) {
          var i, n, s;
          return (i = null != (n = e.action) ? n : "other"), (s = e.value), this.ga(t, i, s);
        }),
        (n.prototype.markRead = function (t) {
          return this.postMessage("markRead", t);
        }),
        (n.prototype.markSeen = function (t) {
          return this.postMessage("markSeen", t);
        }),
        (n.prototype.markAllSeen = function () {
          return this.postMessage("markAllSeen");
        }),
        (n.prototype.ga = function (t, e, i) {
          if (this.localOptions.googleAnalytics && "function" === typeof window.ga)
            return window.ga("send", "event", {
              eventCategory: "Headway",
              eventLabel: t,
              eventAction: e,
              eventValue: i,
              nonInteraction: "user" !== e,
            });
        }),
        (n.prototype.postMessageReceive = function (e) {
          var i, n, s, o, a;
          if (((s = (i = e.data)[0]), (o = i[1]), (n = i[2]), (null != (a = this.iframe) ? a.contentWindow : void 0) === e.source && s === t))
            switch (o) {
              case "setHeight":
                return this.setHeight.apply(this, n);
              case "setBadge":
                return this.setBadge.apply(this, n);
              case "widgetReady":
                return this.widgetReady.apply(this, n);
              case "hide":
                return this.hide();
              case "setAction":
                return this.setAction.apply(this, n);
              case "setState":
                return this.setState.apply(this, n);
              case "migrateLocalStorage":
                return this.migrateLocalStorage.apply(this, n);
            }
        }),
        (n.prototype.attachListeners = function () {
          var t, e, i;
          if (((this.ticking = !1), window.addEventListener("scroll", this.updatePosition), window.addEventListener("resize", this.updatePosition), document.body.addEventListener("click", this.onBodyClick), this.elements.trigger))
            for (t = 0, e = (i = this.elements.trigger).length; t < e; t++) i[t].addEventListener("click", this.toggle);
          return this.log("Widget.attachListeners#triggers", this.elements.trigger);
        }),
        (n.prototype.onBodyClick = function () {
          if (!this.localOptions.embed && this.visible) return this.hide();
        }),
        (n.prototype.onFrameLoad = function () {
          var t;
          return (
            (t = {
              host: location.hostname,
              options: this.localOptions,
              newWidgetPositioning: this.newWidgetPositioning,
              position: this.position,
              localStorage: this.lsGetState(),
            }),
            this.postMessage("ready", t),
            this.log("Widget.attachListeners#load", t)
          );
        }),
        (n.prototype.lsKey = function (t) {
          return "HW_" + t + "Items[" + this.accountId + "]";
        }),
        (n.prototype.lsGetState = function () {
          var t;
          return {
            seen: function () {
              var e, i, n, s;
              for (s = [], e = 0, i = (n = this.lsGet("seen")).length; e < i; e++) (t = n[e]), s.push(parseInt(t));
              return s;
            }.call(this),
            read: function () {
              var e, i, n, s;
              for (s = [], e = 0, i = (n = this.lsGet("read")).length; e < i; e++) (t = n[e]), s.push(parseInt(t));
              return s;
            }.call(this),
          };
        }),
        (n.prototype.lsSetState = function (t) {
          var e, i, n;
          for (e in ((i = []), t)) (n = t[e]), i.push(this.lsSet(e, n));
          return i;
        }),
        (n.prototype.getSeen = function () {
          return this.lsGet("seen");
        }),
        (n.prototype.lsGet = function (t) {
          var e, i, n;
          try {
            n = null != (i = window.localStorage) ? i.getItem(this.lsKey(t)) : void 0;
          } catch (s) {
            (e = s), this.warn(e);
          }
          return (null != n ? n.length : void 0) > 0 ? n.split(",") : [];
        }),
        (n.prototype.lsSet = function (t, e) {
          var i, n, s;
          try {
            return e instanceof Array ? (null != (n = window.localStorage) ? n.setItem(this.lsKey(t), e.slice(-30).join(",")) : void 0) : null != (s = window.localStorage) ? s.removeItem(this.lsKey(t)) : void 0;
          } catch (o) {
            return (i = o), this.warn(i);
          }
        }),
        (n.prototype.migrateLocalStorage = function () {
          var t;
          return (
            (t = this.lsGetState()),
            this.lsSetState({
              seen: null,
              read: null,
              _seen: t.seen,
              _read: t.read,
            }),
            this.reload()
          );
        }),
        (n.prototype.setState = function (t) {
          return (this.state = t), "server" !== this.remoteOptions.activeStorage && this.lsSetState(t), this.onWidgetUpdate(this), this.log("Widget.setState", t);
        }),
        (n.prototype.show = function () {
          var t, e, i, n;
          return (
            (this.widgetPosition =
              ((t = null),
              (e = 10),
              (i = Math.min),
              (n = Math.max),
              {
                update: function (s) {
                  s.scrollX, s.scrollY;
                  var o,
                    a,
                    r = s.viewportWidth,
                    h = s.viewportHeight,
                    l = s.badgeX,
                    d = s.badgeY,
                    c = s.badgeWidth,
                    p = s.badgeHeight,
                    g = s.widgetWidth,
                    u = s.widgetHeight,
                    m = s.positionX,
                    f = s.positionY,
                    b = i(u, n((t = t || u), 600)),
                    y = null;
                  switch (m) {
                    case "right":
                      (o = l), "center" == f && (o += c);
                      break;
                    case "left":
                      (o = l + c - g), "center" == f && (o -= c);
                      break;
                    default:
                      throw "Invalid positionX: ".concat(m);
                  }
                  switch (f) {
                    case "top":
                      a = (y = d - b) + b - e;
                      break;
                    case "bottom":
                      a = h - (y = d + p) - e;
                      break;
                    case "center":
                      a = h - (y = d + (p - t) / 2) - e;
                      break;
                    default:
                      throw "Invalid positionY: ".concat(f);
                  }
                  var v = n(i(a, b), i(250, u, t)),
                    w = 0 - o,
                    W = o + g - r,
                    H = 0 - y,
                    _ = y + (v -= n(0, v + 20 - h)) - h;
                  return (
                    W + e > 0 && (o -= W + e),
                    w + e > 0 && (o = e),
                    _ + e > 0 && (y -= _ + e),
                    H + e > 0 && (y = e),
                    {
                      top: y,
                      left: o,
                      height: v,
                    }
                  );
                },
              })),
            this.setPosition(),
            this.iframeCont.classList.add("HW_visible"),
            this.postMessage("opened", {}),
            this.makeAccessible(),
            (this.visible = !0)
          );
        }),
        (n.prototype.getPosition = function () {
          var t, e, i, n, s, o, a;
          return (
            (t = this.elements.badgeCont.getBoundingClientRect()),
            (n = this.iframeCont.getBoundingClientRect()),
            ((e = {
              badge: {
                width: t.width,
                height: t.height,
                top: t.top,
                left: t.left,
              },
              frame: {
                width: n.width,
                height: n.height,
              },
            }).frame.height = parseInt(this.iframeCont.style.height)),
            (s = parseInt(e.frame.width)),
            (a = {
              top: parseInt(e.badge.height),
              right: s - e.badge.width,
            }),
            {
              y: e.badge.top + e.frame.height > document.documentElement.clientHeight,
              x: e.badge.left + s > document.documentElement.clientWidth,
            },
            (o = {
              x: "right",
              y: "bottom",
            }),
            e.badge.left + s > document.documentElement.clientWidth && e.badge.left - s >= 0 && (o.x = "left"),
            e.badge.top + e.frame.height > document.documentElement.clientHeight && e.badge.top - e.frame.height >= 0 && (o.y = "top"),
            (null != (i = this.localOptions.position) ? i.y : void 0) && (o.y = i.y),
            (null != i ? i.x : void 0) && (o.x = i.x),
            e.badge.left - s < 0 && (o.x = "fill"),
            [e.badge, e.frame, a, o]
          );
        }),
        (n.prototype.newSetPosition = function (t) {
          var e, i, n;
          if (
            (null == t && (t = !1),
            (e = this.elements.badgeCont.getBoundingClientRect()),
            (n = this.iframeCont.getBoundingClientRect()),
            (i = this.widgetPosition.update({
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset,
              viewportWidth: document.documentElement.clientWidth,
              viewportHeight: document.documentElement.clientHeight,
              badgeX: e.left,
              badgeY: e.top,
              badgeWidth: e.width,
              badgeHeight: e.height,
              widgetWidth: n.width,
              widgetHeight: this.currentHeight,
              positionX: this.position.x,
              positionY: this.position.y,
            })),
            t || this.iframeCont.classList.add("HW_notransition"),
            this.setIframeHeight(i.height),
            (this.iframeCont.style.left = i.left + "px"),
            (this.iframeCont.style.top = i.top + "px"),
            !t)
          )
            return this.iframeCont.offsetHeight, this.iframeCont.classList.remove("HW_notransition");
        }),
        (n.prototype.classicSetPosition = function () {
          var t, e, i, n, s;
          return (
            (t = (s = this.getPosition())[0]),
            (e = s[1]),
            (n = s[2]),
            "right" === (i = s[3]).x ? (this.iframeCont.style.left = t.left + "px") : "left" === i.x ? (this.iframeCont.style.left = t.left - n.right + "px") : (this.iframeCont.style.left = "0px"),
            "top" === i.y ? (this.iframeCont.style.top = t.top + n.top - e.height - t.height + "px") : (this.iframeCont.style.top = t.top + n.top + "px")
          );
        }),
        (n.prototype.setPosition = function () {
          return this.newWidgetPositioning ? this.newSetPosition() : this.classicSetPosition();
        }),
        (n.prototype.updatePosition = function () {
          if (!this.localOptions.embed && this.visible)
            return (
              this.ticking ||
                window.requestAnimationFrame(
                  ((t = this),
                  function () {
                    return t.setPosition(), (t.ticking = !1);
                  })
                ),
              (this.ticking = !0)
            );
          var t;
        }),
        (n.prototype.hide = function () {
          if (this.visible) return (this.visible = !1), this.iframeCont.classList.remove("HW_visible"), this.postMessage("closed", {}), this.makeInaccessible(), this.onHideWidget(this);
        }),
        (n.prototype.reload = function () {
          return this.postMessage("reload");
        }),
        (n.prototype.triggerCallback = function (t, e) {
          var i, n;
          if (((e = Array.prototype.slice.call(arguments)), (t = e.shift()), null != this.localCallbacks))
            return (
              (n = this),
              (i = function () {
                var i;
                return null != (i = n.localCallbacks[t]) ? i.apply(n, e) : void 0;
              }),
              setTimeout(i, 0)
            );
        }),
        (n.prototype.toggle = function (t) {
          if ((t && (t.preventDefault(), t.stopPropagation()), this.widgetIsReady)) return this.visible ? this.hide() : (this.show(), this.onShowWidget());
        }),
        (n.prototype.showWidgetBadge = function () {
          return (this.badgeIsReady = !0), this.setBadge(this.getUnseenCount()), this.onShowWidgetBadge(this.getUnseenCount());
        }),
        (n.prototype.setBadge = function (t) {
          var e;
          if ((this.setUnseenCount(t), this.badgeIsReady) && !this.localOptions.embed)
            return t >= 1
              ? (this.elements.badge.classList.add("HW_visible"),
                this.elements.badge.classList.remove("HW_softHidden"),
                this.setStyles(this.elements.badge, "badge"),
                (this.elements.badge.innerText = t),
                this.remoteOptions.eyecatcher ? this.setupEyecatcher() : void 0)
              : (this.removeEyecatcher(),
                this.remoteOptions.softHide
                  ? (this.elements.badge.classList.remove("HW_visible"), this.elements.badge.classList.add("HW_softHidden"), this.setStyles(this.elements.badge, "badge", "softHidden"), (this.elements.badge.innerText = ""))
                  : (window.setTimeout(
                      ((e = this),
                      function () {
                        return e.elements.badgeCont.classList.remove("HW_visible");
                      }),
                      300
                    ),
                    this.elements.badge.classList.remove("HW_visible"),
                    this.elements.badge.classList.add("HW_hidden"),
                    (this.elements.badge.innerText = t)));
        }),
        (n.prototype.setHeight = function (t) {
          return this.newWidgetPositioning ? this.newSetHeight(t) : this.classicSetHeight(t);
        }),
        (n.prototype.newSetHeight = function (t) {
          if (this.currentHeight !== t.height && ((this.currentHeight = t.height), this.setIframeHeight(t.height), this.visible)) return this.newSetPosition(!0);
        }),
        (n.prototype.setIframeHeight = function (t) {
          return (this.iframe.style.height = t + "px"), (this.iframeCont.style.height = t + "px");
        }),
        (n.prototype.classicSetHeight = function (t) {
          var e;
          return (
            (e = Math.min(t.height, 500)),
            this.setIframeHeight(e),
            this.iframeCont.getBoundingClientRect().y + e > window.innerHeight ? ((this.widgetPositionUpdated = !0), this.setPosition()) : this.widgetPositionUpdated ? (this.setPosition(), (this.widgetPositionUpdated = !1)) : void 0
          );
        }),
        (n.prototype.widgetReady = function (t) {
          var e;
          if (
            ((this.iframeData = t),
            this.attachListeners(),
            this.elements.badgeCont.classList.add("HW_visible"),
            (this.remoteOptions = t.options),
            (this.state = t.state),
            this.setBadge(t.badgeCount),
            window.setTimeout(
              ((e = this),
              function () {
                return e.showWidgetBadge();
              }),
              1e3 * (this.widgetIsReady ? 1 : this.remoteOptions.badgeDelay)
            ),
            this.log("Widget.widgetReady", t),
            (this.changelogs = t.changelogs),
            this.widgetIsReady || ((this.widgetIsReady = !0), this.onWidgetReady(this)),
            this.onWidgetUpdate(this),
            this.localOptions.embed)
          )
            return this.show();
        }),
        (n.prototype.getChangelogs = function () {
          var t, e, i, n, s, o;
          for (e = 0, i = (n = this.changelogs).length; e < i; e++) ((t = n[e]).read = ((s = t.id.toString()), a.call(this.lsGet("read"), s) >= 0)), (t.seen = ((o = t.id.toString()), a.call(this.lsGet("seen"), o) >= 0));
          return this.changelogs;
        }),
        (n.prototype.getUnseenCount = function () {
          return this.unseenCount;
        }),
        (n.prototype.setUnseenCount = function (t) {
          return (this.unseenCount = t), (this.elements.badge.dataset.countUnseen = t > 0 ? t : "");
        }),
        (n.prototype.getPrivateToken = function () {
          if (!this.widgetIsReady) throw "getPrivateToken has to be called after `onWidgetReady` callback";
          return this.remoteOptions.token;
        }),
        (n.prototype.setupEyecatcher = function () {
          var t;
          if (!this.elements.animate.parentNode)
            return (
              this.makeStylesheetAsync(this.elements.animate),
              this.elements.animate.setAttribute("rel", "stylesheet"),
              this.elements.animate.setAttribute("href", this.headwayAnimateCssUrl),
              document.head.appendChild(this.elements.animate),
              (t = ["blank", "pulse", "jello", "rubberBand", "wobble", "shake", "bounce"]),
              this.elements.badge.classList.add("HW_animated"),
              this.upgradeEyecatcher(t)
            );
        }),
        (n.prototype.makeStylesheetAsync = function (t) {
          return (
            t.setAttribute("media", "print"),
            t.addEventListener("load", function (e) {
              return t.setAttribute("media", "all");
            })
          );
        }),
        (n.prototype.upgradeEyecatcher = function (t) {
          var e, i;
          return (
            (e = 0),
            5,
            (this.eyecatcherInterval = setInterval(
              ((i = this),
              function () {
                var n, s;
                return (
                  (n = t[Math.floor(e / 5)] || t[t.length - 1]),
                  (s = "HW_" + n),
                  i.elements.badge.classList.add(s),
                  setTimeout(function () {
                    return i.elements.badge.classList.remove(s);
                  }, 1e3),
                  e++
                );
              }),
              5500
            ))
          );
        }),
        (n.prototype.removeEyecatcher = function () {
          var t;
          if (((this.elements.badge.className = "HW_badge"), null != (t = this.elements.animate.parentNode) && t.removeChild(this.elements.animate), this.eyecatcherInterval)) return clearInterval(this.eyecatcherInterval);
        }),
        (n.prototype.documentReady = function (t) {
          switch (document.readyState) {
            case "interactive":
            case "complete":
              return t();
            default:
              return window.addEventListener("DOMContentLoaded", t, !1);
          }
        }),
        (n.prototype.getNewWidget = function () {
          return new n();
        }),
        (n.prototype.markGlobal = function () {
          return (this.global = !0);
        }),
        n
      );
    })()),
      (window.Headway = new n()),
      window.Headway.markGlobal(),
      "undefined" !== typeof HW_config && null !== HW_config && window.Headway.init(HW_config);
  },
});
