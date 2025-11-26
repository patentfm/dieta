<template>
  <section class="features">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Funkcje</span>
        <h2 class="section-title">Wszystko czego potrzebujesz</h2>
        <p class="section-subtitle">
          Kompleksowe narzędzie do analizy niedoborów i planowania zdrowej diety
        </p>
      </div>
      
      <div class="features-grid">
        <div 
          class="feature-card" 
          v-for="(feature, index) in features" 
          :key="index"
          :class="{ 'featured': feature.featured }"
        >
          <div class="feature-icon" :style="{ background: feature.bgColor }">
            <span v-html="feature.icon"></span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-tags" v-if="feature.tags">
            <span class="tag" v-for="tag in feature.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="features-cta">
        <div class="cta-card">
          <div class="cta-content">
            <h3>Gotowy odkryć swoje niedobory?</h3>
            <p>Wypełnij krótki formularz i otrzymaj spersonalizowane rekomendacje żywieniowe.</p>
          </div>
          <a href="#form" class="btn btn-accent btn-lg">
            Rozpocznij analizę
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>`,
    title: 'Szczegółowa analiza objawów',
    description: 'Ponad 50 objawów podzielonych na kategorie: energia, skóra, trawienie, nastrój i więcej.',
    bgColor: 'var(--primary-100)',
    tags: ['8 kategorii', '50+ objawów']
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`,
    title: 'Baza naturalnych produktów',
    description: 'Ponad 100 nieprzetworzone produkty spożywcze z dokładną zawartością składników.',
    bgColor: 'var(--accent-100)',
    tags: ['100+ produktów', 'Dane żywieniowe']
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`,
    title: 'Kalkulacja kosztów',
    description: 'Obliczamy koszt uzupełnienia niedoboru dla każdego produktu — wybierasz najtańsze opcje.',
    bgColor: '#dbeafe',
    tags: ['Ceny rynkowe', 'Ranking opłacalności']
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 18h.01"/>
      <path d="M12 18h.01"/>
    </svg>`,
    title: 'Przepisy i jadłospis',
    description: 'AI generuje przepisy z rekomendowanych produktów dopasowane do Twoich preferencji.',
    bgColor: '#fce7f3',
    tags: ['Przepisy AI', 'Personalizacja'],
    featured: true
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,
    title: 'Preferencje dietetyczne',
    description: 'Uwzględniamy alergeny, wegetarianizm, weganizm i inne ograniczenia dietetyczne.',
    bgColor: '#fef3c7',
    tags: ['Alergie', 'Wege/Wegan']
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`,
    title: 'Monitoring postępów',
    description: 'Śledź zmiany w objawach i obserwuj jak Twoje ciało reaguje na zmianę diety.',
    bgColor: '#e0e7ff',
    tags: ['Historia', 'Wykresy']
  }
]
</script>

<style scoped>
.features {
  background: var(--gray-50);
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gray-200), transparent);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.feature-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--gray-100);
  transition: all var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.feature-card.featured {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  border-color: transparent;
}

.feature-card.featured .feature-title,
.feature-card.featured .feature-description {
  color: white;
}

.feature-card.featured .feature-description {
  opacity: 0.9;
}

.feature-card.featured .feature-icon {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white;
}

.feature-card.featured .tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--gray-700);
}

.feature-title {
  font-size: 1.125rem;
  margin-bottom: 12px;
  color: var(--gray-900);
}

.feature-description {
  font-size: 0.9375rem;
  color: var(--gray-500);
  line-height: 1.6;
  margin-bottom: 16px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 12px;
  background: var(--gray-100);
  color: var(--gray-600);
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: var(--radius-full);
}

/* CTA Card */
.features-cta {
  max-width: 900px;
  margin: 0 auto;
}

.cta-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
}

.cta-content h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: var(--gray-900);
}

.cta-content p {
  color: var(--gray-500);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 32px;
  }
}
</style>

