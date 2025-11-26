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
        <h1>Polityka prywatności</h1>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <article class="content-card">
          <p class="updated">Ostatnia aktualizacja: Listopad 2024</p>

          <h2>1. Wprowadzenie</h2>
          <p>Twoja prywatność jest dla nas ważna. Niniejsza polityka wyjaśnia, jakie dane zbieramy, jak je wykorzystujemy i jakie masz prawa.</p>

          <h2>2. Jakie dane zbieramy</h2>
          <h3>Dane wprowadzane przez użytkownika</h3>
          <ul>
            <li>Odpowiedzi na pytania w formularzu analizy (wiek, płeć, objawy)</li>
            <li>Wyniki analizy zapisane w przeglądarce (jeśli użytkownik wybierze tę opcję)</li>
          </ul>

          <h3>Dane techniczne</h3>
          <ul>
            <li>Anonimowe statystyki korzystania ze strony</li>
            <li>Podstawowe dane o urządzeniu i przeglądarce</li>
          </ul>

          <h2>3. Jak wykorzystujemy dane</h2>
          <ul>
            <li>Do generowania spersonalizowanych rekomendacji żywieniowych</li>
            <li>Do ulepszania naszych usług i algorytmów</li>
            <li>Do analiz statystycznych (anonimowych)</li>
          </ul>

          <h2>4. Przechowywanie danych</h2>
          <p>Dane wprowadzone w formularzu są przetwarzane lokalnie w Twojej przeglądarce. <strong>Nie wysyłamy Twoich odpowiedzi na żaden serwer</strong>. Wyniki analizy mogą być zapisane w pamięci lokalnej przeglądarki (localStorage) wyłącznie na Twoją prośbę.</p>

          <h2>5. Ciasteczka (cookies)</h2>
          <p>Używamy ciasteczek w następujących celach:</p>
          <ul>
            <li>Zapamiętanie, że zapisałeś wyniki analizy</li>
            <li>Podstawowe statystyki odwiedzin</li>
          </ul>
          <p>Możesz wyłączyć ciasteczka w ustawieniach przeglądarki.</p>

          <h2>6. Udostępnianie danych</h2>
          <p>Nie sprzedajemy ani nie udostępniamy Twoich danych osobowych podmiotom trzecim.</p>

          <h2>7. Twoje prawa</h2>
          <p>Masz prawo do:</p>
          <ul>
            <li>Dostępu do swoich danych</li>
            <li>Usunięcia danych (wyczyść pamięć lokalną przeglądarki)</li>
            <li>Sprzeciwu wobec przetwarzania</li>
          </ul>

          <h2>8. Kontakt</h2>
          <p>W przypadku pytań dotyczących prywatności, <router-link to="/kontakt">skontaktuj się z nami</router-link>.</p>
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

.content-card h3 {
  font-size: 1.0625rem;
  margin: 20px 0 12px;
  color: var(--gray-800);
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

