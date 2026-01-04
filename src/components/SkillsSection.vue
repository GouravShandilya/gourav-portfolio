<template>
  <section
    id="skills"
    class="py-24 px-5 bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto">
      <div data-aos="fade-up" class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          My Skills
        </h2>
        <div
          class="w-24 h-1 bg-black dark:bg-white rounded-full mx-auto mb-6"
        ></div>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          There's always room to grow, learn, and level up — the skill grind
          never stops!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <!-- Frontend Development Column -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Frontend Development
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              class="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 flex items-center gap-3 cursor-pointer group"
              v-for="skill in frontendSkills"
              :key="skill.name"
            >
              <component
                :is="skill.icon"
                :size="20"
                class="text-gray-200 group-hover:text-white transition-colors flex-shrink-0"
              />
              <span class="whitespace-nowrap text-gray-200 font-medium">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>

        <!-- Tools & Technologies Column -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Tools & Technologies
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              class="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 flex items-center gap-3 cursor-pointer group"
              v-for="skill in toolsSkills"
              :key="skill.name"
            >
              <component
                :is="skill.icon"
                :size="20"
                class="text-gray-200 group-hover:text-white transition-colors flex-shrink-0"
              />
              <span class="whitespace-nowrap text-gray-200 font-medium">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <!-- Build Tools & Testing -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Build Tools & Testing
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              class="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 flex items-center gap-3 cursor-pointer group"
              v-for="skill in buildTestSkills"
              :key="skill.name"
            >
              <component
                :is="skill.icon"
                :size="20"
                class="text-gray-200 group-hover:text-white transition-colors flex-shrink-0"
              />
              <span class="whitespace-nowrap text-gray-200 font-medium">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>

        <!-- APIs & Standards -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            APIs & Standards
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              class="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300 rounded-lg px-5 py-3 flex items-center gap-3 cursor-pointer group"
              v-for="skill in apisStandardsSkills"
              :key="skill.name"
            >
              <component
                :is="skill.icon"
                :size="20"
                class="text-gray-200 group-hover:text-white transition-colors flex-shrink-0"
              />
              <span class="whitespace-nowrap text-gray-200 font-medium">{{
                skill.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  FileCode2,
  Palette,
  Zap,
  FileType,
  Workflow,
  Rocket,
  Atom,
  Triangle,
  Paintbrush,
  Database,
  Cherry,
  Box,
  GitBranch,
  GitPullRequest,
  Container,
  Figma,
  Send,
  Lightbulb,
  Bug,
  Package,
  Boxes,
  TestTube,
  CheckCircle,
  TreePine,
  Beaker,
  Link,
  BarChart3,
  Plug,
  Accessibility,
  Search,
  Smartphone,
  TrendingUp,
  Timer,
} from "lucide-vue-next";

export default {
  name: "SkillsSection",
  components: {
    FileCode2,
    Palette,
    Zap,
    FileType,
    Workflow,
    Rocket,
    Atom,
    Triangle,
    Paintbrush,
    Database,
    Cherry,
    Box,
    GitBranch,
    GitPullRequest,
    Container,
    Figma,
    Send,
    Lightbulb,
    Bug,
    Package,
    Boxes,
    TestTube,
    CheckCircle,
    TreePine,
    Beaker,
    Link,
    BarChart3,
    Plug,
    Accessibility,
    Search,
    Smartphone,
    TrendingUp,
    Timer,
  },
  data() {
    return {
      frontendSkills: [
        { name: "HTML5", icon: "FileCode2" },
        { name: "CSS3", icon: "Palette" },
        { name: "JavaScript (ES6+)", icon: "Zap" },
        { name: "TypeScript", icon: "FileType" },
        { name: "Vue.js 2/3", icon: "Workflow" },
        { name: "Nuxt.js 2/3", icon: "Rocket" },
        { name: "React.js", icon: "Atom" },
        { name: "Next.js", icon: "Triangle" },
        { name: "Sass/SCSS", icon: "Paintbrush" },
        { name: "Vuex", icon: "Database" },
        { name: "Pinia", icon: "Cherry" },
        { name: "Redux Toolkit", icon: "Box" },
      ],
      toolsSkills: [
        { name: "Git", icon: "GitBranch" },
        { name: "GitHub Actions", icon: "GitPullRequest" },
        { name: "Docker", icon: "Container" },
        { name: "Figma", icon: "Figma" },
        { name: "Postman", icon: "Send" },
        { name: "Lighthouse", icon: "Lightbulb" },
        { name: "DebugBear", icon: "Bug" },
      ],
      buildTestSkills: [
        { name: "Vite", icon: "Zap" },
        { name: "Webpack", icon: "Package" },
        { name: "Rollup", icon: "Boxes" },
        { name: "Jest", icon: "TestTube" },
        { name: "Vitest", icon: "CheckCircle" },
        { name: "Cypress", icon: "TreePine" },
        { name: "Vue Testing Library", icon: "Beaker" },
      ],
      apisStandardsSkills: [
        { name: "RESTful APIs", icon: "Link" },
        { name: "GraphQL", icon: "BarChart3" },
        { name: "WebSocket", icon: "Plug" },
        { name: "WCAG Accessibility", icon: "Accessibility" },
        { name: "SEO Optimization", icon: "Search" },
        { name: "Progressive Web Apps", icon: "Smartphone" },
        { name: "Bundle Analysis", icon: "TrendingUp" },
        { name: "Lazy Loading", icon: "Timer" },
      ],
    };
  },
};
</script>
