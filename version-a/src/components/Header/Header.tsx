'use client'

import { useState } from 'react'
import { NAV_ITEMS } from '@/data/constants'
import type { HeaderProps } from './Header.types'

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline-block ml-0.5 translate-y-px"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Header({
  className = '',
  onSearch
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [localSearch, setLocalSearch] = useState('')

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-20 shadow-header font-poppins ${className}`}
    >
      {/* ── Primary Bar (70px) ── */}
      <div className="h-[70px] border-b border-adipa-border/40">
        <div className="max-w-[1400px] mx-auto px-5 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="ADIPA Home"
          >
            <img
              src="/adipa-logo.svg"
              alt="ADIPA"
              className="h-[40px] w-auto"
            />
          </a>

          {/* Search Bar — desktop only */}
          <div className="hidden tablet:flex flex-1 max-w-[520px] mx-4">
            <div className="flex w-full rounded-[5px] overflow-hidden bg-white border-2 border-adipa-cyan">
              <input
                type="text"
                placeholder="¿Que quieres aprender?"
                className="flex-1 px-4 py-2.5 text-sm text-adipa-text-primary placeholder:text-adipa-text-secondary/70 bg-transparent outline-none"
                aria-label="Buscar cursos"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value)
                  onSearch?.(e.target.value)
                }}
              />
              <button
                type="button"
                className="flex-shrink-0 transition-colors duration-200 text-white px-4 flex items-center justify-center bg-adipa-cyan"
                aria-label="Buscar"
                onClick={() => {
                  document
                    .getElementById('cursos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <SearchIcon />
              </button>
            </div>
          </div>

          {/* Right Actions — desktop */}
          <div className="hidden tablet:flex items-center gap-3 flex-shrink-0">
            <a
              href="#login"
              className="text-adipa-text-primary text-sm font-medium hover:text-adipa-purple transition-colors duration-200 whitespace-nowrap"
            >
              Iniciar Sesion
            </a>
            <a
              href="#register"
              className="bg-adipa-purple hover:bg-adipa-purple-dark transition-colors duration-200 text-white text-sm font-medium px-5 py-2 rounded-[5px] whitespace-nowrap"
            >
              Registrate
            </a>
            <button
              type="button"
              className="hover:opacity-80 transition-colors duration-200 text-adipa-purple"
              aria-label="Carrito de compras"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>

          {/* Mobile: logo is already left, show hamburger right */}
          <button
            type="button"
            className="tablet:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-adipa-text-primary transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-adipa-text-primary transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-adipa-text-primary transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Secondary Bar (60px, desktop only) ── */}
      <nav
        className="hidden tablet:flex h-[70px] items-center"
        aria-label="Navegacion secundaria"
      >
        <div className="max-w-[1400px] mx-auto px-5 w-full flex items-center gap-0">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                relative flex-shrink-0 flex items-center gap-0.5 px-3 py-2 whitespace-nowrap transition-colors duration-200
                ${item.bold ? 'text-[15px] font-bold' : 'text-sm'}
                ${
                  item.isCurrent
                    ? 'font-bold text-adipa-purple border-b-2 border-adipa-purple'
                    : 'font-normal text-adipa-text-primary hover:text-adipa-purple'
                }
              `}
              aria-current={item.isCurrent ? 'page' : undefined}
            >
              {item.badge && (
                <span
                  className={`${item.badgeColor} absolute -top-1.5 right-1 text-white text-[9px] font-bold px-2 py-[1px] rounded-full leading-tight`}
                >
                  {item.badge}
                </span>
              )}
              {item.label}
              {item.hasDropdown && <ChevronDownIcon />}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Mobile Menu (full-width dropdown) ── */}
      <div
        className={`tablet:hidden bg-white border-t border-adipa-border overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="px-5 py-4" aria-label="Navegacion movil">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between py-3 text-sm border-b border-adipa-border/50 last:border-0 transition-colors duration-200 ${
                item.isCurrent
                  ? 'font-bold text-adipa-purple'
                  : 'font-medium text-adipa-text-primary hover:text-adipa-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={item.isCurrent ? 'page' : undefined}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </a>
          ))}

          {/* Mobile auth buttons */}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-adipa-border">
            <a
              href="#login"
              className="text-center text-adipa-purple text-sm font-medium px-5 py-2.5 rounded-[5px] border border-adipa-purple hover:bg-adipa-light-bg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar Sesion
            </a>
            <a
              href="#register"
              className="text-center bg-adipa-purple hover:bg-adipa-purple-dark text-white text-sm font-medium px-5 py-2.5 rounded-[5px] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrate
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
