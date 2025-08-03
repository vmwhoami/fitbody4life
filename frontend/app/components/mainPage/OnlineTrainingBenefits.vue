<template>
  <section class="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-12 text-center">
        Why Train Online?
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="bg-gray-50 p-6 shadow hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li v-for="(point, idx) in benefit.points" :key="idx">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Unmatched Convenience & Flexibility',
    points: [
      'Train anytime, anywhere – no commute',
      '24/7 access for travelers & parents',
      'Save 3–5 hours weekly on travel',
    ],
  },
  {
    title: 'Personalized Experience',
    points: [
      'Custom programs for your goals & gear',
      'Live feedback and form corrections',
      'Adaptive training as you progress',
    ],
  },
  {
    title: 'Cost-Effectiveness',
    points: [
      'No gym fees – save $40–$200/month',
      'Cheaper than in-person sessions',
      'Use everyday items as workout gear',
    ],
  },
  {
    title: 'Enhanced Privacy & Comfort',
    points: [
      'Train where you feel safest',
      'No gym intimidation or judgment',
      'Wear whatever makes you confident',
    ],
  },
  {
    title: 'Technology-Enhanced Training',
    points: [
      'Screen sharing & demos',
      'Session recordings for review',
      'Track with Fitbit or Apple Watch',
    ],
  },
  {
    title: 'Broader Specialist Access',
    points: [
      'Connect with niche experts globally',
      'Switch trainers anytime',
      'Access yoga, HIIT, rehab & more',
    ],
  },
  {
    title: 'Accountability & Consistency',
    points: [
      'Set sessions in your calendar',
      'Message-based check-ins',
      'Track progress digitally',
    ],
  },
  {
    title: 'Home Advantage',
    points: [
      'Train with family or pets around',
      'No gym showers or waiting',
      'Use your own space comfortably',
    ],
  },
  {
    title: 'Safety & Health Benefits',
    points: [
      'Pandemic-proof workouts',
      'Lower risk of injuries at home',
      'Great for immunocompromised users',
    ],
  },
  {
    title: 'Environmental Impact',
    points: [
      'No commute = lower carbon footprint',
      'No gym power usage',
      'Sustainable fitness solution',
    ],
  },
  {
    title: 'Holistic Wellness Integration',
    points: [
      'Nutrition coaching via apps',
      'Meditation & yoga options',
      'Sleep/stress tracking tools',
    ],
  },
  {
    title: 'Community & Social Features',
    points: [
      'Join virtual group classes',
      'Access support communities',
      'Workout with friends remotely',
    ],
  },
];
</script>
