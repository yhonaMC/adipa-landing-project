"use client";

import { useState } from "react";
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

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`pt-[70px] tablet:pt-[130px] ${className}`}>
      <div className="w-full flex flex-col items-center justify-center py-[36px] px-5 tablet:py-12 tablet:px-10 bg-adipa-purple">
        <h1 className="text-white text-center mb-3 font-bold italic text-[28px] tablet:text-[36px] leading-[1.25]">
          Cursos de Psicologia con hasta 35% OFF
        </h1>

        <p className="text-white text-center mb-6 font-normal text-[15px] tablet:text-[17px] max-w-[600px] leading-[1.5] opacity-95">
          Accede a descuentos especiales de Black Sale y eleva tu carrera profesional.
        </p>

        <div className="relative w-full mb-5 max-w-[540px]">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Buscar cursos..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full text-sm text-white rounded-none outline-none focus-visible:outline-none border-0 border-b-2 border-b-white bg-transparent py-3 pl-0 pr-12 text-[14px] placeholder:text-white/60"
          />
          {!isFocused && !searchValue && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[20px] bg-white animate-blink-cursor" />
          )}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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

        <div className="flex flex-wrap items-center gap-2 justify-center max-w-[60%]">
          <span className="text-white text-sm font-medium mr-1">Buscar:</span>
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => handleChipClick(chip)}
              className="transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer bg-white/20 px-3 py-[5px] text-xs text-white font-semibold rounded-[20px] border border-white/70 leading-[1.4]"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
