export default function ServiceCapabilityCard({
  slug,
  icon,
  title,
  description,
  urlImage,
}) {
  const detailHref = slug ? `/services/${slug}` : "/services";

  return (
    <article className="flex items-center bg-white transition-colors duration-300 hover:bg-primary rounded-2xl shadow-2xl overflow-hidden relative h-80">
      <div className="w-full p-10 relative z-1">
        <div className="mb-8 flex h-12 w-12 items-center justify-center bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <h3 className="mb-4 font-headline text-center text-xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-sm text-center leading-relaxed hidden md:block text-on-surface-variant ">
          {description}
        </p>
        <div className="flex justify-center">
          <a
            href={detailHref}
            aria-label={`Más información sobre ${title}`}
            className="mt-6 inline-flex items-center justify-center text-center border border-outline-variant px-8 py-3 font-headline text-sm font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-slate-200 rounded-xl">
            Más información
          </a>
        </div>
      </div>
      <div
        className="image-content-service w-full h-full bg-slate-700 duration-100 ease-in max-md:absolute z-0 max-md:opacity-20"
        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)" }}>
        <img
          src={urlImage}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale brightness-150 opacity-50"
        />
      </div>
    </article>
  );
}
