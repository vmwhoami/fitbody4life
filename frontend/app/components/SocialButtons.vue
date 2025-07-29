<template>
  <div class="fixed bottom-[10%] right-[3%] w-[6.5rem]
              h-[6.5rem] flex justify-center
              items-center rounded-full bg-white 
              cursor-pointer z-50 
              shadow-[0_0_20px_0_rgba(0,0,0,0.3)] 
              opacity-100">
    <input type="checkbox" name="checkbox" id="toggle" class="hidden" />
    
    <label for="toggle" class="absolute top-0 left-0
                               w-full h-full flex justify-center 
                               items-center">
      <span class="absolute border-none 
                   bg-[#275dc7] top-[-2px] 
                   left-[-2px] w-[7rem] h-[7rem] 
                   rounded-full cursor-pointer z-[60] 
                   flex justify-center items-center">
        <IconMessage class="w-20 h-20 text-white" />
      </span>
    </label>
    
    <NuxtLink href="http://m.me/vmwhoami" 
       target="_blank" 
       class="messenger-link absolute 
              flex justify-center items-center bg-white
              w-[6.5rem] h-[6.5rem] rounded-full 
              cursor-pointer transition-transform 
              duration-200 ease-custom">
      <IconMessengerSvg class="w-16 h-16" />
    </NuxtLink>
    
    <NuxtLink href="tel:+37369136177" 
       target="_blank" 
       class="phone-link absolute flex justify-center 
              items-center bg-white w-[6.5rem] h-[6.5rem]
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconPhoneSvg class="w-16 h-16 text-[#004d73]" />
    </NuxtLink>
    
    <NuxtLink href="http://wa.me/+37369136177" 
       target="_blank" 
       class="whatsapp-link absolute flex 
              justify-center items-center 
              bg-white w-[6.5rem] h-[6.5rem] 
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconWhatAppSvg class="w-16 h-16 text-[#00d824]" />
    </NuxtLink>
    
    <NuxtLink href="viber://chat?number=+37369136177" 
       target="_blank" 
       class="viber-link absolute flex 
              justify-center items-center 
              bg-white w-[6.5rem] h-[6.5rem] 
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconViberSvg class="w-16 h-16" />
    </NuxtLink>
  </div>
</template>

<script setup>
// Import your SVG components
// import IconMessage from '@/assets/icons/IconMessage.svg';
// import IconMessengerSvg from '@/assets/icons/IconMessengerSvg.svg';
// import IconPhoneSvg from '@/assets/icons/IconPhoneSvg.svg';
// import IconWhatAppSvg from '@/assets/icons/IconWhatAppSvg.svg';
// import IconViberSvg from '@/assets/icons/IconViberSvg.svg';
</script>

<style scoped>
/* Custom styles for pseudo-elements and checkbox states */
.messanger-container::before,
.messanger-container::after {
  content: "";
  position: absolute;
  background-color: rgb(46, 46, 46);
  top: 50%;
  left: 50%;
  width: 4rem;
  height: 3px;
  z-index: 55;
}

.messanger-container::before {
  transform: translate(-50%, -50%) rotateZ(45deg);
}

.messanger-container::after {
  transform: translate(-50%, -50%) rotateZ(-45deg);
}

/* Hide close icon when checkbox is checked */
#toggle:checked + label .close-icon {
  opacity: 0;
}

/* Transformations when checkbox is checked */
#toggle:checked ~ .phone-link {
  transform: translateY(-30rem);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

#toggle:checked ~ .messenger-link {
  transform: translateY(-10rem);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

#toggle:checked ~ .whatsapp-link {
  transform: translateY(-20rem);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

#toggle:checked ~ .viber-link {
  transform: translateY(-40rem);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
}

/* Custom easing function */
.ease-custom {
  transition-timing-function: cubic-bezier(0, 0.76, 0.29, 0.78);
}
</style>