<template>
  <div>
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    FooterSection,
  },
};
</script>
