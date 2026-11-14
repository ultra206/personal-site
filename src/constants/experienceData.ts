export interface ExperienceRole {
  id: string;
  period: string;
  title: string;
  company: string;
  descriptions: string[];
  techs: string[];
  isCurrent?: boolean;
}

export const EXPERIENCE_MAP: ExperienceRole[] = [
  {
    id: "softwareEngineer",
    period: "Oct 2026 - Actualidad",
    title: "Software Engineer",
    company: "NTT DATA · Barcelona, España",
    isCurrent: true,
    descriptions: [
      "Ingeniero de Software en NTT DATA, participando en la evolución, mantenimiento y mejora continua de la plataforma de gestión de residuos de Ecoembes, una solución clave para la digitalización de procesos en plantas de tratamiento y recicladores.",
      "Mis responsabilidades abarcan el desarrollo de nuevas características y mantenimiento de sistemas existentes. La plataforma está construida con .NET, bases de datos Oracle y frontend en Vue 3, incorporando soluciones de Inteligencia Artificial y Agentic AI para optimizar los procesos.",
    ],
    techs: ["Microsoft Azure", "Oracle Database", ".NET Framework", "Vue.js"],
  },
  {
    id: "juniorEngineer",
    period: "Sept 2023 - Oct 2026",
    title: "Junior Software Engineer",
    company: "NTT DATA · Barcelona, España",
    isCurrent: false,
    descriptions: [
      "Consolidación técnica en el desarrollo full-stack, participando en arquitecturas empresariales, resolución de incidencias complejas y soporte en el ecosistema .NET y bases de datos relacionales.",
    ],
    techs: [".NET", "Angular", "PostgreSQL"],
  },
  {
    id: "intern",
    period: "Oct 2022 - Jul 2023",
    title: "Becario / Intern",
    company: "NTT DATA · Barcelona, España",
    isCurrent: false,
    descriptions: [
      "Encargado de desarrollar herramientas internas para la plataforma Salesforce, enfocándome en el backend y la integración de soluciones en la nube.",
    ],
    techs: ["Salesforce.com", "JavaScript", "C#", "Programación Apex"],
  },
];
