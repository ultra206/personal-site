<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = [
    { id: 'about', labelKey: 'profile.aboutMe', icon: 'pi-user' },
    { id: 'skills', labelKey: 'skills.title', icon: 'pi-code' },
    { id: 'projects', labelKey: 'projects.title', icon: 'pi-folder' }
]

const activeSection = ref('about')
const isManualScrolling = ref(false)
let scrollTimeout: number | null = null

const scrollToSection = (id: string, event: MouseEvent) => {
    // Desenfocar inmediatamente el elemento para evitar el menú/borde de selección
    const target = event.currentTarget as HTMLElement
    target.blur()

    activeSection.value = id
    isManualScrolling.value = true

    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (scrollTimeout) clearTimeout(scrollTimeout)
    scrollTimeout = window.setTimeout(() => {
        isManualScrolling.value = false
    }, 600)
}

const handleScroll = () => {
    if (isManualScrolling.value) return

    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        activeSection.value = 'projects'
        return
    }

    const scrollPosition = window.scrollY + window.innerHeight / 3

    for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
            const top = el.offsetTop
            const height = el.offsetHeight
            if (scrollPosition >= top && scrollPosition < top + height) {
                activeSection.value = section.id
                break
            }
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<template>
    <aside
        class="hidden xl:flex flex-col fixed left-6 top-24 z-30 bg-surface/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 gap-2 shadow-lg w-48 select-none">
        <span class="text-[10px] font-semibold text-txt-muted uppercase tracking-wider px-2 pt-1">Índice</span>

        <button v-for="section in sections" :key="section.id" @mousedown.prevent
            @click="(e) => scrollToSection(section.id, e)" :class="[
                'flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left w-full select-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none',
                activeSection === section.id
                    ? 'bg-accent/10 text-accent border border-accent/20 shadow-sm'
                    : 'text-txt-muted hover:text-txt hover:bg-white/5'
            ]" style="-webkit-tap-highlight-color: transparent;">
            <i
                :class="['pi text-sm pointer-events-none', section.icon, activeSection === section.id ? 'text-accent' : 'text-txt-muted']"></i>
            <span class="truncate pointer-events-none">{{ t(section.labelKey) }}</span>
        </button>
    </aside>
</template>