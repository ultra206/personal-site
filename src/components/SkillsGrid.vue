<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GradientText from './GradientText.vue'
import TechPill from './TechPill.vue'
import { Technology } from '../constants/technologies'

const { t } = useI18n()

const emit = defineEmits<{
    (e: 'select-category', category: string): void
}>()

const aiTechs = [
    Technology.AgenticAI,
    Technology.GitHubCopilot,
    Technology.SpecDrivenDev,
    Technology.DocumentIntelligence,
    Technology.LLMs,
]

const backendTechs = [
    Technology.DotNet,
    Technology.NodeJs,
    Technology.Python,
    Technology.JavaScript,
    Technology.TypeScript,
    Technology.RestApi,
    Technology.Microservices,
]

const frontendTechs = [
    Technology.Vue,
    Technology.Angular,
    Technology.TypeScript,
    Technology.JavaScript,
    Technology.TailwindCSS,
]

const databaseTechs = [
    Technology.Oracle,
    Technology.PostgreSQL,
    Technology.MongoDB,
    Technology.MySQL,
]

const devopsTechs = [
    Technology.Azure,
    Technology.AzureDevOps,
    Technology.GitHubActions,
    Technology.CICD,
    Technology.Git,
    Technology.Docker,
    Technology.Kubernetes,
    Technology.Rancher,
]

const languageTechs = [
    Technology.Spanish,
    Technology.Catalan,
    Technology.English,
]

const handleCategoryClick = (category: string) => {
    emit('select-category', category)
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <GradientText :text="t('skills.title')" tag="h3" sizeClass="text-2xl font-bold tracking-tight" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Inteligencia Artificial -->
            <div @click="handleCategoryClick('ai')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.ai')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-sparkles" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in aiTechs" :key="tech" :tech="tech" />
                </div>
            </div>

            <!-- Backend -->
            <div @click="handleCategoryClick('backend')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.backend')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-server" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in backendTechs" :key="tech" :tech="tech" />
                </div>
            </div>

            <!-- Frontend -->
            <div @click="handleCategoryClick('frontend')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.frontend')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-desktop" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in frontendTechs" :key="tech" :tech="tech" />
                </div>
            </div>

            <!-- Bases de Datos -->
            <div @click="handleCategoryClick('databases')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.databases')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-database" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in databaseTechs" :key="tech" :tech="tech" />
                </div>
            </div>

            <!-- Cloud & DevOps -->
            <div @click="handleCategoryClick('devops')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.devops')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-cloud" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in devopsTechs" :key="tech" :tech="tech" />
                </div>
            </div>

            <!-- Idiomas -->
            <div @click="handleCategoryClick('languages')"
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col gap-4 cursor-pointer hover:border-accent/50 transition-all select-none">
                <GradientText :text="t('skills.categories.languages')" tag="h4" sizeClass="text-lg font-bold"
                    icon="pi pi-globe" />
                <div class="flex flex-wrap gap-2">
                    <TechPill v-for="tech in languageTechs" :key="tech" :tech="tech" />
                </div>
            </div>

        </div>
    </div>
</template>