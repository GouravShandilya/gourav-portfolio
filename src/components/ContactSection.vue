<template>
  <section
    id="contact"
    class="section-padding bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div data-aos="fade-up" class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Let's Work Together</h2>
        <div
          class="w-24 h-1 bg-white dark:bg-gray-100 rounded-full mx-auto mb-6"
        ></div>
        <p class="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can create
          something amazing together.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Information -->
        <div data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-8">Get In Touch</h3>

          <!-- Contact Items -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
              >
                <Mail :size="24" class="text-white dark:text-gray-100" />
              </div>
              <div>
                <p class="text-gray-300 dark:text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:shandilya669@gmail.com"
                  class="text-white dark:text-gray-100 font-semibold hover:text-gray-300 dark:hover:text-gray-300 transition-colors"
                >
                  shandilya669@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
              >
                <Phone :size="24" class="text-white dark:text-gray-100" />
              </div>
              <div>
                <p class="text-gray-300 dark:text-gray-400 text-sm">Phone</p>
                <a
                  href="tel:+918178346590"
                  class="text-white dark:text-gray-100 font-semibold hover:text-gray-300 dark:hover:text-gray-300 transition-colors"
                >
                  +91-8178346590
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
              >
                <MapPin :size="24" class="text-white dark:text-gray-100" />
              </div>
              <div>
                <p class="text-gray-300 dark:text-gray-400 text-sm">Location</p>
                <p class="text-white dark:text-gray-100 font-semibold">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-12">
            <h4 class="text-lg font-semibold mb-6">Follow Me</h4>
            <div class="flex space-x-4">
              <a
                href="https://linkedin.com/in/gourav-kumar-19111b279"
                target="_blank"
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <Linkedin :size="24" class="text-white dark:text-gray-100" />
              </a>
              <a
                href="https://github.com/gouravshandilya"
                target="_blank"
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <Github :size="24" class="text-white dark:text-gray-100" />
              </a>
              <a
                href="#"
                target="_blank"
                class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <ExternalLink
                  :size="24"
                  class="text-white dark:text-gray-100"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          data-aos="fade-left"
          class="bg-white/5 dark:bg-white/10 rounded-2xl p-8 backdrop-blur-sm transition-colors duration-300"
        >
          <h3 class="text-2xl font-bold mb-6">Send Message</h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 dark:focus:border-white/50 transition-colors backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 dark:focus:border-white/50 transition-colors backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 dark:focus:border-white/50 transition-colors backdrop-blur-sm"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 dark:focus:border-white/50 transition-colors backdrop-blur-sm resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-950 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-vue-next";

export default {
  name: "ContactSection",
  components: {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    ExternalLink,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;

      // Simulate form submission
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically send the form data to your backend
        console.log("Form submitted:", this.form);

        // Reset form
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };

        alert("Message sent successfully! I'll get back to you soon.");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error sending message. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
