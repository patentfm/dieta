<template>
  <div class="products-page">
    <!-- Header -->
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Baza produktów</h1>
        <p class="subtitle">Naturalne źródła witamin i składników odżywczych posortowane od najtańszych</p>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="nutrient-nav">
      <div class="container">
        <div class="nav-scroll">
          <button 
            v-for="section in sections" 
            :key="section.id"
            class="nav-item"
            :class="{ active: activeSection === section.id }"
            @click="scrollToSection(section.id)"
          >
            <span class="nav-icon">{{ section.icon }}</span>
            <span class="nav-label">{{ section.label }}</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="page-content">
      <div class="container">
        
        <!-- WITAMINY -->
        <section :id="'witaminy'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">💊</span>
              <span class="sidebar-text">Witaminy</span>
            </div>
          </div>
          <div class="section-content">
          <!-- Witamina D -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>☀️ Witamina D</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 20 μg</span>
              </div>
              <p class="nutrient-desc">Hormon słońca wspierający kości, odporność i nastrój. Niedobór bardzo częsty w Polsce.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminDFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Witamina C -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🍊 Witamina C</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 90 mg</span>
              </div>
              <p class="nutrient-desc">Potężny antyoksydant wspierający odporność, skórę i wchłanianie żelaza.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminCFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Witamina A -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>👁️ Witamina A</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 900 μg</span>
              </div>
              <p class="nutrient-desc">Niezbędna dla zdrowych oczu, skóry i odporności.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminAFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Witamina E -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>✨ Witamina E</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 15 mg</span>
              </div>
              <p class="nutrient-desc">Antyoksydant chroniący komórki przed uszkodzeniami.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminEFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Witamina K -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🥬 Witamina K</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 120 μg</span>
              </div>
              <p class="nutrient-desc">Kluczowa dla krzepnięcia krwi i zdrowia kości.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminKFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Witaminy B -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🧠 Witamina B12</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 2.4 μg</span>
              </div>
              <p class="nutrient-desc">Kluczowa dla układu nerwowego i produkcji czerwonych krwinek.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminB12Foods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>⚡ Witamina B6</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 1.7 mg</span>
              </div>
              <p class="nutrient-desc">Wspiera metabolizm, nastrój i układ odpornościowy.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in vitaminB6Foods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🧬 Kwas foliowy (B9)</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 400 μg</span>
              </div>
              <p class="nutrient-desc">Kluczowy dla podziału komórek i syntezy DNA. Szczególnie ważny dla kobiet w ciąży.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in folateFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <!-- MINERAŁY -->
        <section :id="'mineraly'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">⚙️</span>
              <span class="sidebar-text">Minerały</span>
            </div>
          </div>
          <div class="section-content">
          <!-- Żelazo -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🩸 Żelazo</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 18 mg (kobiety) / 8 mg (mężczyźni)</span>
              </div>
              <p class="nutrient-desc">Niezbędne do transportu tlenu we krwi. Niedobór prowadzi do anemii.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in ironFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
            <div class="tip-box">
              💡 <strong>Wskazówka:</strong> Jedz produkty bogate w żelazo razem z witaminą C (np. papryka, cytryna) - zwiększa to wchłanianie nawet 6x!
            </div>
          </div>

          <!-- Magnez -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>💪 Magnez</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 400 mg</span>
              </div>
              <p class="nutrient-desc">Uczestniczy w ponad 300 reakcjach enzymatycznych. Wspiera mięśnie, nerwy i energię.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in magnesiumFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Cynk -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🛡️ Cynk</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 11 mg</span>
              </div>
              <p class="nutrient-desc">Kluczowy dla odporności, gojenia ran i zdrowia skóry.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in zincFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Wapń -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🦴 Wapń</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 1000 mg</span>
              </div>
              <p class="nutrient-desc">Budulec kości i zębów. Ważny dla pracy mięśni i nerwów.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in calciumFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Potas -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>💓 Potas</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 3500 mg</span>
              </div>
              <p class="nutrient-desc">Reguluje ciśnienie krwi i pracę mięśni. Większość ludzi nie spożywa wystarczająco.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in potassiumFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>

          <!-- Selen -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🔬 Selen</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 55 μg</span>
              </div>
              <p class="nutrient-desc">Antyoksydant wspierający tarczycę i odporność.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in seleniumFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
            <div class="tip-box">
              💡 <strong>Wskazówka:</strong> 2 orzechy brazylijskie dziennie pokrywają 100% zapotrzebowania na selen!
            </div>
          </div>

          <!-- Jod -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🦪 Jod</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 150 μg</span>
              </div>
              <p class="nutrient-desc">Niezbędny dla prawidłowej pracy tarczycy.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in iodineFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <!-- KWASY TŁUSZCZOWE -->
        <section :id="'tluszcze'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">🐟</span>
              <span class="sidebar-text">Tłuszcze</span>
            </div>
          </div>
          <div class="section-content">
          <!-- Omega-3 -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🐟 Omega-3 (EPA + DHA)</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 1.6 g</span>
              </div>
              <p class="nutrient-desc">Niezbędne tłuszcze dla mózgu, serca i redukcji stanów zapalnych. Organizm nie produkuje ich sam.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in omega3Foods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
            <div class="tip-box">
              💡 <strong>Wskazówka:</strong> Jedz tłuste ryby morskie 2-3 razy w tygodniu. ALA z roślin (siemię, orzechy włoskie) słabo konwertuje do EPA/DHA.
            </div>
          </div>

          <!-- Zdrowe tłuszcze jednonienasycone -->
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🫒 Tłuszcze jednonienasycone</h3>
                <span class="daily-value">Powinny stanowić główne źródło tłuszczu w diecie</span>
              </div>
              <p class="nutrient-desc">Wspierają serce, obniżają zły cholesterol LDL i podnoszą dobry HDL.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in monounsaturatedFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <!-- BIAŁKO -->
        <section :id="'bialko'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">🥩</span>
              <span class="sidebar-text">Białko</span>
            </div>
          </div>
          <div class="section-content">
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>💪 Źródła białka</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 0.8-1.6 g/kg masy ciała</span>
              </div>
              <p class="nutrient-desc">Białko jest niezbędne do budowy mięśni, naprawy tkanek i produkcji enzymów. Zwierzęce źródła są kompletne, roślinne należy łączyć.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in proteinFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
            <div class="tip-box">
              💡 <strong>Wskazówka:</strong> Łącz rośliny strączkowe ze zbożami (np. ryż + fasola) aby uzyskać kompletny profil aminokwasów.
            </div>
          </div>
          </div>
        </section>

        <!-- WĘGLOWODANY -->
        <section :id="'weglowodany'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">🌾</span>
              <span class="sidebar-text">Węglowodany</span>
            </div>
          </div>
          <div class="section-content">
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>📊 Niski indeks glikemiczny (IG &lt; 55)</h3>
                <span class="daily-value">Wybieraj produkty o IG poniżej 55</span>
              </div>
              <p class="nutrient-desc">Produkty o niskim IG wolniej podnoszą poziom cukru we krwi, dając stabilną energię i dłuższe uczucie sytości.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in lowGIFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
            <div class="tip-box">
              💡 <strong>Wskazówka:</strong> Gotuj makaron al dente - ma niższy IG niż rozgotowany. Dodawaj tłuszcz i białko do posiłków węglowodanowych.
            </div>
          </div>
          </div>
        </section>

        <!-- BŁONNIK -->
        <section :id="'blonnik'" class="nutrient-section">
          <div class="section-sidebar">
            <div class="sidebar-label">
              <span class="sidebar-icon">🥗</span>
              <span class="sidebar-text">Błonnik</span>
            </div>
          </div>
          <div class="section-content">
          <div class="nutrient-card">
            <div class="nutrient-header">
              <div class="nutrient-info">
                <h3>🌿 Źródła błonnika</h3>
                <span class="daily-value">Dzienne zapotrzebowanie: 25-30 g</span>
              </div>
              <p class="nutrient-desc">Błonnik karmi dobre bakterie jelitowe, reguluje trawienie i pomaga kontrolować poziom cukru we krwi.</p>
            </div>
            <div class="food-grid">
              <div class="food-item" v-for="food in fiberFoods" :key="food.name">
                <div class="food-name">{{ food.name }}</div>
                <div class="food-amount">{{ food.amount }}</div>
                <div class="food-price">{{ food.price }}</div>
              </div>
            </div>
          </div>
          </div>
        </section>

      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/landing/Footer.vue'

