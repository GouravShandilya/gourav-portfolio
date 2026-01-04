<template>
  <button
    @click="toggleTheme"
    class="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
    aria-label="Toggle theme"
  >
    <!-- Sun Icon -->
    <Sun
      :size="20"
      class="absolute transition-all duration-300"
      :class="
        isDark
          ? 'rotate-90 scale-0 opacity-0'
          : 'rotate-0 scale-100 opacity-100'
      "
    />
    <!-- Moon Icon -->
    <Moon
      :size="20"
      class="absolute transition-all duration-300"
      :class="
        isDark
          ? 'rotate-0 scale-100 opacity-100'
          : '-rotate-90 scale-0 opacity-0'
      "
    />
  </button>
</template>

<script>
import { Sun, Moon } from "lucide-vue-next";
import { useTheme } from "../composables/useTheme";

export default {
  name: "ThemeToggle",
  components: {
    Sun,
    Moon,
  },
  setup() {
    const { isDark, toggleTheme } = useTheme();

    return {
      isDark,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dark button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>
