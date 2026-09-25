export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'saylani-student-registration',
    title: 'Saylani Student Registration System',
    category: 'Data Collection · Automation · System Design',
    description:
      'An automated student registration chatbot that collects student information, stores records in Google Sheets, and generates student ID cards with downloadable PDF output.',
    capabilities: [
      'Structured Data Collection',
      'Google Sheets Integration',
      'Workflow Automation',
      'PDF Generation',
      'Conversational Interface',
    ],
    liveUrl: 'https://saylanireg.netlify.app/',
    githubUrl: 'https://github.com/mudassirdandor/saylani-form',
    featured: true,
  },
  {
    id: 'respondent-data-collection-chatbot',
    title: 'Respondent Data Collection Chatbot',
    category: 'Data Collection · Automation · Workflow',
    description:
      'An integrated chatbot workflow that collects respondent and donor information, stores structured records in Google Sheets, and sends automated email confirmations to respondents and HR.',
    capabilities: [
      'Structured Data Collection',
      'Dialogflow',
      'Google Sheets',
      'Google Apps Script',
      'Email Automation',
      'Spreadsheet Integration',
    ],
    liveUrl: 'https://saylani-rotibank-mu.vercel.app/',
    githubUrl: 'https://github.com/mudassirdandor/Saylani_rotibank',
    featured: true,
  },
  {
    id: 'job-application-system',
    title: 'Job Application Data Collection System',
    category: 'Structured Data · Form Design · Workflow',
    description:
      'A responsive multi-step application form with a progress indicator, designed to collect applicant information through a structured digital workflow with input validation.',
    capabilities: [
      'Structured Forms',
      'Input Validation',
      'Form Design',
      'Workflow Processing',
      'Responsive Web UI',
    ],
    liveUrl: 'https://jobapplica.netlify.app/',
    githubUrl: 'https://github.com/mudassirdandor/multi-step-form',
    featured: false,
  },
  {
    id: 'barish-alert',
    title: 'Barish Alert — Weather Application',
    category: 'API Data · Visualization',
    description:
      'A responsive weather application that retrieves and presents real-time weather information and forecasts through a clean, user-focused interface.',
    capabilities: [
      'Weather API Integration',
      'Data Presentation',
      'Responsive Interface',
      'Tailwind CSS',
    ],
    liveUrl: 'https://barishalert.netlify.app/',
    githubUrl: 'https://github.com/mudassirdandor/weatherapp',
    featured: false,
  },
];
