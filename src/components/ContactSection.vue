<template>
  <section class="py-12 px-4 md:px-8 lg:px-16 bg-cover bg-center">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-[#61de2a]">
      Contact Us
    </h2>

    <form
      ref="formRef"
      action="https://formspree.io/f/mpwrworj"
      method="POST"
      class="max-w-2xl mx-auto space-y-6"
      @submit.prevent="handleSubmit"
    >
      <!-- Anti-bot -->
      <input type="text" name="_gotcha" style="display: none" />

      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          class="w-full bg-transparent border border-[#61de2a] rounded-xl p-3 text-green-100 placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#61de2a]"
        />
      </div>

      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          class="w-full bg-transparent border border-[#61de2a] rounded-xl p-3 text-green-100 placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#61de2a]"
        />
      </div>

      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          placeholder="Your message..."
          class="w-full bg-transparent border border-[#61de2a] rounded-xl p-3 text-green-100 placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#61de2a]"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-[#61de2a] text-black font-bold py-3 px-6 rounded-xl hover:bg-[#50c924] transition duration-300 w-full hover:scale-105"
      >
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from "vue";

const formRef = ref(null);

const handleSubmit = async () => {
  const form = formRef.value;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      Swal.fire({
        title: "Message sent!",
        text: "Thank you for contacting us!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      form.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    Swal.fire({
      title: "Oops!",
      text: "Something went wrong. Please try again.",
      icon: "error",
    });
  }
};
</script>
