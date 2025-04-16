<template>
  <nav class="bg-gray-800 fixed top-0 inset-x-0 z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
        <div class="flex flex-1 items-center
                    justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <span class="bg-reen-500 text-x1 mr-1">
              <NuxtLink to="/">
                <icon-olea-fit-logo></icon-olea-fit-logo>
               </NuxtLink>
            </span>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white':
                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',]">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex 
                    items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <button type="button" class="p-1 text-gray-400 hover:text-white">🔔</button> -->

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <button @click="isProfileOpen = !isProfileOpen" class="flex text-sm">
              <!-- <img class="size-8 rounded-full"
                   :src="myImage"/> -->
            </button>
            <div v-if="isProfileOpen"
              class="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 
                                 hover:bg-gray-100" >Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm 
                                text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 
                                hover:bg-gray-100">Sign out</a
              >
            </div>
          </div>
          <LanguageSwitcher/>
          <button @click="themeStore.toggleTheme">
             Switch to {{ themeStore.currentTheme === 'light' ? 'dark' : 'light' }} mode
          </button>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a v-for="item in navigation" :key="item.name" :href="item.href" 
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]">
          {{ item.name }}
        </a>
      </div>
      
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import IconOleaFitLogo from "@/assets/icons/IconOleaFitLogo.vue";
// import myImage from '@/assets/images/interviewsPhotosmall.jpg';
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()
const navigation = [
  { path: '/', href: "/",name: 'Home' },
  { path: '/login', href: "/login",name: 'Login' },
  { path: '/signup',href: "/signup", name: 'SignUp' }
  // { name: "Dashboard", href: "#", current: true },
  // { name: "Team", href: "#", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

const isMobileMenuOpen = ref(false);
const isProfileOpen = ref(false);
</script>
