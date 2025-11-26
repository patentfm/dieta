<template>
  <div class="step step-symptoms" :class="{ compact: isCompact }">
    <div class="step-header">
      <div class="step-icon">{{ category.icon }}</div>
      <div class="step-header-text">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>
    
    <div class="symptoms-list">
      <div class="checkbox-group">
        <div 
          v-for="symptom in category.symptoms" 
          :key="symptom.id"
          class="checkbox-item"
          :class="{ selected: isSelected(symptom.id) }"
          @click="toggleSymptom(symptom.id)"
        >
          <input 
            type="checkbox" 
            :checked="isSelected(symptom.id)"
            @change="toggleSymptom(symptom.id)"
          />
          <label>
            <span class="option-title">{{ symptom.label }}</span>
            <span class="option-desc">{{ symptom.description }}</span>
          </label>
        </div>
      </div>
    </div>
    
    <div class="selection-count" v-if="localData.length > 0">
      <span class="count-badge">{{ localData.length }}</span>
      objawów wybranych
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { symptomCategories } from '../../../data/symptoms.js'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  isCompact: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const category = symptomCategories.musclesBones

const localData = ref([...props.modelValue])

const isSelected = (id) => localData.value.includes(id)

const toggleSymptom = (id) => {
  const index = localData.value.indexOf(id)
  if (index === -1) {
    localData.value.push(id)
  } else {
    localData.value.splice(index, 1)
  }
}

watch(localData, (newVal) => {
  emit('update:modelValue', [...newVal])
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

/* Compact mode for steps 2+ */
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

.symptoms-list {
  margin-bottom: 16px;
}

.selection-count {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--gray-600);
  font-size: 0.9375rem;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--primary-500);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.875rem;
}
</style>
