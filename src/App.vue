<template>
  <div id="app">
    <!-- Previous Results Banner -->
    <Transition name="slide-down">
      <div class="previous-results-banner" v-if="hasSavedResults && currentView === 'landing'">
        <div class="container banner-content">
          <span class="banner-text">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Masz zapisane wyniki z poprzedniej analizy
          </span>
          <button class="banner-btn" @click="loadSavedResults">
            Zobacz poprzednie wyniki
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="banner-close" @click="dismissBanner" aria-label="Zamknij">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Landing Page -->
    <template v-if="currentView === 'landing'">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Features />
      <MultiStepForm @submit="handleFormSubmit" />
      <Footer :has-saved-results="hasSavedResults" @view-results="loadSavedResults" />
    </template>
    
    <!-- Results Page -->
    <template v-else-if="currentView === 'results'">
      <ResultsPage 
        :results="analysisResults" 
        @back="handleBackToForm"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroSection from './components/landing/HeroSection.vue'
import HowItWorks from './components/landing/HowItWorks.vue'
import Benefits from './components/landing/Benefits.vue'
import Features from './components/landing/Features.vue'
import Footer from './components/landing/Footer.vue'
import MultiStepForm from './components/form/MultiStepForm.vue'
import ResultsPage from './components/results/ResultsPage.vue'
import { analyzeSymptoms } from './data/analysis.js'

const currentView = ref('landing')
const analysisResults = ref(null)
const hasSavedResults = ref(false)
const bannerDismissed = ref(false)

// Check for saved results on mount
onMounted(() => {
  checkForSavedResults()
})

const checkForSavedResults = () => {
  // Check cookie
  const hasCookie = document.cookie.includes('nutriScanHasResults=true')
  // Check localStorage
  const savedData = localStorage.getItem('nutriScanResults')
  
  hasSavedResults.value = hasCookie && savedData !== null && !bannerDismissed.value
}

const loadSavedResults = () => {
  try {
    const savedData = JSON.parse(localStorage.getItem('nutriScanResults'))
    if (savedData && savedData.results) {
      analysisResults.value = savedData.results
      currentView.value = 'results'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } catch (e) {
    console.error('Failed to load saved results:', e)
    alert('Nie udało się wczytać zapisanych wyników.')
  }
}

const dismissBanner = () => {
  bannerDismissed.value = true
  hasSavedResults.value = false
}

const handleFormSubmit = (formData) => {
  // Analyze the form data
  analysisResults.value = analyzeSymptoms(formData)
  
  // Switch to results view
  currentView.value = 'results'
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleBackToForm = () => {
  currentView.value = 'landing'
  
  // Scroll to form section
  setTimeout(() => {
    const formSection = document.getElementById('form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}

/* Previous Results Banner */
.previous-results-banner {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  padding: 12px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.banner-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
}

.banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: white;
  color: var(--primary-700);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.banner-btn:hover {
  background: var(--primary-50);
  transform: translateX(2px);
}

.banner-close {
  padding: 4px;
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition-fast);
}

.banner-close:hover {
  color: white;
}

/* Slide down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .banner-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  
  .banner-close {
    position: absolute;
    top: 8px;
    right: 16px;
  }
  
  .previous-results-banner {
    padding: 16px 0;
  }
}
</style>
