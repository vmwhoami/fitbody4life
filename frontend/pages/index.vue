<template>
  <main>
    <Navbar/>
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
import Navbar from '~/components/Navbar.vue';
import IntroMain from '~/components/mainPage/IntroMain'
 
import TrainingPrograms from '~/components/mainPage/TrainingPrograms';
import AboutSection from '~/components/mainPage/AboutSection.vue';
const { data } = await useFetch("/api/tickers/?limit=10");
</script>
