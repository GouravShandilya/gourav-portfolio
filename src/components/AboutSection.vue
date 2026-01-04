<template>
  <section
    id="about"
    class="section-padding bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Image/Visual -->
        <div data-aos="fade-right" class="relative">
          <div
            class="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-white relative overflow-hidden transition-colors duration-300"
          >
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div
                class="absolute inset-0"
                style="
                  background-image: linear-gradient(
                      45deg,
                      transparent 49%,
                      white 49%,
                      white 51%,
                      transparent 51%
                    ),
                    linear-gradient(
                      -45deg,
                      transparent 49%,
                      white 49%,
                      white 51%,
                      transparent 51%
                    );
                  background-size: 20px 20px;
                "
              ></div>
            </div>

            <div class="relative z-10">
              <h3 class="text-2xl font-bold mb-4">Technical Expertise</h3>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 class="font-semibold mb-2 text-gray-300">Frontend</h4>
                  <ul class="space-y-1 text-gray-400">
                    <li>Vue.js 2/3</li>
                    <li>Nuxt.js 2/3</li>
                    <li>React.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2 text-gray-300">Tools</h4>
                  <ul class="space-y-1 text-gray-400">
                    <li>Vite & Webpack</li>
                    <li>Docker</li>
                    <li>Jest & Cypress</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div data-aos="fade-left" class="space-y-6">
          <div>
            <h2
              class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              About Me
            </h2>
            <div
              class="w-24 h-1 bg-black dark:bg-white rounded-full mb-6"
            ></div>
          </div>

          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a results-driven Senior Frontend Developer with 2+ years of
            expertise in building scalable, high-performance web applications
            using the Vue.js ecosystem. Based in Delhi, India, I specialize in
            creating pixel-perfect, responsive designs that serve thousands of
            daily users.
          </p>

          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            My passion lies in clean code architecture, performance
            optimization, and mentoring junior developers. I've successfully
            improved application performance by 40% and led frontend
            architecture decisions for platforms serving 5,000+ users.
          </p>

          <!-- Key Achievements -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Key Achievements
            </h3>
            <div class="grid gap-3">
              <div class="flex items-start space-x-3">
                <div
                  class="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"
                ></div>
                <p class="text-gray-600 dark:text-gray-400">
                  Optimized application bundle size by 35% and improved Core Web
                  Vitals scores from 65 to 90+
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"
                ></div>
                <p class="text-gray-600 dark:text-gray-400">
                  Redesigned property visualization interface, increasing user
                  engagement by 25%
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div
                  class="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"
                ></div>
                <p class="text-gray-600 dark:text-gray-400">
                  Built Vue component library with 500+ weekly downloads, used
                  by 10+ companies
                </p>
              </div>
            </div>
          </div>

          <!-- Personal Info -->
          <div
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 transition-colors duration-300"
          >
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="font-semibold text-gray-900 dark:text-gray-100"
                  >Location:</span
                >
                <span class="text-gray-600 dark:text-gray-400 ml-2"
                  >Delhi, India</span
                >
              </div>
              <div>
                <span class="font-semibold text-gray-900 dark:text-gray-100"
                  >Languages:</span
                >
                <span class="text-gray-600 dark:text-gray-400 ml-2"
                  >English, Hindi</span
                >
              </div>
              <div>
                <span class="font-semibold text-gray-900 dark:text-gray-100"
                  >Education:</span
                >
                <span class="text-gray-600 dark:text-gray-400 ml-2"
                  >BCA (2024)</span
                >
              </div>
              <div>
                <span class="font-semibold text-gray-900 dark:text-gray-100"
                  >Open Source:</span
                >
                <span class="text-gray-600 dark:text-gray-400 ml-2"
                  >Active Contributor</span
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
export default {
  name: "AboutSection",
};
</script>
