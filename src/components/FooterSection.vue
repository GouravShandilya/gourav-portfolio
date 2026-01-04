<template>
  <footer
    class="bg-black dark:bg-gray-900 text-white py-12 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Logo & Description -->
        <div>
          <Logo :show-text="false" :size="60" class="mb-4" />
          <p class="text-gray-400 dark:text-gray-500 mb-4 leading-relaxed">
            Building exceptional digital experiences with modern technologies.
            Let's create something amazing together.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://linkedin.com/in/gourav-kumar-19111b279"
              target="_blank"
              class="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin :size="20" class="text-white dark:text-gray-100" />
            </a>
            <a
              href="https://github.com/gouravshandilya"
              target="_blank"
              class="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
            >
              <Github :size="20" class="text-white dark:text-gray-100" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <div class="space-y-2">
            <a
              v-for="link in quickLinks"
              :key="link.name"
              :href="link.href"
              @click="scrollToSection($event, link.href)"
              class="block text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
          <div class="space-y-3 text-gray-400 dark:text-gray-500">
            <div class="flex items-center space-x-3">
              <Mail :size="18" />
              <span>shandilya669@gmail.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <Phone :size="18" />
              <span>+91-8178346590</span>
            </div>
            <div class="flex items-center space-x-3">
              <MapPin :size="18" />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500"
      >
        <p>
          &copy; {{ currentYear }} Gourav Kumar. All rights reserved. Built with
          Vue.js & Tailwind CSS.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-vue-next";
import Logo from "./Logo.vue";

export default {
  name: "FooterSection",
  components: {
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    Logo,
  },
  data() {
    return {
      quickLinks: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
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
