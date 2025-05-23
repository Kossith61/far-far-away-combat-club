<template>
  <header class="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
    <div class="container mx-auto flex justify-between items-center py-1 px-30">
      <!-- Логотип -->
      <div class="flex items-center space-x-2">
        <p class="hover:text-[#61de2a] transition-colors text-xl">
          <router-link to="/"
            ><img src="/src/assets/logo.png" alt="logo" class="h-40 w-auto"
          /></router-link>
        </p>
      </div>

      <!-- Навигация -->
      <nav class="hidden md:flex space-x-14">
        <ul class="flex space-x-10">
          <li>
            <router-link to="/about" class="hover:text-[#61de2a] text-xl"
              >About us</router-link
            >
          </li>
          <li>
            <router-link to="/coaches" class="hover:text-[#61de2a] text-xl"
              >Coaches</router-link
            >
          </li>
          <li>
            <router-link to="/schedule" class="hover:text-[#61de2a] text-xl"
              >Schedule</router-link
            >
          </li>
          <li>
            <router-link to="/classes" class="hover:text-[#61de2a] text-xl"
              >Classes</router-link
            >
          </li>
          <li>
            <router-link to="/prices" class="hover:text-[#61de2a] text-xl"
              >Prices</router-link
            >
          </li>
          <li>
            <router-link to="/contacts" class="hover:text-[#61de2a] text-xl"
              >Contacts</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>
