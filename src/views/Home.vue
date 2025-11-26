<template>
  <div class="home">
    <!-- Previous Results Banner -->
    <Transition name="slide-down">
      <div class="previous-results-banner" v-if="hasSavedResults && !bannerDismissed">
        <div class="container banner-content">
          <span class="banner-text">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Masz zapisane wyniki z poprzedniej analizy
          </span>
          <router-link to="/wyniki" class="banner-btn">
            Zobacz poprzednie wyniki
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
          <button class="banner-close" @click="dismissBanner" aria-label="Zamknij">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <HeroSection />
    <HowItWorks />
    <Benefits />
    <Features />
    <MultiStepForm @submit="handleFormSubmit" />
    <Footer :has-saved-results="hasSavedResults" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeroSection from '../components/landing/HeroSection.vue'
import HowItWorks from '../components/landing/HowItWorks.vue'
import Benefits from '../components/landing/Benefits.vue'
import Features from '../components/landing/Features.vue'
import Footer from '../components/landing/Footer.vue'
import MultiStepForm from '../components/form/MultiStepForm.vue'
import { analyzeSymptoms } from '../data/analysis.js'

const router = useRouter()
const hasSavedResults = ref(false)
const bannerDismissed = ref(false)

onMounted(() => {
  checkForSavedResults()
})

const checkForSavedResults = () => {
  const hasCookie = document.cookie.includes('nutriScanHasResults=true')
  const savedData = localStorage.getItem('nutriScanResults')
  hasSavedResults.value = hasCookie && savedData !== null
}

const dismissBanner = () => {
  bannerDismissed.value = true
}

const handleFormSubmit = (formData) => {
  const results = analyzeSymptoms(formData)
  
  // Store results temporarily for the results page
  sessionStorage.setItem('currentAnalysisResults', JSON.stringify(results))
  
  // Navigate to results
  router.push('/wyniki')
}
</script>

<style scoped>
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
  text-decoration: none;
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

