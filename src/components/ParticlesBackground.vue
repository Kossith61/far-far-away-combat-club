<!-- src/components/ParticlesBackground.vue -->
<template>
  <div id="particles-js" class="fixed inset-0 -z-10"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#43cf21" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: { distance: 400, duration: 0.4 },
      },
    },
    retina_detect: true,
  });
});
</script>

<style>
#particles-js {
  background: #000;
}
</style>