const activeSection = ref('witaminy')

const sections = [
  { id: 'witaminy', label: 'Witaminy', icon: '💊' },
  { id: 'mineraly', label: 'Minerały', icon: '⚙️' },
  { id: 'tluszcze', label: 'Zdrowe tłuszcze', icon: '🐟' },
  { id: 'bialko', label: 'Białko', icon: '🥩' },
  { id: 'weglowodany', label: 'Węglowodany', icon: '🌾' },
  { id: 'blonnik', label: 'Błonnik', icon: '🥗' }
]

const scrollToSection = (id) => {
  activeSection.value = id
  const element = document.getElementById(id)
  if (element) {
    const navHeight = 70 // Height of sticky nav
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Food data - sorted by cost per daily value
const vitaminDFoods = [
  { name: 'Śledź marynowany', amount: '16.1 μg/100g (80% DV)', price: '~2.00 zł/100g' },
  { name: 'Łosoś', amount: '11 μg/100g (55% DV)', price: '~6.00 zł/100g' },
  { name: 'Sardynki w oleju', amount: '4.8 μg/100g (24% DV)', price: '~3.50 zł/100g' },
  { name: 'Makrela', amount: '16.1 μg/100g (80% DV)', price: '~2.50 zł/100g' },
  { name: 'Jaja kurze (żółtko)', amount: '2 μg/100g (10% DV)', price: '~1.80 zł/100g' },
  { name: 'Pieczarki (eksponowane na UV)', amount: '10-20 μg/100g', price: '~0.80 zł/100g' },
  { name: 'Wątróbka wołowa', amount: '1.2 μg/100g (6% DV)', price: '~1.50 zł/100g' }
]

const vitaminCFoods = [
  { name: 'Papryka czerwona', amount: '128 mg/100g (142% DV)', price: '~1.20 zł/100g' },
  { name: 'Natka pietruszki', amount: '133 mg/100g (148% DV)', price: '~1.00 zł/100g' },
  { name: 'Kiwi', amount: '93 mg/100g (103% DV)', price: '~1.20 zł/100g' },
  { name: 'Brokuły', amount: '89 mg/100g (99% DV)', price: '~1.00 zł/100g' },
  { name: 'Brukselka', amount: '85 mg/100g (94% DV)', price: '~1.20 zł/100g' },
  { name: 'Truskawki', amount: '59 mg/100g (66% DV)', price: '~2.00 zł/100g' },
  { name: 'Pomarańcze', amount: '53 mg/100g (59% DV)', price: '~0.60 zł/100g' },
  { name: 'Cytryna', amount: '53 mg/100g (59% DV)', price: '~0.80 zł/100g' }
]

const vitaminAFoods = [
  { name: 'Wątróbka wołowa', amount: '9442 μg/100g (1049% DV)', price: '~1.50 zł/100g' },
  { name: 'Wątróbka drobiowa', amount: '3296 μg/100g (366% DV)', price: '~1.00 zł/100g' },
  { name: 'Marchewka', amount: '835 μg/100g (93% DV)', price: '~0.30 zł/100g' },
  { name: 'Bataty', amount: '709 μg/100g (79% DV)', price: '~1.00 zł/100g' },
  { name: 'Szpinak', amount: '469 μg/100g (52% DV)', price: '~1.50 zł/100g' },
  { name: 'Jarmuż', amount: '241 μg/100g (27% DV)', price: '~2.00 zł/100g' },
  { name: 'Dynia', amount: '426 μg/100g (47% DV)', price: '~0.50 zł/100g' }
]

const vitaminEFoods = [
  { name: 'Pestki słonecznika', amount: '35 mg/100g (233% DV)', price: '~2.50 zł/100g' },
  { name: 'Migdały', amount: '26 mg/100g (173% DV)', price: '~6.00 zł/100g' },
  { name: 'Orzechy laskowe', amount: '15 mg/100g (100% DV)', price: '~5.00 zł/100g' },
  { name: 'Olej słonecznikowy', amount: '41 mg/100g (273% DV)', price: '~1.00 zł/100g' },
  { name: 'Szpinak', amount: '2 mg/100g (13% DV)', price: '~1.50 zł/100g' },
  { name: 'Awokado', amount: '2.1 mg/100g (14% DV)', price: '~2.50 zł/100g' }
]

const vitaminKFoods = [
  { name: 'Natka pietruszki', amount: '1640 μg/100g (1367% DV)', price: '~1.00 zł/100g' },
  { name: 'Jarmuż', amount: '817 μg/100g (681% DV)', price: '~2.00 zł/100g' },
  { name: 'Szpinak', amount: '483 μg/100g (403% DV)', price: '~1.50 zł/100g' },
  { name: 'Boćwina', amount: '830 μg/100g (692% DV)', price: '~1.20 zł/100g' },
  { name: 'Brokuły', amount: '102 μg/100g (85% DV)', price: '~1.00 zł/100g' },
  { name: 'Brukselka', amount: '177 μg/100g (148% DV)', price: '~1.20 zł/100g' },
  { name: 'Kapusta', amount: '76 μg/100g (63% DV)', price: '~0.40 zł/100g' }
]

const vitaminB12Foods = [
  { name: 'Wątróbka wołowa', amount: '83 μg/100g (3458% DV)', price: '~1.50 zł/100g' },
  { name: 'Wątróbka drobiowa', amount: '16.6 μg/100g (692% DV)', price: '~1.00 zł/100g' },
  { name: 'Makrela', amount: '19 μg/100g (792% DV)', price: '~2.50 zł/100g' },
  { name: 'Śledź', amount: '13.7 μg/100g (571% DV)', price: '~2.00 zł/100g' },
  { name: 'Sardynki', amount: '8.9 μg/100g (371% DV)', price: '~3.50 zł/100g' },
  { name: 'Łosoś', amount: '3.2 μg/100g (133% DV)', price: '~6.00 zł/100g' },
  { name: 'Wołowina', amount: '2.6 μg/100g (108% DV)', price: '~4.50 zł/100g' },
  { name: 'Jaja kurze', amount: '0.9 μg/100g (38% DV)', price: '~1.80 zł/100g' }
]

const vitaminB6Foods = [
  { name: 'Wątróbka wołowa', amount: '1.1 mg/100g (65% DV)', price: '~1.50 zł/100g' },
  { name: 'Pestki słonecznika', amount: '1.35 mg/100g (79% DV)', price: '~2.50 zł/100g' },
  { name: 'Czosnek', amount: '1.24 mg/100g (73% DV)', price: '~1.50 zł/100g' },
  { name: 'Łosoś', amount: '0.8 mg/100g (47% DV)', price: '~6.00 zł/100g' },
  { name: 'Kurczak', amount: '0.6 mg/100g (35% DV)', price: '~2.50 zł/100g' },
  { name: 'Banany', amount: '0.37 mg/100g (22% DV)', price: '~0.50 zł/100g' },
  { name: 'Ziemniaki', amount: '0.3 mg/100g (18% DV)', price: '~0.20 zł/100g' }
]

const folateFoods = [
  { name: 'Wątróbka drobiowa', amount: '588 μg/100g (147% DV)', price: '~1.00 zł/100g' },
  { name: 'Soczewica (gotowana)', amount: '181 μg/100g (45% DV)', price: '~1.20 zł/100g' },
  { name: 'Szpinak', amount: '194 μg/100g (49% DV)', price: '~1.50 zł/100g' },
  { name: 'Fasola czarna', amount: '444 μg/100g (111% DV)', price: '~1.00 zł/100g' },
  { name: 'Fasola biała', amount: '388 μg/100g (97% DV)', price: '~0.80 zł/100g' },
  { name: 'Ciecierzyca', amount: '172 μg/100g (43% DV)', price: '~1.00 zł/100g' },
  { name: 'Brokuły', amount: '63 μg/100g (16% DV)', price: '~1.00 zł/100g' }
]

const ironFoods = [
  { name: 'Spirulina', amount: '28.5 mg/100g (158% DV)', price: '~15.00 zł/100g' },
  { name: 'Sezam', amount: '14.6 mg/100g (81% DV)', price: '~3.00 zł/100g' },
  { name: 'Ciemna czekolada 85%', amount: '11.9 mg/100g (66% DV)', price: '~4.00 zł/100g' },
  { name: 'Wątróbka drobiowa', amount: '9 mg/100g (50% DV)', price: '~1.00 zł/100g' },
  { name: 'Pestki dyni', amount: '8.8 mg/100g (49% DV)', price: '~4.50 zł/100g' },
  { name: 'Soczewica', amount: '6.5 mg/100g (36% DV)', price: '~1.20 zł/100g' },
  { name: 'Wątróbka wołowa', amount: '6.5 mg/100g (36% DV)', price: '~1.50 zł/100g' },
  { name: 'Fasola biała', amount: '5.5 mg/100g (31% DV)', price: '~0.80 zł/100g' },
  { name: 'Szpinak', amount: '2.7 mg/100g (15% DV)', price: '~1.50 zł/100g' },
  { name: 'Wołowina', amount: '2.6 mg/100g (14% DV)', price: '~4.50 zł/100g' }
]

const magnesiumFoods = [
  { name: 'Pestki dyni', amount: '550 mg/100g (138% DV)', price: '~4.50 zł/100g' },
  { name: 'Siemię lniane', amount: '392 mg/100g (98% DV)', price: '~1.80 zł/100g' },
  { name: 'Orzechy brazylijskie', amount: '376 mg/100g (94% DV)', price: '~9.00 zł/100g' },
  { name: 'Nasiona chia', amount: '335 mg/100g (84% DV)', price: '~5.00 zł/100g' },
  { name: 'Sezam', amount: '351 mg/100g (88% DV)', price: '~3.00 zł/100g' },
  { name: 'Orzechy nerkowca', amount: '292 mg/100g (73% DV)', price: '~7.00 zł/100g' },
  { name: 'Migdały', amount: '270 mg/100g (68% DV)', price: '~6.00 zł/100g' },
  { name: 'Kasza gryczana', amount: '231 mg/100g (58% DV)', price: '~0.80 zł/100g' },
  { name: 'Ciemna czekolada', amount: '228 mg/100g (57% DV)', price: '~4.00 zł/100g' },
  { name: 'Płatki owsiane', amount: '177 mg/100g (44% DV)', price: '~0.50 zł/100g' }
]

const zincFoods = [
  { name: 'Ostrygi', amount: '78.6 mg/100g (715% DV)', price: '~25.00 zł/100g' },
  { name: 'Pestki dyni', amount: '7.8 mg/100g (71% DV)', price: '~4.50 zł/100g' },
  { name: 'Sezam', amount: '7.8 mg/100g (71% DV)', price: '~3.00 zł/100g' },
  { name: 'Orzechy nerkowca', amount: '5.8 mg/100g (53% DV)', price: '~7.00 zł/100g' },
  { name: 'Wołowina', amount: '4.8 mg/100g (44% DV)', price: '~4.50 zł/100g' },
  { name: 'Pestki słonecznika', amount: '5 mg/100g (45% DV)', price: '~2.50 zł/100g' },
  { name: 'Ciecierzyca', amount: '2.5 mg/100g (23% DV)', price: '~1.00 zł/100g' },
  { name: 'Soczewica', amount: '3.3 mg/100g (30% DV)', price: '~1.20 zł/100g' }
]

const calciumFoods = [
  { name: 'Parmezan', amount: '1184 mg/100g (118% DV)', price: '~8.00 zł/100g' },
  { name: 'Sezam', amount: '975 mg/100g (98% DV)', price: '~3.00 zł/100g' },
  { name: 'Nasiona chia', amount: '631 mg/100g (63% DV)', price: '~5.00 zł/100g' },
  { name: 'Sardynki (z ościami)', amount: '382 mg/100g (38% DV)', price: '~3.50 zł/100g' },
  { name: 'Migdały', amount: '269 mg/100g (27% DV)', price: '~6.00 zł/100g' },
  { name: 'Jarmuż', amount: '254 mg/100g (25% DV)', price: '~2.00 zł/100g' },
  { name: 'Tofu', amount: '350 mg/100g (35% DV)', price: '~2.00 zł/100g' },
  { name: 'Fasola biała', amount: '147 mg/100g (15% DV)', price: '~0.80 zł/100g' },
  { name: 'Jogurt naturalny', amount: '110 mg/100g (11% DV)', price: '~1.00 zł/100g' }
]

const potassiumFoods = [
  { name: 'Fasola biała', amount: '1185 mg/100g (34% DV)', price: '~0.80 zł/100g' },
  { name: 'Fasola czarna', amount: '1483 mg/100g (42% DV)', price: '~1.00 zł/100g' },
  { name: 'Spirulina', amount: '1363 mg/100g (39% DV)', price: '~15.00 zł/100g' },
  { name: 'Pestki dyni', amount: '809 mg/100g (23% DV)', price: '~4.50 zł/100g' },
  { name: 'Ciecierzyca', amount: '718 mg/100g (21% DV)', price: '~1.00 zł/100g' },
  { name: 'Soczewica', amount: '677 mg/100g (19% DV)', price: '~1.20 zł/100g' },
  { name: 'Szpinak', amount: '558 mg/100g (16% DV)', price: '~1.50 zł/100g' },
  { name: 'Awokado', amount: '485 mg/100g (14% DV)', price: '~2.50 zł/100g' },
  { name: 'Banany', amount: '358 mg/100g (10% DV)', price: '~0.50 zł/100g' },
  { name: 'Ziemniaki', amount: '421 mg/100g (12% DV)', price: '~0.20 zł/100g' }
]

const seleniumFoods = [
  { name: 'Orzechy brazylijskie', amount: '1917 μg/100g (3485% DV)', price: '~9.00 zł/100g' },
  { name: 'Ostrygi', amount: '77 μg/100g (140% DV)', price: '~25.00 zł/100g' },
  { name: 'Pestki słonecznika', amount: '53 μg/100g (96% DV)', price: '~2.50 zł/100g' },
  { name: 'Sardynki', amount: '52.7 μg/100g (96% DV)', price: '~3.50 zł/100g' },
  { name: 'Makrela', amount: '44 μg/100g (80% DV)', price: '~2.50 zł/100g' },
  { name: 'Łosoś', amount: '36.5 μg/100g (66% DV)', price: '~6.00 zł/100g' },
  { name: 'Jaja kurze', amount: '30.7 μg/100g (56% DV)', price: '~1.80 zł/100g' },
  { name: 'Wołowina', amount: '18.5 μg/100g (34% DV)', price: '~4.50 zł/100g' }
]

const iodineFoods = [
  { name: 'Wodorosty nori', amount: '1800 μg/100g (1200% DV)', price: '~20.00 zł/100g' },
  { name: 'Dorsz', amount: '110 μg/100g (73% DV)', price: '~4.00 zł/100g' },
  { name: 'Krewetki', amount: '35 μg/100g (23% DV)', price: '~8.00 zł/100g' },
  { name: 'Jaja kurze', amount: '24 μg/100g (16% DV)', price: '~1.80 zł/100g' },
  { name: 'Jogurt naturalny', amount: '37 μg/100g (25% DV)', price: '~1.00 zł/100g' },
  { name: 'Sól jodowana', amount: '7600 μg/100g', price: '~0.20 zł/100g' },
  { name: 'Ser', amount: '15 μg/100g (10% DV)', price: '~3.00 zł/100g' }
]

const omega3Foods = [
  { name: 'Siemię lniane', amount: '22.8 g/100g (1425% DV) - ALA', price: '~1.80 zł/100g' },
  { name: 'Nasiona chia', amount: '17.8 g/100g (1113% DV) - ALA', price: '~5.00 zł/100g' },
  { name: 'Orzechy włoskie', amount: '9.1 g/100g (569% DV) - ALA', price: '~5.50 zł/100g' },
  { name: 'Makrela', amount: '2.7 g/100g (169% DV) - EPA+DHA', price: '~2.50 zł/100g' },
  { name: 'Łosoś', amount: '2.3 g/100g (144% DV) - EPA+DHA', price: '~6.00 zł/100g' },
  { name: 'Śledź', amount: '1.7 g/100g (106% DV) - EPA+DHA', price: '~2.00 zł/100g' },
  { name: 'Sardynki', amount: '1.5 g/100g (94% DV) - EPA+DHA', price: '~3.50 zł/100g' }
]

const monounsaturatedFoods = [
  { name: 'Oliwa z oliwek', amount: '73 g/100g tłuszczów MUFA', price: '~4.00 zł/100g' },
  { name: 'Awokado', amount: '10 g/100g tłuszczów MUFA', price: '~2.50 zł/100g' },
  { name: 'Migdały', amount: '32 g/100g tłuszczów MUFA', price: '~6.00 zł/100g' },
  { name: 'Orzechy laskowe', amount: '46 g/100g tłuszczów MUFA', price: '~5.00 zł/100g' },
  { name: 'Orzechy nerkowca', amount: '24 g/100g tłuszczów MUFA', price: '~7.00 zł/100g' },
  { name: 'Orzechy makadamia', amount: '59 g/100g tłuszczów MUFA', price: '~12.00 zł/100g' }
]

const proteinFoods = [
  { name: 'Spirulina', amount: '57 g/100g białka', price: '~15.00 zł/100g' },
  { name: 'Parmezan', amount: '38 g/100g białka', price: '~8.00 zł/100g' },
  { name: 'Pestki dyni', amount: '30 g/100g białka', price: '~4.50 zł/100g' },
  { name: 'Kurczak (pierś)', amount: '31 g/100g białka', price: '~2.50 zł/100g' },
  { name: 'Wołowina chuda', amount: '26 g/100g białka', price: '~4.50 zł/100g' },
  { name: 'Soczewica', amount: '25 g/100g białka', price: '~1.20 zł/100g' },
  { name: 'Tuńczyk', amount: '25 g/100g białka', price: '~4.00 zł/100g' },
  { name: 'Fasola biała', amount: '21 g/100g białka', price: '~0.80 zł/100g' },
  { name: 'Ciecierzyca', amount: '19 g/100g białka', price: '~1.00 zł/100g' },
  { name: 'Quinoa', amount: '14 g/100g białka', price: '~3.00 zł/100g' },
  { name: 'Jaja kurze', amount: '13 g/100g białka', price: '~1.80 zł/100g' },
  { name: 'Tofu', amount: '8 g/100g białka', price: '~2.00 zł/100g' }
]

const lowGIFoods = [
  { name: 'Soczewica', amount: 'IG: 29', price: '~1.20 zł/100g' },
  { name: 'Fasola', amount: 'IG: 31', price: '~0.80 zł/100g' },
  { name: 'Ciecierzyca', amount: 'IG: 33', price: '~1.00 zł/100g' },
  { name: 'Kasza gryczana', amount: 'IG: 40', price: '~0.80 zł/100g' },
  { name: 'Quinoa', amount: 'IG: 53', price: '~3.00 zł/100g' },
  { name: 'Płatki owsiane', amount: 'IG: 55', price: '~0.50 zł/100g' },
  { name: 'Bataty', amount: 'IG: 44', price: '~1.00 zł/100g' },
  { name: 'Makaron pełnoziarnisty al dente', amount: 'IG: 37', price: '~0.80 zł/100g' },
  { name: 'Ryż basmati', amount: 'IG: 50', price: '~0.60 zł/100g' },
  { name: 'Chleb żytni pełnoziarnisty', amount: 'IG: 41', price: '~1.00 zł/100g' }
]

const fiberFoods = [
  { name: 'Nasiona chia', amount: '34.4 g/100g (115% DV)', price: '~5.00 zł/100g' },
  { name: 'Siemię lniane', amount: '27.3 g/100g (91% DV)', price: '~1.80 zł/100g' },
  { name: 'Ciecierzyca', amount: '17 g/100g (57% DV)', price: '~1.00 zł/100g' },
  { name: 'Fasola', amount: '15 g/100g (50% DV)', price: '~0.80 zł/100g' },
  { name: 'Migdały', amount: '12.5 g/100g (42% DV)', price: '~6.00 zł/100g' },
  { name: 'Sezam', amount: '11.8 g/100g (39% DV)', price: '~3.00 zł/100g' },
  { name: 'Soczewica', amount: '11 g/100g (37% DV)', price: '~1.20 zł/100g' },
  { name: 'Płatki owsiane', amount: '10.6 g/100g (35% DV)', price: '~0.50 zł/100g' },
  { name: 'Kasza gryczana', amount: '10 g/100g (33% DV)', price: '~0.80 zł/100g' },
  { name: 'Groszek zielony', amount: '5 g/100g (17% DV)', price: '~0.80 zł/100g' }
]
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  background: var(--gray-50);
}

/* Header */
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
  margin-bottom: 12px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
}

