<template>
  <section class="results-page">
    <div class="container">
      <!-- Header with Health Score -->
      <div class="results-header">
        <button class="back-btn" @click="$emit('back')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Powrót do formularza
        </button>
        
        <div class="header-content">
          <h1>Twoje wyniki analizy</h1>
          <p class="results-date">{{ formattedDate }}</p>
        </div>
      </div>

      <!-- Summary Card -->
      <div class="summary-card" :class="results.summary.type">
        <div class="summary-icon">
          <template v-if="results.summary.type === 'success'">✅</template>
          <template v-else-if="results.summary.type === 'warning'">⚠️</template>
          <template v-else>ℹ️</template>
        </div>
        <div class="summary-content">
          <h2>{{ results.summary.title }}</h2>
          <p>{{ results.summary.text }}</p>
        </div>
        <div class="health-score">
          <div class="score-circle" :style="{ '--score': results.healthScore }">
            <span class="score-value">{{ results.healthScore }}</span>
            <span class="score-label">/ 100</span>
          </div>
          <span class="score-text">Wynik zdrowia</span>
        </div>
      </div>

      <!-- Statistics -->
      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-number">{{ results.totalSymptoms }}</span>
          <span class="stat-label">Zgłoszonych objawów</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ results.deficiencies.length }}</span>
          <span class="stat-label">Potencjalnych niedoborów</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ totalRecommendedFoods }}</span>
          <span class="stat-label">Rekomendowanych produktów</span>
        </div>
      </div>

      <!-- Deficiencies Section -->
      <div class="section" v-if="results.deficiencies.length > 0">
        <div class="section-header">
          <h2>Wykryte niedobory</h2>
          <p>Na podstawie Twoich objawów, te składniki mogą wymagać uwagi</p>
        </div>
        
        <div class="deficiencies-grid">
          <div 
            class="deficiency-card" 
            v-for="deficiency in results.deficiencies" 
            :key="deficiency.id"
            :class="deficiency.severity.level"
          >
            <div class="deficiency-header">
              <span class="deficiency-icon">{{ deficiency.icon }}</span>
              <div class="deficiency-info">
                <h3>{{ deficiency.name }}</h3>
                <span class="severity-badge" :style="{ background: deficiency.severity.color }">
                  {{ deficiency.severity.label }} ({{ deficiency.symptomCount }} objawów)
                </span>
              </div>
            </div>
            
            <p class="deficiency-description">{{ deficiency.description }}</p>
            
            <div class="symptoms-list">
              <span class="symptoms-label">Twoje objawy:</span>
              <div class="symptom-tags">
                <!-- Show limited or all symptoms -->
                <template v-if="expandedDeficiencies[deficiency.id]">
                  <span class="symptom-tag" v-for="symptom in deficiency.symptoms" :key="symptom">
                    {{ symptom }}
                  </span>
                </template>
                <template v-else>
                  <span class="symptom-tag" v-for="symptom in deficiency.symptoms.slice(0, 4)" :key="symptom">
                    {{ symptom }}
                  </span>
                  <button 
                    class="symptom-tag more" 
                    v-if="deficiency.symptoms.length > 4"
                    @click="expandedDeficiencies[deficiency.id] = true"
                  >
                    +{{ deficiency.symptoms.length - 4 }} więcej
                  </button>
                </template>
              </div>
            </div>

            <div class="risk-groups" v-if="deficiency.riskGroups.length > 0">
              <span class="risk-label">Grupy ryzyka:</span>
              <span class="risk-text">{{ deficiency.riskGroups.join(', ') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Food Recommendations Section -->
      <div class="section" v-if="groupedRecommendations.length > 0">
        <div class="section-header">
          <h2>Rekomendowane produkty</h2>
          <p>Naturalne źródła składników, których Ci brakuje - posortowane od najtańszych</p>
        </div>

        <!-- Grouped by deficiency -->
        <div 
          class="nutrient-row" 
          v-for="(group, index) in groupedRecommendations" 
          :key="group.nutrientKey"
          :class="group.severity"
        >
          <div class="nutrient-row-header">
            <div class="nutrient-badge" :class="group.severity">
              <span class="nutrient-icon">{{ group.icon }}</span>
              <span class="nutrient-name">{{ group.name }}</span>
            </div>
            <button 
              class="symptom-toggle"
              @click="toggleRecommendationSymptoms(group.nutrientKey)"
            >
              <template v-if="!expandedRecommendationSymptoms[group.nutrientKey]">
                <span>{{ group.symptomCount }} objawów wskazuje na ten niedobór</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </template>
              <template v-else>
                <div class="expanded-symptoms">
                  <span 
                    class="mini-symptom" 
                    v-for="symptom in group.symptoms" 
                    :key="symptom"
                  >{{ symptom }}</span>
                </div>
              </template>
            </button>
          </div>
          
          <div class="nutrient-products">
            <!-- Top 3 products -->
            <div class="top-products">
              <div 
                class="food-card" 
                v-for="(food, foodIndex) in group.topFoods" 
                :key="food.id"
              >
                <div class="food-rank" :class="{ 'rank-1': foodIndex === 0, 'rank-2': foodIndex === 1, 'rank-3': foodIndex === 2 }">
                  {{ foodIndex + 1 }}
                </div>
                <div class="food-content">
                  <h4>{{ food.name }}</h4>
                  <span class="food-category">{{ getCategoryLabel(food.category) }}</span>
                  
                  <div class="food-stats">
                    <div class="stat">
                      <span class="stat-value">{{ food.nutrients[group.nutrientKey] }}{{ getNutrientUnit(group.nutrientKey) }}</span>
                      <span class="stat-label">/100g</span>
                    </div>
                    <div class="stat">
                      <span class="stat-value">{{ food.percentDV }}%</span>
                      <span class="stat-label">dz. dawki</span>
                    </div>
                    <div class="stat highlight">
                      <span class="stat-value">{{ food.costPerDV }} zł</span>
                      <span class="stat-label">za dz. dawkę</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Other sources -->
            <div class="other-sources" v-if="group.otherFoods.length > 0">
              <span class="other-label">Inne opłacalne źródła (cena za dzienną dawkę):</span>
              <div class="other-list">
                <span 
                  class="other-item" 
                  v-for="food in group.otherFoods" 
                  :key="food.id"
                  :title="`${food.nutrients[group.nutrientKey]}${getNutrientUnit(group.nutrientKey)}/100g`"
                >
                  {{ food.name }} <small>({{ food.costPerDV }} zł/dz.)</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Deficiencies -->
      <div class="no-deficiencies" v-if="results.deficiencies.length === 0">
        <div class="success-illustration">🎉</div>
        <h2>Świetna wiadomość!</h2>
        <p>Nie wykryliśmy wyraźnych oznak niedoborów żywieniowych na podstawie Twoich odpowiedzi.</p>
        <p>Pamiętaj jednak, że ta analiza ma charakter orientacyjny. Regularne badania krwi są najlepszym sposobem na monitorowanie stanu odżywienia.</p>
      </div>

      <!-- Disclaimer -->
      <div class="disclaimer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>
          <strong>Ważne:</strong> Ta analiza ma charakter informacyjny i nie zastępuje badań laboratoryjnych ani porady lekarza. 
          W przypadku uporczywych objawów skonsultuj się ze specjalistą i wykonaj odpowiednie badania krwi.
        </p>
      </div>

      <!-- Actions -->
      <div class="results-actions">
        <button class="btn btn-secondary" @click="$emit('back')">
          Wypełnij ponownie
        </button>
        <button class="btn btn-secondary" @click="saveResults">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          Zapisz wyniki
        </button>
        <button class="btn btn-primary" @click="downloadResults">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Pobierz wyniki (PDF)
        </button>
      </div>

      <!-- Diet Planning CTA Hero -->
      <div class="diet-cta-hero">
        <div class="cta-content">
          <div class="cta-icon">🥗</div>
          <h2>Chcesz indywidualny plan żywieniowy?</h2>
          <p>
            Na podstawie Twoich niedoborów możemy przygotować spersonalizowany jadłospis 
            z przepisami i listą zakupów. Nasz AI dobierze dania bogate w składniki, 
            których Ci brakuje, uwzględniając Twój budżet i preferencje.
          </p>
          <div class="cta-features">
            <span class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Przepisy dopasowane do niedoborów
            </span>
            <span class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Lista zakupów z cenami
            </span>
            <span class="cta-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Tygodniowy jadłospis
            </span>
          </div>
          <button class="btn btn-accent btn-lg">
            Stwórz mój plan żywieniowy
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <div class="cta-decoration">
          <div class="floating-food f1">🥑</div>
          <div class="floating-food f2">🥬</div>
          <div class="floating-food f3">🍊</div>
          <div class="floating-food f4">🥜</div>
        </div>
      </div>
    </div>

    <!-- Save Results Popup -->
    <Transition name="fade">
      <div class="popup-overlay" v-if="showSavePopup" @click.self="showSavePopup = false">
        <div class="popup-content">
          <button class="popup-close" @click="showSavePopup = false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="popup-icon">✅</div>
          <h3>Wyniki zapisane!</h3>
          <p>Twoje wyniki zostały zapisane w przeglądarce. Możesz do nich wrócić w dowolnym momencie.</p>
          <div class="popup-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <span>Kliknij <strong>"Zobacz poprzednie wyniki"</strong> samej górze strony głównej, aby je znów otworzyć.</span>
          </div>
          <button class="btn btn-primary" @click="showSavePopup = false">Rozumiem</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { categoryLabels, nutrientInfo, getCheapestFoodsForNutrient } from '../../data/foods.js'
import { symptomCategories } from '../../data/symptoms.js'

const props = defineProps({
  results: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['back'])

const showSavePopup = ref(false)
const expandedDeficiencies = reactive({})
const expandedRecommendationSymptoms = reactive({})

const formattedDate = computed(() => {
  return new Date().toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const totalRecommendedFoods = computed(() => {
  const allFoods = new Set()
  groupedRecommendations.value.forEach(group => {
    group.topFoods.forEach(f => allFoods.add(f.id))
    group.otherFoods.forEach(f => allFoods.add(f.id))
  })
  return allFoods.size
})

// Group recommendations by nutrient/deficiency
const groupedRecommendations = computed(() => {
  return props.results.deficiencies
    .filter(d => d.nutrientKey && d.foods.length > 0)
    .map(deficiency => {
      const allFoods = getCheapestFoodsForNutrient(deficiency.nutrientKey, 10)
      return {
        nutrientKey: deficiency.nutrientKey,
        name: deficiency.name,
        icon: deficiency.icon,
        severity: deficiency.severity.level,
        symptomCount: deficiency.symptomCount,
        symptoms: deficiency.symptoms,
        topFoods: allFoods.slice(0, 3),
        otherFoods: allFoods.slice(3, 8)
      }
    })
})

const toggleRecommendationSymptoms = (nutrientKey) => {
  expandedRecommendationSymptoms[nutrientKey] = !expandedRecommendationSymptoms[nutrientKey]
}

const getCategoryLabel = (category) => {
  return categoryLabels[category] || category
}

const getNutrientName = (key) => {
  return nutrientInfo[key]?.name || key
}

const getNutrientUnit = (key) => {
  return nutrientInfo[key]?.unit || ''
}

const saveResults = () => {
  // Save to localStorage
  const dataToSave = {
    results: props.results,
    savedAt: new Date().toISOString()
  }
  localStorage.setItem('nutriScanResults', JSON.stringify(dataToSave))
  
  // Set cookie (expires in 30 days)
  const expires = new Date()
  expires.setDate(expires.getDate() + 30)
  document.cookie = `nutriScanHasResults=true; expires=${expires.toUTCString()}; path=/`
  
  // Show popup
  showSavePopup.value = true
}

const downloadResults = () => {
  // In a real app, this would generate a PDF
  alert('Funkcja generowania PDF będzie dostępna wkrótce!')
}
</script>

<style scoped>
.results-page {
  min-height: 100vh;
  background: var(--gray-50);
  padding: 40px 0 80px;
}

/* Header */
.results-header {
  margin-bottom: 32px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  color: var(--gray-600);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  margin-bottom: 24px;
}

.back-btn:hover {
  background: var(--gray-50);
  border-color: var(--gray-300);
}

.header-content h1 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.results-date {
  color: var(--gray-500);
}

/* Summary Card */
.summary-card {
  display: flex;
  align-items: center;
  gap: 24px;
  background: white;
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--gray-300);
}

.summary-card.success {
  border-left-color: var(--primary-500);
  background: linear-gradient(135deg, white, var(--primary-50));
}

.summary-card.warning {
  border-left-color: var(--accent-500);
  background: linear-gradient(135deg, white, var(--accent-50));
}

.summary-card.info {
  border-left-color: var(--info);
  background: linear-gradient(135deg, white, #eff6ff);
}

.summary-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.summary-content {
  flex: 1;
}

.summary-content h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.summary-content p {
  color: var(--gray-600);
  font-size: 1rem;
  line-height: 1.6;
}

.health-score {
  text-align: center;
  flex-shrink: 0;
}

.score-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(
    var(--primary-500) calc(var(--score) * 1%),
    var(--gray-200) calc(var(--score) * 1%)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 8px;
}

.score-circle::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
}

.score-value {
  position: relative;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
}

.score-label {
  position: relative;
  font-size: 0.75rem;
  color: var(--gray-400);
}

.score-text {
  font-size: 0.75rem;
  color: var(--gray-500);
  font-weight: 500;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}

.stat-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-600);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray-500);
}

/* Sections */
.section {
  margin-bottom: 48px;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.section-header p {
  color: var(--gray-500);
}

/* Deficiencies Grid */
.deficiencies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.deficiency-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--gray-300);
  transition: all var(--transition-base);
}

