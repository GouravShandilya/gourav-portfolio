<template>
  <header
    class="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <Logo :size="40" />

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200 relative group"
            @click="scrollToSection($event, item.href)"
          >
            {{ item.name }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>

          <!-- Theme Toggle -->
          <ThemeToggle />

          <!-- Contact Button -->
          <a
            href="#contact"
            @click="scrollToSection($event, '#contact')"
            class="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            Let's Talk
          </a>
        </div>

        <!-- Mobile Menu Button and Theme Toggle -->
        <div class="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            @click="toggleMobileMenu"
            class="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
          >
            <Menu v-if="!mobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="flex flex-col space-y-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200 px-2 py-1"
            @click="handleMobileNavClick($event, item.href)"
          >
            {{ item.name }}
          </a>
          <a
            href="#contact"
            @click="handleMobileNavClick($event, '#contact')"
            class="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 text-center w-fit"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { Menu, X } from "lucide-vue-next";
import Logo from "./Logo.vue";
import ThemeToggle from "./ThemeToggle.vue";

export default {
  name: "Navbar",
  components: {
    Menu,
    X,
    Logo,
    ThemeToggle,
  },
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    scrollToSection(event, href) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    },
    handleMobileNavClick(event, href) {
      this.scrollToSection(event, href);
      this.mobileMenuOpen = false;
    },
  },
};
</script>
