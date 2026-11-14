<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GradientText from './GradientText.vue'
import { SKILL_DETAILS_MAP } from '../constants/skillDetails'

const props = defineProps<{
    category: string
}>()

const { t, te } = useI18n()

// Obtenemos la estructura base de la categoría desde la constante
const categoryInfo = computed(() => SKILL_DETAILS_MAP[props.category])

// Título de la categoría usando i18n con fallback a la constante
const title = computed(() => {
    const path = `skills.details.${props.category}.title`
    return te(path) ? t(path) : categoryInfo.value?.defaultTitle
})

// Lista de tecnologías mapeadas con soporte i18n
const technologies = computed(() => {
    if (!categoryInfo.value) return []

    return categoryInfo.value.technologies.map((tech) => {
        const namePath = `skills.details.${props.category}.technologies.${tech.id}.name`
        const descPath = `skills.details.${props.category}.technologies.${tech.id}.description`

        return {
            id: tech.id,
            name: te(namePath) ? t(namePath) : tech.name,
            description: te(descPath) ? t(descPath) : tech.description,
        }
    })
})
</script>

<template>
    <div v-if="categoryInfo"
        class="bg-surface p-6 rounded-xl border border-accent/40 flex flex-col gap-6 animate-fadeIn">
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <GradientText :text="title" tag="h4" sizeClass="text-xl font-bold" />
            <i class="pi pi-info-circle text-accent text-xl"></i>
        </div>

        <!-- Listado detallado de cada tecnología usando i18n -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="tech in technologies" :key="tech.id"
                class="bg-dark/40 p-4 rounded-lg border border-white/5 flex flex-col gap-1">
                <span class="text-sm font-bold text-primary flex items-center gap-2">
                    <i class="pi pi-check-circle text-accent text-xs"></i>
                    {{ tech.name }}
                </span>
                <p class="text-xs text-txt-muted leading-relaxed">
                    {{ tech.description }}
                </p>
            </div>
        </div>
    </div>
</template>