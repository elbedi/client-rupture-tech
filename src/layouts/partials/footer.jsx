import homeContent from "@/content/content";
import LimitContainer from "@/components/common/LimitContainer.jsx";

function normalizePhone(phone = "") {
  return String(phone).replace(/\D/g, "");
}

export default function Footer({
  brand,
  email,
  phone,
  footer = homeContent.footer,
}) {
  const currentYear = new Date().getFullYear();
  const normalizedPhone = normalizePhone(phone || footer.contact.phone);
  const whatsAppHref = normalizedPhone
    ? `https://wa.me/${normalizedPhone}?text=${encodeURIComponent("Hola, me gustaría recibir información sobre sus servicios.")}`
    : null;
  const footerData = {
    ...footer,
    brand: brand || footer.brand,
    contact: {
      ...footer.contact,
      email: "contacto@rupture-tech.com",
      phone: phone || footer.contact.phone,
    },
  };

  return (
    <footer
      id="contacto"
      className="w-full border-t-4 border-sky-600 bg-slate-900 text-white">
      <LimitContainer className="px-6 py-20 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="w-7/10 mx-auto">
              <img
                src="/images/logo.png"
                alt="Logotipo Rupture Tech"
                className="w-full brightness-400"
              />
            </div>

            <div className="mt-15 flex justify-center gap-4">
              {footerData.social.map((item) => (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center bg-slate-800 transition-colors hover:bg-sky-600"
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer noopener">
                  <img
                    src={`/images/icons/${item.icon}.svg`}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {footerData.columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h3 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <a
                      href={item.href}
                      title={item.label}
                      className="font-headline text-xs text-slate-400 uppercase transition-colors hover:text-sky-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <h3 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase">
              {footerData.contact.title}
            </h3>
            <p className="mb-4 text-xs leading-relaxed font-light text-slate-400">
              {footerData.contact.address}
            </p>
            <p className="mb-2 font-headline text-sm font-bold text-white">
              {footerData.contact.email}
            </p>
            <p className="font-headline text-sm font-bold text-white">
              {footerData.contact.phone}
            </p>
            {whatsAppHref && (
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center font-headline text-xs font-bold tracking-[0.14em] text-sky-400 uppercase transition-colors hover:text-sky-300">
                ChatBot IA (WhatsApp)
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-12 md:flex-row">
          <p className="font-body text-xs tracking-wide text-slate-500 uppercase">
            {`${currentYear} ${footerData.brand}. Arquitectura Estratégica Digital.`}
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end md:gap-8">
            {footerData.legalLinks.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                title={item.label}
                className="text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-all duration-300 hover:text-sky-400">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </LimitContainer>
    </footer>
  );
}
