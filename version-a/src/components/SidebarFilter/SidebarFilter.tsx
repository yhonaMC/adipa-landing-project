"use client";

import { useState } from "react";
import { Modality } from "@/types";
import type { SidebarFilterProps } from "./SidebarFilter.types";

const AREA_TEMATICA_OPTIONS = [
  { id: "psicologia-clinica", label: "Psicologia Clinica y Salud Mental" },
  { id: "neurociencias", label: "Neurociencias" },
  { id: "psicologia-infantil", label: "Psicologia Infantil" },
  { id: "terapia-de-pareja", label: "Terapia de Pareja" },
];

const MODALITY_OPTIONS = [
  { id: Modality.EnVivo, label: "En Vivo" },
  { id: Modality.Online, label: "Online" },
  { id: Modality.Presencial, label: "Presencial" },
];

const MAX_PRICE = 600000;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-adipa-text-secondary opacity-50 transition-transform duration-200 flex-shrink-0"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-divider">
      <button
        type="button"
        className="w-full text-left py-[15px] flex items-center justify-between group/section"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[14px] text-[#13013f] transition-colors duration-200 group-hover/section:text-adipa-purple">
          {title}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}

function CheckboxItem({
  id,
  label,
  checked,
  onChange,
  active,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  active?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 py-1.5 cursor-pointer">
      <span
        className={`flex-shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-[3px] transition-[background,border-color] duration-150 ${checked ? "bg-adipa-cyan border border-adipa-cyan" : "bg-white border border-[rgba(19,1,63,0.3)]"}`}
        aria-hidden="true"
      >
        {checked && (
          <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-2.5">
            <path
              d="M1 5l3.5 3.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`text-sm ${active ? "border-l-2 border-l-adipa-purple pl-[6px] text-adipa-purple" : "text-adipa-text-primary"}`}
      >
        {label}
      </span>
    </label>
  );
}

interface SidebarInnerProps extends SidebarFilterProps {
  /** Only used on mobile panel: show close button */
  onClose?: () => void;
}

const QUICK_NAV_OPTIONS = [
  { id: "top-10", label: "Top 10 semanal" },
  { id: "populares", label: "Más Populares" },
  { id: "valorados", label: "Mejores Valorados" },
  { id: "nuevos", label: "Nuevos Lanzamientos" },
  { id: "ofertas", label: "Ofertas Flash ⚡" },
  { id: "pre-lanzamiento", label: "Pre Lanzamiento ⏰" },
];

function SidebarInner({ filters, onFiltersChange, onClearFilters, onClose }: SidebarInnerProps) {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  function toggleCategory(id: string, checked: boolean) {
    const next = checked
      ? [...filters.categories, id]
      : filters.categories.filter((c) => c !== id);
    onFiltersChange({ ...filters, categories: next });
  }

  function toggleModality(id: Modality, checked: boolean) {
    const next = checked
      ? [...filters.modalities, id]
      : filters.modalities.filter((m) => m !== id);
    onFiltersChange({ ...filters, modalities: next });
  }

  function removeCategory(id: string) {
    onFiltersChange({ ...filters, categories: filters.categories.filter((c) => c !== id) });
  }

  function removeModality(id: Modality) {
    onFiltersChange({ ...filters, modalities: filters.modalities.filter((m) => m !== id) });
  }

  function handlePriceMin(val: number) {
    const clamped = Math.min(val, filters.priceRange[1]);
    onFiltersChange({ ...filters, priceRange: [clamped, filters.priceRange[1]] });
  }

  function handlePriceMax(val: number) {
    const clamped = Math.max(val, filters.priceRange[0]);
    onFiltersChange({ ...filters, priceRange: [filters.priceRange[0], clamped] });
  }

  // Build active filter tags
  const activeTags: { key: string; label: string; onRemove: () => void }[] = [];
  filters.categories.forEach((catId) => {
    const opt = AREA_TEMATICA_OPTIONS.find((o) => o.id === catId);
    if (opt) activeTags.push({ key: `cat-${catId}`, label: opt.label, onRemove: () => removeCategory(catId) });
  });
  filters.modalities.forEach((modId) => {
    const opt = MODALITY_OPTIONS.find((o) => o.id === modId);
    if (opt) activeTags.push({ key: `mod-${modId}`, label: opt.label, onRemove: () => removeModality(modId) });
  });

  return (
    <div className="bg-white h-full border-r border-divider">
      {/* Quick nav section */}
      <div className="px-4 py-3 border-b border-divider">
        {QUICK_NAV_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setActiveNav(activeNav === opt.id ? null : opt.id)}
            className={`block w-full text-left py-[10px] text-[14px] font-medium transition-colors duration-200 ${
              activeNav === opt.id
                ? "text-adipa-purple border-l-[3px] border-l-adipa-purple pl-3"
                : "text-adipa-text-primary hover:text-adipa-purple pl-4"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Filters header row */}
      <div className="flex items-center justify-between px-4 py-3 border-b-2 border-b-black/[0.12]">
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="text-adipa-text-secondary text-2xl leading-none pr-2"
            aria-label="Cerrar filtros"
          >
            &times;
          </button>
        ) : (
          <span className="font-normal text-[14px] leading-[22px] text-[#838383]">
            Filtros
          </span>
        )}
        <button
          type="button"
          onClick={onClearFilters}
          className="font-medium transition-colors duration-200 bg-[#F3F4FF] text-adipa-purple rounded-[5px] px-[10px] py-[5px] text-xs leading-[16px] border border-[#F3F4FF] no-underline hover:bg-adipa-purple hover:text-white hover:border-adipa-purple"
        >
          Borrar filtros
        </button>
      </div>

      {/* Active filter tags */}
      {activeTags.length > 0 && (
        <div className="px-4 py-3 flex flex-wrap gap-2 border-b border-divider">
          {activeTags.map((tag) => (
            <span
              key={tag.key}
              className="inline-flex items-center gap-1 px-3 py-[6px] text-xs text-adipa-text-primary border border-adipa-border rounded-[5px] bg-white"
            >
              {tag.label}
              <button
                type="button"
                onClick={tag.onRemove}
                className="ml-1 text-adipa-text-secondary hover:text-adipa-purple transition-colors"
                aria-label={`Quitar filtro ${tag.label}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Filter sections */}
      <div className="px-4">
        <FilterSection title="Area Tematica">
          {AREA_TEMATICA_OPTIONS.map((opt) => {
            const checked = filters.categories.includes(opt.id);
            return (
              <CheckboxItem
                key={opt.id}
                id={`cat-${opt.id}`}
                label={opt.label}
                checked={checked}
                onChange={(v) => toggleCategory(opt.id, v)}
                active={checked}
              />
            );
          })}
        </FilterSection>

        <FilterSection title="Modalidad">
          {MODALITY_OPTIONS.map((opt) => {
            const checked = filters.modalities.includes(opt.id);
            return (
              <CheckboxItem
                key={opt.id}
                id={`mod-${opt.id}`}
                label={opt.label}
                checked={checked}
                onChange={(v) => toggleModality(opt.id, v)}
                active={checked}
              />
            );
          })}
        </FilterSection>

        <FilterSection title="Rango de Precio">
          <div className="mt-1">
            <div className="flex justify-between text-xs text-adipa-text-secondary mb-3">
              <span>${filters.priceRange[0].toLocaleString("es-CL")}</span>
              <span>${filters.priceRange[1].toLocaleString("es-CL")}</span>
            </div>
            <div className="space-y-3">
              <div>
                <label htmlFor="price-min" className="text-xs text-adipa-text-secondary block mb-1">
                  Precio minimo
                </label>
                <input
                  id="price-min"
                  type="range"
                  min={0}
                  max={MAX_PRICE}
                  step={10000}
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceMin(Number(e.target.value))}
                  className="w-full accent-adipa-purple"
                />
              </div>
              <div>
                <label htmlFor="price-max" className="text-xs text-adipa-text-secondary block mb-1">
                  Precio maximo
                </label>
                <input
                  id="price-max"
                  type="range"
                  min={0}
                  max={MAX_PRICE}
                  step={10000}
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceMax(Number(e.target.value))}
                  className="w-full accent-adipa-purple"
                />
              </div>
            </div>
            <p className="text-xs text-adipa-text-secondary mt-2 text-center">
              $0 - $600.000
            </p>
          </div>
        </FilterSection>
      </div>
    </div>
  );
}

export interface SidebarFilterWithMobileProps extends SidebarFilterProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

/**
 * SidebarFilter renders:
 * - Desktop: static sidebar (hidden on mobile)
 * - Mobile: slide-in panel + backdrop (controlled by mobileOpen / onMobileClose from parent)
 */
export default function SidebarFilter({
  mobileOpen,
  onMobileClose,
  ...props
}: SidebarFilterWithMobileProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="hidden tablet:block w-[280px] h-[80vh] overflow-y-auto flex-shrink-0"
      >
        <SidebarInner {...props} />
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 tablet:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className="fixed top-0 bottom-0 z-[35] tablet:hidden transition-[right] duration-[400ms] overflow-y-auto w-[80%] max-w-[320px] bg-white"
        style={{ right: mobileOpen ? 0 : "-100%" }}
        role="dialog"
        aria-modal={mobileOpen ? true : undefined}
        aria-label="Filtros"
      >
        <SidebarInner {...props} onClose={onMobileClose} />
      </div>
    </>
  );
}
