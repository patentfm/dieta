<template>
  <div class="step step-basic-info">
    <div class="step-header">
      <div class="step-icon">👤</div>
      <div class="step-header-text">
        <h3>Podstawowe dane</h3>
        <p>Potrzebujemy kilku informacji, aby dostosować analizę do Twojego profilu.</p>
      </div>
    </div>
    
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label">Wiek</label>
        <input 
          type="number" 
          class="form-input" 
          placeholder="Twój wiek"
          v-model="localData.age"
          min="12"
          max="120"
        />
      </div>
      
      <div class="form-group">
        <label class="form-label">Płeć</label>
        <div class="radio-group horizontal">
          <div 
            class="radio-item"
            :class="{ selected: localData.gender === 'female' }"
            @click="localData.gender = 'female'"
          >
            <input type="radio" v-model="localData.gender" value="female" />
            <label>
              <span class="option-title">👩 Kobieta</span>
            </label>
          </div>
          <div 
            class="radio-item"
            :class="{ selected: localData.gender === 'male' }"
            @click="localData.gender = 'male'"
          >
            <input type="radio" v-model="localData.gender" value="male" />
            <label>
              <span class="option-title">👨 Mężczyzna</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Waga (kg)</label>
        <input 
          type="number" 
          class="form-input" 
          placeholder="Twoja waga"
          v-model="localData.weight"
          min="30"
          max="300"
        />
      </div>
      
      <div class="form-group">
        <label class="form-label">Wzrost (cm)</label>
        <input 
          type="number" 
          class="form-input" 
          placeholder="Twój wzrost"
          v-model="localData.height"
          min="100"
          max="250"
        />
      </div>
    </div>
    
    <div class="form-group full-width">
      <label class="form-label">Poziom aktywności fizycznej</label>
      <div class="radio-group">
        <div 
          v-for="level in activityLevels" 
          :key="level.id"
          class="radio-item"
          :class="{ selected: localData.activityLevel === level.id }"
          @click="localData.activityLevel = level.id"
        >
          <input type="radio" v-model="localData.activityLevel" :value="level.id" />
          <label>
            <span class="option-title">{{ level.label }}</span>
            <span class="option-desc">{{ level.description }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { activityLevels } from '../../../data/symptoms.js'

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
  age: props.modelValue.age || null,
  gender: props.modelValue.gender || null,
  weight: props.modelValue.weight || null,
  height: props.modelValue.height || null,
  activityLevel: props.modelValue.activityLevel || null
})

watch(localData, (newVal) => {
  emit('update:modelValue', { ...newVal })
}, { deep: true })
</script>

<style scoped>
.step-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
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

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.full-width {
  grid-column: 1 / -1;
}

.radio-group.horizontal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.radio-item {
  text-align: center;
}

.radio-group.horizontal .option-title {
  font-size: 1rem;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .radio-group.horizontal {
    grid-template-columns: 1fr;
  }
}
</style>
