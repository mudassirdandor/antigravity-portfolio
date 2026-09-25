export interface ExpertisePillar {
  id: string;
  pillarNumber: string;
  title: string;
  focus: string;
  summary: string;
  capabilities: string[];
}

export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: 'data-analysis',
    pillarNumber: '01',
    title: 'Data Analysis',
    focus: 'Preparation · Cleaning · Exploration',
    summary:
      'Exploring, cleaning, transforming, and interpreting structured datasets to uncover underlying patterns, test assumptions, and extract actionable findings.',
    capabilities: [
      'Exploratory Data Analysis',
      'Data Cleaning & Validation',
      'Data Transformation',
      'Pattern & Trend Identification',
      'Actionable Insights',
    ],
  },
  {
    id: 'business-intelligence',
    pillarNumber: '02',
    title: 'Business Intelligence',
    focus: 'Reporting · KPI Tracking · Decision Support',
    summary:
      'Designing reporting frameworks, KPI monitoring systems, and analytical views that translate operational data into clear business decision-support workflows.',
    capabilities: [
      'Dashboard Development',
      'KPI Definition & Tracking',
      'Operational Reporting',
      'Decision Support Workflows',
      'Business Performance Insights',
    ],
  },
  {
    id: 'data-visualization',
    pillarNumber: '03',
    title: 'Data Visualization',
    focus: 'Visual Hierarchy · Clarity · Accessibility',
    summary:
      'Presenting complex analytical findings through clear, accessible, and intuitive graphical representations designed to communicate evidence with minimal cognitive friction.',
    capabilities: [
      'Visual Information Hierarchy',
      'Chart Selection & Design',
      'Cognitive Load Optimization',
      'Executive Summary Design',
      'Accessible Data Presentation',
    ],
  },
  {
    id: 'statistical-analytics',
    pillarNumber: '04',
    title: 'Statistical Analytics',
    focus: 'Quantitative Methods · Reasoning · Evidence',
    summary:
      'Applying MSc-level statistical reasoning, quantitative methods, and evidence-based interpretation to analyze relationships, validate hypotheses, and separate signal from noise.',
    capabilities: [
      'Statistical Reasoning',
      'Quantitative Analysis',
      'Descriptive & Inferential Methods',
      'Correlation & Variance Analysis',
      'Evidence-Based Evaluation',
    ],
  },
];
