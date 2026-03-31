import type { CategoryFilterProps } from "./CategoryFilter.types";

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2 justify-center mb-10"
      role="tablist"
      aria-label="Filtrar cursos por categoria"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeCategory === null}
        onClick={() => onCategoryChange(null)}
        className={`px-5 py-2 rounded-[5px] text-sm font-medium transition-colors duration-200 ${
          activeCategory === null
            ? "bg-adipa-purple text-white"
            : "bg-adipa-light-bg text-adipa-purple hover:bg-adipa-purple/10"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2 rounded-[5px] text-sm font-medium transition-colors duration-200 ${
            activeCategory === category.id
              ? "bg-adipa-purple text-white"
              : "bg-adipa-light-bg text-adipa-purple hover:bg-adipa-purple/10"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
