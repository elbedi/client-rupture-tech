import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const DEFAULT_SERVICES = [
  "Arquitectura cloud",
  "Desarrollo de software",
  "Ciberseguridad",
  "Consultoria tecnologica",
  "Otro",
];

export default function FormContactModal({
  isOpen = false,
  onClose,
  services = DEFAULT_SERVICES,
  title = "Hablemos de tu proyecto",
  description = "Completa el formulario y nuestro equipo te contactara pronto.",
}) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isRendered || !overlayRef.current || !panelRef.current) {
      return;
    }

    timelineRef.current?.kill();
    const tl = gsap.timeline();
    timelineRef.current = tl;

    if (isOpen) {
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(panelRef.current, { opacity: 0, y: 36, scale: 0.98 });

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }).to(
        panelRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.34,
          ease: "power3.out",
        },
        "<",
      );
    } else {
      tl.to(panelRef.current, {
        opacity: 0,
        y: 26,
        scale: 0.985,
        duration: 0.22,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.16,
          ease: "power2.in",
          onComplete: () => {
            setIsRendered(false);
          },
        },
        "<+0.04",
      );
    }

    return () => {
      tl.kill();
    };
  }, [isOpen, isRendered]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    function handleOutsideClick(event) {
      if (!panelRef.current?.contains(event.target)) {
        onClose?.();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isRendered) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-80 flex items-end justify-center bg-slate-950/55 p-3 backdrop-blur-[1px] sm:items-center sm:p-6"
      role="presentation">
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Formulario de contacto"
        className="w-full max-w-2xl overflow-hidden rounded-3xl  bg-white shadow-[0_35px_70px_-34px_rgba(0,0,0,0.55)]">
        <header className="flex items-start justify-between gap-4  bg-slate-50 px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <h2 className="font-headline text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {title}
            </h2>
            <p className="mt-1 font-body text-sm text-slate-600 sm:text-base">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onClose?.()}
            aria-label="Cerrar formulario"
            className="cursor-pointer">
            <span
              aria-hidden="true"
              className="font-sans text-2xl leading-none font-medium select-none">
              ×
            </span>
          </button>
        </header>

        <form className="grid grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-2 sm:gap-5 sm:px-7 sm:py-7">
          <label className="flex flex-col gap-2 sm:col-span-1">
            <span className="font-label text-sm font-semibold text-slate-700">
              Nombre
            </span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="h-11 rounded-xl border border-slate-300 px-3 font-body text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
          </label>

          <label className="flex flex-col gap-2 sm:col-span-1">
            <span className="font-label text-sm font-semibold text-slate-700">
              Empresa
            </span>
            <input
              type="text"
              name="company"
              placeholder="Nombre de tu empresa"
              className="h-11 rounded-xl border border-slate-300 px-3 font-body text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
          </label>

          <label className="flex flex-col gap-2 sm:col-span-1">
            <span className="font-label text-sm font-semibold text-slate-700">
              Telefono
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="+52 55 1234 5678"
              className="h-11 rounded-xl border border-slate-300 px-3 font-body text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
          </label>

          <label className="flex flex-col gap-2 sm:col-span-1">
            <span className="font-label text-sm font-semibold text-slate-700">
              Correo
            </span>
            <input
              type="email"
              name="email"
              placeholder="tu@correo.com"
              className="h-11 rounded-xl border border-slate-300 px-3 font-body text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
            />
          </label>

          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="font-label text-sm font-semibold text-slate-700">
              En que servicio esta interesado
            </span>
            <select
              name="service"
              defaultValue=""
              className="h-11 rounded-xl border border-slate-300 bg-white px-3 font-body text-sm text-slate-900 outline-none transition-colors focus:border-slate-500">
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-slate-900 px-4 font-label text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/65 cursor-pointer">
              Enviar solicitud
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
