// Privacy-first analytics — Plausible integration
// No cookies, no personal data, GDPR-compliant

export function trackEvent(name, props = {}) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(name, { props });
  }
}
