<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import GradientText from './GradientText.vue'
import { EXPERIENCE_MAP } from '../constants/experienceData'

const { t } = useI18n()

// Estado de expansión basado en el ID único de cada rol
const expandedRoles = ref<Record<string, boolean>>({})

const toggleRole = (id: string) => {
    expandedRoles.value[id] = !expandedRoles.value[id]
}
</script>

<template>
    <div class="bg-surface p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col h-full gap-6">
        <GradientText :text="t('experience.title')" tag="h3" sizeClass="text-2xl font-bold tracking-tight" />

        <div class="relative border-l border-white/10 ml-3 flex flex-col gap-8 flex-grow">

            <!-- Bucle dinámico sobre el mapeo importado -->
            <div v-for="role in EXPERIENCE_MAP" :key="role.id" class="relative pl-6 group">
                <!-- Indicador circular -->
                <div
                    :class="['absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-dark', role.isCurrent ? 'bg-accent' : 'bg-white/20']">
                </div>

                <div @click="toggleRole(role.id)"
                    class="cursor-pointer bg-dark/40 p-5 rounded-xl border border-white/5 hover:border-accent/40 transition-all flex flex-col gap-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <span
                                :class="['text-xs font-semibold uppercase tracking-wider', role.isCurrent ? 'text-accent' : 'text-txt-muted']">
                                {{ role.period }}
                            </span>
                            <h4 class="text-lg font-bold text-txt">{{ role.title }}</h4>
                            <p class="text-xs text-txt-muted">{{ role.company }}</p>
                        </div>
                        <i
                            :class="['pi text-accent transition-transform duration-200', expandedRoles[role.id] ? 'pi-chevron-up' : 'pi-chevron-down']"></i>
                    </div>

                    <!-- Contenido desplegable -->
                    <div v-if="expandedRoles[role.id]"
                        class="flex flex-col gap-4 pt-3 border-t border-white/5 animate-fadeIn text-xs sm:text-sm text-txt-muted leading-relaxed">
                        <p v-for="(desc, idx) in role.descriptions" :key="idx">
                            {{ desc }}
                        </p>

                        <div class="flex flex-wrap gap-1.5 pt-2">
                            <span v-for="tech in role.techs" :key="tech"
                                class="px-2 py-1 bg-white/5 text-accent rounded text-xs">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>