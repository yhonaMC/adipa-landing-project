export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "youtube" | "linkedin";
}

export interface FooterProps {
  className?: string;
}
