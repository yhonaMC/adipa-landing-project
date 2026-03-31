"use client";

import { useState } from "react";
import { courses, categories } from "@/data/courses";
import CourseCard from "@/components/CourseCard/CourseCard";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import type { CourseGridProps } from "./CourseGrid.types";

export default function CourseGrid({ className = "" }: CourseGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCourses = activeCategory
    ? courses.filter((course) => course.category === activeCategory)
    : courses;

  return (
    <section
      id="cursos"
      className={`py-10 tablet:py-20 ${className}`}
      aria-label="Catalogo de cursos"
    >
      <div className="max-w-container mx-auto px-5 tablet:px-10">
        <h2 className="text-2xl tablet:text-3xl font-semibold text-adipa-text-primary text-center mb-8">
          Nuestros Cursos
        </h2>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 justify-items-center"
          role="tabpanel"
        >
          {filteredCourses.map((course) => (
            <div key={course.id} className="animate-fade-in">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-adipa-text-secondary mt-8">
            No se encontraron cursos en esta categoria.
          </p>
        )}
      </div>
    </section>
  );
}