.deficiency-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.deficiency-card.high {
  border-left-color: #ef4444;
}

.deficiency-card.medium {
  border-left-color: #f59e0b;
}

.deficiency-card.low {
  border-left-color: #22c55e;
}

.deficiency-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.deficiency-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.deficiency-info h3 {
  font-size: 1.125rem;
  margin-bottom: 6px;
}

.severity-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

.deficiency-description {
  color: var(--gray-600);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.symptoms-list {
  margin-bottom: 12px;
}

.symptoms-label {
  display: block;
  font-size: 0.75rem;
  color: var(--gray-500);
  margin-bottom: 8px;
}

.symptom-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.symptom-tag {
  padding: 4px 10px;
  background: var(--gray-100);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--gray-600);
}

button.symptom-tag.more {
  background: var(--primary-100);
  color: var(--primary-700);
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: all var(--transition-fast);
}

button.symptom-tag.more:hover {
  background: var(--primary-200);
}

.risk-groups {
  font-size: 0.8125rem;
  color: var(--gray-500);
}

.risk-label {
  font-weight: 500;
}

/* ===== Nutrient Row Layout ===== */
.nutrient-row {
  background: white;
  border-radius: var(--radius-xl);
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border-left: 5px solid var(--gray-300);
}

.nutrient-row.high {
  border-left-color: #ef4444;
  background: linear-gradient(135deg, white 0%, #fef2f2 100%);
}

.nutrient-row.medium {
  border-left-color: #f59e0b;
  background: linear-gradient(135deg, white 0%, #fffbeb 100%);
}

.nutrient-row.low {
  border-left-color: #22c55e;
  background: linear-gradient(135deg, white 0%, #f0fdf4 100%);
}

.nutrient-row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--gray-100);
}

.nutrient-badge {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nutrient-icon {
  font-size: 1.75rem;
}

.nutrient-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-900);
}

