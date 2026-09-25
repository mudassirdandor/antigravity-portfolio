export interface FeaturedCertification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  skills: string[];
}

export interface CredentialArea {
  domain: string;
  credentials: string[];
}

export const FEATURED_CERTIFICATIONS: FeaturedCertification[] = [
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    description:
      'Comprehensive professional training in data analytics workflows, data cleaning, analysis, visualization, and practical problem solving using spreadsheets, SQL, and R.',
    skills: ['Data Cleaning', 'SQL', 'Spreadsheets', 'R Programming', 'Data Visualization'],
  },
  {
    id: 'google-advanced-data-analytics',
    name: 'Google Advanced Data Analytics',
    issuer: 'Google',
    description:
      'Rigorous training covering advanced statistical methods, exploratory data analysis, regression modeling, machine learning concepts, and Python programming.',
    skills: ['Statistical Modeling', 'Python', 'Regression Analysis', 'EDA', 'Predictive Concepts'],
  },
  {
    id: 'google-business-intelligence',
    name: 'Google Business Intelligence',
    issuer: 'Google',
    description:
      'Professional training in business intelligence architecture, data modeling, KPI tracking, and executive decision-support dashboard design.',
    skills: ['BI Architecture', 'Data Modeling', 'KPI Design', 'Dashboard Development', 'Reporting'],
  },
];

export const TOTAL_CREDENTIALS_STATEMENT = '40+ Professional Certifications & Skill Badges';

export const ADDITIONAL_CREDENTIAL_AREAS: CredentialArea[] = [
  {
    domain: 'Cloud Analytics & BI Platforms',
    credentials: ['BigQuery', 'Looker', 'BigQuery ML', 'Cloud Analytics', 'Google Analytics 4 (GA4)'],
  },
  {
    domain: 'Technical Automation & Management',
    credentials: ['Google IT Automation with Python', 'Google Project Management', 'Google IT Support', 'Google Cybersecurity'],
  },
  {
    domain: 'Applied Artificial Intelligence',
    credentials: ['Google AI Essentials', 'Google Prompting Essentials', 'Gemini Certified Educator', 'AI Agents Intensive'],
  },
];
