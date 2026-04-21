export default function SectionContainer({
  children,
  className = "",
  id = "",
}) {
  return (
    <section id={id} className={`${className}`}>
      {children}
    </section>
  );
}
