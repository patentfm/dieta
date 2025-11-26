<template>
  <section id="form" class="form-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Formularz</span>
        <h2 class="section-title">Analiza niedoborów żywieniowych</h2>
        <p class="section-subtitle">
          Odpowiedz na pytania o swoje samopoczucie. Zajmie to około 5 minut.
        </p>
      </div>
      
      <div class="form-wrapper" ref="formWrapperRef">
        <ProgressBar 
          :currentStep="currentStep" 
          :totalSteps="totalSteps"
          @goToStep="goToStep"
        />
        
        <div class="form-content">
          <Transition name="slide" mode="out-in">
            <component 
              :is="currentStepComponent" 
              :key="currentStep"
              :is-compact="currentStep > 1"
              v-model="formData[stepKeys[currentStep - 1]]"
            />
          </Transition>
        </div>
        
        <div class="form-navigation">
          <button 
            class="btn btn-secondary" 
            @click="prevStep"
            :disabled="currentStep === 1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Wstecz
          </button>
          
          <div class="step-counter">
            Krok {{ currentStep }} z {{ totalSteps }}
          </div>
          
          <button 
            v-if="currentStep < totalSteps"
            class="btn btn-primary" 
            @click="nextStep"
          >
            Dalej
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          
          <button 
            v-else
            class="btn btn-accent" 
            @click="submitForm"
          >
            Zakończ analizę
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Decorative background -->
    <div class="form-bg">
      <div class="bg-gradient"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProgressBar from './ProgressBar.vue'
import Step1BasicInfo from './steps/Step1BasicInfo.vue'
import Step2Energy from './steps/Step2Energy.vue'
import Step3SkinHairNails from './steps/Step3SkinHairNails.vue'
import Step4Digestion from './steps/Step4Digestion.vue'
import Step5MoodMental from './steps/Step5MoodMental.vue'
import Step6MusclesBones from './steps/Step6MusclesBones.vue'
import Step7Immune from './steps/Step7Immune.vue'
import Step8DietSummary from './steps/Step8DietSummary.vue'

const emit = defineEmits(['submit'])

const totalSteps = 8
const currentStep = ref(1)
const formWrapperRef = ref(null)

const stepComponents = [
  Step1BasicInfo,
  Step2Energy,
  Step3SkinHairNails,
  Step4Digestion,
  Step5MoodMental,
  Step6MusclesBones,
  Step7Immune,
  Step8DietSummary
]

const stepKeys = [
  'basicInfo',
  'energy',
  'skinHairNails',
  'digestion',
  'moodMental',
  'musclesBones',
  'immune',
  'dietSummary'
]

const formData = ref({
  basicInfo: {},
  energy: [],
  skinHairNails: [],
  digestion: [],
  moodMental: [],
  musclesBones: [],
  immune: [],
  dietSummary: {}
})

const currentStepComponent = computed(() => {
  return stepComponents[currentStep.value - 1]
})

const scrollToFormWrapper = () => {
  // Scroll to the form wrapper (progress bar area), not the whole section
  if (formWrapperRef.value) {
    const offset = 20 // Small offset from top
    const elementPosition = formWrapperRef.value.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    scrollToFormWrapper()
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToFormWrapper()
  }
}

const goToStep = (step) => {
  if (step >= 1 && step <= totalSteps) {
    currentStep.value = step
    scrollToFormWrapper()
  }
}

const submitForm = () => {
  // Emit the form data to parent component for analysis
  emit('submit', formData.value)
}
</script>

<style scoped>
.form-section {
  position: relative;
  background: white;
  overflow: hidden;
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--gray-100);
  position: relative;
  z-index: 1;
}

.form-content {
  min-height: 350px;
  margin-bottom: 32px;
}

/* Navigation */
.form-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--gray-100);
}

.step-counter {
  font-size: 0.875rem;
  color: var(--gray-500);
  font-weight: 500;
}

.form-navigation .btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Background */
.form-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  top: -50%;
  left: -20%;
  width: 140%;
  height: 200%;
  background: radial-gradient(ellipse at center, var(--primary-50) 0%, transparent 70%);
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
  .form-wrapper {
    padding: 32px 24px;
  }
  
  .form-content {
    min-height: 300px;
  }
  
  .form-navigation {
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .step-counter {
    order: -1;
    width: 100%;
    text-align: center;
  }
  
  .form-navigation .btn {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .form-wrapper {
    padding: 24px 16px;
    border-radius: var(--radius-lg);
  }
}
</style>