/* Navigation */
.nutrient-nav {
  background: white;
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-scroll {
  display: flex;
  gap: 8px;
  padding: 16px 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.nav-scroll::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--gray-100);
  border: none;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-600);
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-item:hover {
  background: var(--gray-200);
}

.nav-item.active {
  background: var(--primary-500);
  color: white;
}

.nav-icon {
  font-size: 1.125rem;
}

/* Content */
.page-content {
  padding: 24px 0 60px;
}

/* Sections with Sidebar */
.nutrient-section {
  display: flex;
  gap: 0;
  margin-bottom: 20px;
  padding-top: 20px;
  position: relative;
}

.nutrient-section:first-child {
  padding-top: 0;
}

.section-sidebar {
  width: 48px;
  flex-shrink: 0;
  position: relative;
}

.sidebar-label {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  background: var(--gray-100);
  border-radius: var(--radius-lg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.sidebar-icon {
  font-size: 1.25rem;
  transform: rotate(180deg);
}

.sidebar-text {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gray-600);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Section-specific sidebar colors */
#witaminy .sidebar-label {
  background: #dcfce7;
  color: #166534;
}
#witaminy .sidebar-text { color: #166534; }

#mineraly .sidebar-label {
  background: #dbeafe;
  color: #1e40af;
}
#mineraly .sidebar-text { color: #1e40af; }

