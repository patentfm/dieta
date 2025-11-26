<template>
  <div class="bmi-page">
    <!-- Header -->
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Kalkulator BMI</h1>
        <p class="subtitle">Oblicz swój wskaźnik masy ciała</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="calculator-wrapper">
          
          <!-- Calculator Card -->
          <div class="calculator-card">
            <div class="calc-form">
              <div class="form-group">
                <label for="weight">Waga (kg)</label>
                <input 
                  type="number" 
                  id="weight" 
                  v-model.number="weight" 
                  placeholder="np. 70"
                  min="30"
                  max="300"
                  step="0.1"
                />
              </div>

              <div class="form-group">
                <label for="height">Wzrost (cm)</label>
                <input 
                  type="number" 
                  id="height" 
                  v-model.number="height" 
                  placeholder="np. 175"
                  min="100"
                  max="250"
                />
              </div>

              <button class="calc-button" @click="calculateBMI" :disabled="!canCalculate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
                Oblicz BMI
              </button>
            </div>

            <!-- Results -->
            <Transition name="fade">
              <div v-if="bmi" class="results">
                <div class="bmi-display">
                  <div class="bmi-value" :class="categoryClass">{{ bmi }}</div>
                  <div class="bmi-label">Twoje BMI</div>
                </div>

                <div class="category-badge" :class="categoryClass">
                  {{ category }}
                </div>

                <p class="result-description">{{ description }}</p>

                <!-- BMI Scale -->
                <div class="bmi-scale">
                  <div class="scale-bar">
                    <div 
                      class="scale-indicator" 
                      :style="{ left: indicatorPosition + '%' }"
                    >
                      <div class="indicator-arrow"></div>
                    </div>
                    <div class="scale-segment underweight"></div>
                    <div class="scale-segment normal"></div>
                    <div class="scale-segment overweight"></div>
                    <div class="scale-segment obese"></div>
                  </div>
                  <div class="scale-labels">
                    <span>16</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>

                <!-- Ideal Weight -->
                <div class="ideal-weight" v-if="idealWeightRange">
                  <h4>Twoja idealna waga:</h4>
                  <p>{{ idealWeightRange.min }} - {{ idealWeightRange.max }} kg</p>
                  <span class="ideal-note" v-if="weightDifference">
                    {{ weightDifferenceText }}
                  </span>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Info Section -->
          <div class="info-section">
            <div class="info-card">
              <h3>📊 Co to jest BMI?</h3>
              <p>BMI (Body Mass Index) to wskaźnik masy ciała obliczany na podstawie wzrostu i wagi. Jest prostym narzędziem do oceny, czy waga mieści się w zdrowym zakresie.</p>
              <p><strong>Wzór:</strong> BMI = waga (kg) ÷ wzrost² (m)</p>
            </div>

            <div class="info-card">
              <h3>📋 Kategorie BMI</h3>
              <div class="categories-list">
                <div class="cat-item underweight">
                  <span class="cat-range">&lt; 18.5</span>
                  <span class="cat-name">Niedowaga</span>
                </div>
                <div class="cat-item normal">
                  <span class="cat-range">18.5 - 24.9</span>
                  <span class="cat-name">Waga prawidłowa</span>
                </div>
                <div class="cat-item overweight">
                  <span class="cat-range">25 - 29.9</span>
                  <span class="cat-name">Nadwaga</span>
                </div>
                <div class="cat-item obese">
                  <span class="cat-range">≥ 30</span>
                  <span class="cat-name">Otyłość</span>
                </div>
              </div>
            </div>

            <div class="info-card warning">
              <h3>⚠️ Ograniczenia BMI</h3>
              <p>BMI nie rozróżnia między masą mięśniową a tłuszczową. Osoby aktywne fizycznie, sportowcy i kulturyści mogą mieć wysokie BMI przy niskim poziomie tkanki tłuszczowej.</p>
              <p>BMI nie uwzględnia też rozkładu tkanki tłuszczowej — tłuszcz brzuszny jest bardziej niebezpieczny niż tłuszcz na udach.</p>
              <p><strong>Dla pełniejszego obrazu, rozważ też pomiar obwodu talii.</strong></p>
            </div>
          </div>

        </div>
      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Footer from '../components/landing/Footer.vue'

const weight = ref(null)
const height = ref(null)
const bmi = ref(null)
const category = ref('')
const description = ref('')
const categoryClass = ref('')

const canCalculate = computed(() => {
  return weight.value && height.value && weight.value > 0 && height.value > 0
})

const indicatorPosition = computed(() => {
  if (!bmi.value) return 0
  // Scale: 16-40
  const min = 16
  const max = 40
  const position = ((bmi.value - min) / (max - min)) * 100
  return Math.max(0, Math.min(100, position))
})

const idealWeightRange = computed(() => {
  if (!height.value) return null
  const heightInM = height.value / 100
  return {
    min: Math.round(18.5 * heightInM * heightInM),
    max: Math.round(24.9 * heightInM * heightInM)
  }
})

const weightDifference = computed(() => {
  if (!weight.value || !idealWeightRange.value) return null
  if (weight.value < idealWeightRange.value.min) {
    return idealWeightRange.value.min - weight.value
  }
  if (weight.value > idealWeightRange.value.max) {
    return weight.value - idealWeightRange.value.max
  }
  return 0
})

