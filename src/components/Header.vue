<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePrimeVue } from 'primevue/config'
import { es as primeEs } from 'primelocale/js/es.js'
import { en as primeEn } from 'primelocale/js/en.js'
import type { AvailableLocales } from '../i18n'

const { t, locale } = useI18n<{ locale: AvailableLocales }>()
const primevue = usePrimeVue()

const isScrolled = ref(false)

const handleScroll = (): void => {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const toggleLanguage = (): void => {
    if (locale.value === 'es-ES') {
        locale.value = 'en-EN'
        primevue.config.locale = primeEn
    } else {
        locale.value = 'es-ES'
        primevue.config.locale = primeEs
    }
}
</script>

<template>
    <header :class="[
        'sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between transition-all duration-300',
        isScrolled ? 'px-6 py-2 shadow-lg shadow-black/40' : 'px-6 py-4'
    ]">
        <!-- Espaciador izquierdo para equilibrar el flex y mantener la nav centrada -->
        <div class="w-24"></div>

        <!-- Navegación centrada -->
        <nav class="flex items-center gap-8">
            <router-link to="/" class="text-txt hover:text-accent transition-colors font-medium text-sm tracking-wide">
                {{ t('header.nav.home') }}
            </router-link>
        </nav>

        <!-- Botón de idioma a la derecha -->
        <div class="w-24 flex justify-end">
            <Button :label="locale" icon="pi pi-globe" size="small"
                class="bg-dark border border-accent/40 text-accent hover:bg-accent hover:text-dark transition-colors"
                @click="toggleLanguage" />
        </div>
    </header>
</template>