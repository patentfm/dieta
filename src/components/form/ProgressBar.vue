<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>
    
    <div class="steps-indicator">
      <div 
        class="step-dot" 
        v-for="step in totalSteps" 
        :key="step"
        :class="{ 
          'active': step === currentStep, 
          'completed': step < currentStep 
        }"
        @click="$emit('goToStep', step)"
      >
        <span class="dot-number">{{ step }}</span>
        <span class="dot-label">{{ stepLabels[step - 1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    required: true
  }
})

defineEmits(['goToStep'])

const stepLabels = [
  'Dane',
  'Energia',
  'Skóra',
  'Trawienie',
  'Nastrój',
  'Mięśnie',
  'Odporność',
  'Dieta'
]

const progressPercent = computed(() => {
  return ((props.currentStep - 1) / (props.totalSteps - 1)) * 100
})
</script>

<style scoped>
.progress-container {
  margin-bottom: 48px;
}

.progress-bar {
  height: 6px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: 24px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
  border-radius: var(--radius-full);
  transition: width 0.4s ease;
}

.steps-indicator {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.step-dot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gray-100);
  border: 2px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--gray-400);
  transition: all var(--transition-base);
}

.dot-label {
  font-size: 0.75rem;
  color: var(--gray-400);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.step-dot:hover .dot-number {
  border-color: var(--primary-300);
  background: var(--primary-50);
}

.step-dot.active .dot-number {
  background: var(--primary-500);
  border-color: var(--primary-500);
  color: white;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
}

.step-dot.active .dot-label {
  color: var(--primary-600);
  font-weight: 600;
}

.step-dot.completed .dot-number {
  background: var(--primary-100);
  border-color: var(--primary-500);
  color: var(--primary-600);
}

.step-dot.completed .dot-label {
  color: var(--gray-600);
}

/* Responsive */
@media (max-width: 768px) {
  .dot-label {
    display: none;
  }
  
  .dot-number {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .dot-number {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }
}
</style>

