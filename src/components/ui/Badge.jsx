export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-tertiary transition-colors duration-normal hover:text-secondary">
      {children}
    </span>
  );
}
