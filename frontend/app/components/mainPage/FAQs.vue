<template>
  <section class="py-16 bg-[#0d0d0d] text-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-extrabold mb-10 text-center">
        {{ t('faq.heading') }}
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
    question: t('faq.items[0].question'),
    answer: t('faq.items[0].answer'),
  },
  {
    question: t('faq.items[1].question'),
    answer: t('faq.items[1].answer'),
  },
  {
    question: t('faq.items[2].question'),
    answer: t('faq.items[2].answer'),
  },
  {
    question: t('faq.items[3].question'),
    answer: t('faq.items[3].answer'),
  },
  {
    question: t('faq.items[4].question'),
    answer: t('faq.items[4].answer'),
  },
  {
    question: t('faq.items[5].question'),
    answer: t('faq.items[5].answer'),
  },
  {
    question: t('faq.items[6].question'),
    answer: t('faq.items[6].answer'),
  },
  {
    question: t('faq.items[7].question'),
    answer: t('faq.items[7].answer'),
  },
  {
    question: t('faq.items[8].question'),
    answer: t('faq.items[8].answer'),
  },
])
</script>
