<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            black 1px,
            transparent 0
          );
          background-size: 30px 30px;
        "
      ></div>
    </div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
    >
      <div data-aos="fade-up" data-aos-duration="800">
        <!-- Greeting -->
        <p
          class="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4 tracking-wide"
        >
          Hello, I'm
        </p>

        <!-- Main Name -->
        <h1
          class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight"
        >
          Gourav <span class="text-gradient">Kumar</span>
        </h1>

        <!-- Role -->
        <h2
          class="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium mb-8 tracking-wide"
        >
          Senior Frontend Developer
        </h2>

        <!-- Description -->
        <p
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Crafting exceptional digital experiences with Vue.js ecosystem.
          Passionate about performance optimization, clean code architecture,
          and building scalable applications that serve thousands of users.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            @click="scrollToSection($event, '#projects')"
            class="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover-lift"
          >
            View My Work
          </a>

          <a
            href="#contact"
            @click="scrollToSection($event, '#contact')"
            class="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            2+
          </div>
          <div class="text-gray-600 dark:text-gray-400 font-medium">
            Years Experience
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            10K+
          </div>
          <div class="text-gray-600 dark:text-gray-400 font-medium">
            Daily Users Served
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            40%
          </div>
          <div class="text-gray-600 dark:text-gray-400 font-medium">
            Performance Boost
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            20+
          </div>
          <div class="text-gray-600 dark:text-gray-400 font-medium">
            Open Source Contributions
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <ChevronDown :size="32" class="text-gray-400 dark:text-gray-600" />
    </div>
  </section>
</template>

<script>
import { ChevronDown } from "lucide-vue-next";

export default {
  name: "HeroSection",
  components: {
    ChevronDown,
  },
  methods: {
    scrollToSection(event, href) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
