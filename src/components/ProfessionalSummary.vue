<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="bg-surface p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between h-full gap-6">
        <div class="flex flex-col gap-6">
            <GradientText :text="t('profile.aboutMe')" tag="h3" sizeClass="text-2xl font-bold tracking-tight" />

            <p class="text-sm sm:text-base text-txt-muted leading-relaxed">
                {{ t('profile.summary1') }}
            </p>
            <p class="text-sm sm:text-base text-txt-muted leading-relaxed">
                {{ t('profile.summary2') }}
            </p>
        </div>
    </div>
</template>