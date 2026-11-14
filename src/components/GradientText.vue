<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

withDefaults(
    defineProps<{
        text: string
        tag?: 'h1' | 'h2' | 'h3' | 'span' | 'h4'
        sizeClass?: string
        icon?: string // Opcional: clase del icono (ej. 'pi pi-sparkles')
    }>(),
    {
        tag: 'h1',
        sizeClass: 'text-4xl sm:text-5xl font-extrabold'
    }
)

const containerRef = ref<HTMLElement | null>(null)
const mouseX = ref(50)
const mouseY = ref(50)

const handleGlobalMouseMove = (e: MouseEvent) => {
    if (!containerRef.value) return
    const rect = containerRef.value.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    mouseX.value = x
    mouseY.value = y
}

onMounted(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleGlobalMouseMove)
})
</script>

<template>
    <component :is="tag" ref="containerRef" :class="[
        sizeClass,
        'tracking-tight cursor-default inline-flex items-center gap-2 py-1 select-none text-transparent bg-clip-text'
    ]" :style="{
        backgroundImage: `radial-gradient(circle 350px at ${mouseX}% ${mouseY}%, var(--raw-accent) 0%, var(--raw-primary) 70%, var(--raw-primary) 100%)`
    }">
        <i v-if="icon" :class="[icon, 'text-transparent bg-clip-text']"></i>
        <span>{{ text }}</span>
    </component>
</template>