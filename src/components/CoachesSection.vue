<template>
  <section class="bg-black-50 py-12 px-4 md:px-8 lg:px-16">
    <h2 class="text-4xl font-bold text-center text-[#61de2a] mb-12">
      Meet Our Coaches
    </h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="coach in coaches"
        :key="coach.name"
        class="flex gap-6 bg-black p-6 rounded-2xl shadow-md items-start"
      >
        <img
          :src="coach.image"
          :alt="coach.name"
          class="w-30 h-30 rounded-full object-cover border-4 hover:scale-105"
        />
        <div>
          <h3 class="text-xl font-bold text-[#61de2a]">{{ coach.name }}</h3>
          <p class="text-sm text-white italic mb-2">{{ coach.role }}</p>
          <p class="text-white">{{ coach.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const coaches = [
  {
    name: "Shrek",
    role: "Head MMA Coach",
    description:
      "The only coach who deadlifts trees. Believes every round should start with a roar. Doesn’t do rest days. Does mud baths",
    image: "/src/assets/shrek-coach-photo.jpg",
  },
  {
    name: "Fiona",
    role: "Women’s MMA Coach",
    description:
      "Can throw a roundhouse kick in a wedding dress and look good doing it.",
    image: "/src/assets/fiona-coach.png",
  },
  {
    name: "Donkey",
    role: "Motivation Coach",
    description: "Annoying? Absolutely. Effective? Weirdly, yes.",
    image: "/src/assets/donkey-coach.png",
  },
  {
    name: "Puss in Boots",
    role: "Muay Thai & Footwork Coach",
    description:
      "Will teach you elegance in combat — and then pick your pocket.",
    image: "/src/assets/puss-in-boots.png",
  },
  {
    name: "Pinocchio",
    role: "Tactics and Yoga Coach",
    description: "Helps you lie your way into a victory.",
    image: "/src/assets/Pinocchio_Profile.png",
  },
  {
    name: "Gingy",
    role: "Nutrition Coach",
    description: "He will tell you to cut sugar while literally made of it.",
    image: "/src/assets/Gingerbread_Man_Profile.png",
  },
  {
    name: "Three Little Pigs",
    role: "Wrestling Coaches",
    description:
      "A powerhouse trio. Takedowns, chain wrestling, and control fundamentals.",
    image: "/src/assets/Three-pigs.png",
  },
  {
    name: "Big Bad Wolf",
    role: "BJJ Coach",
    description: "Quiet but dangerous.",
    image: "/src/assets/Big-bad-wolf.png",
  },
  {
    name: "Doris the Ugly Stepsister",
    role: "Boxing Coach",
    description: "Don’t complain, or she’ll spar with you herself.",
    image: "/src/assets/Doris.png",
  },
];
</script>
