<template>
  <div class="guides-page">
    <!-- Header -->
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Poradniki</h1>
        <p class="subtitle">Praktyczna wiedza o budowaniu zdrowych nawyków żywieniowych</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">

        <!-- Article 1 -->
        <article class="guide-article" id="wytrwac-w-diecie">
          <div class="article-header">
            <span class="article-number">01</span>
            <h2>Co robić by wytrwać w diecie?</h2>
          </div>
          <div class="article-content">
            <p class="lead">Większość diet kończy się niepowodzeniem nie z powodu złego planu, ale z powodu braku strategii na trudne momenty. Oto sprawdzone metody, które pomogą Ci wytrwać.</p>

            <h3>🎯 Nie rób rewolucji — rób ewolucję</h3>
            <p>Największy błąd to próba zmiany wszystkiego naraz. Zamiast "od poniedziałku jem tylko zdrowo", wprowadź jedną zmianę tygodniowo:</p>
            <ul>
              <li>Tydzień 1: Zamień słodki napój na wodę</li>
              <li>Tydzień 2: Dodaj warzywo do każdego posiłku</li>
              <li>Tydzień 3: Przygotuj obiady na cały tydzień w niedzielę</li>
            </ul>

            <h3>🧠 Zaplanuj porażki z góry</h3>
            <p>Będą dni, gdy zjedziesz coś poza planem. To normalne. Różnica między sukcesem a porażką to nie perfekcja, ale to co robisz <em>po</em> wpadce. Ustal zasadę: "Po każdym złamaniu diety, następny posiłek jest zgodny z planem". Nigdy nie odkładaj na jutro.</p>

            <h3>📝 Jedz świadomie</h3>
            <p>Przez tydzień zapisuj wszystko co jesz — bez osądzania, bez zmiany nawyków. Sam akt zapisywania zwiększa świadomość i często prowadzi do lepszych wyborów. Używaj aplikacji lub zwykłego notesu.</p>

            <h3>🍽️ Przygotuj środowisko</h3>
            <p>Siła woli to ograniczony zasób. Zamiast polegać na dyscyplinie, zmień otoczenie:</p>
            <ul>
              <li>Wyrzuć niezdrowe przekąski z domu</li>
              <li>Trzymaj owoce na wierzchu</li>
              <li>Przygotuj zdrowe przekąski w łatwo dostępnym miejscu</li>
              <li>Używaj mniejszych talerzy</li>
            </ul>

            <h3>👥 Znajdź partnera</h3>
            <p>Ludzie, którzy mają "accountability partner" — kogoś kto sprawdza ich postępy — osiągają cele 2x częściej. Może to być znajomy na tej samej diecie, trener, lub nawet publiczne deklarowanie celów w social media.</p>
          </div>
        </article>

        <!-- Article 2 -->
        <article class="guide-article" id="nawyki">
          <div class="article-header">
            <span class="article-number">02</span>
            <h2>Jak budować w sobie nawyki konsekwentnego odżywiania się</h2>
          </div>
          <div class="article-content">
            <p class="lead">Nawyki to automatyczne zachowania, które nie wymagają siły woli. Zbudowanie dobrego nawyku żywieniowego to inwestycja, która zwraca się przez całe życie.</p>

            <h3>⚡ Formuła nawyku: Sygnał → Rutyna → Nagroda</h3>
            <p>Każdy nawyk składa się z trzech elementów. Aby zbudować nowy nawyk, musisz zaprojektować wszystkie trzy:</p>
            <ul>
              <li><strong>Sygnał:</strong> Co wyzwoli zachowanie? (np. budzik o 7:00)</li>
              <li><strong>Rutyna:</strong> Co dokładnie zrobisz? (np. przygotuję śniadanie z jajek i warzyw)</li>
              <li><strong>Nagroda:</strong> Jaka przyjemność na końcu? (np. kawa i 5 minut z książką)</li>
            </ul>

            <h3>📌 Dołącz nowy nawyk do istniejącego</h3>
            <p>Technika "habit stacking": Po [istniejącym nawyku], zrobię [nowy nawyk].</p>
            <ul>
              <li>Po parzeniu porannej kawy, pokroję warzywa na obiad</li>
              <li>Po umyciu zębów wieczorem, przygotuję lunch box na jutro</li>
              <li>Po powrocie z pracy, od razu wyciągnę składniki na kolację</li>
            </ul>

            <h3>🔢 Zasada 2 minut</h3>
            <p>Nowy nawyk powinien zajmować mniej niż 2 minuty. "Przygotuję zdrowy obiad" to za dużo. "Wyciągnę patelnię i składniki" to 2 minuty. Gdy to stanie się automatyczne, rozbuduj.</p>

            <h3>📊 Śledź postępy wizualnie</h3>
            <p>Kup kalendarz i za każdy dzień, gdy zjadłeś zgodnie z planem, postaw X. Nie przerywaj łańcucha X-ów. To proste, ale niezwykle skuteczne — wizualizacja postępu motywuje.</p>

            <h3>⏰ Stałe pory posiłków</h3>
            <p>Jedz o tych samych porach każdego dnia. Ciało dostosuje się i będziesz odczuwać głód dokładnie wtedy, gdy planujesz jeść. Eliminuje to nieplanowane podjadanie.</p>

            <h3>🚫 Zasada "nie łam dwa razy"</h3>
            <p>Jeden złamany dzień to błąd. Dwa z rzędu to początek nowego (złego) nawyku. Nieważne jak źle poszło wczoraj — dziś wracasz na tor.</p>
          </div>
        </article>

        <!-- Article 3 -->
        <article class="guide-article" id="gotowanie-dla-siebie">
          <div class="article-header">
            <span class="article-number">03</span>
            <h2>Jak gotować dla siebie samego szybko i bez straty czasu</h2>
          </div>
          <div class="article-content">
            <p class="lead">Gotowanie dla jednej osoby może wydawać się nieopłacalne i czasochłonne. Ale z odpowiednią strategią możesz jeść domowe posiłki spędzając w kuchni mniej niż 30 minut dziennie.</p>

            <h3>📦 Meal prep w niedzielę</h3>
            <p>Poświęć 2-3 godziny w niedzielę na przygotowanie jedzenia na cały tydzień:</p>
            <ul>
              <li>Ugotuj 1-2 kg kurczaka/mięsa</li>
              <li>Ugotuj duży garnek kaszy/ryżu</li>
              <li>Upiecz blaszkę warzyw</li>
              <li>Przygotuj 5 porcji sałatki w słoikach</li>
            </ul>
            <p>Każdego dnia tylko komponujesz talerz z gotowych elementów.</p>

            <h3>🍳 Opanuj 5 szybkich przepisów</h3>
            <p>Nie potrzebujesz 50 przepisów. Potrzebujesz 5 sprawdzonych dań, które umiesz zrobić z zamkniętymi oczami:</p>
            <ul>
              <li>Jajecznica z warzywami (10 min)</li>
              <li>Kurczak z warzywami z patelni (20 min)</li>
              <li>Makaron z sosem pomidorowym (15 min)</li>
              <li>Sałatka z białkiem (10 min)</li>
              <li>Zupa z tego co zostało (20 min)</li>
            </ul>

            <h3>🧊 Mrożonki to Twój przyjaciel</h3>
            <p>Mrożone warzywa są równie odżywcze jak świeże (często bardziej, bo są mrożone tuż po zbiorze). Trzymaj w zamrażarce:</p>
            <ul>
              <li>Mieszankę warzyw na patelnię</li>
              <li>Brokuły i fasolkę</li>
              <li>Mrożone owoce na smoothie</li>
              <li>Porcje własnoręcznie ugotowanego mięsa</li>
            </ul>

            <h3>🎯 Gotuj raz, jedz trzy razy</h3>
            <p>Zawsze gotuj 3x więcej niż potrzebujesz na jeden posiłek. Jedną porcję zjedz teraz, jedną schowaj do lodówki na jutro, jedną zamróź na "awaryjny" dzień.</p>

            <h3>⚡ Jedna patelnia = jeden posiłek</h3>
            <p>Dania jednogarnkowe to game changer. Wrzuć białko + warzywa + przyprawy na patelnię lub do garnka. Mniej zmywania, mniej chaosu, równie smaczne.</p>

            <h3>🛒 Zakupy z listą</h3>
            <p>Zrób zakupy raz w tygodniu według ustalonej listy. Impulsywne zakupy = jedzenie na wynos w tygodniu. Planowanie = zdrowe posiłki w domu.</p>
          </div>
        </article>

        <!-- Article 4 -->
        <article class="guide-article" id="nawodnienie">
          <div class="article-header">
            <span class="article-number">04</span>
            <h2>Dlaczego nawodnienie jest kluczowe dla Twojego zdrowia</h2>
          </div>
          <div class="article-content">
            <p class="lead">Ponad 60% ludzi jest chronicznie odwodnionych i nawet o tym nie wie. Objawy? Zmęczenie, bóle głowy, problemy z koncentracją, głód (często mylony z pragnieniem).</p>

            <h3>💧 Ile pić?</h3>
            <p>Podstawowa formuła: <strong>30-35 ml na kilogram masy ciała</strong>. Dla osoby 70 kg to 2.1-2.5 litra dziennie. Przy aktywności fizycznej, upale lub suchym powietrzu — więcej.</p>

            <h3>⏰ Kiedy pić?</h3>
            <ul>
              <li><strong>Rano:</strong> Szklanka wody zaraz po przebudzeniu — nawadnia po nocy</li>
              <li><strong>Przed posiłkiem:</strong> 20-30 minut przed jedzeniem — wspomaga trawienie</li>
              <li><strong>Między posiłkami:</strong> Nie podczas jedzenia — rozcieńcza enzymy trawienne</li>
              <li><strong>Przed snem:</strong> Mała ilość, żeby nie budzić się w nocy</li>
            </ul>

            <h3>🍋 Jak sprawić, żeby woda smakowała lepiej</h3>
            <ul>
              <li>Plasterki cytryny lub limonki</li>
              <li>Świeża mięta</li>
              <li>Plasterki ogórka</li>
              <li>Kawałki owoców (truskawki, pomarańcze)</li>
              <li>Imbir</li>
            </ul>

            <h3>⚠️ Oznaki odwodnienia</h3>
            <ul>
              <li>Ciemny mocz (powinien być jasnosłomkowy)</li>
              <li>Suche usta</li>
              <li>Ból głowy</li>
              <li>Zmęczenie po południu</li>
              <li>Problemy z koncentracją</li>
            </ul>

            <h3>📱 Trackuj picie</h3>
            <p>Kup butelkę z oznaczeniami godzinowymi lub ustaw przypomnienia w telefonie co 2 godziny. Automatyzacja pomaga budować nawyk.</p>
          </div>
        </article>

        <!-- Article 5 -->
        <article class="guide-article" id="czytanie-etykiet">
          <div class="article-header">
            <span class="article-number">05</span>
            <h2>Jak czytać etykiety produktów żywnościowych</h2>
          </div>
          <div class="article-content">
            <p class="lead">Producenci są mistrzami marketingu. "Naturalny", "fit", "bez cukru" — te hasła często nic nie znaczą. Naucz się czytać etykiety i podejmuj świadome decyzje.</p>

            <h3>📋 Lista składników — zasady</h3>
            <ul>
              <li><strong>Kolejność ma znaczenie:</strong> Składniki są wymienione od największej do najmniejszej ilości. Jeśli cukier jest w pierwszej trójce — produkt jest głównie cukrem.</li>
              <li><strong>Im krótsza lista, tym lepiej:</strong> 3-5 składników to ideał. 25 składników? Uciekaj.</li>
              <li><strong>Jeśli nie wiesz co to, nie jedz:</strong> "E621", "hydrolizowany białko sojowy", "maltodekstryna" — to sygnały ostrzegawcze.</li>
            </ul>

            <h3>🔢 Tabela wartości odżywczych</h3>
            <ul>
              <li><strong>Sprawdź porcję:</strong> Często wartości są podane na 30g, gdy opakowanie ma 150g. Łatwo się oszukać.</li>
              <li><strong>Cukry:</strong> Max 25g dziennie dla kobiet, 36g dla mężczyzn. Jedna cola to 39g.</li>
              <li><strong>Sód:</strong> Max 2300mg dziennie. Wysoko przetworzone produkty są pełne soli.</li>
              <li><strong>Błonnik:</strong> Szukaj produktów z wysoką zawartością błonnika — minimum 3g na porcję.</li>
            </ul>

            <h3>🚫 Czerwone flagi</h3>
            <ul>
              <li>"Syrop glukozowo-fruktozowy" — najgorszy rodzaj cukru</li>
              <li>"Tłuszcze utwardzone/trans" — unikaj całkowicie</li>
              <li>"Aromat" bez słowa "naturalny" — chemiczne zamienniki</li>
              <li>Długa lista E-dodatków — wysoki stopień przetworzenia</li>
            </ul>

            <h3>✅ Zielone flagi</h3>
            <ul>
              <li>Krótka lista składników</li>
              <li>Składniki, które rozpoznajesz</li>
              <li>Wysoka zawartość białka i błonnika</li>
              <li>Brak dodanego cukru</li>
            </ul>
          </div>
        </article>

        <!-- Article 6 -->
        <article class="guide-article" id="budzet">
          <div class="article-header">
            <span class="article-number">06</span>
            <h2>Jak jeść zdrowo na ograniczonym budżecie</h2>
          </div>
          <div class="article-content">
            <p class="lead">Mit: zdrowe jedzenie jest drogie. Prawda: nieprzetworzone produkty są tańsze niż gotowe dania i fast foody. Trzeba tylko wiedzieć, co kupować.</p>

            <h3>💰 Najtańsze źródła białka</h3>
            <ul>
              <li><strong>Jaja:</strong> ~1.80 zł/100g białka. Kompletne aminokwasy.</li>
              <li><strong>Soczewica:</strong> ~1.20 zł/100g białka. Plus błonnik i żelazo.</li>
              <li><strong>Kurczak (uda, skrzydełka):</strong> Tańsze części są równie odżywcze.</li>
              <li><strong>Wątróbka:</strong> Najtańsze mięso, najbogatsze w składniki odżywcze.</li>
            </ul>

            <h3>🥬 Najtańsze warzywa</h3>
            <ul>
              <li>Kapusta — bogactwo witaminy C, praktycznie za grosze</li>
              <li>Marchew — beta-karoten za ułamek ceny suplementów</li>
              <li>Cebula i czosnek — baza każdego dania</li>
              <li>Buraki — niedoceniane źródło azotanów i błonnika</li>
              <li>Sezonowe warzywa — zawsze najtańsze</li>
            </ul>

            <h3>🛒 Strategie oszczędzania</h3>
            <ul>
              <li><strong>Kupuj hurtowo:</strong> Ryż, kasze, fasola — duże opakowania są znacznie tańsze per kilogram</li>
              <li><strong>Mrożonki:</strong> Często tańsze niż świeże, zero marnowania</li>
              <li><strong>Promocje mięsne:</strong> Kup więcej i zamróź</li>
              <li><strong>Własne kiełki:</strong> Najtańsze "superfoods" — tylko nasiona i woda</li>
              <li><strong>Gotuj duże porcje:</strong> Koszt gazu/prądu się rozkłada</li>
            </ul>

            <h3>🚫 Na czym NIE oszczędzać</h3>
            <ul>
              <li><strong>Oliwa z oliwek:</strong> Tania "oliwa" to mieszanka olejów. Lepsza mniejsza ilość dobrej niż dużo fałszywej.</li>
              <li><strong>Jaja:</strong> Jaja z wolnego wybiegu mają lepszy profil kwasów tłuszczowych.</li>
              <li><strong>Mięso:</strong> Jakość > ilość. Lepiej jeść mniej lepszego mięsa.</li>
            </ul>

            <h3>📊 Przykładowy budżet tygodniowy (1 osoba)</h3>
            <ul>
              <li>Jaja (30 szt) — 25 zł</li>
              <li>Kurczak 1 kg — 25 zł</li>
              <li>Warzywa sezonowe — 30 zł</li>
              <li>Owoce — 20 zł</li>
              <li>Nabiał — 25 zł</li>
              <li>Kasze, ryż, makarony — 15 zł</li>
              <li>Rośliny strączkowe — 10 zł</li>
              <li><strong>Razem: ~150 zł/tydzień</strong></li>
            </ul>
            <p>To 3 pełnowartościowe posiłki dziennie za około 20 zł.</p>
          </div>
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
.guides-page {
  min-height: 100vh;
  background: var(--gray-50);
}

