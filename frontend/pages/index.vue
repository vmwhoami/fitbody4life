<template>
  <main>
    <Navbar/>
 

    
  </main>
</template>
<script setup>
import Navbar from '~/components/Navbar.vue';
const { data } = await useFetch("/api/tickers/?limit=10");
</script>
