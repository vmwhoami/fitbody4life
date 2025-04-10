<template>
  <section>
    <TemplateNavbar />
    <IntroMain />
    <TrainingPrograms />
    <AboutSection />
    <ImageCarousel />
    <GroupClass />
    <TrainerPostSection />
    <PersonalShop />
    <Testimonials />
    <PersonalApp />
    <Footer />
  </section>
</template>
<script setup>
import TemplateNavbar from "@/components/TemplateNavbar.vue";
import IntroMain from "@/components/mainPage/IntroMain";
import TrainingPrograms from "@/components/mainPage/TrainingPrograms";
import AboutSection from "@/components/mainPage/AboutSection.vue";
import ImageCarousel from "@/components/mainPage/ImageCarousel.vue";
import GroupClass from "@/components/mainPage/GroupClass.vue";
import TrainerPostSection from "@/components/mainPage/TrainerPostSection.vue";
import PersonalShop from "@/components/mainPage/PersonalShop.vue";
import Testimonials from "@/components/mainPage/Testimonials.vue";
import PersonalApp from "@/components/mainPage/PersonalApp.vue";
import Footer from "@/components/Footer.vue";
</script>
