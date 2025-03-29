<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
    <!-- Logo / Header (optional) -->
    <div class="mb-8">
      <img class="h-10 w-auto"
        src="https://via.placeholder.com/150x40?text=Logo"
        alt="Brand Logo"/>
    </div>

    <h1 class="text-3xl font-extrabold text-gray-900 mb-4">You have been logged out</h1>
    <p class="text-gray-600 mb-8">
      Thanks for stopping by. We hope to see you again soon!
    </p>

    <NuxtLink
      to="/login"
      class="inline-flex items-center justify-center 
             rounded-md border border-transparent bg-indigo-600 
             px-4 py-2 text-sm font-medium text-white 
             hover:bg-indigo-700 focus:outline-none 
             focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      Log in again
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "LogoutPage",
};
</script>
 