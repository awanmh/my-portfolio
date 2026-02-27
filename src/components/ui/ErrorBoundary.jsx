import { Component } from "react";
import { trackEvent } from "../../lib/analytics";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Safe error logging — sanitized, truncated, no stack traces
    if (import.meta.env.PROD) {
      const message = (error.message || "Unknown error").slice(0, 200);
      const component =
        info.componentStack?.split("\n")[1]?.trim().slice(0, 100) || "unknown";
      trackEvent("runtime_error", { message, component });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="flex min-h-[50vh] items-center justify-center">
          <div className="max-w-md px-6 text-center">
            <h2 className="mb-3 text-xl font-semibold text-primary">
              Something went wrong
            </h2>
            <p className="mb-6 text-secondary">
              An unexpected error occurred. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-accent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Refresh Page
            </button>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
