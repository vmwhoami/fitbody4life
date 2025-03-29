<template>
  <nav class="fixed top-0 flex w-full items-center 
              justify-center py-2 dark:shadow-black/10 
              lg:flex-wrap lg:py-4">
    <!-- Logo Link -->
    <router-link
      to="/"
      class="flex items-center mr-4"
    >
      <div class="logo-container w-8 h-8">
        <!-- Add your SVG here -->
        <svg
          class="text-white fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Your logo path goes here -->
          <path
            d="M12 0L8 8H16L12 0ZM12 24L16 16H8L12 24ZM24 12L16 8V16L24 12ZM0 12L8 16V8L0 12Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </router-link>

    <!-- Navigation Items -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border 
               border-gray-100 rounded-lg md:space-x-8 md:flex-row 
               md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 
               dark:border-gray-700"
      >
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
  </nav>
</template>

<script setup>
const routes = [
  { path: '/', name: 'Home' },
  { path: '/login', name: 'Login' },
  { path: '/main', name: 'Main' }
];
</script>