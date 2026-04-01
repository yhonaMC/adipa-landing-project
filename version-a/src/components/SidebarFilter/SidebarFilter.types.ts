import type { Modality } from "@/types";

export interface FilterState {
  categories: string[];
  modalities: Modality[];
  priceRange: [number, number];
}

export interface SidebarFilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  className?: string;
}
