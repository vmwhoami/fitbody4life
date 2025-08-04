<template>
  <section class="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-12 text-center">
        {{ t('whyTrainOnline.question') }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(benefit, index) in benefits"
             :key="index"
             class="bg-gray-50 p-6 shadow hover:shadow-md transition">
          <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li v-for="(point, idx) in benefit.points" :key="idx">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const benefits = ref([
  {
    title: t('whyTrainOnline.benefits[0].title'),
    points: [
      t('whyTrainOnline.benefits[0].points[0]'),
      t('whyTrainOnline.benefits[0].points[1]'),
      t('whyTrainOnline.benefits[0].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[1].title'),
    points: [
      t('whyTrainOnline.benefits[1].points[0]'),
      t('whyTrainOnline.benefits[1].points[1]'),
      t('whyTrainOnline.benefits[1].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[2].title'),
    points: [
      t('whyTrainOnline.benefits[2].points[0]'),
      t('whyTrainOnline.benefits[2].points[1]'),
      t('whyTrainOnline.benefits[2].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[3].title'),
    points: [
      t('whyTrainOnline.benefits[3].points[0]'),
      t('whyTrainOnline.benefits[3].points[1]'),
      t('whyTrainOnline.benefits[3].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[4].title'),
    points: [
      t('whyTrainOnline.benefits[4].points[0]'),
      t('whyTrainOnline.benefits[4].points[1]'),
      t('whyTrainOnline.benefits[4].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[5].title'),
    points: [
      t('whyTrainOnline.benefits[5].points[0]'),
      t('whyTrainOnline.benefits[5].points[1]'),
      t('whyTrainOnline.benefits[5].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[6].title'),
    points: [
      t('whyTrainOnline.benefits[6].points[0]'),
      t('whyTrainOnline.benefits[6].points[1]'),
      t('whyTrainOnline.benefits[6].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[7].title'),
    points: [
      t('whyTrainOnline.benefits[7].points[0]'),
      t('whyTrainOnline.benefits[7].points[1]'),
      t('whyTrainOnline.benefits[7].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[8].title'),
    points: [
      t('whyTrainOnline.benefits[8].points[0]'),
      t('whyTrainOnline.benefits[8].points[1]'),
      t('whyTrainOnline.benefits[8].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[9].title'),
    points: [
      t('whyTrainOnline.benefits[9].points[0]'),
      t('whyTrainOnline.benefits[9].points[1]'),
      t('whyTrainOnline.benefits[9].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[10].title'),
    points: [
      t('whyTrainOnline.benefits[10].points[0]'),
      t('whyTrainOnline.benefits[10].points[1]'),
      t('whyTrainOnline.benefits[10].points[2]'),
    ],
  },
  {
    title: t('whyTrainOnline.benefits[11].title'),
    points: [
      t('whyTrainOnline.benefits[11].points[0]'),
      t('whyTrainOnline.benefits[11].points[1]'),
      t('whyTrainOnline.benefits[11].points[2]'),
    ],
  },
])
</script>