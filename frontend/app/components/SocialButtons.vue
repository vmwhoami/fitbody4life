<template>
  <div class="fixed bottom-[20%] right-[3%] w-[3.25rem]
              h-[3.25rem] flex justify-center
              items-center rounded-full bg-white 
              cursor-pointer z-50 
              shadow-[0_0_10px_0_rgba(0,0,0,0.3)] 
              opacity-100">
    <input type="checkbox" name="checkbox" id="toggle" class="hidden" />
    
    <label for="toggle" class="absolute top-0 left-0
                               w-full h-full flex justify-center 
                               items-center">
                               <!-- leave this as is !!! -->
      <span class="absolute border-none 
                   bg-[#275dc7] top-[-1px] 
                   left-[-1px] w-[3.5rem] h-[3.5rem] 
                   rounded-full cursor-pointer z-[60] 
                   flex justify-center items-center">
        <IconPhone class="w-10 h-10 text-white" />
      </span>
                                   <!--!!! leave this as is !!! -->
 
    </label>
    
    <NuxtLink href="http://m.me/olenikapt" 
       target="_blank" 
       class="messenger-link absolute 
              flex justify-center items-center bg-white
              w-[3.25rem] h-[3.25rem] rounded-full 
              cursor-pointer transition-transform 
              duration-200 ease-custom">
      <IconMessengerSvg class="w-8 h-8" :my-fill="'#168AFF'" />
    </NuxtLink>
    
    <NuxtLink href="https://t.me/olenikapt"
       target="_blank" 
       class="phone-link absolute flex justify-center 
              items-center bg-white w-[3.25rem] h-[3.25rem]
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconTelegram class="w-8 h-8" :my-fill="'#24A1DE'" />
    </NuxtLink>
    
    <NuxtLink href="http://wa.me/+37369442480" 
       target="_blank" 
       class="whatsapp-link absolute flex 
              justify-center items-center 
              bg-white w-[3.25rem] h-[3.25rem] 
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconWhatAppSvg class="w-8 h-8" :my-fill="'#1fb141'" />
    </NuxtLink>
    
    <NuxtLink href="viber://chat?number=+37369442480" 
       target="_blank" 
       class="viber-link absolute flex 
              justify-center items-center 
              bg-white w-[3.25rem] h-[3.25rem] 
              rounded-full cursor-pointer 
              transition-transform duration-200 ease-custom">
      <IconViberSvg class="w-8 h-8" :my-fill="'#7360f2'" />
    </NuxtLink>
  </div>
</template>

<script setup>
import IconTelegram from '@/assets/icons/IconTelegram.vue';
import IconPhone from '@/assets/icons/IconPhone.vue';
import IconMessengerSvg from '@/assets/icons/IconMessengerSvg.vue';
import IconWhatAppSvg from '@/assets/icons/IconWhatsApp.vue';
import IconViberSvg from '@/assets/icons/IconViberSvg.vue';
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
  width: 2rem;
  height: 1.5px;
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
  transform: translateY(-15rem);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
#toggle:checked ~ .messenger-link {
  transform: translateY(-5rem);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
#toggle:checked ~ .whatsapp-link {
  transform: translateY(-10rem);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
#toggle:checked ~ .viber-link {
  transform: translateY(-20rem);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
/* Custom easing function */
.ease-custom {
  transition-timing-function: cubic-bezier(0, 0.76, 0.29, 0.78);
}
</style>