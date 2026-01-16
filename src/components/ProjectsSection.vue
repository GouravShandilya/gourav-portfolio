<template>
  <section
    id="projects"
    class="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div data-aos="fade-up" class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Featured Projects
        </h2>
        <div
          class="w-24 h-1 bg-black dark:bg-white rounded-full mx-auto mb-6"
        ></div>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of my best work, featuring modern web applications built
          with cutting-edge technologies.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-12">
        <!-- Dynamic Project Cards -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover-lift transition-colors duration-300"
        >
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <!-- Project Image/Preview - Left side for even index, right for odd -->
            <div
              :class="[
                'p-12 flex items-center justify-center',
                project.gradient,
                { 'lg:order-2': project.imagePosition === 'right' },
              ]"
            >
              <div class="text-center text-white">
                <div
                  class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                >
                  <component :is="project.icon" :size="32" class="text-white" />
                </div>
                <h4 class="text-2xl font-bold mb-2">
                  {{ project.shortTitle }}
                </h4>
                <p :class="project.subtitleColor" class="text-sm">
                  {{ project.subtitle }}
                </p>
              </div>
            </div>

            <!-- Project Details -->
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {{ project.title }}
                </h3>
                <div class="flex space-x-2">
                  <a
                    v-for="(link, linkIndex) in project.links"
                    :key="linkIndex"
                    :href="link.url"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <component
                      :is="link.icon"
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {{ project.featuresTitle }}
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div
                    v-for="(feature, featureIndex) in project.features"
                    :key="featureIndex"
                    class="flex items-center space-x-2"
                  >
                    <div
                      :class="`w-1.5 h-1.5 ${project.featureDotColor} rounded-full`"
                    ></div>
                    <span class="text-gray-600 dark:text-gray-400">
                      {{ feature }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in project.techStack"
                  :key="techIndex"
                  :class="project.techBadgeClass"
                  class="px-3 py-1 text-white text-xs rounded-full font-medium transition-colors duration-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Github,
  ExternalLink,
  ShoppingCart,
  Package,
  BookOpen,
  BarChart3,
  Bitcoin,
  Plane,
  Trophy,
} from "lucide-vue-next";

