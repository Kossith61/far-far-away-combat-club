<template>
  <header class="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
    <div
      class="container mx-auto flex justify-between items-center py-2 px-4 md:px-10"
    >
      <!-- Логотип -->
      <div class="flex items-center space-x-2">
        <router-link to="/">
          <img src="/assets/logo.png" alt="logo" class="h-40 w-auto" />
        </router-link>
      </div>

      <!-- Навигация для десктопа -->
      <nav class="hidden md:flex space-x-14">
        <ul class="flex space-x-10 text-xl">
          <li>
            <router-link to="/about" class="hover:text-[#61de2a]"
              >About us</router-link
            >
          </li>
          <li>
            <router-link to="/coaches" class="hover:text-[#61de2a]"
              >Coaches</router-link
            >
          </li>
          <li>
            <router-link to="/schedule" class="hover:text-[#61de2a]"
              >Schedule</router-link
            >
          </li>
          <li>
            <router-link to="/classes" class="hover:text-[#61de2a]"
              >Classes</router-link
            >
          </li>
          <li>
            <router-link to="/prices" class="hover:text-[#61de2a]"
              >Prices</router-link
            >
          </li>
          <li>
            <router-link to="/contacts" class="hover:text-[#61de2a]"
              >Contacts</router-link
            >
          </li>
        </ul>
      </nav>

      <!-- Кнопка гамбургера для мобил -->
      <button
        class="md:hidden focus:outline-none"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-[#61de2a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 8h16M4 16h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-[#61de2a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Мобильное меню -->
    <nav
      v-if="mobileMenuOpen"
      class="md:hidden bg-black text-white shadow-inner"
    >
      <ul class="flex flex-col space-y-4 p-4 text-xl">
        <li>
          <router-link
            to="/about"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >About us</router-link
          >
        </li>
        <li>
          <router-link
            to="/coaches"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >Coaches</router-link
          >
        </li>
        <li>
          <router-link
            to="/schedule"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >Schedule</router-link
          >
        </li>
        <li>
          <router-link
            to="/classes"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >Classes</router-link
          >
        </li>
        <li>
          <router-link
            to="/prices"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >Prices</router-link
          >
        </li>
        <li>
          <router-link
            to="/contacts"
            class="hover:text-[#61de2a]"
            @click="mobileMenuOpen = false"
            >Contacts</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>
