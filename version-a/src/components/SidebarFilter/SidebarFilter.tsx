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
    <div style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}>
      <button
        type="button"
        className="w-full text-left py-[15px] flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[14px]" style={{ color: "#13013f" }}>
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
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          width: 18,
          height: 18,
          border: checked ? "1px solid #2cb7ff" : "1px solid rgba(19,1,63,.3)",
          borderRadius: 3,
          background: checked ? "#2cb7ff" : "white",
          transition: "background .15s, border-color .15s",
        }}
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
        className="text-sm"
        style={
          active
            ? { borderLeft: "2px solid #704efd", paddingLeft: 6, color: "#704efd" }
            : { color: "#1d1d1d" }
        }
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

function SidebarInner({ filters, onFiltersChange, onClearFilters, onClose }: SidebarInnerProps) {
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

  function handlePriceMin(val: number) {
    const clamped = Math.min(val, filters.priceRange[1]);
    onFiltersChange({ ...filters, priceRange: [clamped, filters.priceRange[1]] });
  }

  function handlePriceMax(val: number) {
    const clamped = Math.max(val, filters.priceRange[0]);
    onFiltersChange({ ...filters, priceRange: [filters.priceRange[0], clamped] });
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.modalities.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < MAX_PRICE;

  return (
    <div className="bg-white h-full" style={{ borderRight: "1px solid rgba(0,0,0,.1)" }}>
      {/* Header row */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
      >
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
          <span className="font-semibold text-[14px]" style={{ color: "#13013f" }}>
            Filtros
          </span>
        )}
        <button
          type="button"
          onClick={onClearFilters}
          className="text-sm font-medium transition-colors duration-200 rounded-[5px] px-[30px] py-[10px]"
          style={{
            background: hasActiveFilters ? "#704efd" : "#f3f4ff",
            color: hasActiveFilters ? "white" : "#704efd",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#704efd";
            (e.currentTarget as HTMLButtonElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = hasActiveFilters
              ? "#704efd"
              : "#f3f4ff";
            (e.currentTarget as HTMLButtonElement).style.color = hasActiveFilters
              ? "white"
              : "#704efd";
          }}
        >
          Borrar filtros
        </button>
      </div>

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
        className="hidden tablet:block"
        style={{ width: 280, height: "80vh", overflowY: "auto", flexShrink: 0 }}
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
        className="fixed top-0 bottom-0 z-[35] tablet:hidden transition-[right] duration-[400ms] overflow-y-auto"
        style={{
          right: mobileOpen ? 0 : "-100%",
          width: "80%",
          maxWidth: 320,
          background: "white",
        }}
        role="dialog"
        aria-modal={mobileOpen ? true : undefined}
        aria-label="Filtros"
      >
        <SidebarInner {...props} onClose={onMobileClose} />
      </div>
    </>
  );
}
