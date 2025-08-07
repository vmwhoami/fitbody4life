<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Ask the Assistant</h2>

    <input
      v-model="question"
      type="text"
      placeholder="Type your question..."
      class="w-full p-2 border border-gray-300 rounded mb-2"
    />

    <button
      @click="ask"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Ask
    </button>

    <div v-if="answer" class="mt-4 p-3 border rounded bg-gray-100">
      <strong>Answer:</strong>
      <p>{{ answer }}</p>
    </div>

    <div v-if="loading" class="mt-2 text-gray-500">
      Loading...
    </div>

    <div v-if="error" class="mt-2 text-red-600">
      Error: {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const question = ref('')
const answer = ref('')
const error = ref('')
const loading = ref(false)

const ask = async () => {
  if (!question.value.trim()) return

  loading.value = true
  error.value = ''
  answer.value = ''

  try {
    const res = await $fetch('http://localhost:8000/ask', {
      method: 'POST',
      body: { question: question.value },
    })

    answer.value = res.answer || '(no answer received)'
  } catch (err) {
    error.value = err.message || 'Request failed'
  } finally {
    loading.value = false
  }
}
</script>
