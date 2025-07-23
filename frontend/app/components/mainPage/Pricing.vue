<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Investment in Transformation</h2>
      <p class="text-gray-700 mb-8 max-w-2xl">
        Personalized, expert-led coaching tailored to you. Every session designed for real change.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <PricingCard
          v-for="(plan, index) in pricingPlans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :cta="plan.cta"
          :highlight="plan.highlight"
          @click="handlePlanSelect(plan)"
        />
      </div>

      <div class="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">All plans include:</h3>
        <ul class="space-y-3">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-start"
          >
            <CheckCircleIcon class="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <p class="text-amber-700 italic">
          <InformationCircleIcon class="h-5 w-5 inline-block mr-1 -mt-1" />
          Payment plans available for packages over $500
        </p>
      </div>

      <FaqAccordion :faqs="faqs" class="mt-10" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PricingCard from '@/components/PricingCard.vue';
import FaqAccordion from '@/components/FaqAccordion.vue';
// never mind the heroicons import per your request
// import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/outline';

const pricingPlans = ref([
  {
    title: "VIP Transformation",
    description: "10 sessions, priority support & holistic coaching",
    price: 950,
    cta: "Book Free Consultation",
    highlight: true
  },
  {
    title: "Standard Package",
    description: "5 sessions with full access & feedback",
    price: 475,
    cta: "Book Free Consultation",
    highlight: false
  },
  {
    title: "Single Session",
    description: "One 60‑minute one-on-one session",
    price: 100,
    cta: "Book Session",
    highlight: false
  }
]);

const features = ref([
  "One‑on‑One coaching tailored to YOUR life & goals",
  "Proven transformation formula with dance‑based training",
  "Certified trainer (YMCA Level 3, UK regulated)",
  "Direct support via chat, email & session feedback",
  "Flexible scheduling & global availability"
]);

const faqs = ref([
  { 
    question: 'Why is one session $100?', 
    answer: 'This reflects premium expertise, certification, and personalized care.' 
  },
  { 
    question: 'Can I train remotely?', 
    answer: 'Absolutely—online sessions, travel-inclusive options, or hybrid coaching available.' 
  },
  { 
    question: 'Are discounts available?', 
    answer: 'I occasionally run bundles and referral offers—best to discuss on a free consult.' 
  }
]);

function handlePlanSelect(plan) {
  console.log(`Selected plan: ${plan.title}`);
  // TODO: implement your booking logic (e.g. open modal, navigate, etc.)
}
</script>
