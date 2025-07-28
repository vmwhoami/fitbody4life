<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        {{ $t('prePricing.heading') }}
      </h2>
      <p class="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
         {{ $t('prePricing.subheading') }}
      </p>

      <div class="grid md:grid-cols-3 gap-8">
      <PricingCard v-for="plan in pricingPlans"
                  :key="plan.key"
                  :title="$t(`pricing.cards.${plan.key}.title`)"
                  :description="$t(`pricing.cards.${plan.key}.description`)"
                  :price="$t(`pricing.cards.${plan.key}.price`)"
                  :cta="$t(`pricing.cards.${plan.key}.cta`)"
                  :highlight="plan.highlight"
                  @click="handlePlanSelect(plan.key)"/>

      </div>

      <div class="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">All plans include:</h3>
        <ul class="space-y-3">
          <li v-for="(feature, index) in features"
              :key="index"
              class="flex items-start">
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <FaqAccordion :faqs="faqs" class="mt-10" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PricingCard from '@/components/PricingCard.vue';
import FaqAccordion from '@/components/FaqAccordion.vue';
 

const pricingPlans = ref([
  { key: 'vip', highlight: true },
  { key: 'standard', highlight: false },
  { key: 'single', highlight: false }
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

console.log(`Selected plan: ${plan}`);
}
</script>
