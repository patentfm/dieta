<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="logo-icon">🥬</span>
            <span class="logo-text">NutriScan</span>
          </div>
          <p class="brand-description">
            Odkryj niedobory żywieniowe na podstawie objawów i uzupełnij je naturalnymi produktami.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-links">
          <h4>Szybkie linki</h4>
          <ul>
            <li><a href="#how-it-works">Jak to działa</a></li>
            <li><a href="#form">Rozpocznij analizę</a></li>
            <li><a href="#">Baza produktów</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <!-- Resources -->
        <div class="footer-links">
          <h4>Zasoby</h4>
          <ul>
            <li><a href="#">Blog o żywieniu</a></li>
            <li><a href="#">Przepisy</a></li>
            <li><a href="#">Poradniki</a></li>
            <li><a href="#">Kalkulator BMI</a></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div class="footer-links">
          <h4>Informacje</h4>
          <ul>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Polityka prywatności</a></li>
            <li><a href="#">Regulamin</a></li>
            <li><a href="#">Kontakt</a></li>
            <li v-if="hasSavedResults">
              <a href="#" class="saved-results-link" @click.prevent="$emit('viewResults')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Zobacz poprzednie wyniki
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-disclaimer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>
            Ta strona ma charakter informacyjny i nie zastępuje porady lekarza ani dietetyka. 
            W przypadku problemów zdrowotnych skonsultuj się ze specjalistą.
          </span>
        </div>
        
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} NutriScan. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  hasSavedResults: {
    type: Boolean,
    default: false
  }
})

defineEmits(['viewResults'])

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--gray-900);
  color: white;
  padding: 80px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--gray-700);
}

/* Brand */
.footer-brand {
  max-width: 320px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-400), var(--accent-400));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: var(--gray-400);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: var(--gray-800);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-2px);
}

/* Links */
.footer-links h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: var(--gray-400);
  font-size: 0.9375rem;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-400);
}

.saved-results-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary-400) !important;
  font-weight: 500;
}

.saved-results-link:hover {
  color: var(--primary-300) !important;
}

/* Bottom */
.footer-bottom {
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
}

.footer-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 800px;
  padding: 16px 24px;
  background: var(--gray-800);
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  color: var(--gray-400);
  line-height: 1.6;
}

.footer-disclaimer svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--accent-500);
}

.footer-copyright {
  color: var(--gray-500);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
    text-align: center;
  }
  
  .brand-logo {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 60px 0 0;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
  
  .footer-links ul {
    align-items: center;
  }
  
  .footer-disclaimer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
