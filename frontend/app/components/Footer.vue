<template>
  <footer class="bg-white border-t border-gray-200 py-6">
    <div class="container mx-auto px-6 text-center">
      <ul class="flex justify-center space-x-4 mb-4 text-gray-600 text-sm md:text-base">
        <li><NuxtLink to="/" class="hover:text-gray-900">Home Page</NuxtLink></li>
      <li>
        <NuxtLink href="https://vmwhoami.github.io/fitbody4life-policy/privacy.html"
                  target="_blank"
                  rel="noopener"
                  class="hover:text-gray-900">
            Privacy Policy
        </NuxtLink>
      </li>
      </ul>
      <p class="text-gray-500 text-sm">
        &copy;vmwhoami {{ currentYerar }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYerar = new Date().getFullYear();
</script>
