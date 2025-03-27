<template>
  <main>
    <h1>Index Page</h1>

    <table class="table-auto"></table>
  </main>
</template>
<script setup>
const { data } = await useFetch("/api/tickers/?limit=10");
</script>
