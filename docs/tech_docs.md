# Documentación Técnica Integral del Portfolio y Arquitectura de Aplicación

Este documento detalla exhaustivamente la arquitectura, la organización de componentes, el flujo de datos, la internacionalización, el pipeline de despliegue y las decisiones de diseño implementadas en la aplicación del portfolio personal.

---

## 1. Arquitectura y Estructura de Directorios

El proyecto está diseñado bajo una arquitectura modular orientada a componentes con **Vue 3 (Composition API)**, **TypeScript**, y **Tailwind CSS**, priorizando el rendimiento, la reutilización de código y la separación de responsabilidades.

### Árbol de Directorios Principal
```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline CI/CD (Build local -> Tarball SCP -> Oracle VM)
├── src/
│   ├── assets/                   # Recursos estáticos globales, estilos base y fuentes
│   ├── components/               # Componentes atómicos y funcionales de la UI
│   │   ├── PageSidebar.vue       # Índice lateral flotante con scroll sincronizado
│   │   ├── PersonalHeader.vue    # Cabecera de perfil, presentación y redes
│   │   ├── ProfessionalSummary.vue# Resumen ejecutivo y extracto profesional
│   │   ├── ExperienceTimeline.vue# Línea de tiempo de experiencia laboral
│   │   ├── SkillsGrid.vue        # Cuadrícula interactiva de categorías de habilidades
│   │   ├── SkillDetailCard.vue   # Tarjeta desplegable de detalle y tecnologías por categoría
│   │   ├── ProjectList.vue       # Listado de proyectos destacados
│   │   ├── GradientText.vue      # Componente atómico para títulos con efecto degradado
│   │   └── TechPill.vue          # Píldoras/etiquetas individuales para tecnologías
│   ├── constants/                # Estructuras de datos estáticas y mapas de dominio
│   │   ├── technologies.enum.ts  # Enums y constantes tipadas de tecnologías
│   │   └── skillDetails.ts       # Mapa de contenidos y relaciones para SkillDetailCard
│   ├── i18n/                     # Configuración de localización e internacionalización
│   │   └── index.ts              # Instancia de vue-i18n y diccionarios de texto
│   ├── views/
│   │   └── Landing.vue           # Vista principal que orquesta todas las secciones
│   ├── App.vue                   # Componente raíz con enrutamiento y layout base
│   └── main.ts                   # Punto de entrada de la aplicación Vue
├── Dockerfile                    # Configuración multi-stage (Node.js build + Nginx alpine)
├── docker-compose.yml            # Orquestación de contenedores para el entorno de producción
├── tailwind.config.js            # Configuración de estilos y tokens de diseño personalizados
└── package.json                  # Dependencias y scripts de compilación
```

---

## 2. Componentes Clave y Lógica de Interfaz

### A. Vista Principal (`Landing.vue`)
Actúa como el contenedor central de la página de aterrizaje. Orquesta el diseño general mediante una estructura en columna con espaciados consistentes y anclajes de navegación (`id="about"`, `id="skills"`, `id="projects"`). Gestiona el estado reactivo global de la sección de habilidades (`activeCategory`) para controlar la apertura sincronizada de los detalles técnicos.

### B. Navegación Lateral (`PageSidebar.vue`)
* **Propósito:** Ofrecer un índice flotante fijo (`fixed left-6 top-24`) en pantallas grandes (`xl+`) para una navegación rápida y no intrusiva.
* **Manejo de Scroll e Interacción:**
  * Utiliza un listener de eventos de desplazamiento optimizado con `{ passive: true }`.
  * Incorpora un **bloqueo temporal** (`isManualScrolling`) al hacer clic en los enlaces para evitar que el resaltado parpadee o cambie de sección mientras ocurre el desplazamiento suave (`scrollIntoView`).
  * Desactiva los estados de foco nativos (`outline-none`, `focus:ring-0`, `-webkit-tap-highlight-color`) para garantizar una experiencia visual completamente limpia sin marcos ni destellos blancos.

### C. Cuadrícula y Detalles de Habilidades (`SkillsGrid.vue` & `SkillDetailCard.vue`)
* **`SkillsGrid.vue`:** Muestra las categorías técnicas principales (IA, Backend, Frontend, Bases de Datos, DevOps, Idiomas) utilizando tarjetas interactivas con efectos de hover y selectores basados en iconos de PrimeIcons (`pi`). Emite el evento `select-category` hacia el componente padre al hacer clic.
* **`SkillDetailCard.vue`:** Recibe la categoría activa y consulta el mapa estático `SKILL_DETAILS_MAP`. Soporta internacionalización dual: intenta cargar traducciones dinámicas desde `vue-i18n` (`skills.details.{category}...`) aplicando un *fallback* automático a los datos estructurados en constantes si la clave de traducción no existe.

---

## 3. Estructura de Datos y Constantes (`constants/`)

Para mantener los componentes limpios y libres de lógica de negocio o textos hardcodeados, la información estática se externaliza:

* **`technologies.enum.ts` / Diccionarios:** Centralizan los identificadores de tecnologías (como .NET, Vue, Docker, Oracle PL/SQL, etc.) asegurando el tipado estricto en todo el ecosistema TypeScript.
* **`skillDetails.ts`:** Define la estructura relacional de cada categoría, asociando las tecnologías hijas con descripciones técnicas específicas y metadatos visuales.

---

## 4. Internacionalización (`vue-i18n`)

La aplicación está preparada para soportar múltiples idiomas (como español y catalán/inglés):
* La instancia centralizada en `src/i18n/index.ts` administra los diccionarios de texto.
* Los componentes consumen las cadenas mediante la función `t()` y validan la existencia de claves mediante `te()`, permitiendo una arquitectura de traducciones escalable y tolerante a fallos en caso de descripciones faltantes.

---

## 5. Pipeline CI/CD e Infraestructura Docker

La estrategia de despliegue está optimizada para ejecutarse en una máquina virtual de Oracle Cloud Infrastructure (OCI) sin sobrecargar recursos con compilaciones locales.

### A. Dockerfile (Multi-Stage Build)
```dockerfile
# --- Etapa 1: Compilación ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Etapa 2: Servidor Web de Producción ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### B. Docker Compose (`docker-compose.yml`)
Mapea el contenedor al puerto local configurado (`5173:80`), asegurando reinicios automáticos (`restart: unless-stopped`) y aislamiento en redes virtuales de Docker (`web-network`).

### C. Automatización GitHub Actions (`.github/workflows/deploy.yml`)
El flujo de integración continua realiza las siguientes operaciones en cada `push` a la rama principal:
1. **Build Local en Runner:** Compila la imagen Docker de manera optimizada en los servidores de GitHub.
2. **Empaquetado (`tar`):** Exporta la imagen resultante a un archivo comprimido (`docker save`).
3. **Transferencia Segura (SCP):** Envía el tarball y el archivo `docker-compose.yml` al servidor Oracle Cloud utilizando secretos cifrados (`ORACLE_HOST`, `ORACLE_USER`, `ORACLE_SSH_KEY`, `PROJECT_PATH`).
4. **Despliegue Atómico (SSH):** Carga la nueva imagen en el demonio de Docker del servidor (`docker load`), actualiza el contenedor mediante `docker compose up -d` y realiza limpieza automática de imágenes huérfanas para optimizar el almacenamiento del servidor.