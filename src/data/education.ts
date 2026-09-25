export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  year: string;
  grade?: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'msc-statistics',
    degree: 'MSc in Statistics',
    institution: 'University of Balochistan',
    year: '2023',
    grade: 'CGPA: 3.13 / 4.00',
    summary:
      'Advanced study in Statistics providing a comprehensive quantitative foundation for statistical reasoning, research methodology, data analysis, and evidence-based interpretation.',
    highlights: [
      'Quantitative & Statistical Reasoning',
      'Descriptive & Inferential Statistics',
      'Hypothesis Testing & Variance Analysis',
      'Research Methods & Survey Protocols',
      'Data Interpretation for Decision Support',
    ],
    featured: true,
  },
  {
    id: 'bsc-statistics',
    degree: 'BSc in Statistics',
    year: '2019',
    summary:
      'Undergraduate foundation in statistical methods, quantitative problem solving, and mathematical principles.',
    highlights: [
      'Statistical Theory & Foundations',
      'Descriptive & Probability Analysis',
      'Quantitative Data Handling',
    ],
    featured: false,
  },
];
