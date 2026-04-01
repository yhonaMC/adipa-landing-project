import type { FooterProps, FooterLink, SocialLink } from "./Footer.types";

const navLinks: FooterLink[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diplomados", href: "#diplomados" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

const programLinks: FooterLink[] = [
  { label: "Psicologia Clinica", href: "#" },
  { label: "Neurociencias", href: "#" },
  { label: "Psicologia Infantil", href: "#" },
  { label: "Terapia de Pareja", href: "#" },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const paths: Record<SocialLink["icon"], string> = {
    facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    instagram:
      "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z",
    youtube:
      "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
    linkedin:
      "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z",
  };

  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[icon]} />
    </svg>
  );
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-adipa-footer-bg text-white ${className}`}>
      <div className="max-w-container mx-auto px-5 tablet:px-10 py-10 tablet:py-[50px]">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold block mb-4">
              <span className="text-adipa-brand-purple">ADI</span>
              <span className="text-adipa-brand-blue">PA</span>
            </span>
            <p className="text-sm text-white/70 leading-[1.6]">
              Mejorando la Salud Mental del Mundo. Plataforma de educacion
              continua especializada en psicologia y salud mental.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] uppercase font-normal mb-4">Navegacion</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] uppercase font-normal text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-adipa-purple inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] uppercase font-normal mb-4">Programas</h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] uppercase font-normal text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-adipa-purple inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] uppercase font-normal mb-4">Siguenos</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  aria-label={link.label}
                  className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center text-adipa-footer-bg hover:bg-white/80 transition-colors duration-200"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-xs text-white/60">
            Adipa 2026 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
