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
pref("gfx.webrender.low-quality-pinch-zoom", true);

pref("browser.ping-centre.telemetry", false, locked);
pref("remote.prefs.recommended", false, locked);
pref("browser.dataFeatureRecommendations.enabled", false, locked);
pref("browser.tabs.firefox-view", false);
pref("extensions.pocket.enabled", false);
pref("browser.urlbar.suggest.pocket", false);

// Use portal
pref("widget.use-xdg-desktop-portal.open-uri", 1, locked);
pref("widget.use-xdg-desktop-portal.settings", 1, locked);
pref("widget.use-xdg-desktop-portal.mime-handler", 1, locked);
pref("widget.use-xdg-desktop-portal.file-picker", 1, locked);
pref("widget.use-xdg-desktop-portal.location", 1, locked);

// Touchpad Overscroll
pref("apz.overscroll.enabled", true);

// Enforce security when dealing with SameSite=None
pref("network.cookie.sameSite.noneRequiresSecure", true);

// Enable VA-API
pref("media.ffmpeg.vaapi.enabled", true);

// disable crash report
pref("browser.tabs.crashReporting.sendReport", false, locked);
pref("breakpad.reportURL", "", locked);

// Make scrolling less sensitive
pref("apz.gtk.pangesture.page_delta_mode_multiplier", "0.1");
pref("apz.gtk.pangesture.pixel_delta_mode_multiplier", "17");
pref("apz.gtk.pangesture.delta_mode", 2);

// Lock font settings
pref("browser.display.use_document_fonts", 0, locked);
pref("font.default.x-western", "sans-serif", locked);
pref("font.name.sans-serif.x-western", "sans-serif", locked);
pref("font.name.serif.x-western", "sans-serif", locked);
pref("font.name.monospace.x-western", "monospace", locked);
pref("font.size.monospace.x-western", 16, locked);
pref("font.minimum-size.x-western", 16, locked);
pref("font.minimum-size.ar", 16, locked);
pref("font.minimum-size.el", 16, locked);
pref("font.minimum-size.he", 16, locked);
pref("font.minimum-size.ja", 16, locked);
pref("font.minimum-size.ko", 16, locked);
pref("font.minimum-size.th", 16, locked);
pref("font.minimum-size.x-armn", 16, locked);
pref("font.minimum-size.x-beng", 16, locked);
pref("font.minimum-size.x-cans", 16, locked);
pref("font.minimum-size.x-cyrillic", 16, locked);
pref("font.minimum-size.x-devanagari", 16, locked);
pref("font.minimum-size.x-ethi", 16, locked);
pref("font.minimum-size.x-geor", 16, locked);
pref("font.minimum-size.x-gujr", 16, locked);
pref("font.minimum-size.x-guru", 16, locked);
pref("font.minimum-size.x-khmr", 16, locked);
pref("font.minimum-size.x-knda", 16, locked);
pref("font.minimum-size.x-math", 16, locked);
pref("font.minimum-size.x-mlym", 16, locked);
pref("font.minimum-size.x-orya", 16, locked);
pref("font.minimum-size.x-sinh", 16, locked);
pref("font.minimum-size.x-tamil", 16, locked);
pref("font.minimum-size.x-telu", 16, locked);
pref("font.minimum-size.x-tibt", 16, locked);
pref("font.minimum-size.x-unicode", 16, locked);
pref("font.minimum-size.zh-CN", 16, locked);
pref("font.minimum-size.zh-HK", 16, locked);
pref("font.minimum-size.zh-TW", 16, locked);
pref("font.name-list.emoji", "emoji", locked);
pref("gfx.font_rendering.opentype_svg.enabled", false, locked);


// Strip URL
pref("privacy.query_stripping.enabled", true);
pref("privacy.query_stripping.enabled.pbmode", true);

pref("general.autoconfig.testpref", true, locked);
pref("media.hevc.enabled", true);
pref("browser.theme.dark-private-windows", false);
pref("svg.context-properties.content.enabled", true);
pref("xpinstall.whitelist.required", true);




// enable APS
pref("privacy.partition.always_partition_third_party_non_cookie_storage", true, locked);
pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false, locked);

// HTTPS Only
pref("dom.security.https_only_mode", true, locked);
pref("network.auth.subresource-http-auth-allow", 2);

// DNS
pref("network.trr.confirmationNS", "skip", locked); // skip undesired doh test connection
pref("network.dns.disablePrefetch", true, locked); // disable dns prefetching

// Prefetching
pref("network.predictor.enabled", false, locked);
pref("network.prefetch-next", false, locked);
pref("network.http.speculative-parallel-limit", 0, locked);
pref("browser.places.speculativeConnect.enabled", false, locked);
pref("browser.urlbar.speculativeConnect.enabled", false, locked);

