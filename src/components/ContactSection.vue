<template>
  <section
    class="py-12 px-4 md:px-8 lg:px-16 bg-[url('/src/assets/shrek-s-toilet.jpg')] bg-cover bg-center h-screen w-full"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-[#61de2a]">
      Contact Us
    </h2>

    <form class="max-w-2xl mx-auto space-y-6">
      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          class="w-full bg-transparent border border-[#61de2a] rounded-xl p-3 text-green-100 placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#61de2a]"
        />
      </div>

      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          class="w-full bg-transparent border border-[#61de2a] rounded-xl p-3 text-green-100 placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-[#61de2a]"
        />
      </div>

      <div>
        <label class="block mb-2 text-[#61de2a] font-medium">Message</label>
        <textarea
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
