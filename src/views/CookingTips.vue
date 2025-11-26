<template>
  <div class="tips-page">
    <!-- Header -->
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Sztuczki kulinarne</h1>
        <p class="subtitle">Praktyczne porady, które naprawdę robią różnicę w kuchni</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">
        <!-- Intro -->
        <div class="intro-card">
          <p>
            Te wskazówki zebrałem przez lata gotowania. To nie teoria z książek kucharskich — 
            to sprawdzone w praktyce triki, które naprawdę działają. Stosuj je, a Twoje potrawy 
            będą smakować lepiej.
          </p>
        </div>

        <!-- Tips Grid -->
        <div class="tips-grid">
          
          <div class="tip-card" v-for="(tip, index) in tips" :key="index">
            <div class="tip-number">{{ index + 1 }}</div>
            <div class="tip-content">
              <div class="tip-category">{{ tip.category }}</div>
              <h3>{{ tip.title }}</h3>
              <p>{{ tip.description }}</p>
              <div class="tip-why" v-if="tip.why">
                <strong>Dlaczego to działa:</strong> {{ tip.why }}
              </div>
            </div>
          </div>

        </div>

        <!-- Bonus Section -->
        <div class="bonus-section">
          <h2>🎯 Złote zasady kuchni</h2>
          <div class="golden-rules">
            <div class="rule" v-for="(rule, index) in goldenRules" :key="index">
              <div class="rule-icon">{{ rule.icon }}</div>
              <div class="rule-text">{{ rule.text }}</div>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import Footer from '../components/landing/Footer.vue'

