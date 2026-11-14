<!-- Vista Landing.vue con los IDs de anclaje -->
<template>
    <div class="w-full max-w-7xl flex flex-col gap-12 py-8 px-4 sm:px-6 lg:px-8 text-txt mx-auto relative">

        <!-- Sidebar de navegación rápida (En desarrollo) -->
        <!-- <PageSidebar /> -->

        <PersonalHeader />

        <!-- Sección Sobre mí y Trayectoria -->
        <div id="about" class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch scroll-mt-8">
            <div class="lg:col-span-3 animate-stagger-item h-full flex flex-col" style="--stagger-delay: 0.2s;">
                <ProfessionalSummary />
            </div>
            <div class="lg:col-span-2 animate-stagger-item h-full flex flex-col" style="--stagger-delay: 0.4s;">
                <ExperienceTimeline />
            </div>
        </div>

        <!-- Sección Skills -->
        <div id="skills" class="animate-stagger-item scroll-mt-8" style="--stagger-delay: 0.6s;">
            <SkillsGrid @select-category="handleSelectCategory" />
        </div>

        <!-- Sección Proyectos con margen de scroll optimizado -->
        <div id="projects" class="animate-stagger-item scroll-mt-24 pt-4" style="--stagger-delay: 0.8s;">
            <ProjectList />
        </div>

    </div>
</template>