<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GradientText from './GradientText.vue'

const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col gap-6 border-t border-white/10 pt-8">
        <GradientText :text="t('projects.title')" tag="h3" sizeClass="text-2xl font-bold tracking-tight" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Proyecto 1: Portfolio -->
            <div
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col justify-between gap-4 hover:border-accent/50 transition-colors">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <h4 class="text-lg font-bold text-primary">{{ t('projects.portfolio.title') }}</h4>
                        <i class="pi pi-code text-accent"></i>
                    </div>
                    <p class="text-sm text-txt-muted">
                        {{ t('projects.portfolio.description') }}
                    </p>
                </div>
                <div class="flex items-center gap-2 pt-2">
                    <span class="text-xs px-2.5 py-1 rounded-full bg-dark border border-white/10 text-accent">Vue
                        3</span>
                    <span class="text-xs px-2.5 py-1 rounded-full bg-dark border border-white/10 text-accent">Tailwind
                        CSS</span>
                </div>
            </div>

            <!-- Proyecto 2: Godot -->
            <div
                class="bg-surface p-6 rounded-xl border border-white/10 flex flex-col justify-between gap-4 hover:border-accent/50 transition-colors">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <h4 class="text-lg font-bold text-primary">{{ t('projects.godot.title') }}</h4>
                        <i class="pi pi-bolt text-accent"></i>
                    </div>
                    <p class="text-sm text-txt-muted">
                        {{ t('projects.godot.description') }}
                    </p>
                </div>
                <div class="flex items-center gap-2 pt-2">
                    <span class="text-xs px-2.5 py-1 rounded-full bg-dark border border-white/10 text-accent">Godot
                        4</span>
                    <span
                        class="text-xs px-2.5 py-1 rounded-full bg-dark border border-white/10 text-accent">GDScript</span>
                </div>
            </div>
        </div>
    </div>
</template>