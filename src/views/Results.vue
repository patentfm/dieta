<template>
  <div class="results-view">
    <ResultsPage 
      v-if="results"
      :results="results" 
      @back="goBack"
    />
    <div v-else class="no-results">
      <div class="container">
        <div class="no-results-content">
          <div class="icon">📊</div>
          <h1>Brak wyników</h1>
          <p>Nie znaleziono zapisanych wyników analizy. Wypełnij formularz, aby otrzymać spersonalizowane rekomendacje.</p>
          <router-link to="/#form" class="btn btn-primary btn-lg">
            Rozpocznij analizę
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <Footer v-if="results" :has-saved-results="false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ResultsPage from '../components/results/ResultsPage.vue'
import Footer from '../components/landing/Footer.vue'

const router = useRouter()
const results = ref(null)

onMounted(() => {
  // First check for current analysis results (just submitted)
  const currentResults = sessionStorage.getItem('currentAnalysisResults')
  if (currentResults) {
    results.value = JSON.parse(currentResults)
    sessionStorage.removeItem('currentAnalysisResults')
    return
  }
  
  // Then check for saved results
  const savedData = localStorage.getItem('nutriScanResults')
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData)
      results.value = parsed.results
    } catch (e) {
      console.error('Failed to parse saved results:', e)
    }
  }
})

const goBack = () => {
  router.push('/#form')
}
</script>

<style scoped>
.no-results {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-50);
  padding: 40px 0;
}

.no-results-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.no-results-content .icon {
  font-size: 5rem;
  margin-bottom: 24px;
}

.no-results-content h1 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.no-results-content p {
  color: var(--gray-600);
  font-size: 1.125rem;
  margin-bottom: 32px;
  line-height: 1.7;
}
</style>

