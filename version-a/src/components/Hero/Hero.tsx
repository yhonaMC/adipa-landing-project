"use client";

import type { HeroProps } from "./Hero.types";

const suggestionChips = [
  "Autismo",
  "TCC",
  "Trauma",
  "Neurociencias",
  "TEA",
  "Evaluacion",
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
      {/* Promotional Banner */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #704EFD 0%, #7D61F1 40%, #2CB7FF 100%)",
          height: "150px",
        }}
      >
        {/* Decorative blurred circle left */}
        <div
          className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-20"
          style={{ background: "rgba(255,255,255,0.3)", filter: "blur(30px)" }}
        />
        {/* Decorative blurred circle right */}
        <div
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full opacity-20"
          style={{ background: "rgba(255,255,255,0.3)", filter: "blur(40px)" }}
        />

        <div className="relative z-10 text-center px-5">
          <p className="text-white/90 text-sm tablet:text-base font-medium uppercase tracking-widest mb-1">
            Formacion Continua en Psicologia
          </p>
          <p
            className="text-white font-bold text-3xl tablet:text-4xl desktop:text-5xl leading-tight"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            Hasta 35% OFF
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white px-5 tablet:px-10 py-6 tablet:py-8">
        <div className="max-w-container mx-auto">
          {/* Heading */}
          <h1
            className="text-xl tablet:text-2xl desktop:text-[26px] leading-snug mb-5"
            style={{ color: "#1d1d1d", fontWeight: 400 }}
          >
            Cursos que te permitiran potenciar tu carrera.
          </h1>

          {/* Search Input */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Buscar:"
              className="w-full bg-white text-sm text-adipa-text-primary placeholder-adipa-text-secondary rounded-[5px] px-4 py-3 pr-12 outline-none focus-visible:outline-none"
              style={{
                border: "1px solid #d0c6fd",
                borderRadius: "5px",
              }}
            />
            {/* Magnifier icon */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-adipa-purple">
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
          <div className="flex flex-wrap gap-2">
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: "#fff",
                  padding: "5px 10px",
                  fontSize: "12px",
                  color: "#704efd",
                  fontWeight: 600,
                  boxShadow: "0 0 4px 0 rgb(0 0 0 / .078)",
                  borderRadius: "5px",
                  border: "none",
                  lineHeight: "1.4",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