#tluszcze .sidebar-label {
  background: #fef3c7;
  color: #b45309;
}
#tluszcze .sidebar-text { color: #b45309; }

#bialko .sidebar-label {
  background: #fee2e2;
  color: #b91c1c;
}
#bialko .sidebar-text { color: #b91c1c; }

#weglowodany .sidebar-label {
  background: #f3e8ff;
  color: #7c3aed;
}
#weglowodany .sidebar-text { color: #7c3aed; }

#blonnik .sidebar-label {
  background: #ccfbf1;
  color: #0f766e;
}
#blonnik .sidebar-text { color: #0f766e; }

.section-content {
  flex: 1;
  min-width: 0;
}

/* Nutrient Cards - Row Style like Results Page */
.nutrient-card {
  background: white;
  border-radius: var(--radius-xl);
  margin-bottom: 12px;
  box-shadow: var(--shadow-md);
  overflow: hidden;
  border-left: 5px solid var(--primary-500);
}

.nutrient-card:last-child {
  margin-bottom: 0;
}

/* Section-specific colors */
#witaminy .nutrient-card {
  border-left-color: #22c55e;
}
#witaminy .nutrient-header {
  background: linear-gradient(135deg, white 0%, #f0fdf4 100%);
}
#witaminy .daily-value {
  background: #dcfce7;
  color: #166534;
}