const tips = [
  {
    category: 'Smażenie',
    title: 'Zawsze kładź na rozgrzaną patelnię',
    description: 'Patelnia musi być gorąca zanim położysz na niej jedzenie. Wrzuć kroplę wody — jeśli natychmiast wyparuje z sykiem, patelnia jest gotowa.',
    why: 'Zimna patelnia sprawia, że jedzenie się przykleja i wypuszcza wodę zamiast się rumienić. Gorąca patelnia natychmiast zamyka powierzchnię i tworzy chrupiącą skórkę.'
  },
  {
    category: 'Mięso',
    title: 'Obsmaż mięso dookoła żeby zamknąć pory',
    description: 'Przed duszeniem lub pieczeniem, obsmaż mięso na złoto ze wszystkich stron na bardzo gorącej patelni. Nie ruszaj go przez pierwsze 2-3 minuty.',
    why: 'Obsmażanie tworzy reakcję Maillarda — brązową, aromatyczną skorupkę, która zamyka soki wewnątrz. Mięso będzie soczyste, nie suche.'
  },
  {
    category: 'Wątróbka',
    title: 'Wątróbki nigdy nie sól przed smażeniem',
    description: 'Posól wątróbkę dopiero po usmażeniu lub tuż przed podaniem. Solenie surowej wątróbki przed obróbką sprawia, że staje się twarda i gumowata.',
    why: 'Sól wyciąga wodę z wątróbki i utwardza jej białka. Jeśli posolisz przed smażeniem, wyjdzie sucha i twarda jak podeszwa.'
  },
  {
    category: 'Gotowanie',
    title: 'Nie sól wody przed gotowaniem warzyw',
    description: 'Sól dodawaj do wody dopiero gdy zacznie wrzeć, a najlepiej pod koniec gotowania warzyw. Dotyczy to szczególnie fasoli i innych strączków.',
    why: 'Sól w zimnej wodzie utwardza skórkę warzyw i wydłuża czas gotowania. Fasola solona od początku może nigdy nie zmięknieć.'
  },
  {
    category: 'Pieczywo',
    title: 'Ciasto na bułki zostaw w lodówce na dobę',
    description: 'Po wyrobieniu ciasta drożdżowego włóż je do lodówki na 12-24 godziny zamiast zostawiać w temperaturze pokojowej. Pieczywo będzie smaczniejsze i lepiej wyrośnie.',
    why: 'Zimna fermentacja rozwija głębszy, bardziej złożony smak. Drożdże pracują wolniej, ale produkują więcej aromatycznych związków. Gluten się relaksuje i ciasto jest łatwiejsze do formowania.'
  },
  {
    category: 'Pizza',
    title: 'Rozciągaj pizzę na kaszy',
    description: 'Po wyjęciu ciasta na pizzę z lodówki, połóż je na warstwie kaszy manny lub kukurydzianej. Rozciągaj na kaszy — dzięki temu nie przywrze do blatu ani do łopatki.',
    why: 'Kasza działa jak miniaturowe kuleczki łożyskowe — pizza ślizga się po niej. Dodatkowo kasza kukurydziana dodaje lekko chrupiący spód.'
  },
  {
    category: 'Smażenie',
    title: 'Suszone mięso lepiej się rumieni',
    description: 'Przed smażeniem osusz mięso papierowym ręcznikiem. Mokra powierzchnia paruje zamiast się rumienić.',
    why: 'Woda musi najpierw wyparować zanim temperatura wzrośnie powyżej 100°C i zacznie się brązowienie. Sucha powierzchnia od razu wchodzi w reakcję Maillarda.'
  },
  {
    category: 'Mięso',
    title: 'Wyjmij mięso z lodówki 30 min przed smażeniem',
    description: 'Mięso powinno mieć temperaturę pokojową przed gotowaniem. Wyjmij je z lodówki pół godziny wcześniej.',
    why: 'Zimne mięso w środku + gorąca patelnia = przypalone na zewnątrz, surowe w środku. Mięso w temperaturze pokojowej gotuje się równomiernie.'
  },
  {
    category: 'Gotowanie',
    title: 'Makaron gotuj w dużej ilości wody',
    description: 'Na 100g makaronu używaj minimum 1 litra wody. Woda musi wrócić do wrzenia szybko po wrzuceniu makaronu.',
    why: 'Mała ilość wody = temperatura spada za bardzo po wrzuceniu makaronu, skrobia się zagęszcza, makaron się skleja.'
  },
  {
    category: 'Jaja',
    title: 'Jajecznica na małym ogniu',
    description: 'Jajecznicę smaż na małym ogniu, ciągle mieszając. Zdejmij z ognia gdy jest jeszcze lekko płynna — dogotuje się od resztkowego ciepła.',
    why: 'Wysokia temperatura sprawia, że jaja stają się gumowate i suche. Powolne gotowanie daje kremową, aksamitną konsystencję.'
  },
  {
    category: 'Warzywa',
    title: 'Cebulę smaż powoli na średnim ogniu',
    description: 'Nie śpiesz się ze smażeniem cebuli. Na średnim ogniu smaż 15-20 minut, mieszając od czasu do czasu, aż będzie złocista i karmelowa.',
    why: 'Powolne smażenie wyciąga naturalne cukry z cebuli i je karmelizuje. Szybkie smażenie na wysokim ogniu daje tylko przypaloną cebulę.'
  },
  {
    category: 'Przyprawy',
    title: 'Rozgrzej przyprawy na suchej patelni',
    description: 'Przed mieleniem lub dodaniem do potrawy, rozgrzej przyprawy (kminek, kolendrę, kardamon) na suchej patelni przez minutę.',
    why: 'Ciepło uwalnia olejki eteryczne z przypraw i intensyfikuje ich aromat. Różnica jest ogromna.'
  },
  {
    category: 'Gotowanie',
    title: 'Ryż płucz przed gotowaniem',
    description: 'Płucz ryż pod bieżącą wodą aż woda będzie czysta (3-4 razy). Usuwa to nadmiar skrobi.',
    why: 'Niepłukany ryż jest kleisty i papkowaty. Płukanie usuwa skrobię z powierzchni i daje sypki, oddzielające się ziarna.'
  },
  {
    category: 'Mięso',
    title: 'Daj mięsu odpocząć po pieczeniu',
    description: 'Po wyjęciu z piekarnika lub patelni, przykryj mięso folią i zostaw na 5-10 minut przed krojeniem.',
    why: 'Podczas gotowania soki zbierają się w środku mięsa. Odpoczynek pozwala im się rozprowadzić równomiernie. Jeśli pokroisz od razu, soki wyciekną na talerz.'
  },
  {
    category: 'Pieczywo',
    title: 'Skrop chleb wodą przed pieczeniem',
    description: 'Przed włożeniem do piekarnika, spryskaj chleb wodą lub wstaw naczynie z wodą do piekarnika.',
    why: 'Para w pierwszych minutach pieczenia opóźnia twardnienie skórki, pozwalając chlebowi bardziej wyrosnąć. Daje też błyszczącą, chrupiącą skórkę.'
  },
  {
    category: 'Smażenie',
    title: 'Nie przepełniaj patelni',
    description: 'Smaż mięso i warzywa partiami, żeby na patelni było luźno. Jedzenie powinno leżeć w jednej warstwie.',
    why: 'Przepełniona patelnia obniża temperaturę i jedzenie zaczyna się dusić we własnej parze zamiast się rumienić.'
  },
  {
    category: 'Warzywa',
    title: 'Blanszuj zielone warzywa',
    description: 'Gotuj brokuły i fasolkę szparagową w osolonej wrzącej wodzie 2-3 minuty, potem natychmiast wrzuć do lodowatej wody.',
    why: 'Krótkie gotowanie zachowuje kolor i chrupkość. Lodowata woda zatrzymuje proces gotowania i utrwala żywy zielony kolor.'
  },
  {
    category: 'Zupy',
    title: 'Zupę gotuj bez przykrycia',
    description: 'Buliony i zupy gotuj odkryte, żeby para mogła ulatniać się swobodnie.',
    why: 'Gotowanie pod przykryciem powoduje, że zupa wrze zbyt intensywnie i robi się mętna. Odkryta zupa powoli redukuje się i zagęszcza smak.'
  }
]

