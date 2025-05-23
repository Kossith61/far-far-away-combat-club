<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import ParticlesBackground from "./components/ParticlesBackground.vue";
</script>

<template>
  <div>
    <HeaderSection />
    <main class="pt-30">
      <router-view />
    </main>
    <ParticlesBackground />
  </div>
</template>

<style scoped></style>