#mineraly .nutrient-card {
  border-left-color: #3b82f6;
}
#mineraly .nutrient-header {
  background: linear-gradient(135deg, white 0%, #eff6ff 100%);
}
#mineraly .daily-value {
  background: #dbeafe;
  color: #1e40af;
}

#tluszcze .nutrient-card {
  border-left-color: #f59e0b;
}
#tluszcze .nutrient-header {
  background: linear-gradient(135deg, white 0%, #fffbeb 100%);
}
#tluszcze .daily-value {
  background: #fef3c7;
  color: #b45309;
}

#bialko .nutrient-card {
  border-left-color: #ef4444;
}
#bialko .nutrient-header {
  background: linear-gradient(135deg, white 0%, #fef2f2 100%);
}
#bialko .daily-value {
  background: #fee2e2;
  color: #b91c1c;
}

#weglowodany .nutrient-card {
  border-left-color: #a855f7;
}
#weglowodany .nutrient-header {
  background: linear-gradient(135deg, white 0%, #faf5ff 100%);
}
#weglowodany .daily-value {
  background: #f3e8ff;
  color: #7c3aed;
}

#blonnik .nutrient-card {
  border-left-color: #14b8a6;
}
#blonnik .nutrient-header {
  background: linear-gradient(135deg, white 0%, #f0fdfa 100%);
}
#blonnik .daily-value {
  background: #ccfbf1;
  color: #0f766e;
}

