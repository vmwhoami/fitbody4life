<template>
  <section>
    <TemplateNavbar />
    <IntroMain />
    <Certificates />
    <AboutSection />
    <TrainerPostSection />
    <Testimonials />
    <Footer />
    <!-- <TrainingPrograms /> -->
    <!-- <ImageCarousel /> -->
    <!-- <GroupClass /> -->
    <!-- <PersonalShop /> -->
    <!-- <PersonalApp /> -->
  </section>
</template>
<script setup>
import TemplateNavbar from "@/components/TemplateNavbar.vue";
import IntroMain from "@/components/mainPage/IntroMain";
import Certificates from "@/components/mainPage/Certificates";
import AboutSection from "@/components/mainPage/AboutSection.vue";
import TrainerPostSection from "@/components/mainPage/TrainerPostSection.vue";
import Testimonials from "@/components/mainPage/Testimonials.vue";
import Footer from "@/components/Footer.vue";
import TrainingPrograms from "@/components/mainPage/TrainingPrograms";
import ImageCarousel from "@/components/mainPage/ImageCarousel.vue";
import GroupClass from "@/components/mainPage/GroupClass.vue";
import PersonalShop from "@/components/mainPage/PersonalShop.vue";
import PersonalApp from "@/components/mainPage/PersonalApp.vue";
</script>
