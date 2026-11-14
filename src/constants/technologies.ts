import type { TechnologyInfo } from "../types/technology";

export enum Technology {
  // IA
  AgenticAI = "AGENTIC_AI",
  GitHubCopilot = "GITHUB_COPILOT",
  SpecDrivenDev = "SPEC_DRIVEN_DEV",
  DocumentIntelligence = "DOCUMENT_INTELLIGENCE",
  LLMs = "LLMS",

  // Backend
  DotNet = "DOTNET",
  NodeJs = "NODEJS",
  Python = "PYTHON",
  JavaScript = "JAVASCRIPT",
  TypeScript = "TYPESCRIPT",
  RestApi = "REST_API",
  Microservices = "MICROSERVICES",

  // Frontend
  Vue = "VUE",
  Angular = "ANGULAR",
  TailwindCSS = "TAILWIND_CSS",

  // Bases de Datos
  Oracle = "ORACLE",
  PostgreSQL = "POSTGRESQL",
  MongoDB = "MONGODB",
  MySQL = "MYSQL",

  // Cloud & DevOps
  Azure = "AZURE",
  AzureDevOps = "AZURE_DEVOPS",
  GitHubActions = "GITHUB_ACTIONS",
  CICD = "CICD",
  Git = "GIT",
  Docker = "DOCKER",
  Kubernetes = "KUBERNETES",
  Rancher = "RANCHER",

  // Idiomas
  Spanish = "SPANISH",
  Catalan = "CATALAN",
  English = "ENGLISH",
}

export const TECHNOLOGY_MAP: Record<Technology, TechnologyInfo> = {
  // IA
  [Technology.AgenticAI]: { name: "Agentic AI", icon: "pi pi-microchip" },
  [Technology.GitHubCopilot]: { name: "GitHub Copilot", icon: "pi pi-code" },
  [Technology.SpecDrivenDev]: {
    name: "Spec-Driven Dev",
    icon: "pi pi-file-edit",
  },
  [Technology.DocumentIntelligence]: {
    name: "Document Intelligence",
    icon: "pi pi-file",
  },
  [Technology.LLMs]: { name: "LLMs", icon: "pi pi-bolt" },

  // Backend
  [Technology.DotNet]: { name: ".NET", icon: "pi pi-cog" },
  [Technology.NodeJs]: { name: "Node.js", icon: "pi pi-server" },
  [Technology.Python]: { name: "Python", icon: "pi pi-desktop" },
  [Technology.JavaScript]: { name: "JavaScript", icon: "pi pi-code" },
  [Technology.TypeScript]: { name: "TypeScript", icon: "pi pi-code" },
  [Technology.RestApi]: { name: "REST APIs", icon: "pi pi-globe" },
  [Technology.Microservices]: { name: "Microservices", icon: "pi pi-sitemap" },

  // Frontend
  [Technology.Vue]: { name: "Vue.js", icon: "pi pi-eye" },
  [Technology.Angular]: { name: "Angular", icon: "pi pi-shield" },
  [Technology.TailwindCSS]: { name: "Tailwind CSS", icon: "pi pi-palette" },

  // Bases de Datos
  [Technology.Oracle]: { name: "Oracle", icon: "pi pi-database" },
  [Technology.PostgreSQL]: { name: "PostgreSQL", icon: "pi pi-database" },
  [Technology.MongoDB]: { name: "MongoDB", icon: "pi pi-database" },
  [Technology.MySQL]: { name: "MySQL", icon: "pi pi-database" },

  // Cloud & DevOps
  [Technology.Azure]: { name: "Azure", icon: "pi pi-cloud" },
  [Technology.AzureDevOps]: { name: "Azure DevOps", icon: "pi pi-sync" },
  [Technology.GitHubActions]: { name: "GitHub Actions", icon: "pi pi-play" },
  [Technology.CICD]: { name: "CI/CD", icon: "pi pi-refresh" },
  [Technology.Git]: { name: "Git", icon: "pi pi-code" },
  [Technology.Docker]: { name: "Docker", icon: "pi pi-box" },
  [Technology.Kubernetes]: { name: "Kubernetes", icon: "pi pi-compass" },
  [Technology.Rancher]: { name: "Rancher", icon: "pi pi-sliders-h" },

  // Idiomas
  [Technology.Spanish]: { name: "Español (Nativo)", icon: "pi pi-flag" }, // Aquí pondrás la bandera más adelante
  [Technology.Catalan]: { name: "Catalán (Nativo)", icon: "pi pi-flag-fill" },
  [Technology.English]: { name: "Inglés (Profesional)", icon: "pi pi-globe" },
};
