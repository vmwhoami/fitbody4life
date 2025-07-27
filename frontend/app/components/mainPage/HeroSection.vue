<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Video Background -->
    <div class="absolute inset-0 w-full h-full">
      <video 
        ref="videoRef"
        class="w-full h-full object-cover custom-fade"
        autoplay 
        muted 
        loop
        playsinline>
        <source :src="videoSource" type="video/mp4">
        <!-- Fallback background for when video doesn't load -->
        <div class="w-full h-full bg-gray-900"></div>
      </video>
    </div>
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 video-overlay"></div>
    
    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
          <span class="italic">{{ $t('heroSection.mainTitle.line1') }}</span>
          <span class="block italic">{{ $t('heroSection.mainTitle.line2') }}</span>
        </h1>
        
        <!-- Blue Accent Line -->
        <div class="flex justify-center mb-8">
          <div class="w-16 h-1 bg-blue-500 mr-2"></div>
          <div class="w-8 h-1 bg-gray-400"></div>
        </div>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium mb-12 tracking-wide">
          {{ $t('heroSection.subtitle') }}
        </p>
 
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
 
 
const { t } = useI18n();
 


const videoRef = ref(null);
 

const props = defineProps({
  videoSource: {
    type: String,
    default: "/videos/1920.webm"
  },
 
});

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.log("Autoplay prevented:", error);
      // Fallback: Show play button or handle autoplay restrictions
    });
  }
});
</script>
<style scoped>
.video-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%);
}

.custom-fade {
  mask: linear-gradient(to bottom, black 0%, black 0%, transparent 100%, transparent 100%);
  /* -webkit-mask: linear-gradient(to bottom, black 40%, black 40%, transparent 60%, transparent 100%); */
}
</style>