.nutrient-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: linear-gradient(135deg, white 0%, var(--primary-50) 100%);
  border-bottom: 1px solid var(--gray-100);
  flex-wrap: wrap;
  gap: 12px;
}

.nutrient-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.nutrient-info h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  color: var(--gray-900);
}

.daily-value {
  font-size: 0.75rem;
  color: var(--primary-700);
  background: var(--primary-100);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-weight: 500;
}

.nutrient-desc {
  color: var(--gray-500);
  font-size: 0.8125rem;
  line-height: 1.5;
  max-width: 400px;
}

/* Food Grid */
.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 8px;
  padding: 16px 20px;
}

.food-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--gray-50);
  border-radius: var(--radius-md);
  gap: 10px;
  transition: all var(--transition-fast);
}

.food-item:hover {
  background: var(--primary-50);
}

.food-name {
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--gray-800);
  flex: 1;
}

.food-amount {
  font-size: 0.75rem;
  color: var(--primary-600);
  font-weight: 600;
  text-align: right;
  min-width: 120px;
}

.food-price {
  font-size: 0.6875rem;
  color: var(--gray-400);
  min-width: 80px;
  text-align: right;
}

/* Tip Box */
.tip-box {
  margin: 0 20px 16px;
  padding: 12px 16px;
  background: #fef3c7;
  border-left: 3px solid #f59e0b;
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  color: #92400e;
}

/* Responsive */
@media (max-width: 1024px) {
  .section-sidebar {
    width: 40px;
  }
  
  .sidebar-label {
    padding: 12px 6px;
  }
  
  .sidebar-text {
    font-size: 0.6875rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 32px 0 48px;
  }
  
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .nutrient-section {
    flex-direction: column;
  }
  
  .section-sidebar {
    width: 100%;
    margin-bottom: 12px;
  }
  
  .sidebar-label {
    writing-mode: horizontal-tb;
    transform: none;
    flex-direction: row;
    padding: 10px 16px;
  }
  
  .sidebar-icon {
    transform: none;
  }
  
  .food-grid {
    grid-template-columns: 1fr;
  }
  
  .food-item {
    flex-wrap: wrap;
  }
  
  .food-amount, .food-price {
    min-width: auto;
  }
}
</style>

