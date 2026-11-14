<script setup lang="ts">
import { ref } from 'vue'
import PageSidebar from '../components/PageSidebar.vue'
import PersonalHeader from '../components/PersonalHeader.vue'
import ProfessionalSummary from '../components/ProfessionalSummary.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import SkillDetailCard from '../components/SkillDetailCard.vue'
import ProjectList from '../components/ProjectList.vue'

// Estado para la categoría seleccionada
const activeCategory = ref<string | null>(null)

const handleSelectCategory = (category: string) => {
    // Si ya está seleccionada, la alterna o la mantiene abierta
    activeCategory.value = category
}
</script>

<template>
    <div class="w-full max-w-7xl flex flex-col gap-12 py-8 px-4 sm:px-6 lg:px-8 text-txt mx-auto relative">

        <PageSidebar />

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
        <div id="skills" class="flex flex-col gap-6 animate-stagger-item scroll-mt-8" style="--stagger-delay: 0.6s;">
            <SkillsGrid @select-category="handleSelectCategory" />

            <!-- Se muestra solo si activeCategory tiene un valor válido -->
            <SkillDetailCard v-if="activeCategory" :category="activeCategory" />
        </div>

        <!-- Sección Proyectos -->
        <div id="projects" class="animate-stagger-item scroll-mt-24 pt-4" style="--stagger-delay: 0.8s;">
            <ProjectList />
        </div>

    </div>
</template>