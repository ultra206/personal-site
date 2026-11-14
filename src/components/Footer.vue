<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { PROFILE_CONFIG } from '../constants/profile'

const { t } = useI18n()
</script>

<template>
    <footer
        class="w-full px-6 py-4 bg-surface border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-txt-muted">
        <span>© {{ new Date().getFullYear() }} <strong class="text-primary font-semibold">{{ PROFILE_CONFIG.name
                }}</strong></span>

        <div class="flex flex-wrap items-center justify-center gap-6">
            <a :href="`mailto:${PROFILE_CONFIG.email}`"
                class="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <i class="pi pi-envelope text-primary"></i>
                <span>{{ t('footer.contact') }}</span>
            </a>

            <a :href="PROFILE_CONFIG.github" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <i class="pi pi-github text-primary"></i>
                <span>GitHub</span>
            </a>

            <a :href="PROFILE_CONFIG.linkedin" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:text-accent transition-colors">
                <i class="pi pi-linkedin text-primary"></i>
                <span>LinkedIn</span>
            </a>
        </div>
    </footer>
</template>