export default function ServiceCapabilityCard({
  icon,
  title,
  description,
  urlImage,
}) {
  return (
    <article className="group flex items-center bg-white transition-colors duration-300 hover:bg-primary rounded-2xl shadow-2xl overflow-hidden h-80">
      <div className="w-full p-10 relative z-1">
        <div className="mb-8 flex h-12 w-12 items-center justify-center bg-surface-container-high transition-colors group-hover:bg-secondary">
          <span className="material-symbols-outlined text-primary group-hover:text-white">
            {icon}
          </span>
        </div>
        <h3 className="mb-4 font-headline text-xl font-bold text-primary group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-on-surface-variant group-hover:text-slate-300">
          {description}
        </p>
      </div>
      <div
        className="image-content-service w-full h-full bg-slate-700 duration-100 ease-in max-md:absolute z-0 max-md:opacity-20"
        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)" }}>
        <img
          src={urlImage}
          alt={title}
          className="w-full h-full object-cover grayscale brightness-150 opacity-50"
        />
      </div>
    </article>
  );
}
