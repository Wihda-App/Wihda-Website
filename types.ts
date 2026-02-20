export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  iconBgClass: string;
  hoverClass: string;
}

export interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  bgClass: string;
  iconBgClass: string;
  iconColorClass?: string;
  className?: string;
}