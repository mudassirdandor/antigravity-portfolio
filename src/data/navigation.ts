export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_CTA: NavItem = {
  label: "Let's Talk",
  href: '#contact',
};

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export const BRAND_INFO = {
  name: 'MUDASSIR JAVED',
  role: 'Data Analyst',
  specialization: 'Business Intelligence & Data Analytics',
  statement: 'Mudassir Javed — Data Analyst | Business Intelligence & Data Analytics',
  narrative: 'Statistics → Data → Insights → Decisions',
};
