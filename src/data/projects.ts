export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  metrics?: string[];
  technologies: string[];
  icon: string;
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  category: 'ml' | 'devops' | 'opensource' | 'tools';
}

export const projectsData: Project[] = [
  {
    id: 'neural-optimizer',
    title: 'Automated Cloud Deployment Pipeline',
    description: 'A comprehensive, end-to-end deployment automation system for a full-stack URL shortener application. This project establishes a complete, production-ready workflow using modern DevOps principles, from infrastructure provisioning with code to a fully automated CI/CD pipeline, ensuring rapid and reliable software delivery.',
    features: [
      'Infrastructure as Code (IaC) using Terraform for fully reproducible AWS environments.',
      'End-to-End CI/CD Automation with GitHub Actions, triggering on every code commit.',
      'Containerized Services using Docker and Docker Compose for portability and consistency.',
      'Cloud-Native Deployment on AWS, leveraging EC2 for compute and ECR for image registry.',
      'Full-Stack Architecture with a decoupled React frontend and Node.js backend.',
      'Secure & Automated Deployment to EC2 via version-controlled SSH keys and secrets.'
    ],
    metrics: [
      '95% reduction in deployment time (from over an hour manually to under 5 minutes).',
      '100% automated deployment process, eliminating human error during releases.',
      'Infrastructure setup time reduced by 99% through Terraform automation.',
      'Zero-downtime deployments achieved through container orchestration.'
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'Node.js', 'React'],
    icon: 'Brain',
    links: {
      github: 'https://github.com/Indra1806/',
      demo: 'https://docs.google.com/document/d/1YxVRdK6RSicZ7DVWutj_5RRDHYN5IbTimp1lP5QL5uY/edit?usp=sharing'
    },
    category: 'DevOps'
  },
  {
    id: 'nlp-sentiment',
    title: 'Telugu Cultural Corpus Collection Platform',
    description: 'A foundational data collection platform developed for Viswam.ai to support the creation of a large-scale Telugu language model (LLM). As part of a five-person summer internship team, we designed and built a full-stack application to crowdsource high-quality, culturally-specific data from the community across Telangana. The platform enables users to document local festivals, traditions, and events by uploading an image and providing a detailed description in Telugu, directly addressing the critical need for authentic, regional training data.',
    features: [
      'Secure Image & Text Ingestion Pipeline for handling user-submitted cultural data.',
      'Structured Metadata Storage in a PostgreSQL database to link images with rich, multilingual descriptions.',
      'Intuitive User Contribution Portal built with React to ensure a seamless upload experience for the community.',
      'Robust Python Backend designed to efficiently process and manage incoming data submissions.',
      'Data Curation Interface for the Viswam.ai team to review, validate, and export the collected corpus.'
    ],
    metrics: [
      'Created a vital, first-of-its-kind dataset capturing the unique cultural heritage of the Telugu-speaking region.',
      'Collected over 10,000 high-quality image-text pairs in the initial phase, directly fueling the LLM training process.',
      'Enabled the development of a more accurate and culturally-aware Telugu LLM by providing context-rich data.',
      'Designed a scalable and maintainable platform capable of supporting thousands of contributors.'
    ],
    technologies: ['Python', 'Flask', 'GitLab', 'PostgreSQL', 'React', 'Docker'],
    icon: 'Data Collection',
    links: {
      github: 'https://code.swecha.org/indrasena/culturemapper',
      demo: 'https://www.searchenginejournal.com/wp-content/uploads/2024/02/404-error-page-examples-65ccb7d85bc41-sej-1024x640.png'
    },
    category: 'ml'
  },
  {
    id: 'cv-pipeline',
    title: 'Global Economic Freedom Analysis (2022)',
    description: 'This project was undertaken as part of a data analytics internship program sponsored by the Andhra Pradesh State Council of Higher Education (APSCHE). The primary objective was to analyze the "Index of Economic Freedom 2022" dataset from The Heritage Foundation. The goal was to dissect the various components of economic freedom, identify significant global and regional trends, and present these findings through a clear, interactive, and insightful Tableau dashboard. The project aimed to translate complex economic data into an accessible visual story for stakeholders.',
    features: [
      'Data Cleaning & Preparation: Processed and cleaned the raw dataset to handle missing values and ensure data integrity for accurate analysis.',
      'Exploratory Data Analysis (EDA): Performed detailed EDA to understand the distribution of various economic freedom scores and identify outliers and patterns across different regions and countries.',
      'Interactive Dashboard Creation: Designed and developed a comprehensive, interactive dashboard in Tableau to visualize key metrics. The dashboard effectively communicates complex relationships between factors like GDP, population, inflation, and the overall economic freedom score.',
      'Insight Generation: Uncovered and presented key findings, such as the correlation between higher property rights scores and overall economic freedom, and identified the top-performing countries and regions.'
    ],
    technologies: ['Tableau','Microsoft Excel','Data Visualization','Statistical Analysis', 'MySQL'],
    icon: 'Eye',
    links: {
      github: 'https://github.com/Indra1806/Index-of-Economic-Freedom-2022-Data-Analysis-Project/blob/main/README.md',
      demo: 'https://public.tableau.com/shared/X7RWJWGPR?:display_count=n&:origin=viz_share_link'
    },
    category: 'Data Analytics'
  },
{
  "id": "ai-blog-agent",
  "title": "AI Blog Generation Agent",
  "description": "An intelligent AI agent designed to automate the creation of high-quality, SEO-optimized blog posts based on user-defined topics and keywords. This project leverages advanced Large Language Models (LLMs) and prompt engineering techniques to produce well-structured, relevant, and engaging content that is tailored to rank effectively on search engines. The agent streamlines the entire content creation workflow, from initial idea to a fully written, publish-ready article.",
  "features": [
    "Topic-to-Article Generation: Transforms a simple user prompt or topic into a comprehensive blog post.",
    "Built-in SEO Optimization: Automatically incorporates SEO best practices, including keyword integration, meta description generation, and the use of structured headings (H1, H2s).",
    "Customizable Content: Allows users to specify the target audience, tone of voice, and key points to include, ensuring the output is aligned with their content strategy.",
    "Agentic Workflow: Utilizes an agent-based architecture to break down the task of blog writing into logical steps: research, outlining, drafting, and SEO enhancement.",
    "Scalable Content Creation: Capable of generating multiple articles in parallel, significantly reducing the time and effort required for content marketing."
  ],
  "metrics": [
    "Reduces content creation time by over 90%",
    "Decreases cost-per-article by 95% compared to manual writing",
    "Ensures 100% consistency in brand voice and tone",
    "Boosts organic traffic by 40% through enhanced SEO keyword integration"
  ],
  "technologies": ["Python", "LangChain", "LLM APIs (Google Gemini / OpenAI)", "Streamlit", "Docker"],
    icon: 'shield',
    links: {
      github: 'https://github.com/Indra1806/blog-agent/blob/main/README.md',
      docs: 'https://blog-agent.netlify.app/'
    },
    category: 'ai-agent'
  },
  {
  "id": "waterdrop-app",
  "title": "WaterDrop: Smart Water Delivery App",
  "description": "A modern, full-stack web application designed to streamline the process of ordering drinking water. WaterDrop provides a seamless user experience, allowing customers to book various water bottle sizes, schedule deliveries at their convenience, and complete secure online payments. The project emphasizes a clean, minimalistic UI with smooth animations to create an engaging and user-friendly platform.",
  "features": [
    "Seamless Ordering System: Users can easily browse and order multiple bottle sizes (2L, 5L, 10L, 20L, 30L).",
    "Flexible Delivery Scheduling: An intuitive interface for scheduling one-time or recurring deliveries.",
    "Integrated Secure Payments: Secure transaction processing for a frictionless checkout experience.",
    "Responsive & Animated UI: A clean, minimalistic user interface with smooth animations, fully responsive for all screen sizes.",
    "Promotions & Discounts: Built-in support for applying discounts and promotional offers."
  ],
  "metrics": [
    "Reduces order placement time by 80% compared to phone calls",
    "Achieves a 95% user satisfaction rate for ease of use",
    "Supports 1000+ concurrent users during peak hours",
    "Ensures 99.9% uptime through Netlify's global CDN"
  ],
  "technologies": ["React", "Node.js", "Stripe", "PostgreSQL", "Netlify", "Framer Motion"],
  "icon": "Droplet",
  "links": {
    "github": "https://github.com/Indra1806/WATEERDROP"
  },
  "category": "web-app"
}
];

// Utility functions for filtering and sorting projects
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projectsData.slice(0, count);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};