export default {
  name: "ProjectsSection",
  components: {
    Github,
    ExternalLink,
    ShoppingCart,
    Package,
    BookOpen,
    BarChart3,
    Bitcoin,
    Plane,
    Trophy,
  },
  data() {
    return {
      // Add new projects to this array. Each project should have the following structure:
      // - title: Main title displayed in the project details
      // - shortTitle: Title shown in the project icon area
      // - subtitle: Subtitle shown in the project icon area
      // - description: Main description of the project
      // - icon: Component name (ShoppingCart, Package, BarChart3, etc.)
      // - gradient: Tailwind gradient classes for the icon area background
      // - subtitleColor: Tailwind color class for the subtitle
      // - imagePosition: 'left' or 'right' to control icon area placement
      // - featuresTitle: Title for the features section
      // - featureDotColor: Tailwind color class for feature bullet points
      // - features: Array of feature strings
      // - techStack: Array of technology names
      // - techBadgeClass: Tailwind classes for tech badges
      // - links: Array of link objects with 'icon' and 'url' properties
      projects: [
        {
          title: "Go4Explore – Travel Booking Platform",
          shortTitle: "Go4Explore",
          subtitle: "Travel Booking Platform",
          description:
            "Explore amazing tour packages, group trips, thrilling treks, Domestic & International travel packages with Go4Explore. Our team crafts the finest travel itineraries for your ideal journey. Full stack project built with latest technology.",
          icon: "Plane",
          gradient: "bg-gradient-to-br from-teal-500 to-cyan-700",
          subtitleColor: "text-teal-100",
          imagePosition: "right",
          featuresTitle: "Key Features",
          featureDotColor: "bg-teal-500",
          features: [
            "Tour Package Booking",
            "Group Trips",
            "Trek Adventures",
            "International Travel",
          ],
          techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Nuxt.js"],
          techBadgeClass: "bg-teal-600 dark:bg-teal-700",
          links: [
            { icon: "Github", url: "#" },
            { icon: "ExternalLink", url: "https://go4explore.com" },
          ],
        },
        {
          title: "Quiz Mania",
          shortTitle: "Quiz Mania",
          subtitle: "Multiplayer Quiz Game",
          description:
            "The Ultimate Trivia Experience - Challenge your friends in real-time multiplayer quiz battles. Test your knowledge, climb the leaderboard, and become the ultimate quiz champion. Features live gameplay, instant scoring, and competitive rankings.",
          icon: "Trophy",
          gradient: "bg-gradient-to-br from-orange-500 to-red-600",
          subtitleColor: "text-orange-100",
          imagePosition: "left",
          featuresTitle: "Game Features",
          featureDotColor: "bg-orange-500",
          features: [
            "Real-time Multiplayer",
            "Live Leaderboards",
            "Host & Join Games",
            "Instant Scoring",
          ],
          techStack: ["Nuxt.js", "WebSockets", "Node.js", "Express", "MongoDB"],
          techBadgeClass: "bg-orange-600 dark:bg-red-700",
          links: [
            { icon: "Github", url: "#" },
            {
              icon: "ExternalLink",
              url: "https://multiplayer-quiz-mania.vercel.app/",
            },
          ],
        },
        {
          title: "CryptoSight",
          shortTitle: "CryptoSight",
          subtitle: "cryptocurrency tracking web app",
          description:
            "A high-performance web application for tracking real-time cryptocurrency prices and market trends. Features advanced filtering, watchlists, and detailed coin analytics.",
          icon: "Bitcoin",
          gradient: "bg-gradient-to-br from-gray-900 to-gray-700",
          subtitleColor: "text-gray-300",
          imagePosition: "left",
          featuresTitle: "Key Features",
          featureDotColor: "bg-green-500",
          features: [
            "95+ Lighthouse Score",
            "1000+ cryptocurrencies",
            "2s Load Time",
            "LCP under 1.5s",
          ],
          techStack: [
            "Vue 3",
            "TypeScript",
            "Tailwind CSS",
            "Coingecko API",
            "Pinia",
            "Vite",
            "Metamask Integration",
          ],
          techBadgeClass: "bg-gray-900 dark:bg-gray-700 dark:text-gray-200",
          links: [
            {
              icon: "Github",
              url: "https://github.com/GouravShandilya/crypto-sight",
            },
            {
              icon: "ExternalLink",
              url: "https://crypto-sight-kohl.vercel.app/",
            },
          ],
        },
        {
          title: "Vue Component Library",
          shortTitle: "Component Library",
          subtitle: "Open Source Package",
          description:
            "Open-source component library with comprehensive documentation and TypeScript support. Features tree-shaking, accessibility compliance, and automated testing pipeline.",
          icon: "Package",
          gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
          subtitleColor: "text-blue-200",
          imagePosition: "right",
          featuresTitle: "Impact & Usage",
          featureDotColor: "bg-blue-500",
          features: [
            "500+ Weekly Downloads",
            "10+ Companies Using",
            "95% Code Coverage",
            "TypeScript Declarations",
          ],
          techStack: ["Vue 3", "TypeScript", "Rollup", "Storybook", "Vitest"],
          techBadgeClass: "bg-blue-600 dark:bg-blue-700",
          links: [
            { icon: "Github", url: "#" },
            { icon: "Package", url: "#" },
            { icon: "BookOpen", url: "#" },
          ],
        },
        {
          title: "MadAI",
          shortTitle: "MadAI",
          subtitle: "Symptoms checker with AI",
          description: "",
          icon: "BarChart3",
          gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
          subtitleColor: "text-purple-200",
          imagePosition: "left",
          featuresTitle: "Performance & Features",
          featureDotColor: "bg-purple-500",
          features: [
            "100K+ Data Points",
            "60fps Animations",
            "Real-time Updates",
            "Export Functionality",
          ],
          techStack: ["Vue 3", "D3.js", "WebSockets", "Chart.js", "Pinia"],
          techBadgeClass: "bg-purple-600 dark:bg-purple-700",
          links: [
            { icon: "Github", url: "#" },
            { icon: "ExternalLink", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>
