import type { SortOption } from "@/types";

export interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  resultsCount?: number;
}
