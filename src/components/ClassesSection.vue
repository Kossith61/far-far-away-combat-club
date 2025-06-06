<template>
  <section class="py-12 px-4 md:px-8 lg:px-16">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-[#61de2a]">
      Classes Overview
    </h2>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="cls in classes"
        :key="cls.title"
        class="bg-black/30 rounded-2xl p-5"
      >
        <div class="mb-4">
          <div class="rounded-xl h-150 mb-4">
            <img
              :src="cls.image"
              alt="cls.image"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-2 text-[#61de2a]">
          {{ cls.title }}
        </h3>
        <p class="text-sm text-green-100 leading-relaxed">
          {{ cls.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const classes = [
  {
    title: "MMA",
    description:
      "Mixed Martial Arts class combining striking and grappling techniques from various disciplines like Boxing, Muay Thai, BJJ, and Wrestling.",
    image: "/assets/shrek-in-shirt.png",
  },
  {
    title: "Muay Thai",
    description:
      "Thai kickboxing that emphasizes powerful strikes using fists, elbows, knees, and shins with clinch work and conditioning.",
    image: "/assets/striking-area.jpg",
  },
  {
    title: "Boxing",
    description:
      "Focus on punches, footwork, defense, and conditioning. Great for striking skill and cardio.",
    image: "/assets/ring-image.jpg",
  },
  {
    title: "Brazilian Jiu-Jitsu (BJJ)",
    description:
      "Grappling-based martial art specializing in ground control, submissions, and positional strategy.",
    image: "/assets/Big-bad-wolf.png",
  },
  {
    title: "Wrestling",
    description:
      "Takedown-focused grappling class emphasizing control, positioning, and explosive movements.",
    image: "/assets/bjj-mats-2.jpg",
  },
  {
    title: "Yoga",
    description:
      "Morning sessions to improve flexibility, mobility, recovery, and mental clarity. Perfect for combat athletes.",
    image: "/assets/yoga-image.png",
  },
];
</script>

<style scoped></style>
