<template>
  <div class="step step-diet-summary" :class="{ compact: isCompact }">
    <div class="step-header">
      <div class="step-icon">🥗</div>
      <div class="step-header-text">
        <h3>Dieta i preferencje</h3>
        <p>Ostatni krok! Powiedz nam o swoich preferencjach żywieniowych.</p>
      </div>
    </div>
    
    <div class="form-section">
      <label class="form-label section-label">Jaki typ diety stosujesz?</label>
      <div class="radio-group">
        <div 
          v-for="diet in dietTypes" 
          :key="diet.id"
          class="radio-item"
          :class="{ selected: localData.dietType === diet.id }"
          @click="localData.dietType = diet.id"
        >
          <input type="radio" v-model="localData.dietType" :value="diet.id" />
          <label>
            <span class="option-title">{{ diet.label }}</span>
            <span class="option-desc">{{ diet.description }}</span>
          </label>
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <label class="form-label section-label">Czy masz jakieś alergie lub nietolerancje?</label>
      <div class="checkbox-group horizontal">
        <div 
          v-for="allergen in allergens" 
          :key="allergen.id"
          class="checkbox-item compact"
          :class="{ selected: isAllergenSelected(allergen.id) }"
          @click="toggleAllergen(allergen.id)"
        >
          <input 
            type="checkbox" 
            :checked="isAllergenSelected(allergen.id)"
          />
          <label>
            <span class="option-title">{{ allergen.label }}</span>
          </label>
        </div>
      </div>
    </div>
    
    <div class="form-section">
      <label class="form-label section-label">Dodatkowe uwagi (opcjonalne)</label>
      <textarea 
        class="form-input form-textarea"
        v-model="localData.notes"
        placeholder="Np. choroby przewlekłe, przyjmowane leki, specjalne wymagania dietetyczne..."
        rows="3"
      ></textarea>
    </div>
    
    <div class="summary-box">
      <div class="summary-icon">✨</div>
      <h4>Gotowe do analizy!</h4>
      <p>Kliknij "Zakończ analizę" aby otrzymać spersonalizowane rekomendacje żywieniowe.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { dietTypes, allergens } from '../../../data/symptoms.js'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  isCompact: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const localData = ref({
  dietType: props.modelValue.dietType || null,
  allergens: props.modelValue.allergens || [],
  notes: props.modelValue.notes || ''
})

const isAllergenSelected = (id) => localData.value.allergens.includes(id)

const toggleAllergen = (id) => {
  const index = localData.value.allergens.indexOf(id)
  if (index === -1) {
    localData.value.allergens.push(id)
  } else {
    localData.value.allergens.splice(index, 1)
  }
}

watch(localData, (newVal) => {
  emit('update:modelValue', { ...newVal })
}, { deep: true })
</script>

<style scoped>
.step-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.step-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.step-header-text h3 {
  font-size: 1.5rem;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.step-header-text p {
  color: var(--gray-500);
  font-size: 0.9375rem;
}

/* Compact mode */
.step.compact .step-header {
  margin-bottom: 16px;
}

.step.compact .step-icon {
  font-size: 2rem;
}

.step.compact .step-header-text h3 {
  font-size: 1.25rem;
}

.step.compact .step-header-text p {
  font-size: 0.875rem;
}

.form-section {
  margin-bottom: 24px;
}

.section-label {
  font-size: 0.9375rem;
  margin-bottom: 12px;
  color: var(--gray-800);
}

.checkbox-group.horizontal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.checkbox-item.compact {
  padding: 10px 14px;
  text-align: center;
}

.checkbox-item.compact .option-title {
  font-size: 0.875rem;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.summary-box {
  background: linear-gradient(135deg, var(--primary-50), var(--accent-50));
  border: 1px solid var(--primary-200);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
}

.summary-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.summary-box h4 {
  font-size: 1.125rem;
  color: var(--gray-900);
  margin-bottom: 6px;
}

.summary-box p {
  color: var(--gray-600);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .checkbox-group.horizontal {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .checkbox-group.horizontal {
    grid-template-columns: 1fr;
  }
}
</style>
