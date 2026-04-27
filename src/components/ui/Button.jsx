export default function Button({
  children,
  href = "#",
  title,
  className = "",
}) {
  return (
    <a
      href={href}
      title={title || (typeof children === "string" ? children : "Enlace")}
      className={`inline-block px-8 py-3 bg-white text-neutral-950 font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-neutral-200 transition-colors duration-300 ${className}`}>
      {children}
    </a>
  );
}
