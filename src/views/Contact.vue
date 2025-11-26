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
        <h1>Kontakt</h1>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-card">
            <h2>Napisz do nas</h2>
            <p>Masz pytania, sugestie lub znalazłeś błąd? Chętnie pomożemy.</p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Imię</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>

              <div class="form-group">
                <label for="subject">Temat</label>
                <select id="subject" v-model="form.subject">
                  <option value="question">Pytanie ogólne</option>
                  <option value="suggestion">Sugestia/pomysł</option>
                  <option value="bug">Zgłoszenie błędu</option>
                  <option value="cooperation">Współpraca</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Wiadomość</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Wyślij wiadomość</span>
                <span v-else>Wysyłanie...</span>
              </button>

              <Transition name="fade">
                <div v-if="submitted" class="success-message">
                  ✅ Dziękujemy! Twoja wiadomość została wysłana.
                </div>
              </Transition>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">📧</div>
              <h3>Email</h3>
              <p>kontakt@nutriscan.pl</p>
            </div>

            <div class="info-card">
              <div class="info-icon">⏰</div>
              <h3>Czas odpowiedzi</h3>
              <p>Staramy się odpowiadać w ciągu 24-48 godzin roboczych.</p>
            </div>

            <div class="info-card">
              <div class="info-icon">💡</div>
              <h3>Częste pytania</h3>
              <p>Sprawdź sekcję <router-link to="/#benefits">FAQ</router-link> — może znajdziesz tam odpowiedź na swoje pytanie.</p>
            </div>

            <div class="info-card">
              <div class="info-icon">🤝</div>
              <h3>Współpraca</h3>
              <p>Jesteś dietetykiem lub trenerem? Chętnie porozmawiamy o współpracy.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Footer from '../components/landing/Footer.vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'question',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  submitted.value = true
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = 'question'
  form.message = ''
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    submitted.value = false
  }, 5000)
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
}

/* Contact Form */
.contact-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-md);
}

.contact-card h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.contact-card > p {
  color: var(--gray-500);
  margin-bottom: 28px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 500;
  font-size: 0.9375rem;
  color: var(--gray-700);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: all var(--transition-fast);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 14px 28px;
  background: var(--primary-500);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-600);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  padding: 16px;
  background: #dcfce7;
  color: #166534;
  border-radius: var(--radius-md);
  font-weight: 500;
  text-align: center;
}

/* Info Cards */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.info-icon {
  font-size: 1.75rem;
  margin-bottom: 12px;
}

.info-card h3 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.info-card p {
  color: var(--gray-600);
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0;
}

.info-card a {
  color: var(--primary-600);
  font-weight: 500;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .contact-card {
    padding: 28px;
  }
  
  .info-cards {
    grid-template-columns: 1fr;
  }
}
</style>

