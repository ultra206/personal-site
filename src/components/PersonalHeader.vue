<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GradientText from './GradientText.vue'

const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col gap-2 border-b border-white/10 pb-8 items-start">
        <span class="text-xs uppercase tracking-widest text-accent font-semibold">{{ t('header.location') }}</span>
        <GradientText :text="t('profile.name')" tag="h1" sizeClass="text-4xl sm:text-5xl font-extrabold" />
        <h2 class="text-xl sm:text-2xl font-semibold text-txt">{{ t('profile.role') }}</h2>
        <h3 class="text-sm sm:text-base text-txt-muted font-medium">
            {{ t('profile.specialized') }}
        </h3>
    </div>
</template>