<template>
  <section class="py-16 bg-[#0d0d0d] text-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-extrabold mb-10 text-center">
        {{ t('faq.heading') || 'Online Personal Training FAQs' }}
      </h2>
      <FaqAccordion :faqs="faqItems" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FaqAccordion from '@/components/FaqAccordion.vue'

const { t } = useI18n()

// Fallback data with all FAQ items
const faqItems = ref([
  {
    question: t('faq.items[0].question') || 'What is online personal training?',
    answer: t('faq.items[0].answer') || "It's remote fitness coaching via video or app."
  },
  {
    question: t('faq.items[1].question') || 'Is online personal training cheaper than in person?',
    answer: t('faq.items[1].answer') || "Usually yes, since there's no travel or gym fee."
  },
  {
    question: t('faq.items[2].question') || 'Is online personal training effective?',
    answer: t('faq.items[2].answer') || 'Absolutely—if you stick to the plan.'
  },
  {
    question: t('faq.items[3].question') || 'How often would I train with online personal training?',
    answer: t('faq.items[3].answer') || 'Typically 3–5 times per week.'
  },
  {
    question: t('faq.items[4].question') || 'Is an online personal trainer worth it?',
    answer: t('faq.items[4].answer') || "If you're self-motivated but want expert guidance—yes."
  },
  {
    question: t('faq.items[5].question') || 'How long is an online personal training course?',
    answer: t('faq.items[5].answer') || 'Depends on your goals—can range from 4 to 12+ weeks.'
  }
])
</script>