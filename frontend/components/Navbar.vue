<template>
  <nav class="bg-blue-300 fixed top-0 flex w-full
              py-3.5 lg:py-4">

    <div class="flex items-center cursor-pointer">
      <span class="bg-reen-500 text-x1 mr-1">
        <icon-olea-fit-logo></icon-olea-fit-logo>
      </span>
    </div>
    
    <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10" >
      <li class="md:mx-4" v-for="(route, index) in routes" :key="index">
          <router-link
            :to="route.path"
            class= "text-xl hover:text-indigo-500"
            :aria-current="route.path === '/' ? 'page' : undefined">
            {{ route.name }}
          </router-link>
        </li>
    </ul>
  </nav>
  
</template>

<script setup>
import IconOleaFitLogo from '@/assets/icons/IconOleaFitLogo.vue';
const routes = [
  { path: '/', name: 'Home' },
  { path: '/login', name: 'Login' },
  { path: '/signup', name: 'SignUp' }
];
</script>