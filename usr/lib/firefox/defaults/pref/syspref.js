// moeOS new pref

// Recommendations & Telemetry
pref("browser.contentblocking.report.lockwise.enabled", false);
pref("browser.contentblocking.report.hide_vpn_banner", true, locked);
pref("browser.contentblocking.report.vpn.enabled", false, locked);
pref("browser.contentblocking.report.show_mobile_app", false, locked);
pref("browser.vpn_promo.enabled", false, locked);
pref("browser.promo.focus.enabled", false, locked);
// ...about:addons recommendations sections and more
pref("extensions.htmlaboutaddons.recommendations.enabled", false, locked);
pref("extensions.getAddons.showPane", false, locked);
pref("extensions.getAddons.cache.enabled", false, locked); // disable fetching of extension metadata
pref("lightweightThemes.getMoreURL", "", locked); // disable button to get more themes
// ...about:preferences#home
pref("browser.topsites.useRemoteSetting", false, locked); // hide sponsored shortcuts button
// ...and about:config
pref("browser.aboutConfig.showWarning", false, locked);
// hide about:preferences#moreFromMozilla
pref("browser.preferences.moreFromMozilla", false, locked);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false, locked);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false, locked);
pref("toolkit.telemetry.unified", false, locked); // master switch
pref("toolkit.telemetry.enabled", false, locked);  // master switch
pref("toolkit.telemetry.server", "data:,", locked);
pref("toolkit.telemetry.archive.enabled", false, locked);
pref("toolkit.telemetry.newProfilePing.enabled", false, locked);
pref("toolkit.telemetry.updatePing.enabled", false, locked);
pref("toolkit.telemetry.firstShutdownPing.enabled", false, locked);
pref("toolkit.telemetry.shutdownPingSender.enabled", false, locked);
pref("toolkit.telemetry.bhrPing.enabled", false, locked);
pref("toolkit.telemetry.cachedClientID", "", locked);
pref("toolkit.telemetry.previousBuildID", "", locked);
pref("toolkit.telemetry.server_owner", "", locked);
pref("toolkit.coverage.opt-out", true, locked); // hidden
pref("toolkit.telemetry.coverage.opt-out", true, locked); // hidden
pref("toolkit.coverage.enabled", false, locked);
pref("toolkit.coverage.endpoint.base", "", locked);
pref("toolkit.crashreporter.infoURL", "", locked);
pref("datareporting.healthreport.uploadEnabled", false, locked);
pref("datareporting.policy.dataSubmissionEnabled", false, locked);
pref("security.protectionspopup.recordEventTelemetry", false, locked);
pref("browser.ping-centre.telemetry", false, locked);
// opt-out of normandy and studies
pref("app.normandy.enabled", false, locked);
pref("app.normandy.api_url", "", locked);
pref("app.shield.optoutstudies.enabled", false, locked);
// disable personalized extension recommendations
pref("browser.discovery.enabled", false, locked);
pref("browser.discovery.containers.enabled", false, locked);
pref("browser.discovery.sites", "", locked);

pref("browser.shopping.experience2023.survey.enabled", false, locked);
pref("browser.shopping.experience2023.autoOpen.userEnabled", false, locked);
pref("browser.shopping.experience2023.autoOpen.enabled", false, locked);
pref("browser.shopping.experience2023.ads.userEnabled", false, locked);
pref("browser.shopping.experience2023.active", false, locked);
pref("browser.newtabpage.pinned", "", locked);
pref("browser.search.update", false, locked);
pref("dom.private-attribution.submission.enabled", false, locked);
pref("browser.toolbars.bookmarks.visibility", "never");
pref("gfx.webrender.compositor", true);
pref("gfx.webrender.prefer-robustness", false);
pref("gfx.webrender.low-quality-pinch-zoom", true);
pref("gfx.webrender.fallback.software", false);

pref("browser.ping-centre.telemetry", false, locked);
pref("remote.prefs.recommended", false, locked);
pref("browser.dataFeatureRecommendations.enabled", false, locked);
pref("browser.tabs.firefox-view", false);
pref("extensions.pocket.enabled", false);
pref("browser.urlbar.suggest.pocket", false);

pref("browser.gnome-search-provider.enabled", true, locked);

