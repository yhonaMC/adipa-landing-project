export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isCurrent?: boolean;
  badge?: string;
  badgeColor?: string;
  bold?: boolean;
}

export interface HeaderProps {
  className?: string;
  onSearch?: (value: string) => void;
  searchValue?: string;
}
