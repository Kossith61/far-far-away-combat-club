<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="toggle"
      class="bg-[#61de2a] text-black p-3 rounded-full shadow-lg hover:bg-[#4cc41d]"
    >
      <img
        src="/src/assets/shrek-chat.png"
        alt="shrek-chat"
        class="w-10 h-10 object-contain hover:scale-105"
      />
    </button>

    <div
      v-if="visible"
      class="w-80 h-[480px] bg-black/90 text-green-100 rounded-xl mt-4 shadow-xl flex flex-col"
    >
      <div class="bg-[#61de2a] text-black font-bold px-4 py-3 rounded-t-xl">
        Chat Assistant
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.from === 'user' ? 'text-right' : 'text-left'"
        >
          <div
            :class="
              msg.from === 'user'
                ? 'bg-green-800 text-white'
                : 'bg-green-200 text-black'
            "
            class="inline-block px-3 py-2 rounded-xl"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <form
        @submit.prevent="send"
        class="p-3 flex gap-2 border-t border-green-700"
      >
        <input
          v-model="input"
          type="text"
          placeholder="Type a message..."
          class="flex-1 bg-transparent border border-[#61de2a] text-green-100 rounded-xl px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          class="bg-[#61de2a] text-black px-4 py-2 rounded-xl font-bold"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const input = ref("");
const messages = ref([{ from: "bot", text: "Hi! How can I help you?" }]);

const toggle = () => {
  visible.value = !visible.value;
};

const send = async () => {
  if (!input.value.trim()) return;
  const userMessage = input.value.trim();
  messages.value.push({ from: "user", text: userMessage });
  input.value = "";

  // Заглушка: бот отвечает шаблонно
  // Здесь можно подключить OpenAI API или своё
  setTimeout(() => {
    messages.value.push({
      from: "bot",
      text: "I'm just a dummy bot for now. But I could be smarter if you connect me to a real API 😎",
    });
  }, 500);
};
</script>