const goldenRules = [
  { icon: '🧂', text: 'Doprawiaj etapami, nie wszystko na końcu. Smakuj i koryguj.' },
  { icon: '🔪', text: 'Ostry nóż jest bezpieczniejszy niż tępy. Naostrz przed każdym gotowaniem.' },
  { icon: '🧹', text: 'Sprzątaj w trakcie gotowania. Czysta kuchnia = czysty umysł.' },
  { icon: '📖', text: 'Przeczytaj cały przepis przed rozpoczęciem. Przygotuj wszystkie składniki.' },
  { icon: '⏱️', text: 'Używaj timera. Intuicja to za mało przy pieczeniu.' },
  { icon: '👃', text: 'Ufaj swoim zmysłom — jeśli pachnie na przypalone, prawdopodobnie jest przypalone.' }
]
</script>

<style scoped>
.tips-page {
  min-height: 100vh;
  background: var(--gray-50);
}

/* Header */
.page-header {
  background: linear-gradient(135deg, var(--accent-500), var(--accent-600));
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

/* Content */
.page-content {
  padding: 48px 0 80px;
}

.intro-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  margin-bottom: 40px;
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--accent-500);
}

.intro-card p {
  font-size: 1.0625rem;
  color: var(--gray-700);
  line-height: 1.7;
  margin: 0;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.tip-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-md);
  display: flex;
  gap: 20px;
  transition: all var(--transition-base);
}

.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.tip-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--accent-500), var(--accent-600));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.tip-content {
  flex: 1;
}

.tip-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.tip-content h3 {
  font-size: 1.125rem;
  margin-bottom: 10px;
  color: var(--gray-900);
}

.tip-content > p {
  color: var(--gray-600);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.tip-why {
  background: var(--gray-50);
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--gray-600);
  line-height: 1.5;
}

.tip-why strong {
  color: var(--gray-700);
}

/* Bonus Section */
.bonus-section {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-md);
}

.bonus-section h2 {
  font-size: 1.5rem;
  margin-bottom: 28px;
  text-align: center;
}

.golden-rules {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.rule {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
}

.rule-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.rule-text {
  font-size: 0.9375rem;
  color: var(--gray-700);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .tips-grid {
    grid-template-columns: 1fr;
  }
  
  .golden-rules {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .tip-card {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .golden-rules {
    grid-template-columns: 1fr;
  }
  
  .bonus-section {
    padding: 28px;
  }
}
</style>

