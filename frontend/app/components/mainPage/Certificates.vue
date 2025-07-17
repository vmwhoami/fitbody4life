<template>
  <section class="bg-white py-10 md:py-16">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Title Section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Clients Trust Me</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 text-left max-w-4xl mx-auto">
          <!-- Badge Items -->
          <div class="flex items-start space-x-3">
            <span class="text-green-500 text-xl">✔</span>
            <p class="text-gray-700 font-medium">Certified Personal Trainer – YMCA Level 3 (UK)</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-green-500 text-xl">✔</span>
            <p class="text-gray-700 font-medium">10+ Years International Dance & Fitness Experience</p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-green-500 text-xl">✔</span>
            <p class="text-gray-700 font-medium">Trusted by Clients in Moldova, Romania, China, and the UK</p>
          </div>
        </div>
      </div>

      <!-- Certificates Section -->
      <div class="mt-16">
        <h3 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Professional Certifications</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Certificate 1 -->
          <div 
            class="certificate-card bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            @click="openModal(0)"
          >
            <div class="relative h-64 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="/assets/images/diplomas/diploma1.jpg" 
                alt="YMCA Level 3 Certificate" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
              <div class="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h4 class="text-white text-xl font-bold">YMCA Level 3 Diploma</h4>
                <p class="text-gray-200 text-sm">YMCA Awards, United Kingdom</p>
              </div>
              <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center space-x-2 mb-3">
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-gray-600 text-sm">Issued: August 2019 | Valid: Lifetime</span>
              </div>
              <p class="text-gray-700">
                Advanced qualification demonstrating expertise in personal training principles, client assessment, and program design.
              </p>
            </div>
          </div>

          <!-- Certificate 2 -->
          <div 
            class="certificate-card bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            @click="openModal(1)"
          >
            <div class="relative h-64 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src="/assets/images/diplomas/diploma2.jpg" 
                alt="Nutrition Specialist Certificate" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
              <div class="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h4 class="text-white text-xl font-bold">Component Completion</h4>
                <p class="text-gray-200 text-sm">YMCA Diploma Requirements</p>
              </div>
              <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center space-x-2 mb-3">
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-gray-600 text-sm">Issued: August 2019 | Valid: Lifetime</span>
              </div>
              <p class="text-gray-700">
                Detailed breakdown of completed components for the YMCA Level 3 Diploma in Personal Training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificate Modal -->
    <div 
      v-if="showModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      :class="{'opacity-100': showModal, 'opacity-0 pointer-events-none': !showModal}"
      @click.self="closeModal"
    >
      <div 
        class="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col transition-all duration-300"
        :class="{'scale-100': showModal, 'scale-95': !showModal}"
      >
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-xl font-bold text-gray-800">{{ activeCertificate.title }}</h3>
          <button 
            @click="closeModal"
            class="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="overflow-auto flex-grow">
          <img 
            :src="activeCertificate.image" 
            :alt="activeCertificate.title" 
            class="w-full object-contain max-h-[60vh]"
          >
          
          <div class="p-6">
            <!-- Issuing Organization -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">Issued by: {{ activeCertificate.issuer }}</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">Date: {{ activeCertificate.date }}</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">ID: {{ activeCertificate.id }}</span>
              </div>
            </div>
            
            <!-- Qualification Number (for diploma1) -->
            <div v-if="activeCertificate.qualificationNumber" class="mb-4">
              <p class="text-gray-700">
                <span class="font-medium">Qualification Number:</span> 
                {{ activeCertificate.qualificationNumber }}
              </p>
            </div>
            
            <!-- Executive Signature -->
            <div v-if="activeCertificate.executive" class="mb-4">
              <p class="text-gray-700">
                <span class="font-medium">Issuing Executive:</span> 
                {{ activeCertificate.executive }}
              </p>
            </div>
            
            <!-- Regulator Information (for diploma1) -->
            <div v-if="activeCertificate.regulator" class="mb-4">
              <p class="text-gray-700">
                <span class="font-medium">Regulated by:</span> 
                <a :href="activeCertificate.regulator.url" target="_blank" class="text-green-600 hover:underline">
                  {{ activeCertificate.regulator.name }}
                </a>
              </p>
            </div>
            
            <!-- Certificate Numbers -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div v-if="activeCertificate.certificateNumber" class="bg-gray-50 p-3 rounded-lg">
                <p class="text-xs text-gray-500">Certificate Number</p>
                <p class="font-medium">{{ activeCertificate.certificateNumber }}</p>
              </div>
              <div v-if="activeCertificate.validationNumber" class="bg-gray-50 p-3 rounded-lg">
                <p class="text-xs text-gray-500">Validation Number</p>
                <p class="font-medium">{{ activeCertificate.validationNumber }}</p>
              </div>
              <div v-if="activeCertificate.learnerNumber" class="bg-gray-50 p-3 rounded-lg">
                <p class="text-xs text-gray-500">Learner Number</p>
                <p class="font-medium">{{ activeCertificate.learnerNumber }}</p>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-700 mb-6">{{ activeCertificate.description }}</p>
            
            <!-- Components Table (for diploma2) -->
            <div v-if="activeCertificate.components" class="mb-6">
              <h4 class="font-bold text-gray-800 mb-3">Completed Components ({{ activeCertificate.totalCredits }} credits total):</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                      <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Code</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="(component, index) in activeCertificate.components" :key="index">
                      <td class="px-4 py-3 text-sm text-gray-700">{{ component.title }}</td>
                      <td class="px-4 py-3 text-sm text-gray-700">Level {{ component.level }}</td>
                      <td class="px-4 py-3 text-sm text-gray-700">{{ component.credits }}</td>
                      <td class="px-4 py-3 text-sm text-gray-700">{{ component.code }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="mt-6 flex justify-center">
              <button 
                @click="closeModal"
                class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Certificate data using local images and accurate details
const certificates = [
  {
    id: "452240",
    title: "YMCA Level 3 Diploma in Personal Training (Gym-Based Exercise)",
    issuer: "Health and Fitness Education Ltd",
    date: "August 13, 2019",
    qualificationNumber: "601/0195/7",
    validationNumber: "00233175-01-KN3R",
    certificateNumber: "425001",
    learnerNumber: "452240",
    image: "/assets/images/diplomas/diploma1.jpg",
    description: "This qualification demonstrates comprehensive knowledge and expertise in personal training principles, client assessment, and gym-based exercise program design. Awarded by Health and Fitness Education Ltd under Central YMCA, this Ofqual-regulated certification meets rigorous UK standards for personal trainers.",
    regulator: {
      name: "Ofqual",
      url: "https://register.ofqual.gov.uk"
    },
    executive: "Rosi Prescott, Group Chief Executive, Central YMCA"
  },
  {
    id: "452240",
    title: "Certificate of Component Completion",
    issuer: "Health and Fitness Education Ltd",
    date: "August 13, 2019",
    components: [
      { title: "Principles of Exercise, Fitness and Health", level: 2, credits: 4, code: "A/600/9017" },
      { title: "Anatomy and Physiology for Exercise", level: 2, credits: 6, code: "H/600/9013" },
      { title: "Planning Gym-Based Exercise", level: 2, credits: 4, code: "F/600/9018" },
      { title: "Instructing Gym-Based Exercise", level: 2, credits: 6, code: "A/600/9020" },
      { title: "Know How To Support Clients Who Take Part in Exercise and Physical Activity", level: 2, credits: 2, code: "M/600/9015" },
      { title: "Health, Safety and Welfare in a Fitness Environment", level: 2, credits: 2, code: "T/600/9016" },
      { title: "Anatomy and Physiology for Exercise and Health", level: 3, credits: 6, code: "A/600/9051" },
      { title: "Programming Personal Training with Clients", level: 3, credits: 7, code: "F/600/9052" },
      { title: "Applying the Principles of Nutrition to a Physical Activity Programme", level: 3, credits: 6, code: "L/600/9054" },
      { title: "Delivering Personal Training Sessions", level: 3, credits: 9, code: "J/600/9053" }
    ],
    totalCredits: 52,
    validationNumber: "00233175-01-KN3R",
    certificateNumber: "425001",
    learnerNumber: "452240",
    image: "/assets/images/diplomas/diploma2.jpg",
    description: "This certificate confirms completion of all required components for the YMCA Level 3 Diploma in Personal Training, covering exercise principles, anatomy, physiology, nutrition, and practical training delivery. The comprehensive program includes both Level 2 and Level 3 components totaling 52 credits.",
    executive: "Rosi Prescott, Group Chief Executive, Central YMCA"
  }
];

// Modal state
const showModal = ref(false);
const activeCertificate = ref(certificates[0]);

// Open modal with selected certificate
const openModal = (index) => {
  activeCertificate.value = certificates[index];
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

// Close modal
const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.certificate-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Table styling */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

th {
  background-color: #f7fafc;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f8fafc;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>