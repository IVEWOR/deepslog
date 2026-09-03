export const GA_TRACKING_ID = "G-J88S018PRT";

export function pageview(url) {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
}