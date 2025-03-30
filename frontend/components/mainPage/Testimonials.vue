<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-2">
      What our Happy Clients Say
    </h2>
    <p class="text-center text-gray-600 mb-8">
      Things that make it the best place to start training
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        :name="testimonial.name"
        :rating="testimonial.rating"
        :text="testimonial.text"
      />
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from "./TestimonialCard.vue"; // Import the card component

const testimonials = [
  {
    name: "Jesika Sky",
    rating: 5,
    text: "This gym is by far the best gym I’ve ever been to, and I’ve been to a lot of gyms! The workouts are amazing...",
  },
  {
    name: "Tyron Son",
    rating: 4,
    text: "If you want body, mind, and soul fitness this is the place. Love this gym. It had everything you will need.",
  },
  {
    name: "Joanna Fox",
    rating: 4,
    text: "A good coach makes sure that they have the right incentive before taking on a client",
  },
];

 
</script>
 

