// Client-side form submission cooldown

const SUBMIT_KEY = "last_form_submit";
const COOLDOWN_MS = 60_000; // 1 minute

export function canSubmit() {
  const last = parseInt(localStorage.getItem(SUBMIT_KEY) || "0", 10);
  return Date.now() - last > COOLDOWN_MS;
}

export function markSubmitted() {
  localStorage.setItem(SUBMIT_KEY, Date.now().toString());
}
