<template>
  <main>
    <Navbar />
    <IntroMain />
    <TrainingPrograms />
    <AboutSection />
    <GroupClass />
    <TrainerPostSection />
    <PersonalShop />
    <ClientSay />
    <PersonalApp />
    <Footer />
  </main>
</template>
<script setup>
import Navbar from "~/components/Navbar.vue";
import IntroMain from "~/components/mainPage/IntroMain";
import TrainingPrograms from "~/components/mainPage/TrainingPrograms";
import AboutSection from "~/components/mainPage/AboutSection.vue";
import GroupClass from "~/components/mainPage/AboutSection.vue";
import TrainerPostSection from "~/components/mainPage/TrainerPostSection.vue";
import PersonalShop from "~/components/mainPage/PersonalShop.vue";
import ClientSay from "~/components/mainPage/ClientSay.vue";
import PersonalApp from "~/components/mainPage/PersonalApp.vue";
import Footer from "~/components/Footer.vue";
const { data } = await useFetch("/api/tickers/?limit=10");
</script>
