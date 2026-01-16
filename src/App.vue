<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <router-view />
  </div>
</template>

<script>
import { useTheme } from "./composables/useTheme";

export default {
  name: "App",
  setup() {
    const { initTheme } = useTheme();
    initTheme();
    return {};
  },
};
</script>
