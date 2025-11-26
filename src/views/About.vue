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
        <h1>O nas</h1>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <article class="content-card">
          <h2>Nasza misja</h2>
          <p>NutriScan powstał z prostej obserwacji: większość ludzi wie, że powinni jeść zdrowo, ale nie wie <em>jak</em>. Tabele wartości odżywczych są skomplikowane, suplementy drogie, a przekaz medialny często sprzeczny.</p>
          <p>Naszym celem jest uproszczenie zdrowego odżywiania. Wierzymy, że naturalne produkty spożywcze mogą dostarczyć wszystkich potrzebnych składników odżywczych — bez suplementów, bez drogich superfoodów.</p>

          <h2>Jak działamy</h2>
          <p>Nasza aplikacja analizuje Twoje objawy i identyfikuje potencjalne niedobory żywieniowe. Następnie pokazuje Ci <strong>konkretne produkty</strong>, które możesz kupić w zwykłym sklepie spożywczym, aby uzupełnić te niedobory.</p>
          <p>Wszystkie rekomendacje są posortowane według <strong>opłacalności</strong> — pokazujemy najpierw produkty, które dają najwięcej składnika odżywczego za złotówkę. Bo zdrowe jedzenie nie musi być drogie.</p>

          <h2>Nasze podejście</h2>
          <ul>
            <li><strong>Żywność przed suplementami:</strong> Składniki odżywcze z jedzenia są lepiej przyswajalne i zdrowsze niż tabletki</li>
            <li><strong>Prostota:</strong> Nie komplikujemy. Pokazujemy konkretne produkty, nie abstrakcyjne zalecenia</li>
            <li><strong>Opłacalność:</strong> Zdrowe jedzenie nie musi kosztować fortuny</li>
            <li><strong>Nauka, nie moda:</strong> Opieramy się na faktach naukowych, nie na trendach</li>
          </ul>

          <h2>Ważne zastrzeżenie</h2>
          <p>NutriScan ma charakter wyłącznie informacyjny i edukacyjny. Nie zastępuje diagnozy medycznej ani porady lekarza. Jeśli podejrzewasz poważne niedobory żywieniowe lub problemy zdrowotne, skonsultuj się z lekarzem.</p>

          <h2>Kontakt</h2>
          <p>Masz pytania lub sugestie? Chętnie je usłyszymy. <router-link to="/kontakt">Skontaktuj się z nami</router-link>.</p>
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

.content-card h2 {
  font-size: 1.5rem;
  margin: 32px 0 16px;
  color: var(--gray-900);
}

.content-card h2:first-child {
  margin-top: 0;
}

.content-card p {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 16px;
}

.content-card ul {
  margin: 16px 0;
  padding-left: 24px;
}

.content-card li {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 12px;
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

