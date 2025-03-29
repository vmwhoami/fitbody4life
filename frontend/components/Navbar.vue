<template>
  <!-- <nav class="fixed top-0 flex w-full items-center 
              justify-center py-2 dark:shadow-black/10 
              lg:flex-wrap lg:py-4">
 
    <router-link to="/" class="flex items-center mr-4">
      <div class="logo-container w-8 h-8">
        <icon-olea-fit-logo></icon-olea-fit-logo>
      </div>
    </router-link>
 
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border 
               border-gray-100 rounded-lg md:space-x-8 md:flex-row 
               md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 
               dark:border-gray-700" >
        <li v-for="(route, index) in routes" :key="index">
          <router-link
            :to="route.path"
            class="block py-2 px-3 text-white rounded-sm md:bg-transparent 
                   md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 
                   md:dark:bg-transparent"
            :aria-current="route.path === '/' ? 'page' : undefined">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav> -->

  <nav class="bg-gray-300 fixed top-0 flex w-full items-center 
              justify-beteen py-3.5 dark:shadow-black/10 
              lg:py-4">

    <div class="md:flex items-center cursor-pointer">
      <span class="bg-reen-500 text-x1 ml-1">
        <icon-olea-fit-logo></icon-olea-fit-logo>
      </span>
    </div>

    <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="(route, index) in routes" :key="index">
          <router-link
            :to="route.path"
            class= "text-xl hover:text-green-500"
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
  { path: '/main', name: 'Main' }
];
</script>