// Use portal
pref("widget.use-xdg-desktop-portal.open-uri", 1, locked);
pref("widget.use-xdg-desktop-portal.settings", 1, locked);
pref("widget.use-xdg-desktop-portal.mime-handler", 1, locked);
pref("widget.use-xdg-desktop-portal.file-picker", 1, locked);
pref("widget.use-xdg-desktop-portal.location", 1, locked);

// Rounded Corners
pref("widget.gtk.rounded-bottom-corners.enabled", true, locked);

// Touchpad Overscroll
pref("apz.overscroll.enabled", true);

// Enforce security when dealing with SameSite=None
pref("network.cookie.sameSite.noneRequiresSecure", true);

// WebGPU
pref("gfx.webgpu.ignore-blocklist", true);
pref("gfx.webrender.all", true);
pref("dom.webgpu.enabled", true);

// Show compact mode
pref("browser.compactmode.show", true, locked);

// Enable VA-API
pref("media.ffmpeg.vaapi.enabled", true);

// Default compact mode
pref("browser.uidensity", 1);

// disable crash report
pref("browser.tabs.crashReporting.sendReport", false, locked);
pref("breakpad.reportURL", "", locked);


// GNOME Theme
pref("gnomeTheme.dragWindowHeaderbarButtons", false);
pref("gnomeTheme.systemIcons", true);
pref("gnomeTheme.hideWebrtcIndicator", true);
pref("gnomeTheme.hideSingleTab", true);

// Make scrolling less sensitive
pref("apz.gtk.pangesture.page_delta_mode_multiplier", "0.38");

// Lock font settings
pref("browser.display.use_document_fonts", 0, locked);
pref("font.default.x-western", "sans-serif", locked);
pref("font.name.sans-serif.x-western", "sans-serif", locked);
pref("font.name.serif.x-western", "sans-serif", locked);
pref("font.name.monospace.x-western", "monospace", locked);
pref("font.size.monospace.x-western", 15, locked);
pref("font.minimum-size.x-western", 15, locked);
pref("font.minimum-size.ar", 15, locked);
pref("font.minimum-size.el", 15, locked);
pref("font.minimum-size.he", 15, locked);
pref("font.minimum-size.ja", 15, locked);
pref("font.minimum-size.ko", 15, locked);
pref("font.minimum-size.th", 15, locked);
pref("font.minimum-size.x-armn", 15, locked);
pref("font.minimum-size.x-beng", 15, locked);
pref("font.minimum-size.x-cans", 15, locked);
pref("font.minimum-size.x-cyrillic", 15, locked);
pref("font.minimum-size.x-devanagari", 15, locked);
pref("font.minimum-size.x-ethi", 15, locked);
pref("font.minimum-size.x-geor", 15, locked);
pref("font.minimum-size.x-gujr", 15, locked);
pref("font.minimum-size.x-guru", 15, locked);
pref("font.minimum-size.x-khmr", 15, locked);
pref("font.minimum-size.x-knda", 15, locked);
pref("font.minimum-size.x-math", 15, locked);
pref("font.minimum-size.x-mlym", 15, locked);
pref("font.minimum-size.x-orya", 15, locked);
pref("font.minimum-size.x-sinh", 15, locked);
pref("font.minimum-size.x-tamil", 15, locked);
pref("font.minimum-size.x-telu", 15, locked);
pref("font.minimum-size.x-tibt", 15, locked);
pref("font.minimum-size.x-unicode", 15, locked);
pref("font.minimum-size.zh-CN", 15, locked);
pref("font.minimum-size.zh-HK", 15, locked);
pref("font.minimum-size.zh-TW", 15, locked);
pref("font.name-list.emoji", "emoji", locked);
pref("gfx.font_rendering.opentype_svg.enabled", false, locked);


// Strip URL
pref("privacy.query_stripping.enabled", true);
pref("privacy.query_stripping.enabled.pbmode", true);

pref("general.autoconfig.testpref", true, locked);
pref("widget.gtk.global-menu.wayland.enabled", true, locked);
pref("widget.gtk.global-menu.enabled", true);
pref("media.hevc.enabled", true);
pref("browser.theme.dark-private-windows", false);
pref("svg.context-properties.content.enabled", true);
pref("general.smoothScroll.msdPhysics.enabled", true);
pref("widget.dmabuf.force-enabled", true);
pref("xpinstall.whitelist.required", true);
