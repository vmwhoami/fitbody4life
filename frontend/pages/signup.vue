<template>
  <div>
    <TemplateNavbar/>

    <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      <!-- Illustration -->
      <div class="hidden md:block relative">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="@/assets/images/oleaup.jpeg"
          alt="Registration Illustration"
        />
      </div>

      <!-- Form -->
      <div class="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <!-- Title & Subtitle -->
        <h2 class="text-3xl font-bold text-gray-800 mb-2">
          {{ $t('register.title') }}
        </h2>
        <p class="text-gray-500 mb-8">
          {{ $t('register.subtitle') }}
        </p>

        <!-- Registration Form -->
        <form class="space-y-6" @submit.prevent="handleRegister">
          <!-- Name -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {{ $t('register.nameLabel') }}
            </label>
            <input
              v-model="name"
              id="name"
              name="name"
              type="text"
              required
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('register.namePlaceholder')"
            />
          </div>

          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {{ $t('register.emailLabel') }}
            </label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('register.emailPlaceholder')"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {{ $t('register.passwordLabel') }}
            </label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('register.passwordPlaceholder')"
            />
          </div>

          <!-- Confirm Password -->
          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              {{ $t('register.confirmPasswordLabel') }}
            </label>
            <input
              v-model="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     text-gray-700"
              :placeholder="$t('register.confirmPasswordPlaceholder')"
            />
          </div>

          <!-- Terms -->
          <div class="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              v-model="acceptTerms"
              required
              class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-600">
              {{ $t('register.termsPrefix') }}
              <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">
                {{ $t('register.termsLink') }}
              </a>
            </label>
          </div>

          <!-- Submit -->
          <div>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full rounded-md border border-transparent
                     bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {{ $t('register.submit') }}
            </button>
          </div>
        </form>

        <!-- Login Prompt -->
        <p class="mt-8 text-center text-sm text-gray-600">
          {{ $t('register.alreadyHave') }}
          <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium">
            {{ $t('register.loginLink') }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TemplateNavbar from '@/components/TemplateNavbar.vue'

const { t } = useI18n()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)

function handleRegister() {
  if (password.value !== confirmPassword.value) {
    alert(t('register.passwordMismatch'))
    return
  }

  // …your registration logic…
  console.log('Registering:', { name: name.value, email: email.value })
  alert(t('register.success'))
}
</script>
