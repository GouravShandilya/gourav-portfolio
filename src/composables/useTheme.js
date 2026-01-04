import { ref, watch, onMounted } from "vue";

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const setTheme = (dark) => {
    isDark.value = dark;
  };

  const initTheme = () => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Check system preference
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Apply theme
    applyTheme();
  };

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Watch for theme changes
  watch(isDark, () => {
    applyTheme();
  });

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  };
}
