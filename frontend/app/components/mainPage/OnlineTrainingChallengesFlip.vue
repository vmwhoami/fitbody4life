<template>
  <section class="bg-gray py-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-center mb-8">
        The Honest Truth About Online Training
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, i) in challenges"
          :key="i"
          class="group perspective">
        <div class="relative w-full preserve-3d 
                    group-hover:rotate-y-180
                    transition-transform duration-700 
                    min-h-[300px] sm:min-h-[350px]">
          
            <!-- front -->
            <div  class="absolute inset-0 bg-white
                         shadow p-6 flex
                         flex-col justify-center">
              <h3 class="text-2xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-red-600 font-medium">{{ item.problem }}</p>
              <span class="mt-auto text-gray-400 text-sm">(hover or tap to flip)</span>
            </div>
            <!-- back -->
            <div class="absolute inset-0 bg-white
                        shadow p-6 
                        rotate-y-180 backface-hidden">
              <h3 class="text-2xl font-semibold mb-2">✅ Solution</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li v-for="(sol, idx) in item.solutions" :key="idx">{{ sol }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const challenges = [
  {
    title: '📶 Tech Issues & Platform Friction',
    problem: 'Unstable Wi‑Fi or tricky platforms can derail your session.',
    solutions: [
      'Run pre–session tech checks + use Zoom or Trainerize.',
      'On‑demand library for missed live workouts.',
      'Dedicated troubleshooting support so you’re never stuck.',
    ],
  },
  {
    title: '👥 Reduced Real‑Time Feedback',
    problem: 'No physical trainer means missed form cues and more injury risk.',
    solutions: [
      'Dual‑angle camera setup to catch alignment issues.',
      'Pause‑and‑correct functionality live in video calls.',
      'Post‑workout clip reviews with personal tips.',
    ],
  },
  {
    title: '⏳ Accountability & Motivation Gaps',
    problem: '30–50 % of remote learners lose steam and consistency.',
    solutions: [
      'Gamified dashboards to celebrate progress.',
      'Automated check‑ins via message/email + reward badges.',
      'Small group pods for peer support and competition.',
    ],
  },
  {
    title: '🌐 Community & Social Limitations',
    problem: 'Isolation kills motivation—networking matters.',
    solutions: [
      'Member‑only forums and live Q&A sessions.',
      'Global community challenges (step contests, etc.).',
      'Occasional hybrid events mixing online + local meetups.',
    ],
  },
  {
    title: '🧩 Standardization vs Personalization',
    problem: 'One‑size plans ignore injuries, crazy weeks, or limitations.',
    solutions: [
      'AI‑driven tweaks during high‑stress weeks.',
      'Flexible scheduling + real‑time trainer check‑ins.',
      'Wearable‑based program adjustments on the fly.',
    ],
  },
  {
    title: '⚖️ Self‑Discipline Required',
    problem: 'Freedom can lead to procrastination if not structured.',
    solutions: [
      'Deadline‑driven goals with reminder nudges.',
      '“Focus‑mode” app blocks to reduce distractions.',
      'Trainer‑led scheduling aligned with your energy patterns.',
    ],
  },
  {
    title: '🌉 Access & Equity Gaps',
    problem: 'Not everyone has space, equipment, or tech know‑how.',
    solutions: [
      'Low‑bandwidth or audio‑only workout options.',
      'Equipment‑free routines using household items.',
      'Sliding‑scale pricing or scholarships to serve more people.',
    ],
  },
];
</script>

<style>
.perspective { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.rotate-y-180 { transform: rotateY(180deg); }
.backface-hidden { backface-visibility: hidden; }
</style>

