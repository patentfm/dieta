<template>
  <section id="how-it-works" class="how-it-works">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Proces</span>
        <h2 class="section-title">Jak to działa?</h2>
        <p class="section-subtitle">
          Cztery proste kroki do odkrycia niedoborów żywieniowych i naturalnych sposobów ich uzupełnienia
        </p>
      </div>
      
      <div class="steps-container">
        <div class="steps-line"></div>
        
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="step-content">
            <div class="step-icon" :style="{ background: step.bgColor }">
              <span v-html="step.icon"></span>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="cta-wrapper">
        <a href="#form" class="btn btn-primary btn-lg">
          Rozpocznij teraz
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 11H3v10h6V11z"/>
      <path d="M21 3h-6v18h6V3z"/>
      <path d="M15 8H9v13h6V8z"/>
    </svg>`,
    title: 'Wypełnij formularz',
    description: 'Odpowiedz na pytania o swoje samopoczucie i objawy, które obserwujesz w swoim ciele.',
    bgColor: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))'
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
      <path d="M11 8v6"/>
      <path d="M8 11h6"/>
    </svg>`,
    title: 'Analiza objawów',
    description: 'Nasz algorytm analizuje Twoje odpowiedzi i identyfikuje potencjalne niedobory składników odżywczych.',
    bgColor: 'linear-gradient(135deg, var(--accent-100), var(--accent-200))'
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`,
    title: 'Rekomendacje produktów',
    description: 'Otrzymujesz listę naturalnych produktów spożywczych bogatych w składniki, których Ci brakuje.',
    bgColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)'
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>`,
    title: 'Przepisy i oszczędności',
    description: 'Dostajesz przepisy na dania z rekomendowanych produktów wraz z kalkulacją kosztów.',
    bgColor: 'linear-gradient(135deg, #fce7f3, #fbcfe8)'
  }
]
</script>

<style scoped>
.how-it-works {
  background: var(--gray-50);
  position: relative;
  overflow: hidden;
}

.how-it-works::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gray-200), transparent);
}

.steps-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.steps-line {
  position: absolute;
  top: 40px;
  left: 12.5%;
  width: 75%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-300), var(--accent-300), #93c5fd, #f9a8d4);
}

.step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-lg);
}

.step-number span {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.step-content {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  height: 100%;
}

.step:hover .step-content {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.step-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--gray-700);
}

.step-title {
  margin-bottom: 12px;
  color: var(--gray-900);
}

.step-description {
  font-size: 0.9375rem;
  color: var(--gray-500);
  line-height: 1.6;
}

.cta-wrapper {
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .steps-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .steps-line {
    display: none;
  }
}

@media (max-width: 640px) {
  .steps-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .step {
    flex-direction: row;
    text-align: left;
    gap: 20px;
  }
  
  .step-number {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 0;
  }
  
  .step-number span {
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
  
  .step-content {
    padding: 24px;
  }
  
  .step-icon {
    width: 56px;
    height: 56px;
    margin: 0 0 16px;
  }
}
</style>

