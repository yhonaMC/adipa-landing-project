import type { SortOption } from "@/types";
import type { SortDropdownProps } from "./SortDropdown.types";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "mayor-precio", label: "Mayor Precio" },
  { value: "menor-precio", label: "Menor Precio" },
  { value: "mas-proximo", label: "Mas proximo" },
  { value: "menos-proximo", label: "Menos proximo" },
];

export default function SortDropdown({ value, onChange, resultsCount }: SortDropdownProps) {
  return (
    <div
      className="flex items-center justify-between rounded-[5px] px-5 py-[10px]"
      style={{ background: "#f0f3fd", minHeight: 70 }}
    >
      {/* Left: results count */}
      <span className="text-sm text-adipa-text-secondary">
        {resultsCount !== undefined ? (
          <>
            <span className="font-semibold text-adipa-text-primary">{resultsCount}</span>{" "}
            {resultsCount === 1 ? "curso encontrado" : "cursos encontrados"}
          </>
        ) : null}
      </span>

      {/* Right: sort control */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="sort-select"
          className="font-semibold"
          style={{ fontSize: 10, color: "#1d1d1d", textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          Ordenar por
        </label>
        <select
          id="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="text-sm text-adipa-text-primary focus:outline-none cursor-pointer"
          style={{ background: "transparent", padding: 0 }}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