const weightDifferenceText = computed(() => {
  if (!weightDifference.value) return ''
  if (weight.value < idealWeightRange.value.min) {
    return `Brakuje Ci około ${weightDifference.value.toFixed(1)} kg do dolnej granicy normy`
  }
  if (weight.value > idealWeightRange.value.max) {
    return `Masz około ${weightDifference.value.toFixed(1)} kg powyżej górnej granicy normy`
  }
  return 'Jesteś w normie! 🎉'
})

const calculateBMI = () => {
  if (!canCalculate.value) return

  const heightInMeters = height.value / 100
  const calculatedBMI = weight.value / (heightInMeters * heightInMeters)
  bmi.value = calculatedBMI.toFixed(1)

  if (calculatedBMI < 18.5) {
    category.value = 'Niedowaga'
    categoryClass.value = 'underweight'
    description.value = 'Twoja waga jest poniżej normy. Rozważ konsultację z dietetykiem, aby upewnić się, że dostarczasz organizmowi wszystkich niezbędnych składników odżywczych.'
  } else if (calculatedBMI < 25) {
    category.value = 'Waga prawidłowa'
    categoryClass.value = 'normal'
    description.value = 'Gratulacje! Twoja waga mieści się w zdrowym zakresie. Kontynuuj zbilansowaną dietę i regularną aktywność fizyczną.'
  } else if (calculatedBMI < 30) {
    category.value = 'Nadwaga'
    categoryClass.value = 'overweight'
    description.value = 'Twoja waga jest nieco powyżej normy. Niewielkie zmiany w diecie i zwiększenie aktywności fizycznej mogą pomóc osiągnąć zdrowszą wagę.'
  } else {
    category.value = 'Otyłość'
    categoryClass.value = 'obese'
    description.value = 'Twoja waga znacznie przekracza normę. Zalecana jest konsultacja z lekarzem lub dietetykiem w celu opracowania planu redukcji masy ciała.'
  }
}
</script>

<style scoped>
.bmi-page {
  min-height: 100vh;
  background: var(--gray-50);
}

/* Header */
.page-header {
  background: linear-gradient(135deg, #0891b2, #0e7490);
  color: white;
  padding: 40px 0 60px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 24px;
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: white;
}

.page-header h1 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
}

/* Content */
.page-content {
  padding: 48px 0 80px;
}

.calculator-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

/* Calculator Card */
.calculator-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-md);
}

.calc-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--gray-700);
  font-size: 0.9375rem;
}

.form-group input {
  padding: 14px 18px;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: 1.125rem;
  transition: all var(--transition-fast);
}

.form-group input:focus {
  outline: none;
  border-color: #0891b2;
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.calc-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  background: linear-gradient(135deg, #0891b2, #0e7490);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-top: 8px;
}

.calc-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.calc-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Results */
.results {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid var(--gray-100);
}

.bmi-display {
  margin-bottom: 16px;
}

.bmi-value {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
}

.bmi-value.underweight { color: #2563eb; }
.bmi-value.normal { color: #16a34a; }
.bmi-value.overweight { color: #ea580c; }
.bmi-value.obese { color: #dc2626; }

.bmi-label {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-top: 8px;
}

.category-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.9375rem;
  margin-bottom: 20px;
}

.category-badge.underweight {
  background: #dbeafe;
  color: #1e40af;
}

.category-badge.normal {
  background: #dcfce7;
  color: #166534;
}

.category-badge.overweight {
  background: #ffedd5;
  color: #c2410c;
}

.category-badge.obese {
  background: #fee2e2;
  color: #b91c1c;
}

.result-description {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 32px;
  font-size: 0.9375rem;
}

/* BMI Scale */
.bmi-scale {
  margin-bottom: 32px;
}

.scale-bar {
  display: flex;
  height: 16px;
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
}

.scale-segment {
  flex: 1;
}

.scale-segment.underweight { background: #3b82f6; }
.scale-segment.normal { background: #22c55e; }
.scale-segment.overweight { background: #f97316; }
.scale-segment.obese { background: #ef4444; }

.scale-indicator {
  position: absolute;
  top: -8px;
  transform: translateX(-50%);
  z-index: 10;
}

.indicator-arrow {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid var(--gray-800);
}

.scale-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.75rem;
  color: var(--gray-500);
}

/* Ideal Weight */
.ideal-weight {
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.ideal-weight h4 {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-bottom: 4px;
}

.ideal-weight p {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 8px;
}

.ideal-note {
  font-size: 0.8125rem;
  color: var(--gray-500);
}

/* Info Section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-md);
}

.info-card h3 {
  font-size: 1.125rem;
  margin-bottom: 16px;
}

.info-card p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 0.9375rem;
}

.info-card p:last-child {
  margin-bottom: 0;
}

.info-card.warning {
  border-left: 4px solid #f59e0b;
}

/* Categories List */
.categories-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: var(--radius-md);
}

.cat-item.underweight { background: #dbeafe; }
.cat-item.normal { background: #dcfce7; }
.cat-item.overweight { background: #ffedd5; }
.cat-item.obese { background: #fee2e2; }

.cat-range {
  font-weight: 600;
  font-size: 0.875rem;
}

.cat-name {
  color: var(--gray-600);
  font-size: 0.875rem;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .calculator-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .calculator-card {
    padding: 28px;
  }
  
  .bmi-value {
    font-size: 3rem;
  }
}
</style>