// SSL
pref("security.ssl.require_safe_negotiation", true, locked);
pref("security.ssl.treat_unsafe_negotiation_as_broken", false, locked);
pref("security.remote_settings.crlite_filters.enabled", true, locked);
//pref("security.tls.enable_0rtt_data", false, locked);
pref("browser.xul.error_pages.expert_bad_cert", true, locked);

// Disable safe browsing
pref("browser.safebrowsing.malware.enabled", false, locked);
pref("browser.safebrowsing.phishing.enabled", false, locked);
pref("browser.safebrowsing.blockedURIs.enabled", false, locked);
pref("browser.safebrowsing.provider.google4.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google4.updateURL", "", locked);
pref("browser.safebrowsing.provider.google.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google.updateURL", "", locked);
pref("browser.safebrowsing.downloads.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false, locked);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false, locked);
// empty for defense in depth
pref("browser.safebrowsing.downloads.remote.url", "", locked);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "", locked);

// No JS in PDF
pref("pdfjs.enableScripting", false);

// Location Services
//pref("geo.provider.ms-windows-location", false, locked);
//pref("geo.provider.use_corelocation", false, locked);
//pref("geo.provider.use_gpsd", false, locked);
//pref("geo.provider.use_geoclue", true, locked);

// Disable Region Update
pref("browser.region.network.url", "", locked);
pref("browser.region.update.enabled", false, locked);

// DRM
pref("media.eme.enabled", true, locked);
pref("media.gmp-provider.enabled", true, locked);
pref("media.gmp-gmpopenh264.enabled", false, locked);

// Search Bar
pref("browser.urlbar.suggest.weather", false, locked);
pref("browser.urlbar.quicksuggest.enabled", false, locked);
pref("browser.urlbar.suggest.searches", true, locked);
pref("browser.search.suggest.enabled", true, locked);
pref("browser.search.update", true, locked);

// Downloads
pref("browser.download.useDownloadDir", false);
pref("browser.download.autohideButton", false);
pref("browser.download.alwaysOpenPanel", false);

// Media Autoplay
pref("media.autoplay.default", 5);

// Disable Auto Update
pref("extensions.systemAddon.update.enabled", false, locked);
pref("extensions.systemAddon.update.url", "", locked);
pref("extensions.webcompat-reporter.enabled", false, locked);
pref("extensions.webcompat-reporter.newIssueEndpoint", "", locked);
pref("app.update.auto", false, locked);
pref("identity.fxaccounts.enabled", false, locked);
pref("signon.rememberSignons", false, locked);
pref("signon.autofillForms", false, locked);
pref("extensions.formautofill.addresses.enabled", false, locked);
pref("extensions.formautofill.creditCards.enabled", false, locked);
pref("signon.formlessCapture.enabled", false, locked);
pref("privacy.userContext.enabled", false, locked);
pref("privacy.userContext.ui.enabled", false, locked);

// First Launch
pref("browser.startup.homepage_override.mstone", "ignore", locked);
pref("startup.homepage_override_url", "about:blank", locked);
pref("startup.homepage_welcome_url", "about:blank", locked);
pref("startup.homepage_welcome_url.additional", "", locked);
pref("browser.messaging-system.whatsNewPanel.enabled", false, locked);
pref("browser.uitour.enabled", false, locked);
pref("browser.uitour.url", "", locked);
pref("browser.shell.checkDefaultBrowser", false, locked);

// New Tab
pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false, locked);
pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false, locked);
pref("browser.newtabpage.activity-stream.feeds.topsites", false, locked);
// hide stories and sponsored content from Firefox Home
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false, locked);
pref("browser.newtabpage.activity-stream.showSponsored", false, locked);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false, locked);
// disable telemetry in Firefox Home
pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.telemetry", false, locked);
// hide stories UI in about:preferences#home, empty highlights list
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}", locked);
pref("browser.newtabpage.activity-stream.default.sites", "", locked);
pref("media.hardware-video-decoding.force-enabled", true, locked);
//pref("widget.dmabuf.force-enabled", true, locked);
pref("widget.gtk.global-menu.enabled", true, locked);
pref("widget.gtk.global-menu.wayland.enabled", true, locked);

// This BREAKS pixel caching for scrolling
//pref("widget.gtk.rounded-bottom-corners.enabled", false, locked);

pref("zen.theme.content-element-separation", 0);
pref("widget.wayland.fractional-scale.enabled", true);
pref("browser.download.useDownloadDir", false, locked);
