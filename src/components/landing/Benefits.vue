<template>
  <section id="benefits" class="benefits">
    <div class="container">
      <div class="benefits-grid">
        <div class="benefits-content">
          <span class="section-badge">Korzyści</span>
          <h2 class="section-title">Dlaczego naturalne produkty zamiast suplementów?</h2>
          <p class="benefits-description">
            Suplementy diety często są drogie i słabo przyswajalne. Naturalne produkty 
            spożywcze zawierają składniki w formie, którą Twój organizm najlepiej wykorzystuje.
          </p>
          
          <ul class="benefits-list">
            <li v-for="(benefit, index) in benefitsList" :key="index">
              <div class="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>
        
        <div class="benefits-cards">
          <div class="benefit-card" v-for="(card, index) in cards" :key="index">
            <div class="card-icon" :style="{ background: card.bgColor }">
              <span v-html="card.icon"></span>
            </div>
            <div class="card-content">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="benefits-decoration">
      <div class="decoration-circle"></div>
    </div>
  </section>
</template>

<script setup>
const benefitsList = [
  'Lepsza przyswajalność składników odżywczych',
  'Niższe koszty w porównaniu do suplementów',
  'Brak ryzyka przedawkowania',
  'Dodatkowe korzyści z błonnika i antyoksydantów',
  'Naturalne współdziałanie składników'
]

const cards = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`,
    title: 'Naturalne źródła',
    description: 'Produkty nieprzetworzone z wysoką zawartością składników odżywczych',
    bgColor: 'var(--primary-100)'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 8l-8 8"/>
      <path d="M8 8l8 8"/>
    </svg>`,
    title: 'Oszczędność pieniędzy',
    description: 'Obliczamy koszt za gram składnika — wybierasz najtańsze opcje',
    bgColor: 'var(--accent-100)'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,
    title: 'Personalizacja',
    description: 'Rekomendacje dopasowane do Twoich objawów i preferencji dietetycznych',
    bgColor: '#dbeafe'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>`,
    title: 'Bezpieczeństwo',
    description: 'Brak ryzyka przedawkowania — jedzenie reguluje się samo',
    bgColor: '#fce7f3'
  }
]
</script>

<style scoped>
.benefits {
  position: relative;
  overflow: hidden;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits-content {
  max-width: 520px;
}

.benefits-content .section-badge {
  margin-bottom: 16px;
}

.benefits-content .section-title {
  text-align: left;
  margin-bottom: 20px;
}

.benefits-description {
  font-size: 1.125rem;
  color: var(--gray-600);
  margin-bottom: 32px;
  line-height: 1.7;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1rem;
  color: var(--gray-700);
}

.benefit-icon {
  width: 28px;
  height: 28px;
  background: var(--primary-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--primary-600);
}

/* Cards */
.benefits-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.benefit-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-100);
  transition: all var(--transition-base);
}

.benefit-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--gray-700);
}

.card-content h3 {
  font-size: 1.125rem;
  margin-bottom: 8px;
  color: var(--gray-900);
}

.card-content p {
  font-size: 0.9375rem;
  color: var(--gray-500);
  line-height: 1.5;
}

/* Decoration */
.benefits-decoration {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  pointer-events: none;
}

.decoration-circle {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-100) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .benefits-content {
    max-width: 100%;
    text-align: center;
  }
  
  .benefits-content .section-title {
    text-align: center;
  }
  
  .benefits-list {
    align-items: center;
  }
  
  .benefits-cards {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .benefits-cards {
    grid-template-columns: 1fr;
  }
  
  .benefits-list li {
    text-align: left;
  }
}
</style>
