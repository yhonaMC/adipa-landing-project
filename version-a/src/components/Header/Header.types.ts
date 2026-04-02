export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isCurrent?: boolean;
}

export interface HeaderProps {
  className?: string;
  onSearch?: (value: string) => void;
  searchValue?: string;
}
