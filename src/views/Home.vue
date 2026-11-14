<script setup lang="ts">
import { ref } from 'vue'

const userName = ref<string>('')
const greeting = ref<string>('')

const generateGreeting = (): void => {
    greeting.value = userName.value.trim()
        ? `¡Hola, ${userName.value}!`
        : 'Escribe tu nombre primero.'
}
</script>

<template>
    <Card class="w-full max-w-md shadow-xl bg-slate-800 border border-slate-700 text-white">
        <template #title>
            <div class="flex items-center gap-2 text-emerald-400">
                <i class="pi pi-home text-xl"></i>
                <span>Vista Principal (Home)</span>
            </div>
        </template>

        <template #content>
            <div class="flex flex-col gap-3 mt-2">
                <label for="username" class="text-sm text-slate-300">Escribe tu nombre:</label>
                <div class="flex gap-2">
                    <InputText id="username" v-model="userName" placeholder="Tu nombre..." class="w-full"
                        @keyup.enter="generateGreeting" />
                    <Button icon="pi pi-check" severity="secondary" @click="generateGreeting" />
                </div>
                <p v-if="greeting" class="text-sm text-emerald-400 font-medium">
                    {{ greeting }}
                </p>
            </div>
        </template>
    </Card>
</template>