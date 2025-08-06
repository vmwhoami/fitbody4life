<template>
  <section class="bg-gray py-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-center mb-8">
        {{ t('onlineTrainingChallenges.heading') }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, i) in challenges"
          :key="i"
          class="group perspective">
          <div class="relative w-full preserve-3d 
                      group-hover:rotate-y-180
                      transition-transform duration-700 
                      min-h-[300px] sm:min-h-[350px]">
            
            <!-- front -->
            <div class="absolute inset-0 bg-white
                         shadow p-6 flex
                         flex-col justify-center">
              <h3 class="text-2xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-red-600 font-medium">{{ item.problem }}</p>
              <span class="mt-auto text-gray-400 text-sm">
                {{ t('onlineTrainingChallenges.hoverHint') }}
              </span>
            </div>
            
            <!-- back -->
            <div class="absolute inset-0 bg-white
                        shadow p-6 
                        rotate-y-180 backface-hidden">
              <h3 class="text-2xl font-semibold mb-2">
                {{ t('onlineTrainingChallenges.solutionLabel') }}
              </h3>
              <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li v-for="(sol, idx) in item.solutions" :key="idx">
                  {{ sol }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const challenges = ref([
  {
    title: t('onlineTrainingChallenges.challenges[0].title'),
    problem: t('onlineTrainingChallenges.challenges[0].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[0].solutions[0]'),
      t('onlineTrainingChallenges.challenges[0].solutions[1]'),
      t('onlineTrainingChallenges.challenges[0].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[1].title'),
    problem: t('onlineTrainingChallenges.challenges[1].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[1].solutions[0]'),
      t('onlineTrainingChallenges.challenges[1].solutions[1]'),
      t('onlineTrainingChallenges.challenges[1].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[2].title'),
    problem: t('onlineTrainingChallenges.challenges[2].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[2].solutions[0]'),
      t('onlineTrainingChallenges.challenges[2].solutions[1]'),
      t('onlineTrainingChallenges.challenges[2].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[3].title'),
    problem: t('onlineTrainingChallenges.challenges[3].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[3].solutions[0]'),
      t('onlineTrainingChallenges.challenges[3].solutions[1]'),
      t('onlineTrainingChallenges.challenges[3].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[4].title'),
    problem: t('onlineTrainingChallenges.challenges[4].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[4].solutions[0]'),
      t('onlineTrainingChallenges.challenges[4].solutions[1]'),
      t('onlineTrainingChallenges.challenges[4].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[5].title'),
    problem: t('onlineTrainingChallenges.challenges[5].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[5].solutions[0]'),
      t('onlineTrainingChallenges.challenges[5].solutions[1]'),
      t('onlineTrainingChallenges.challenges[5].solutions[2]'),
    ],
  },
  {
    title: t('onlineTrainingChallenges.challenges[6].title'),
    problem: t('onlineTrainingChallenges.challenges[6].problem'),
    solutions: [
      t('onlineTrainingChallenges.challenges[6].solutions[0]'),
      t('onlineTrainingChallenges.challenges[6].solutions[1]'),
      t('onlineTrainingChallenges.challenges[6].solutions[2]'),
    ],
  },
])
</script>

<style>
.perspective { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.rotate-y-180 { transform: rotateY(180deg); }
.backface-hidden { backface-visibility: hidden; }
</style>