.symptom-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--gray-100);
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  color: var(--gray-600);
  cursor: pointer;
  transition: all var(--transition-fast);
  max-width: 60%;
  text-align: left;
}

.symptom-toggle:hover {
  background: var(--gray-200);
}

.symptom-toggle svg {
  flex-shrink: 0;
}

.expanded-symptoms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mini-symptom {
  padding: 3px 8px;
  background: white;
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
}

.nutrient-products {
  padding: 24px;
}

.top-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
}

.food-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 20px;
  border: 1px solid var(--gray-100);
  position: relative;
  transition: all var(--transition-base);
}

.food-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-200);
}

.food-rank {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 32px;
  height: 32px;
  background: var(--gray-500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: var(--shadow-md);
}

.food-rank.rank-1 {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.food-rank.rank-2 {
  background: linear-gradient(135deg, #9ca3af, #6b7280);
}

.food-rank.rank-3 {
  background: linear-gradient(135deg, #d97706, #b45309);
}

.food-content h4 {
  font-size: 1rem;
  margin-bottom: 4px;
  color: var(--gray-900);
}

.food-category {
  font-size: 0.75rem;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.food-stats {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--gray-100);
}

.food-stats .stat {
  flex: 1;
  text-align: center;
}

.food-stats .stat-value {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--gray-900);
}

.food-stats .stat-label {
  font-size: 0.625rem;
  color: var(--gray-400);
  text-transform: uppercase;
}

.food-stats .stat.highlight {
  background: var(--primary-50);
  margin: -12px -8px -12px -8px;
  padding: 12px 8px;
  border-radius: var(--radius-md);
}

.food-stats .stat.highlight .stat-value {
  color: var(--primary-700);
}

/* Other Sources */
.other-sources {
  background: var(--gray-50);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.other-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}

.other-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.other-item {
  padding: 6px 12px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  color: var(--gray-700);
  cursor: default;
  transition: all var(--transition-fast);
}

.other-item:hover {
  border-color: var(--primary-300);
  background: var(--primary-50);
}

.other-item small {
  color: var(--primary-600);
  font-weight: 500;
}

/* No Deficiencies */
.no-deficiencies {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.success-illustration {
  font-size: 4rem;
  margin-bottom: 24px;
}

.no-deficiencies h2 {
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: var(--primary-600);
}

.no-deficiencies p {
  color: var(--gray-600);
  max-width: 500px;
  margin: 0 auto 12px;
}

/* Disclaimer */
.disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  margin-bottom: 32px;
}

.disclaimer svg {
  flex-shrink: 0;
  color: #d97706;
  margin-top: 2px;
}

.disclaimer p {
  color: #92400e;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
}

/* Actions */
.results-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
}

/* Diet CTA Hero */
.diet-cta-hero {
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
  border-radius: var(--radius-xl);
  padding: 48px;
  position: relative;
  overflow: hidden;
  color: white;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.cta-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.diet-cta-hero h2 {
  color: white;
  font-size: 1.75rem;
  margin-bottom: 16px;
}

.diet-cta-hero p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.0625rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.cta-features {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.95);
}

.cta-feature svg {
  color: var(--accent-400);
}

.cta-decoration {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  pointer-events: none;
}

.floating-food {
  position: absolute;
  font-size: 2.5rem;
  animation: float 4s ease-in-out infinite;
  opacity: 0.8;
}

.f1 { top: 20%; right: 20%; animation-delay: 0s; }
.f2 { top: 60%; right: 40%; animation-delay: 0.5s; }
.f3 { top: 30%; right: 60%; animation-delay: 1s; }
.f4 { top: 70%; right: 15%; animation-delay: 1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Popup */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.popup-content {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: var(--shadow-2xl);
}

.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  transition: all var(--transition-fast);
}

.popup-close:hover {
  background: var(--gray-100);
  color: var(--gray-600);
}

.popup-icon {
  font-size: 4rem;
  margin-bottom: 16px;
}

.popup-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.popup-content > p {
  color: var(--gray-600);
  margin-bottom: 24px;
}

.popup-info {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--primary-50);
  border-radius: var(--radius-md);
  padding: 16px;
  margin-bottom: 24px;
  text-align: left;
}

.popup-info svg {
  flex-shrink: 0;
  color: var(--primary-600);
  margin-top: 2px;
}

.popup-info span {
  font-size: 0.875rem;
  color: var(--primary-800);
}

/* Transitions */
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
  .top-products {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .top-products .food-card:last-child {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .summary-card {
    flex-direction: column;
    text-align: center;
  }
  
  .health-score {
    order: -1;
    margin-bottom: 16px;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .deficiencies-grid {
    grid-template-columns: 1fr;
  }
  
  .nutrient-row-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .symptom-toggle {
    max-width: 100%;
  }
  
  .top-products {
    grid-template-columns: 1fr;
  }
  
  .top-products .food-card:last-child {
    max-width: 100%;
  }
  
  .food-stats {
    flex-wrap: wrap;
  }
  
  .food-stats .stat {
    flex: 1 1 30%;
  }
  
  .results-actions {
    flex-direction: column;
  }
  
  .results-actions .btn {
    width: 100%;
  }
  
  .diet-cta-hero {
    padding: 32px 24px;
  }
  
  .cta-decoration {
    display: none;
  }
  
  .cta-features {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
