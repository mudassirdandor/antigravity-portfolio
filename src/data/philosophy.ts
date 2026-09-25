export interface PhilosophyPrinciple {
  id: string;
  principleNumber: string;
  title: string;
  tag: string;
  description: string;
  takeaway: string;
}

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: 'right-question',
    principleNumber: '01',
    title: 'Start With the Right Question',
    tag: 'Problem Scoping',
    description:
      'Understand the business problem and define what the analysis needs to answer before working with data. Clear analytical questions prevent wasted effort and anchor the work directly to decision requirements.',
    takeaway: 'Define the objective before choosing the method.',
  },
  {
    id: 'trust-process',
    principleNumber: '02',
    title: 'Build Trust in the Process',
    tag: 'Methodological Rigor',
    description:
      'Focus on data quality, structured analysis, and appropriate statistical methods to support reliable findings. Rigorous data preparation and honest evaluation ensure conclusions are grounded in evidence rather than assumptions.',
    takeaway: 'Evidence-based reasoning over assumptions.',
  },
  {
    id: 'make-insights-useful',
    principleNumber: '03',
    title: 'Make Insights Useful',
    tag: 'Decision Support',
    description:
      'Communicate findings clearly through visual hierarchy and intuitive reporting so stakeholders can make informed decisions. A technically sound analysis only creates value when its implications are understandable and actionable.',
    takeaway: 'Clarity and actionability for stakeholders.',
  },
];
