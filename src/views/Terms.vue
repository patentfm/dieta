<template>
  <div class="info-page">
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Regulamin</h1>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <article class="content-card">
          <p class="updated">Ostatnia aktualizacja: Listopad 2024</p>

          <h2>1. Postanowienia ogólne</h2>
          <p>Niniejszy regulamin określa zasady korzystania z serwisu NutriScan. Korzystając z serwisu, akceptujesz poniższe warunki.</p>

          <h2>2. Charakter usługi</h2>
          <p>NutriScan jest narzędziem edukacyjnym i informacyjnym. Aplikacja:</p>
          <ul>
            <li>Pomaga zidentyfikować potencjalne niedobory żywieniowe na podstawie zgłaszanych objawów</li>
            <li>Sugeruje naturalne źródła składników odżywczych</li>
            <li>Nie stanowi diagnozy medycznej</li>
            <li>Nie zastępuje porady lekarza, dietetyka ani farmaceuty</li>
          </ul>

          <h2>3. Odpowiedzialność</h2>
          <p>NutriScan nie ponosi odpowiedzialności za:</p>
          <ul>
            <li>Decyzje zdrowotne podejmowane na podstawie wyników analizy</li>
            <li>Skutki stosowania sugerowanych produktów żywnościowych</li>
            <li>Dokładność cen produktów (ceny są orientacyjne i mogą się różnić)</li>
            <li>Reakcje alergiczne lub nietolerancje pokarmowe</li>
          </ul>

          <h2>4. Zalecenia</h2>
          <p>Przed wprowadzeniem znaczących zmian w diecie zalecamy:</p>
          <ul>
            <li>Konsultację z lekarzem, szczególnie w przypadku chorób przewlekłych</li>
            <li>Wykonanie badań laboratoryjnych w celu potwierdzenia niedoborów</li>
            <li>Konsultację z dietetykiem dla spersonalizowanego planu żywieniowego</li>
          </ul>

          <h2>5. Własność intelektualna</h2>
          <p>Wszystkie treści, grafiki, algorytmy i kod źródłowy serwisu są chronione prawem autorskim. Kopiowanie i rozpowszechnianie bez zgody jest zabronione.</p>

          <h2>6. Dane użytkownika</h2>
          <p>Zasady przetwarzania danych określa <router-link to="/polityka-prywatnosci">Polityka Prywatności</router-link>.</p>

          <h2>7. Zmiany regulaminu</h2>
          <p>Zastrzegamy sobie prawo do zmiany regulaminu. O istotnych zmianach poinformujemy na stronie głównej.</p>

          <h2>8. Kontakt</h2>
          <p>W przypadku pytań dotyczących regulaminu, <router-link to="/kontakt">skontaktuj się z nami</router-link>.</p>
        </article>
      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import Footer from '../components/landing/Footer.vue'
</script>

<style scoped>
.info-page {
  min-height: 100vh;
  background: var(--gray-50);
}

.page-header {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  padding: 40px 0 60px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 24px;
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: white;
}

.page-header h1 {
  color: white;
  font-size: 2.5rem;
}

.page-content {
  padding: 48px 0 80px;
}

.content-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-md);
  max-width: 800px;
  margin: 0 auto;
}

.updated {
  color: var(--gray-500);
  font-size: 0.875rem;
  margin-bottom: 24px;
}

.content-card h2 {
  font-size: 1.375rem;
  margin: 32px 0 16px;
  color: var(--gray-900);
}

.content-card h2:first-of-type {
  margin-top: 0;
}

.content-card p {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 16px;
}

.content-card ul {
  margin: 12px 0 20px;
  padding-left: 24px;
}

.content-card li {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 8px;
}

.content-card a {
  color: var(--primary-600);
  font-weight: 500;
}

.content-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .content-card {
    padding: 28px;
  }
}
</style>

