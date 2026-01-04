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
        <!-- Project 1 - E-commerce Platform -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover-lift transition-colors duration-300"
        >
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <!-- Project Image/Preview -->
            <div
              class="bg-gradient-to-br from-gray-900 to-gray-700 p-12 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                >
                  <ShoppingCart :size="32" class="text-white" />
                </div>
                <h4 class="text-2xl font-bold mb-2">E-commerce Platform</h4>
                <p class="text-gray-300 text-sm">Full-stack Solution</p>
              </div>
            </div>

            <!-- Project Details -->
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Advanced E-commerce Platform
                </h3>
                <div class="flex space-x-2">
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <ExternalLink
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Full-stack e-commerce solution with modern architecture and
                performance optimization. Features SSR for SEO, PWA
                capabilities, real-time inventory, and payment processing.
              </p>

              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Features
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >95+ Lighthouse Score</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >1000+ Concurrent Users</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >2s Load Time</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >50K+ Products</span
                    >
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-full font-medium transition-colors duration-300"
                  >Nuxt 3</span
                >
                <span
                  class="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-full font-medium transition-colors duration-300"
                  >TypeScript</span
                >
                <span
                  class="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-full font-medium transition-colors duration-300"
                  >Tailwind CSS</span
                >
                <span
                  class="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-full font-medium transition-colors duration-300"
                  >Stripe API</span
                >
                <span
                  class="px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-full font-medium transition-colors duration-300"
                  >Algolia</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 - Vue Component Library -->
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover-lift transition-colors duration-300"
        >
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <!-- Project Details -->
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Vue Component Library
                </h3>
                <div class="flex space-x-2">
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Package
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <BookOpen
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Open-source component library with comprehensive documentation
                and TypeScript support. Features tree-shaking, accessibility
                compliance, and automated testing pipeline.
              </p>

              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Impact & Usage
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >500+ Weekly Downloads</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >10+ Companies Using</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >95% Code Coverage</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >TypeScript Declarations</span
                    >
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Vue 3</span
                >
                <span
                  class="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >TypeScript</span
                >
                <span
                  class="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Rollup</span
                >
                <span
                  class="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Storybook</span
                >
                <span
                  class="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Vitest</span
                >
              </div>
            </div>

            <!-- Project Image/Preview -->
            <div
              class="bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                >
                  <Package :size="32" class="text-white" />
                </div>
                <h4 class="text-2xl font-bold mb-2">Component Library</h4>
                <p class="text-blue-200 text-sm">Open Source Package</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3 - Analytics Dashboard -->
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover-lift transition-colors duration-300"
        >
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <!-- Project Image/Preview -->
            <div
              class="bg-gradient-to-br from-purple-600 to-purple-800 p-12 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm"
                >
                  <BarChart3 :size="32" class="text-white" />
                </div>
                <h4 class="text-2xl font-bold mb-2">Analytics Dashboard</h4>
                <p class="text-purple-200 text-sm">
                  Real-time Data Visualization
                </p>
              </div>
            </div>

            <!-- Project Details -->
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Real-time Analytics Dashboard
                </h3>
                <div class="flex space-x-2">
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <a
                    href="#"
                    class="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <ExternalLink
                      :size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </a>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Complex data visualization platform with real-time updates and
                interactive charts. Optimized for handling large datasets with
                smooth animations and export functionality.
              </p>

              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Performance & Features
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >100K+ Data Points</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >60fps Animations</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >Real-time Updates</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-600 dark:text-gray-400"
                      >Export Functionality</span
                    >
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-purple-600 dark:bg-purple-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Vue 3</span
                >
                <span
                  class="px-3 py-1 bg-purple-600 dark:bg-purple-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >D3.js</span
                >
                <span
                  class="px-3 py-1 bg-purple-600 dark:bg-purple-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >WebSockets</span
                >
                <span
                  class="px-3 py-1 bg-purple-600 dark:bg-purple-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Chart.js</span
                >
                <span
                  class="px-3 py-1 bg-purple-600 dark:bg-purple-700 text-white text-xs rounded-full font-medium transition-colors duration-300"
                  >Pinia</span
                >
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
  },
};
</script>
