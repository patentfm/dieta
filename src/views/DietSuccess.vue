<template>
  <div class="success-page">
    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <h2>Generujemy Twój jadłospis...</h2>
        <p>To może potrwać do 30 sekund. Nasz AI dobiera przepisy idealne dla Twoich niedoborów.</p>
        <div class="loading-steps">
          <div class="step" :class="{ active: loadingStep >= 1, done: loadingStep > 1 }">
            <span class="step-icon">✓</span>
            <span>Weryfikacja płatności</span>
          </div>
          <div class="step" :class="{ active: loadingStep >= 2, done: loadingStep > 2 }">
            <span class="step-icon">✓</span>
            <span>Analiza niedoborów</span>
          </div>
          <div class="step" :class="{ active: loadingStep >= 3, done: loadingStep > 3 }">
            <span class="step-icon">✓</span>
            <span>Dobieranie przepisów</span>
          </div>
          <div class="step" :class="{ active: loadingStep >= 4 }">
            <span class="step-icon">✓</span>
            <span>Tworzenie listy zakupów</span>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <div class="error-icon">❌</div>
        <h2>Ups, coś poszło nie tak</h2>
        <p>{{ error }}</p>
        <button class="btn btn-primary" @click="retryGeneration">
          Spróbuj ponownie
        </button>
        <router-link to="/kontakt" class="btn btn-secondary">
          Skontaktuj się z nami
        </router-link>
      </div>

      <!-- Success State -->
      <div v-else-if="dietPlan" class="diet-content">
        <header class="diet-header">
          <div class="success-badge">
            <span class="badge-icon">🎉</span>
            <span>Płatność zakończona sukcesem!</span>
          </div>
          <h1>Twój Tygodniowy Plan Żywieniowy</h1>
          <p class="subtitle">Spersonalizowany jadłospis dopasowany do Twoich niedoborów</p>
        </header>

        <!-- Summary -->
        <div class="summary-card">
          <div class="summary-item">
            <span class="summary-icon">💰</span>
            <div>
              <span class="summary-label">Szacunkowy koszt</span>
              <span class="summary-value">{{ dietPlan.totalEstimatedCost }}</span>
            </div>
          </div>
          <div class="summary-item">
            <span class="summary-icon">🎯</span>
            <div>
              <span class="summary-label">Uzupełniane niedobory</span>
              <span class="summary-value">{{ dietPlan.nutritionSummary?.addressedDeficiencies?.length || 0 }}</span>
            </div>
          </div>
          <div class="summary-item">
            <span class="summary-icon">🍽️</span>
            <div>
              <span class="summary-label">Posiłków dziennie</span>
              <span class="summary-value">4</span>
            </div>
          </div>
        </div>

        <!-- Day tabs -->
        <div class="day-tabs">
          <button 
            v-for="(day, index) in dietPlan.weeklyPlan" 
            :key="index"
            class="day-tab"
            :class="{ active: activeDay === index }"
            @click="activeDay = index"
          >
            {{ day.day.slice(0, 3) }}
          </button>
        </div>

        <!-- Day meals -->
        <div class="day-meals" v-if="currentDay">
          <h2>{{ currentDay.day }}</h2>
          
          <div class="meals-grid">
            <div class="meal-card" v-for="(meal, mealType) in currentDay.meals" :key="mealType">
              <div class="meal-header">
                <span class="meal-type">{{ getMealLabel(mealType) }}</span>
                <span class="meal-time">{{ meal.prepTime }}</span>
              </div>
              <h3>{{ meal.name }}</h3>
              
              <div class="meal-ingredients">
                <h4>Składniki:</h4>
                <ul>
                  <li v-for="ing in meal.ingredients" :key="ing">{{ ing }}</li>
                </ul>
              </div>
              
              <div class="meal-instructions">
                <h4>Przygotowanie:</h4>
                <p>{{ meal.instructions }}</p>
              </div>
              
              <div class="meal-nutrients" v-if="meal.nutrients?.length">
                <span class="nutrient-tag" v-for="n in meal.nutrients" :key="n">{{ n }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Shopping List -->
        <div class="shopping-section">
          <h2>🛒 Lista zakupów na cały tydzień</h2>
          <div class="shopping-list">
            <div class="shopping-item" v-for="item in dietPlan.shoppingList" :key="item.item">
              <span class="item-name">{{ item.item }}</span>
              <span class="item-amount">{{ item.amount }}</span>
              <span class="item-price">{{ item.estimatedPrice }}</span>
            </div>
          </div>
          <div class="shopping-total">
            <span>Razem:</span>
            <strong>{{ dietPlan.totalEstimatedCost }}</strong>
          </div>
        </div>

        <!-- Tips -->
        <div class="tips-section" v-if="dietPlan.nutritionSummary?.tips?.length">
          <h2>💡 Wskazówki</h2>
          <ul>
            <li v-for="tip in dietPlan.nutritionSummary.tips" :key="tip">{{ tip }}</li>
          </ul>
        </div>

        <!-- Actions -->
        <div class="actions">
          <button class="btn btn-primary btn-lg" @click="downloadPDF">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Pobierz PDF
          </button>
          <button class="btn btn-secondary" @click="saveDiet">
            Zapisz w przeglądarce
          </button>
        </div>
      </div>
    </div>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '../components/landing/Footer.vue'

const route = useRoute()

const loading = ref(true)
const loadingStep = ref(1)
const error = ref(null)
const dietPlan = ref(null)
const activeDay = ref(0)

const currentDay = computed(() => {
  return dietPlan.value?.weeklyPlan?.[activeDay.value]
})

const getMealLabel = (type) => {
  const labels = {
    breakfast: '🌅 Śniadanie',
    lunch: '☀️ Obiad',
    dinner: '🌙 Kolacja',
    snack: '🍎 Przekąska'
  }
  return labels[type] || type
}

onMounted(async () => {
  const sessionId = route.query.session_id
  
  if (!sessionId) {
    error.value = 'Brak identyfikatora sesji płatności'
    loading.value = false
    return
  }

  // Simulate loading steps
  const stepInterval = setInterval(() => {
    if (loadingStep.value < 4) {
      loadingStep.value++
    }
  }, 2000)

  try {
    const response = await fetch('/api/generate-diet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
    })

    clearInterval(stepInterval)
    loadingStep.value = 4

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || 'Błąd generowania diety')
    }

    const data = await response.json()
    dietPlan.value = data.dietPlan
    
    // Save to localStorage for later access
    localStorage.setItem('generatedDiet', JSON.stringify({
      dietPlan: data.dietPlan,
      generatedAt: data.generatedAt,
      sessionId
    }))

  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const retryGeneration = () => {
  loading.value = true
  loadingStep.value = 1
  error.value = null
  onMounted()
}

const downloadPDF = () => {
  alert('Funkcja generowania PDF będzie dostępna wkrótce!')
}

const saveDiet = () => {
  alert('Dieta została zapisana w przeglądarce!')
}
</script>

<style scoped>
.success-page {
  min-height: 100vh;
  background: var(--gray-50);
}

.container {
  max-width: 900px;
  padding: 40px 20px 80px;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 80px 20px;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 32px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-state h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.loading-state p {
  color: var(--gray-500);
  margin-bottom: 40px;
}

.loading-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--gray-100);
  border-radius: var(--radius-md);
  color: var(--gray-400);
  transition: all 0.3s ease;
}

