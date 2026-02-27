export default function handler(req, res) {
  if (req.method === "POST") {
    // Safe logging — truncated, no PII
    const body = JSON.stringify(req.body || {}).slice(0, 500);
    console.warn("[CSP Violation]", body);
  }
  res.status(204).end();
}
