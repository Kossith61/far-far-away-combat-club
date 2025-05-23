<template>
  <section class="bg-black-50 py-12 px-4 md:px-8 lg:px-16">
    <h2 class="text-3xl font-bold mb-8 text-[#61de2a] text-center">
      Training Prices
    </h2>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(category, index) in pricing"
        :key="index"
        class="rounded-2xl p-5 shadow-md bg-black border border-green-500"
      >
        <h3 class="text-xl font-semibold text-[#61de2a] mb-2">
          {{ category.title }}
        </h3>
        <p class="text-white mb-2">{{ category.description }}</p>
        <p class="text-[#61de2a] font-bold">{{ category.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricing = [
  {
    title: "Beginner Classes",
    description: "Entry-level MMA, Muay Thai, Boxing, BJJ, Wrestling (3x/week)",
    price: "20,000 gold / month",
  },
  {
    title: "Intermediate Classes",
    description:
      "Intermediate MMA, Muay Thai, Boxing, BJJ, Wrestling (3x/week)",
    price: "25,000 gold / month",
  },
  {
    title: "Advanced Classes",
    description: "Evening advanced MMA, Muay Thai, Boxing, BJJ, Wrestling",
    price: "30,000 gold / month",
  },
  {
    title: "Women’s MMA",
    description: "Women-only MMA classes (2x/week)",
    price: "18,000 gold / month",
  },
  {
    title: "Yoga",
    description: "Morning yoga sessions (3x/week)",
    price: "10,000 gold / month",
  },
  {
    title: "Strength & Conditioning",
    description: "Full-body strength and conditioning (Sundays)",
    price: "15,000 gold / month",
  },
  {
    title: "Open Mat",
    description: "Free sparring and drilling space (Fridays)",
    price: "Free for all members",
  },
];
</script>
