<script setup lang="ts">
import { computed } from 'vue'
import { Technology, TECHNOLOGY_MAP } from '../constants/technologies'

const props = defineProps<{
    tech: Technology
}>()

const techInfo = computed(() => TECHNOLOGY_MAP[props.tech])

const isImage = computed(() => {
    const icon = techInfo.value.icon
    return icon.startsWith('/') || icon.startsWith('http') || icon.endsWith('.svg') || icon.endsWith('.png')
})
</script>

<template>
    <div
        class="inline-flex items-center gap-2 bg-dark px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/50 transition-colors text-xs text-txt-muted">
        <img v-if="isImage" :src="techInfo.icon" :alt="techInfo.name" class="w-3.5 h-3.5 object-contain" />
        <i v-else :class="[techInfo.icon, 'text-primary text-xs']"></i>
        <span class="font-medium text-txt">{{ techInfo.name }}</span>
    </div>
</template>