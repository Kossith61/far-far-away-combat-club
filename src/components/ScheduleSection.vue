<!-- src/components/ScheduleSection.vue -->
<template>
  <section class="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
    <h2 class="text-4xl font-bold text-center mb-6 text-[#61de2a]">
      Training Schedule
    </h2>

    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-700 text-sm text-center">
        <thead class="bg-[#ffcb05] text-black">
          <tr>
            <th class="p-2 border border-gray-600">Time</th>
            <th class="p-2 border border-gray-600">Mon</th>
            <th class="p-2 border border-gray-600">Tue</th>
            <th class="p-2 border border-gray-600">Wed</th>
            <th class="p-2 border border-gray-600">Thu</th>
            <th class="p-2 border border-gray-600">Fri</th>
            <th class="p-2 border border-gray-600">Sat</th>
            <th class="p-2 border border-gray-600">Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(slot, index) in schedule" :key="index">
            <td class="p-2 border border-gray-600 font-bold text-[#61de2a]">
              {{ slot.time }}
            </td>
            <td
              class="p-2 border border-gray-600"
              v-for="day in days"
              :key="day"
            >
              <div v-for="(training, i) in slot[day]" :key="i" class="mb-1">
                <span class="block">{{ training }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const schedule = [
  {
    time: "06:30 AM",
    mon: ["Yoga", "BJJ(Beginner)"],
    tue: [""],
    wed: ["Yoga", "BJJ(Beginner)"],
    thu: [""],
    fri: ["Yoga", "BJJ(Beginner)"],
    sat: [],
    sun: ["Strength and Conditioning"],
  },
  {
    time: "08:00 AM",
    mon: ["Muay Thai (Beginner)"],
    tue: ["Boxing (Beginner)"],
    wed: ["Muay Thai (Beginner)"],
    thu: ["Boxing (Beginner)"],
    fri: ["Muay Thai (Beginner)"],
    sat: ["Boxing (Beginner)"],
    sun: [],
  },
  {
    time: "09:00 AM",
    mon: ["BJJ (No-Gi) All Levels"],
    tue: ["BJJ (No-Gi) All Levels"],
    wed: ["BJJ (No-Gi) All Levels"],
    thu: ["BJJ (No-Gi) All Levels"],
    fri: ["BJJ (No-Gi) All Levels"],
    sat: ["BJJ (No-Gi) All Levels"],
    sun: ["Strength and Conditioning"],
  },
  {
    time: "10:00 AM",
    mon: ["Wrestling (Beginner)"],
    tue: ["MMA (Beginner)"],
    wed: ["Wrestling (Beginner)"],
    thu: ["MMA (Beginner)"],
    fri: ["Wrestling (Beginner)"],
    sat: ["MMA (Beginner)"],
    sun: [],
  },
  {
    time: "11:30 AM",
    mon: ["Women’s MMA"],
    tue: [""],
    wed: ["Women’s MMA"],
    thu: [""],
    fri: ["Women’s MMA"],
    sat: [],
    sun: ["Strength and Conditioning"],
  },
  {
    time: "04:00 PM",
    mon: ["Wrestling (Intermediate), BJJ (Intermediate)"],
    tue: ["MMA (Intermediate)"],
    wed: ["Wrestling (Intermediate), BJJ (Intermediate)"],
    thu: ["MMA (Intermediate)"],
    fri: ["Wrestling (Intermediate)"],
    sat: ["MMA (Intermediate)"],
    sun: ["Wrestling (Intermediate), BJJ (Intermediate)"],
  },
  {
    time: "05:30 PM",
    mon: ["Women’s MMA"],
    tue: ["Muay Thai (Intermediate), Boxing (Intermediate)"],
    wed: ["Women’s MMA"],
    thu: ["Muay Thai (Intermediate), Boxing (Intermediate)"],
    fri: ["Women’s MMA"],
    sat: ["Muay Thai (Intermediate), Boxing (Intermediate)"],
    sun: ["Strength and Conditioning"],
  },
  {
    time: "07:30 PM",
    mon: ["Wrestling (Advanced)"],
    tue: ["Boxing (Advanced)"],
    wed: ["Wrestling (Advanced)"],
    thu: ["Boxing (Advanced)"],
    fri: ["Wrestling (Advanced)"],
    sat: ["Boxing (Advanced)"],
    sun: [""],
  },
  {
    time: "08:20 PM",
    mon: ["BJJ (Advanced)"],
    tue: ["Muay Thai (Advanced), MMA (Advanced)"],
    wed: ["BJJ (Advanced)"],
    thu: ["Muay Thai (Advanced), MMA (Advanced)"],
    fri: ["Open Mat"],
    sat: ["Muay Thai (Advanced), MMA (Advanced)"],
    sun: ["Strength and Conditioning"],
  },
];
</script>
