<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Video Background -->
    <div class="absolute inset-0 w-full h-full">
      <video 
        ref="videoRef"
        class="w-full h-full object-cover custom-fade"
        :muted="isMuted"
        loop
        playsinline>
        <source :src="videoSource" type="video/mp4">
        <div class="w-full h-full bg-gray-900"></div>
      </video>
    </div>
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 video-overlay"></div>
    
    <!-- Sound Toggle Button -->
    <button  @click="toggleSound" class="absolute z-20 bottom-6 
                                         left-6 p-3 rounded-full 
                                         bg-black/30 backdrop-blur-sm 
                                         hover:bg-black/50 transition-all"
                                         aria-label="Toggle sound">
      <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    </button>

    <!-- Play Button Overlay (if autoplay fails) -->
    <!-- <div v-if="showPlayOverlay" class="absolute inset-0 z-10 
                                       flex items-center justify-center bg-black/50">
      <button @click="startVideo"
              class="p-6 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all"
              aria-label="Play video">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div> -->
    
    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl 
                   lg:text-8xl font-black 
                   text-white mb-6 tracking-tight leading-none">
          <span class="italic">{{ $t('heroSection.mainTitle.line1') }}</span>
          <span class="block italic">{{ $t('heroSection.mainTitle.line2') }}</span>
        </h1>
        
        <!-- Blue Accent Line -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-1 bg-blue-500 mr-2"></div>
          <div class="w-8 h-1 bg-gray-400"></div>
        </div>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl lg:text-2xl 
                  text-gray-200 font-medium mb-12 
                  tracking-wide">
          {{ $t('heroSection.subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoRef = ref(null);
const isMuted = ref(true);
const showPlayOverlay = ref(false);

const props = defineProps({
  videoSource: {
    type: String,
    default: "/videos/1920.webm"
  },
});

// Try to autoplay on mount
onMounted(async () => {
  try {
    if (videoRef.value) {
      // Start muted to comply with autoplay policies
      videoRef.value.muted = true;
      await videoRef.value.play();
    }
  } catch (error) {
    console.log("Autoplay prevented:", error);
    showPlayOverlay.value = true;
  }
});

const toggleSound = () => {
  isMuted.value = !isMuted.value;
  
  // If video hasn't started playing yet
  if (videoRef.value.paused) {
    startVideo();
  }
};

const startVideo = async () => {
  try {
    showPlayOverlay.value = false;
    await videoRef.value.play();
  } catch (error) {
    console.error("Failed to play video:", error);
    // Show user instructions if needed
  }
};
</script>

<style scoped>
.video-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%);
}

.custom-fade {
  mask: linear-gradient(to bottom, black 0%, black 0%, transparent 100%, transparent 100%);
}

/* Smooth transition for sound button */
button {
  transition: transform 0.2s ease, background-color 0.3s ease;
}

button:active {
  transform: scale(0.95);
}
</style>