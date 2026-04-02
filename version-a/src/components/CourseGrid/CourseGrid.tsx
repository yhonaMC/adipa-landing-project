"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { Modality } from "@/types";
import CourseCard from "@/components/CourseCard/CourseCard";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import type { FilterState } from "@/components/SidebarFilter/SidebarFilter.types";
import type { SortOption } from "@/types";
import type { CourseGridProps } from "./CourseGrid.types";

const DEFAULT_FILTERS: FilterState = {
  categories: [],
  modalities: [],
  priceRange: [0, 600000],
  quickNav: null,
};

function parseDate(dateStr: string): Date {
  // Format: "DD/MM/YYYY"
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export default function CourseGrid({
  searchValue = "",
  className = "",
}: CourseGridProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sortOption, setSortOption] = useState<SortOption>("todos");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // --- Filter ---
  const filteredCourses = courses.filter((course) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(course.category)
    ) {
      return false;
    }

    if (
      filters.modalities.length > 0 &&
      !filters.modalities.includes(course.modality as Modality)
    ) {
      return false;
    }

    if (
      course.discountPrice < filters.priceRange[0] ||
      course.discountPrice > filters.priceRange[1]
    ) {
      return false;
    }

    if (searchValue.trim()) {
      const q = searchValue.trim().toLowerCase();
      const inTitle = course.title.toLowerCase().includes(q);
      const inCategory = (course.category ?? "").toLowerCase().includes(q);
      if (!inTitle && !inCategory) return false;
    }

    return true;
  });

  // --- Quick Nav ---
  let quickNavCourses = [...filteredCourses];
  if (filters.quickNav === "top-10") {
    quickNavCourses = quickNavCourses.sort((a, b) => b.rating - a.rating).slice(0, 10);
  } else if (filters.quickNav === "populares") {
    quickNavCourses = quickNavCourses.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (filters.quickNav === "valorados") {
    quickNavCourses = quickNavCourses.sort((a, b) => b.rating - a.rating);
  } else if (filters.quickNav === "nuevos") {
    quickNavCourses = quickNavCourses.sort((a, b) => parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime());
  } else if (filters.quickNav === "ofertas") {
    quickNavCourses = quickNavCourses.filter((c) => c.discountPrice < c.originalPrice);
  } else if (filters.quickNav === "pre-lanzamiento") {
    quickNavCourses = quickNavCourses.filter((c) => c.status === "Proximo a iniciar");
  }

  // --- Sort ---
  const sortedCourses = [...quickNavCourses].sort((a, b) => {
    switch (sortOption) {
      case "mayor-precio":
        return b.discountPrice - a.discountPrice;
      case "menor-precio":
        return a.discountPrice - b.discountPrice;
      case "mas-proximo":
        return parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime();
      case "menos-proximo":
        return parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <section
      id="cursos"
      className={`py-10 tablet:py-20 ${className}`}
      aria-label="Catalogo de cursos"
    >
      <div className="max-w-container mx-auto px-5">
        {/* Mobile toolbar: filter toggle + sort */}
        <div className="flex items-center gap-3 tablet:hidden mb-4">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-[5px] text-sm font-medium border border-divider text-[#13013f]"
            aria-label="Abrir filtros"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Filtros
          </button>
          <div className="flex-1">
            <SortDropdown
              value={sortOption}
              onChange={setSortOption}
            />
          </div>
        </div>

        <div className="flex gap-5">
          {/* Sidebar (desktop: static; mobile: slide-in panel) */}
          <SidebarFilter
            filters={filters}
            onFiltersChange={setFilters}
            onClearFilters={() => setFilters(DEFAULT_FILTERS)}
            mobileOpen={mobileFilterOpen}
            onMobileClose={() => setMobileFilterOpen(false)}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* BlackSale promotional banner */}
            <div className="relative overflow-hidden rounded-[10px] mb-6 flex items-center justify-center py-8 tablet:py-10" style={{ background: "linear-gradient(135deg, #0a1628 0%, #152244 50%, #0f1b3d 100%)" }}>
              {/* Decorative stars */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <span className="absolute top-[10%] left-[5%] w-1 h-1 bg-white/40 rounded-full" />
                <span className="absolute top-[20%] left-[15%] w-[3px] h-[3px] bg-white/25 rounded-full" />
                <span className="absolute top-[15%] right-[10%] w-1 h-1 bg-white/35 rounded-full" />
                <span className="absolute top-[60%] right-[20%] w-[2px] h-[2px] bg-white/30 rounded-full" />
                <span className="absolute bottom-[20%] left-[25%] w-[3px] h-[3px] bg-white/20 rounded-full" />
                <span className="absolute top-[40%] left-[40%] w-1 h-1 bg-white/15 rounded-full" />
                <span className="absolute bottom-[30%] right-[35%] w-[2px] h-[2px] bg-white/25 rounded-full" />
                <span className="absolute top-[70%] left-[60%] w-1 h-1 bg-white/20 rounded-full" />
                <span className="absolute top-[25%] right-[40%] w-[3px] h-[3px] bg-white/15 rounded-full" />
                <span className="absolute bottom-[15%] right-[5%] w-1 h-1 bg-white/30 rounded-full" />
              </div>
              {/* Banner content */}
              <div className="flex items-center gap-4 tablet:gap-6 z-[1]">
                <span className="text-white font-black text-[24px] tablet:text-[36px] tracking-tight">
                  <span className="text-[#1a3a7a]">BLACK</span><span className="text-[#c62828]">SALE</span><span className="text-white">.CL</span>
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black text-[48px] tablet:text-[72px] leading-none">35</span>
                  <div className="flex flex-col">
                    <span className="text-white font-black text-[20px] tablet:text-[28px] leading-none">%</span>
                    <span className="text-white font-medium text-[12px] tablet:text-[16px] leading-none">Hasta</span>
                  </div>
                  <span className="text-[#c62828] font-black text-[36px] tablet:text-[52px] leading-none">OFF</span>
                </div>
              </div>
            </div>

            {/* Sort bar — desktop only */}
            <div className="hidden tablet:block mb-5">
              <SortDropdown
                value={sortOption}
                onChange={setSortOption}
              />
            </div>

            {/* Grid */}
            <div
              className="grid gap-5 grid-cols-1 tablet:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
              role="list"
            >
              {sortedCourses.map((course) => (
                <div key={course.id} className="animate-fade-in h-full" role="listitem">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            {sortedCourses.length === 0 && (
              <p className="text-center text-adipa-text-secondary mt-8">
                No se encontraron cursos para tu busqueda.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
