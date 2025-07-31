<template>
  <section class="py-16 bg-[#0d0d0d] text-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-extrabold mb-10 text-center">Online Personal Training FAQs</h2>
      <FaqAccordion :faqs="faqs" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FaqAccordion from '@/components/FaqAccordion.vue'

const faqs = ref([
  { question: 'What is online personal training?', answer: 'It’s remote fitness coaching via video or app.' },
  { question: 'Is online personal training cheaper than in person?', answer: 'Usually yes, since there’s no travel or gym fee.' },
  { question: 'Is online personal training effective?', answer: 'Absolutely—if you stick to the plan.' },
  { question: 'How often would I train with online personal training?', answer: 'Typically 3–5 times per week.' },
  { question: 'Is an online personal trainer worth it?', answer: 'If you’re self-motivated but want expert guidance—yes.' },
  { question: 'How long is an online personal training course?', answer: 'Depends on your goals—can range from 4 to 12+ weeks.' }
])
</script>
