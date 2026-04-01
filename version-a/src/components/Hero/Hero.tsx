"use client";

import type { HeroProps } from "./Hero.types";

const suggestionChips = [
  "Autismo",
  "Wisc",
  "Ados",
  "Trauma",
  "ADI-R",
  "WAIS",
  "Peers",
];

export default function Hero({
  onSearch,
  searchValue,
  className = "",
}: HeroProps) {
  function handleChipClick(chip: string) {
    onSearch(chip);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  return (
    <div className={`pt-[70px] tablet:pt-[130px] ${className}`}>
      {/* Solid purple hero section */}
      <div
        className="w-full flex flex-col items-center justify-center px-5 py-10 tablet:py-14"
        style={{ backgroundColor: "#704EFD" }}
      >
        {/* Title */}
        <h1
          className="text-white text-center mb-3"
          style={{
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(24px, 4vw, 36px)",
            lineHeight: 1.2,
          }}
        >
          Cursos de Psicologia con hasta 35% OFF
        </h1>

        {/* Subtitle */}
        <p
          className="text-white text-center mb-6"
          style={{
            fontWeight: 400,
            fontSize: "clamp(14px, 2vw, 16px)",
            maxWidth: "600px",
            opacity: 0.95,
          }}
        >
          Accede a descuentos especiales de Black Sale y eleva tu carrera profesional.
        </p>

        {/* Search Input */}
        <div className="relative w-full mb-4" style={{ maxWidth: "60%" }}>
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Buscar cursos..."
            className="w-full text-sm text-adipa-text-primary placeholder-adipa-text-secondary rounded-[5px] px-4 py-3 pr-12 outline-none focus-visible:outline-none"
            style={{
              border: "1px solid #d0d0d0",
              borderRadius: "5px",
              backgroundColor: "#fff",
            }}
          />
          {/* Magnifier icon */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-adipa-text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 justify-center" style={{ maxWidth: "60%" }}>
          <span className="text-white text-sm font-medium mr-1">Buscar:</span>
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => handleChipClick(chip)}
              className="transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                padding: "5px 12px",
                fontSize: "12px",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.5)",
                lineHeight: "1.4",
              }}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
