"use client";

import { useState } from "react";
import type { HeaderProps, NavItem } from "./Header.types";

const navItems: NavItem[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diplomados", href: "#diplomados" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-header z-20 ${className}`}
    >
      <div className="max-w-container mx-auto px-5 h-[70px] desktop:h-[130px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="ADIPA Home">
          <span className="text-2xl font-bold">
            <span className="text-adipa-brand-purple">ADI</span>
            <span className="text-adipa-brand-blue">PA</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden tablet:flex items-center gap-8"
          aria-label="Navegacion principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-adipa-text-primary text-sm font-medium hover:text-adipa-purple transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden tablet:flex items-center gap-3">
          <button
            type="button"
            className="text-adipa-purple text-sm font-medium px-5 py-2 rounded-[5px] border border-adipa-purple hover:bg-adipa-light-bg transition-colors duration-200"
          >
            Iniciar Sesion
          </button>
          <button
            type="button"
            className="bg-adipa-purple text-white text-sm font-medium px-5 py-2 rounded-[5px] border border-adipa-purple hover:bg-adipa-purple-dark transition-colors duration-200"
          >
            Registrate
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="tablet:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-adipa-text-primary transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-adipa-text-primary transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-adipa-text-primary transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="tablet:hidden bg-white border-t border-adipa-border px-5 py-4"
          aria-label="Navegacion movil"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-adipa-text-primary text-sm font-medium hover:text-adipa-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-adipa-border">
            <button
              type="button"
              className="text-adipa-purple text-sm font-medium px-5 py-2 rounded-[5px] border border-adipa-purple"
            >
              Iniciar Sesion
            </button>
            <button
              type="button"
              className="bg-adipa-purple text-white text-sm font-medium px-5 py-2 rounded-[5px]"
            >
              Registrate
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
