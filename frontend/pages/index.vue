<template>
  <div>
    <Navbar />
    <TemplateNavbar/>
    <IntroMain />
    <TrainingPrograms />
    <AboutSection />
    <GroupClass />
    <TrainerPostSection />
    <PersonalShop />
    <Testimonials />
    <PersonalApp />
    <Footer />
  
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import IntroMain from "@/components/mainPage/IntroMain";
import TrainingPrograms from "@/components/mainPage/TrainingPrograms";
import AboutSection from "@/components/mainPage/AboutSection.vue";
import TrainerPostSection from "@/components/mainPage/TrainerPostSection.vue";
import PersonalShop from "@/components/mainPage/PersonalShop.vue";
import Testimonials from "@/components/mainPage/Testimonials.vue";
import PersonalApp from "@/components/mainPage/PersonalApp.vue";
import Footer from "@/components/Footer.vue";
 import TemplateNavbar from "~/components/TemplateNavbar.vue";
</script>
