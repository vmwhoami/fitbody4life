<template>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Training Programs we offer for you.</h2>
      <p class="text-gray-600 mb-8">
        Starting a fitness routine can be intimidating, but it helps to have an idea of what to
        expect before joining any class.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div
          class="flex justify-center items-center bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
        >
          <div class="mb-4">
            <IconPrivateLesson />
          </div>
          <h3 class="text-xl font-semibold mb-2">Private Session</h3>
          <p class="text-gray-600">
            My creative personal training program where all bodies can move.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="flex justify-center items-center bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
        >
          <div class="mb-4">
            <IconDumbelPose />
          </div>
          <h3 class="text-xl font-semibold mb-2">Group Class</h3>
          <p class="text-gray-600">We offer an array of different group fitness class types.</p>
        </div>

        <!-- Card 3 -->
        <div
          class="flex justify-center items-center bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
        >
          <div class="mb-4">
            <IconProgramDiet />
          </div>
          <h3 class="text-xl font-semibold mb-2">Program & Diet</h3>
          <p class="text-gray-600">You need to begin thinking of the amount of protein.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  //TrainingPrograms

  import IconPrivateLesson from '~/assets/icons/IconPrivateLesson.vue'
  import IconProgramDiet from '~/assets/icons/IconProgramDiet.vue'
  import IconDumbelPose from '~/assets/icons/IconDumbelPose.vue'
</script>
