<template>
  <div class="fixed bottom-2 right-2 z-50">
    <!-- Chat Toggle Button -->
    <button v-if="!isOpen"
      @click="toggleChat"
      class="bg-blue-600 hover:bg-blue-700 
            text-white rounded-full p-4 shadow-lg 
            transition-all duration-300 hover:scale-110">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.954 8.954 0 01-3.316-.62l-3.681.845.847-3.681A8.954 8.954 0 016 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"></path>
      </svg>
    </button>

    <!-- Chat Window -->
    <div v-if="isOpen"
      class="bg-white rounded-lg shadow-2xl border overflow-hidden transition-all duration-300"
      :style="{ width: chatWidth + 'px', height: chatHeight + 'px' }"
      @mousedown="startDrag">
      <!-- Chat Header -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between cursor-move">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <h3 class="font-semibold">AI Assistant</h3>
        </div>
        <div class="flex items-center space-x-2">
          <!-- Minimize Button -->
          <button @click="minimizeChat"
            class="hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <!-- Close Button -->
          <button @click="toggleChat"
            class="hover:bg-white hover:bg-opacity-20 
                   rounded p-1 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Chat Messages Area -->
      <div class="flex-1 p-4 overflow-y-auto bg-gray-50"
           :style="{ height: (chatHeight - 140) + 'px' }"
           ref="messagesContainer">
        <!-- Welcome Message -->
        <div v-if="messages.length === 0" class="text-center text-gray-500 mt-8">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.954 8.954 0 01-3.316-.62l-3.681.845.847-3.681A8.954 8.954 0 016 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"></path>
            </svg>
          </div>
          <p class="text-sm">Hi! I'm your AI assistant. Ask me anything!</p>
        </div>

        <!-- Messages -->
        <div v-for="(message, index) in messages" :key="index" class="mb-4">
          <!-- User Message -->
          <div v-if="message.type === 'user'" class="flex justify-end">
            <div class="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs break-words">
              {{ message.text }}
            </div>
          </div>
          <!-- Assistant Message -->
          <div v-else class="flex justify-start">
            <div class="bg-white rounded-lg px-4 py-2 max-w-xs break-words shadow-sm border">
              <div class="flex items-center space-x-2 mb-1">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span class="text-xs text-gray-500 font-medium">Assistant</span>
              </div>
              {{ message.text }}
            </div>
          </div>
        </div>

        <!-- Loading Animation -->
        <div v-if="loading" class="flex justify-start mb-4">
          <div class="bg-white rounded-lg px-4 py-2 shadow-sm border">
            <div class="flex items-center space-x-2">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
              </div>
              <span class="text-sm text-gray-500">Thinking...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t bg-white p-4">
        <div class="flex space-x-2">
          <input
            v-model="question"
            @keypress.enter="ask"
            type="text"
            placeholder="Type your message..."
            class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :disabled="loading"
          />
          <button
            @click="ask"
            :disabled="loading || !question.trim()"
            class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
        <!-- Error Message -->
        <div v-if="error" class="mt-2 text-red-600 text-sm">
          {{ error }}
        </div>
      </div>

      <!-- Resize Handle -->
      <div class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
           @mousedown="startResize">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 22H2v-2h18V2h2v20zM19 19H5V5h2v12h12v2z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// Chat state
const isOpen = ref(false)
const question = ref('')
const messages = ref([])
const error = ref('')
const loading = ref(false)
const messagesContainer = ref(null)

// Window dimensions
const chatWidth = ref(350)
const chatHeight = ref(500)
const minWidth = 300
const minHeight = 400
const maxWidth = 600
const maxHeight = 800

// Drag and resize state
const isDragging = ref(false)
const isResizing = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const initialSize = ref({ width: 0, height: 0 })

// Toggle chat window
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
    })
  }
}

// Minimize chat (just close for now)
const minimizeChat = () => {
  isOpen.value = false
}

// Send message
const ask = async () => {
  if (!question.value.trim() || loading.value) return

  const userMessage = question.value.trim()
  messages.value.push({ type: 'user', text: userMessage })
  question.value = ''
  
  loading.value = true
  error.value = ''
  
  await nextTick()
  scrollToBottom()

  try {
    const res = await $fetch('http://localhost:8000/ask', {
      method: 'POST',
      body: { question: userMessage },
    })
    
    messages.value.push({ 
      type: 'assistant', 
      text: res.answer || '(no answer received)' 
    })
  } catch (err) {
    error.value = err.message || 'Request failed'
    messages.value.push({ 
      type: 'assistant', 
      text: 'Sorry, I encountered an error. Please try again.' 
    })
  } finally {
    loading.value = false
    await nextTick()
    scrollToBottom()
  }
}

// Scroll to bottom of messages
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Drag functionality
const startDrag = (e) => {
  if (e.target.closest('.cursor-se-resize')) return
  isDragging.value = true
  dragStart.value = { x: e.clientX, y: e.clientY }
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
}

const drag = (e) => {
  if (!isDragging.value) return
  // Note: In a real implementation, you'd update the position
  // For now, we'll just prevent text selection
  e.preventDefault()
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
}

// Resize functionality
const startResize = (e) => {
  e.stopPropagation()
  isResizing.value = true
  initialSize.value = { width: chatWidth.value, height: chatHeight.value }
  dragStart.value = { x: e.clientX, y: e.clientY }
  document.addEventListener('mousemove', resize)
  document.addEventListener('mouseup', stopResize)
}

const resize = (e) => {
  if (!isResizing.value) return
  
  const deltaX = e.clientX - dragStart.value.x
  const deltaY = e.clientY - dragStart.value.y
  
  const newWidth = Math.max(minWidth, Math.min(maxWidth, initialSize.value.width + deltaX))
  const newHeight = Math.max(minHeight, Math.min(maxHeight, initialSize.value.height + deltaY))
  
  chatWidth.value = newWidth
  chatHeight.value = newHeight
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
}

// Cleanup
onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
/* Smooth animations */
.transition-all {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Prevent text selection while dragging */
.cursor-move {
  user-select: none;
}
</style>