/* Header */
.page-header {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
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

/* Article */
.guide-article {
  background: white;
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 32px;
  box-shadow: var(--shadow-md);
}

.article-header {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-100);
}

.article-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--gray-200);
  line-height: 1;
}

.article-header h2 {
  font-size: 1.75rem;
  color: var(--gray-900);
  margin: 0;
  padding-top: 8px;
}

.article-content .lead {
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: var(--gray-50);
  border-left: 4px solid #7c3aed;
  border-radius: var(--radius-md);
}

.article-content h3 {
  font-size: 1.25rem;
  margin: 32px 0 16px;
  color: var(--gray-800);
}

.article-content p {
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 16px;
}

.article-content ul {
  margin: 0 0 20px 0;
  padding-left: 0;
  list-style: none;
}

.article-content ul li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 10px;
  color: var(--gray-700);
  line-height: 1.6;
}

.article-content ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: #7c3aed;
  border-radius: 50%;
}

.article-content strong {
  color: var(--gray-800);
}

.article-content em {
  color: #7c3aed;
  font-style: normal;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .guide-article {
    padding: 28px;
  }
  
  .article-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .article-number {
    font-size: 2rem;
  }
  
  .article-header h2 {
    font-size: 1.5rem;
    padding-top: 0;
  }
}
</style>