.step.active {
  background: var(--primary-50);
  color: var(--primary-700);
}

.step.done {
  background: #dcfce7;
  color: #166534;
}

.step-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: currentColor;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0.3;
}

.step.active .step-icon,
.step.done .step-icon {
  opacity: 1;
}

/* Error State */
.error-state {
  text-align: center;
  padding: 80px 20px;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 24px;
}

.error-state h2 {
  margin-bottom: 12px;
}

.error-state p {
  color: var(--gray-500);
  margin-bottom: 32px;
}

.error-state .btn {
  margin: 0 8px;
}

/* Diet Content */
.diet-header {
  text-align: center;
  margin-bottom: 40px;
}

.success-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: #dcfce7;
  color: #166534;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 20px;
}

.diet-header h1 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.subtitle {
  color: var(--gray-500);
}

/* Summary Card */
.summary-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: white;
  border-radius: var(--radius-xl);
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: var(--shadow-md);
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.summary-icon {
  font-size: 2rem;
}

.summary-label {
  display: block;
  font-size: 0.75rem;
  color: var(--gray-500);
  text-transform: uppercase;
}

.summary-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-900);
}

/* Day Tabs */
.day-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.day-tab {
  padding: 12px 20px;
  background: white;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-weight: 600;
  color: var(--gray-600);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.day-tab:hover {
  border-color: var(--primary-300);
}

.day-tab.active {
  background: var(--primary-500);
  border-color: var(--primary-500);
  color: white;
}

/* Day Meals */
.day-meals h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.meals-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.meal-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--shadow-md);
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.meal-type {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-600);
}

.meal-time {
  font-size: 0.75rem;
  color: var(--gray-400);
  background: var(--gray-100);
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

.meal-card h3 {
  font-size: 1.125rem;
  margin-bottom: 16px;
}

.meal-ingredients h4,
.meal-instructions h4 {
  font-size: 0.75rem;
  color: var(--gray-500);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.meal-ingredients ul {
  list-style: none;
  margin-bottom: 16px;
}

.meal-ingredients li {
  padding: 4px 0;
  font-size: 0.875rem;
  color: var(--gray-700);
}

.meal-instructions p {
  font-size: 0.875rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 16px;
}

.meal-nutrients {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nutrient-tag {
  padding: 4px 10px;
  background: var(--primary-50);
  color: var(--primary-700);
  font-size: 0.6875rem;
  border-radius: var(--radius-full);
}

/* Shopping Section */
.shopping-section {
  background: white;
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: var(--shadow-md);
}

.shopping-section h2 {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.shopping-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.shopping-item {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  padding: 12px 16px;
  background: var(--gray-50);
  border-radius: var(--radius-md);
}

.item-name {
  font-weight: 500;
}

.item-amount {
  color: var(--gray-500);
}

.item-price {
  font-weight: 600;
  color: var(--primary-600);
}

.shopping-total {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: var(--primary-50);
  border-radius: var(--radius-md);
  font-size: 1.125rem;
}

.shopping-total strong {
  color: var(--primary-700);
}

/* Tips */
.tips-section {
  background: #fef3c7;
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 32px;
}

.tips-section h2 {
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.tips-section ul {
  list-style: none;
}

.tips-section li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: #92400e;
}

.tips-section li::before {
  content: "→";
  position: absolute;
  left: 0;
}

/* Actions */
.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .summary-card {
    grid-template-columns: 1fr;
  }
  
  .meals-grid {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .actions .btn {
    width: 100%;
  }
}
</style>

