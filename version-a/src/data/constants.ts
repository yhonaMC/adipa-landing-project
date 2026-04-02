import type { Modality, SortOption } from "@/types";

// Hero search suggestion chips
export const SUGGESTION_CHIPS = [
  "Autismo",
  "Wisc",
  "Ados",
  "Trauma",
  "ADI-R",
  "WAIS",
  "Peers",
];

// Filter options
export const AREA_TEMATICA_OPTIONS = [
  { id: "psicologia-clinica", label: "Psicologia Clinica y Salud Mental" },
  { id: "neurociencias", label: "Neurociencias" },
  { id: "psicologia-infantil", label: "Psicologia Infantil" },
  { id: "terapia-de-pareja", label: "Terapia de Pareja" },
];

export const MODALITY_OPTIONS: { id: Modality; label: string }[] = [
  { id: "En Vivo" as Modality, label: "En Vivo" },
  { id: "Online" as Modality, label: "Online" },
  { id: "Presencial" as Modality, label: "Presencial" },
];

export const MAX_PRICE = 600000;

// Quick nav options for sidebar
export const QUICK_NAV_OPTIONS = [
  { id: "top-10", label: "Top 10 semanal" },
  { id: "populares", label: "Más Populares" },
  { id: "valorados", label: "Mejores Valorados" },
  { id: "nuevos", label: "Nuevos Lanzamientos" },
  { id: "ofertas", label: "Ofertas Flash ⚡" },
  { id: "pre-lanzamiento", label: "Pre Lanzamiento ⏰" },
];

// Sort options
export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "mayor-precio", label: "Mayor Precio" },
  { value: "menor-precio", label: "Menor Precio" },
  { value: "mas-proximo", label: "Más próximo" },
  { value: "menos-proximo", label: "Menos próximo" },
];

// Navigation links
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isCurrent?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Descubre ADIPA", href: "#descubre", hasDropdown: true },
  { label: "Recursos", href: "#recursos", hasDropdown: true },
  { label: "Seminarios", href: "#seminarios" },
  { label: "Congreso", href: "#congreso" },
  { label: "Especializaciones", href: "#especializaciones" },
  { label: "Acreditaciones", href: "#acreditaciones" },
  { label: "Sesiones Magistrales", href: "#sesiones-magistrales" },
  { label: "Diplomados", href: "#diplomados" },
  { label: "Cursos", href: "#cursos", isCurrent: true },
];

// Footer links
export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink extends FooterLink {
  icon: "facebook" | "instagram" | "youtube" | "linkedin";
}

export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diplomados", href: "#diplomados" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

export const FOOTER_PROGRAM_LINKS: FooterLink[] = [
  { label: "Psicologia Clinica", href: "#" },
  { label: "Neurociencias", href: "#" },
  { label: "Psicologia Infantil", href: "#" },
  { label: "Terapia de Pareja", href: "#" },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];
