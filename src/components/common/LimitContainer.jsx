export default function LimitContainer({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto w-9/10 ${className}`}>{children}</div>
  );
}
