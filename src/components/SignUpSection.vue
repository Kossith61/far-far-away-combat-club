<template>
  <!-- Компонент не отображает UI, просто подключает Chatbase -->
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = [];
      window.chatbase.q.push(args);
    };

    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });
  }

  const loadChatbase = () => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "iudeuTlx57iSM2juWymKO"; // 🔁 Замени ID, если свой
    script.setAttribute("chatbotId", "iudeuTlx57iSM2juWymKO");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);
  };

  if (document.readyState === "complete") {
    loadChatbase();
  } else {
    window.addEventListener("load", loadChatbase);
  }
});
</script>
