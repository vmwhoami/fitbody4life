<template>
  <div>
    <TemplateNavbar/>

  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">

    <!-- Left side: Image / Illustration (hidden on smaller screens) -->
    <div class="hidden md:block relative">
      <img
        class="absolute inset-0 w-full h-full object-cover"
        src="@/assets/images/oleaup.jpeg"
        alt="Registration Illustration"
      />
    </div>

    <!-- Right side: Form -->
    <div class="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
      <!-- Logo / Brand area (optional) -->
      <div class="mb-8">
        <img
          class="h-10 w-auto"
          src="https://via.placeholder.com/150x40?text=Logo"
          alt="Brand Logo"
        />
      </div>

      <!-- Title & Subtitle -->
      <h2 class="text-3xl font-bold text-gray-800 mb-2">
        Create an Account
      </h2>
      <p class="text-gray-500 mb-8">
        Sign up to get started.
      </p>

      <!-- Registration Form -->
      <form class="space-y-6" @submit.prevent="handleRegister">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Full Name
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
            placeholder="Your full name" />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email Address
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
            placeholder="you@example.com"
          />
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Password
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
            placeholder="••••••••"
          />
        </div>

        <!-- Confirm Password Field -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
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
            placeholder="••••••••"
          />
        </div>

        <!-- Terms & Conditions Checkbox -->
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
            I agree to the
            <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">
              Terms and Conditions
            </a>
          </label>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="inline-flex items-center justify-center w-full rounded-md border border-transparent
                   bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </div>
      </form>

      <!-- Extra links / login prompt -->
      <p class="mt-8 text-center text-sm text-gray-600">
        Already have an account?
        <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium">
          Log in
        </NuxtLink>
      </p>
    </div>
  </div>
</div> 
</template>

<script>
  import TemplateNavbar from '@/components/TemplateNavbar.vue';
export default {
  name: 'RegisterPage',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    };
  },
  methods: {
    handleRegister() {
      // Basic password match check
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Registration logic goes here.
      // For example, send a request to your API and create the new user.
      console.log('Registering user:', {
        name: this.name,
        email: this.email,
        password: this.password,
        acceptTerms: this.acceptTerms,
      });
      alert("Registration successful! You can now log in.");
    },
  },
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
