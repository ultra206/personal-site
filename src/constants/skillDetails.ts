export interface TechnologyMeta {
  id: string;
}

export interface SkillCategoryMeta {
  key: string;
  technologies: TechnologyMeta[];
}

export const SKILL_DETAILS_MAP: Record<string, SkillCategoryMeta> = {
  ai: {
    key: "ai",
    technologies: [
      { id: "AgenticAI" },
      { id: "GitHubCopilot" },
      { id: "SpecDrivenDev" },
      { id: "DocumentIntelligence" },
      { id: "LLMs" },
    ],
  },
  backend: {
    key: "backend",
    technologies: [
      { id: "DotNet" },
      { id: "NodeJs" },
      { id: "Python" },
      { id: "JavaScript" },
      { id: "TypeScript" },
      { id: "RestApi" },
      { id: "Microservices" },
    ],
  },
  frontend: {
    key: "frontend",
    technologies: [
      { id: "Vue" },
      { id: "Angular" },
      { id: "TypeScript" },
      { id: "JavaScript" },
      { id: "TailwindCSS" },
    ],
  },
  databases: {
    key: "databases",
    technologies: [
      { id: "Oracle" },
      { id: "PostgreSQL" },
      { id: "MongoDB" },
      { id: "MySQL" },
    ],
  },
  devops: {
    key: "devops",
    technologies: [
      { id: "Azure" },
      { id: "AzureDevOps" },
      { id: "GitHubActions" },
      { id: "CICD" },
      { id: "Git" },
      { id: "Docker" },
      { id: "Kubernetes" },
      { id: "Rancher" },
    ],
  },
  languages: {
    key: "languages",
    technologies: [{ id: "Spanish" }, { id: "Catalan" }, { id: "English" }],
  },
};
