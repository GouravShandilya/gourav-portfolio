<template>
  <div class="flex items-center space-x-2">
    <!-- Custom Logo SVG -->
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 50 50"
      class="transition-transform duration-300 hover:scale-110"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            class="logo-gradient-start"
            style="stop-color: #000000; stop-opacity: 1"
          />
          <stop
            offset="100%"
            class="logo-gradient-end"
            style="stop-color: #404040; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="logoGradientDark"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #d1d5db; stop-opacity: 1" />
        </linearGradient>
      </defs>

      <!-- Outer circle -->
      <circle
        cx="25"
        cy="25"
        r="23"
        fill="none"
        :stroke="isDark ? 'url(#logoGradientDark)' : 'url(#logoGradient)'"
        stroke-width="2"
        class="transition-all duration-300"
      />

      <!-- Inner geometric shapes representing 'G' and 'K' -->
      <path
        d="M15 18 Q15 12 21 12 Q27 12 27 18 L27 22 L23 22 M27 25 L27 32 Q27 38 21 38 Q15 38 15 32 L15 30"
        fill="none"
        :stroke="isDark ? 'url(#logoGradientDark)' : 'url(#logoGradient)'"
        stroke-width="2.5"
        stroke-linecap="round"
        class="transition-all duration-300"
      />

      <!-- K letter stylized -->
      <path
        d="M32 12 L32 38 M32 24 L38 12 M32 26 L38 38"
        fill="none"
        :stroke="isDark ? 'url(#logoGradientDark)' : 'url(#logoGradient)'"
        stroke-width="2.5"
        stroke-linecap="round"
        class="transition-all duration-300"
      />
    </svg>

    <!-- Text -->
    <div v-if="showText" class="flex flex-col">
      <span
        class="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300"
        >Gourav</span
      >
      <span
        class="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase transition-colors duration-300"
        >Frontend Developer</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    size: {
      type: [String, Number],
      default: 50,
    },
    showText: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    this.checkDarkMode();
    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
      this.checkDarkMode();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  },
  methods: {
    checkDarkMode() {
      this.isDark = document.documentElement.classList.contains("dark");
    },
  },
};
</script>
