<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen bg-dark text-txt">
        <Header />

        <main class="flex-1 flex flex-col items-center justify-center p-6">
            <router-view />
        </main>

        <Footer />
    </div>
</template>