<template>
  <section class="hero">
    <!-- Background Elements -->
    <div class="hero-bg">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>
      <div class="hero-pattern"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Analiza Żywieniowa
          </span>
          
          <h1 class="hero-title">
            Odkryj czego brakuje
            <span class="text-gradient">Twojemu ciału</span>
          </h1>
          
          <p class="hero-description">
            Sprawdź niedobory żywieniowe na podstawie objawów z obserwacji własnego ciała. 
            Otrzymaj spersonalizowaną listę naturalnych produktów, które uzupełnią Twoje braki 
            — bez drogich suplementów.
          </p>
          
          <div class="hero-cta">
            <a href="#form" class="btn btn-primary btn-lg">
              Rozpocznij analizę
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#how-it-works" class="btn btn-secondary">
              Jak to działa?
            </a>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Objawów do analizy</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">100+</span>
              <span class="stat-label">Naturalnych produktów</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">15+</span>
              <span class="stat-label">Składników odżywczych</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-image-wrapper">
            <div class="hero-illustration">
              <!-- Decorative food/health illustration -->
              <div class="illustration-circle">
                <div class="food-item food-1">🥑</div>
                <div class="food-item food-2">🥬</div>
                <div class="food-item food-3">🍊</div>
                <div class="food-item food-4">🥜</div>
                <div class="food-item food-5">🫐</div>
                <div class="food-item food-6">🥕</div>
                <div class="center-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Floating cards -->
            <div class="floating-card card-1">
              <div class="card-icon success">✓</div>
              <div class="card-text">
                <span class="card-title">Magnez</span>
                <span class="card-desc">Pestki dyni - 550mg/100g</span>
              </div>
            </div>
            
            <div class="floating-card card-2">
              <div class="card-icon warning">!</div>
              <div class="card-text">
                <span class="card-title">Niedobór wykryty</span>
                <span class="card-desc">3 potencjalne braki</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Przewiń w dół</span>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
}

.hero-blob-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--primary-200), var(--primary-300));
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.hero-blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--accent-200), var(--accent-300));
  bottom: -100px;
  left: -100px;
  animation: float 6s ease-in-out infinite reverse;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--gray-200) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  animation: fadeInUp 0.8s ease forwards;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-600);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}

.hero-badge svg {
  color: var(--primary-500);
}

.hero-title {
  margin-bottom: 24px;
  line-height: 1.1;
}

.text-gradient {
  display: block;
  background: linear-gradient(135deg, var(--primary-500), var(--accent-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--gray-600);
  margin-bottom: 32px;
  max-width: 540px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
}

.stat {
  text-align: left;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--gray-900);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray-500);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--gray-200);
}

/* Visual / Illustration */
.hero-visual {
  position: relative;
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
}

.hero-illustration {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-circle {
  position: relative;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-100), var(--primary-50));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 0 20px rgba(34, 197, 94, 0.1),
    0 0 0 40px rgba(34, 197, 94, 0.05);
}

.center-icon {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  color: var(--primary-600);
}

.food-item {
  position: absolute;
  font-size: 2.5rem;
  animation: float 4s ease-in-out infinite;
}

.food-1 { top: 20px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
.food-2 { top: 80px; right: 30px; animation-delay: 0.5s; }
.food-3 { bottom: 80px; right: 20px; animation-delay: 1s; }
.food-4 { bottom: 20px; left: 50%; transform: translateX(-50%); animation-delay: 1.5s; }
.food-5 { bottom: 80px; left: 20px; animation-delay: 2s; }
.food-6 { top: 80px; left: 30px; animation-delay: 2.5s; }

/* Floating cards */
.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  animation: float 5s ease-in-out infinite;
}

.card-1 {
  top: 60px;
  right: -20px;
  animation-delay: 0.5s;
}

.card-2 {
  bottom: 80px;
  left: -40px;
  animation-delay: 1s;
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.card-icon.success {
  background: var(--primary-100);
  color: var(--primary-600);
}

.card-icon.warning {
  background: var(--accent-100);
  color: var(--accent-600);
}

.card-text {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--gray-800);
}

.card-desc {
  font-size: 0.75rem;
  color: var(--gray-500);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--gray-400);
  font-size: 0.75rem;
  animation: fadeIn 1s ease 1s forwards;
  opacity: 0;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--gray-300);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--gray-400);
  border-radius: 2px;
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(6px); }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .hero-text {
    order: 1;
  }
  
  .hero-visual {
    order: 0;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .illustration-circle {
    width: 300px;
    height: 300px;
  }
  
  .floating-card {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
  }
  
  .stat {
    text-align: center;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>

