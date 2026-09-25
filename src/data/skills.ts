export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  categoryNumber: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-querying',
    categoryNumber: '01',
    title: 'Programming & Querying',
    description:
      'Core languages and query tools for structured data extraction, statistical analysis, transformation, and automated workflows.',
    skills: [
      {
        name: 'Python',
        description: 'Data transformation, exploratory analysis, and analytical automation.',
      },
      {
        name: 'SQL',
        description: 'Relational data querying, complex multi-table joins, and aggregation.',
      },
      {
        name: 'R',
        description: 'Statistical computing, quantitative modeling, and exploratory research.',
      },
      {
        name: 'PostgreSQL',
        description: 'Relational database querying, schema understanding, and structured storage.',
      },
    ],
  },
  {
    id: 'business-intelligence',
    categoryNumber: '02',
    title: 'Business Intelligence & Visualization',
    description:
      'Platforms and reporting tools used to translate operational metrics into intuitive executive dashboards and decision-support views.',
    skills: [
      {
        name: 'Power BI',
        description: 'Interactive dashboard development, data modeling, and KPI tracking.',
      },
      {
        name: 'Looker Studio',
        description: 'Cloud-based reporting, business metric presentation, and dashboard views.',
      },
      {
        name: 'Google Analytics 4',
        description: 'Web event analysis, audience traffic metrics, and conversion tracking.',
      },
    ],
  },
  {
    id: 'productivity-data-prep',
    categoryNumber: '03',
    title: 'Productivity & Data Preparation',
    description:
      'Essential spreadsheet environments used for structured data cleaning, formula modeling, pivot tables, and rapid exploration.',
    skills: [
      {
        name: 'Microsoft Excel',
        description: 'Advanced spreadsheet formulas, pivot tables, modeling, and data cleaning.',
      },
      {
        name: 'Google Sheets',
        description: 'Structured data capture, automated workflows, and spreadsheet integrations.',
      },
    ],
  },
  {
    id: 'platforms-workflows',
    categoryNumber: '04',
    title: 'Cloud Platforms & Technical Workflows',
    description:
      'Supporting cloud analytics platforms, version control, and data interfaces that connect analytical systems together.',
    skills: [
      {
        name: 'Google BigQuery',
        description: 'Cloud data warehousing, large-scale SQL analysis, and dataset querying.',
      },
      {
        name: 'Git & GitHub',
        description: 'Version control, repository management, and reproducible analytical workflows.',
      },
      {
        name: 'REST APIs',
        description: 'External data retrieval, programmatic data ingestion, and API integration.',
      },
    ],
  },
];
