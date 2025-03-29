<template>
  <div class="min-h-screen flex flex-col justify-center 
              px-6 py-12 sm:px-12 lg:px-16 bg-white">
    <!-- Logo / Brand -->
    <div class="mb-8 text-center">
      <img class="h-10 w-auto mx-auto" 
             src="https://via.placeholder.com/150x40?text=Logo"
             alt="Brand Logo"/>
    </div>

    <!-- Title & Subtitle -->
    <h2 class="text-3xl font-bold text-gray-800 text-center">Forgot Your Password?</h2>
    <p class="text-gray-500 text-center mt-2 mb-8">
      Enter your email address below and we'll send you a link to reset your password.
    </p>

    <!-- Password Reset Form -->
    <form class="space-y-6" @submit.prevent="handlePasswordReset">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="block w-full rounded-md border border-gray-300 
                 px-3 py-2 placeholder-gray-400 focus:outline-none
                 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                 text-gray-700"
          placeholder="you@example.com"
        />
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="inline-flex items-center justify-center w-full 
                 rounded-md border border-transparent bg-indigo-600
                 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                 focus:ring-offset-2"
        >
          Send Reset Link
        </button>
      </div>
    </form>

    <!-- Go Back to Login -->
    <p class="mt-6 text-center text-sm text-gray-600">
      Remembered your password?
      <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium">
        Go back to login
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

function handlePasswordReset() {
  // Simulated password reset request logic
  console.log("Password reset link sent to:", email.value);
  alert("If this email exists in our system, a reset link has been sent.");
}
</script>
