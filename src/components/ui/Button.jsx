import { trackEvent } from "../../lib/analytics";

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-normal focus-visible:outline-accent";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary:
      "border border-border text-secondary hover:text-primary hover:border-[var(--color-text-tertiary)]",
  };

  const className = `${base} ${variants[variant] || variants.primary}`;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    trackEvent("cta_click", {
      label: typeof children === "string" ? children : "button",
      target: href || "#",
    });
  };

  if (href) {
    return (
      <a href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
