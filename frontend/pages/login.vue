<template>
  <div>
    <TemplateNavbar />

    <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      <!-- Left: Illustration -->
      <div class="hidden md:block relative">
        <img class="absolute inset-0 w-full h-full object-cover"
             src="@/assets/images/oleaup.jpeg"
             alt="Login Illustration" />
      </div>

      <!-- Right: Form -->
      <div class="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">

        <!-- Title & Subtitle -->
        <h2 class="text-3xl font-bold text-gray-800 mb-2">
          {{ $t('login.title') }}
        </h2>
        <p class="text-gray-500 mb-2">
          {{ $t('login.subtitle') }}
        </p>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1">
              {{ $t('login.emailLabel') }}
            </label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border 
                    border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500
                     focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('login.emailPlaceholder')"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {{ $t('login.passwordLabel') }}
            </label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('login.passwordPlaceholder')"
            />
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-600">
                {{ $t('login.rememberMe') }}
              </label>
            </div>

            <div class="text-sm">
              <NuxtLink
                to="/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500" >
                {{ $t('login.forgotPassword') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Submit Button -->
          <div>
            <button type="submit"
                    class="inline-flex items-center 
                           justify-center w-full rounded-md border 
                           border-transparent
                           bg-indigo-600 px-4 py-2 text-sm 
                           font-medium text-white hover:bg-indigo-700
                           focus:outline-none focus:ring-2 
                           focus:ring-indigo-500 focus:ring-offset-2">
              {{ $t('login.signIn') }}
            </button>
          </div>
        </form>

        <!-- Sign-up Prompt -->
        <p class="mt-8 text-center text-sm text-gray-600">
          {{ $t('login.noAccount') }}
          <NuxtLink to="/signup"
            class="text-indigo-600 hover:text-indigo-500 font-medium">
            {{ $t('login.signUp') }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TemplateNavbar from '@/components/TemplateNavbar.vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

function handleLogin() {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('Remember Me:', rememberMe.value)
}
</script>
