export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  type: 'data-collection' | 'administration' | 'technical';
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'applied-technical-projects',
    role: 'Data & Technical Project Development',
    organization: 'Applied Practical Work',
    location: 'Quetta, Balochistan',
    period: '2024 – Present',
    summary:
      'Designing and developing practical data collection systems, external API integration pipelines, and data-driven web applications with automated spreadsheet processing and document generation.',
    highlights: [
      'Automated Data Collection Workflows',
      'API Data Integration & Presentation',
      'Google Sheets & Apps Script Integration',
      'Structured Information Systems',
    ],
    type: 'technical',
  },
  {
    id: 'hira-high-school',
    role: 'Teaching & Administrative Support',
    organization: 'Hira High School',
    location: 'Mastung, Balochistan',
    period: '2020 – 2021',
    summary:
      'Handled academic record management, administrative coordination, and structured information handling alongside instructional responsibilities.',
    highlights: [
      'Academic Record Management',
      'Structured Information Handling',
      'Administrative Coordination',
      'Clear Stakeholder Communication',
    ],
    type: 'administration',
  },
  {
    id: 'brsp-nser',
    role: 'NSER Enumerator (Field Data Collection)',
    organization: 'Balochistan Rural Support Programme (BRSP)',
    location: 'Quetta, Balochistan',
    period: '2018',
    summary:
      'Conducted field data collection for the National Socio-Economic Registry (NSER), interacting with respondents and gathering structured household socio-economic data through standardized survey processes.',
    highlights: [
      'Field Survey Data Collection',
      'Structured Household Information',
      'Respondent Interaction & Survey Protocols',
      'Data Integrity & Accuracy at Source',
    ],
    type: 'data-collection',
  },
];
