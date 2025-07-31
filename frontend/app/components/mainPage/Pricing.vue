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

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PricingCard from '@/components/PricingCard.vue';


const pricingPlans = ref([
  { key: 'vip', highlight: true },
  { key: 'standard', highlight: false },
  { key: 'single', highlight: false }
]);

 function handlePlanSelect(plan) {
  window.open("https://calendly.com/olenikamv", "_blank");
console.log(`Selected plan: ${plan}`);
}
</script>
