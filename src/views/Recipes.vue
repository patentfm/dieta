<template>
  <div class="recipes-page">
    <!-- Header -->
    <header class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Strona główna
        </router-link>
        <h1>Przepisy</h1>
        <p class="subtitle">Sprawdzone przepisy z dokładnymi proporcjami i listami zakupów</p>
      </div>
    </header>

    <main class="page-content">
      <div class="container">

        <!-- Recipe 1: Pierś z kurczaka -->
        <article class="recipe-card" id="piers-kurczaka">
          <div class="recipe-header">
            <span class="recipe-tag">Danie główne</span>
            <h2>🍗 Soczysta pieczona pierś z kurczaka</h2>
            <p class="recipe-intro">Sekret soczystej piersi to marynata i obsmazenie przed pieczeniem. Dzięki tej technice mięso będzie miękkie i pełne smaku.</p>
            <div class="recipe-meta">
              <span><strong>Czas przygotowania:</strong> 15 min + marynowanie</span>
              <span><strong>Czas pieczenia:</strong> 20-25 min</span>
              <span><strong>Porcje:</strong> 2</span>
            </div>
          </div>

          <div class="recipe-content">
            <div class="ingredients">
              <h3>📝 Składniki</h3>
              <ul>
                <li>250g piersi z kurczaka</li>
                <li>2 łyżki oliwy z oliwek</li>
                <li>2 ząbki czosnku (rozgniecione)</li>
                <li>1 łyżeczka papryki słodkiej</li>
                <li>½ łyżeczki papryki wędzonej</li>
                <li>1 łyżeczka suszonego oregano</li>
                <li>Sok z ½ cytryny</li>
                <li>Sól i pieprz do smaku</li>
              </ul>
              
              <h4>Marynata:</h4>
              <ul>
                <li>2 łyżki oliwy</li>
                <li>1 łyżka sosu sojowego</li>
                <li>1 łyżka miodu</li>
                <li>Czosnek i przyprawy jak wyżej</li>
              </ul>
            </div>

            <div class="instructions">
              <h3>👨‍🍳 Przygotowanie</h3>
              <ol>
                <li><strong>Przygotuj marynatę:</strong> Wymieszaj oliwę, sos sojowy, miód, rozgnieciony czosnek i przyprawy w misce.</li>
                <li><strong>Marynuj mięso:</strong> Włóż pierś do marynaty, dokładnie obtocz i zostaw w lodówce minimum 2 godziny (najlepiej na noc).</li>
                <li><strong>Wyjmij z lodówki:</strong> 30 minut przed pieczeniem wyjmij mięso z lodówki, żeby osiągnęło temperaturę pokojową.</li>
                <li><strong>Rozgrzej patelnię:</strong> Nagrzej patelnię żeliwną lub grillową na wysokim ogniu. Musi być bardzo gorąca.</li>
                <li><strong>Obsmaż mięso:</strong> Połóż pierś na patelni i NIE RUSZAJ przez 3 minuty. Przewróć i obsmaż drugą stronę kolejne 3 minuty. Chcesz złotą, chrupiącą skórkę.</li>
                <li><strong>Piecz:</strong> Przełóż mięso do piekarnika nagrzanego do 200°C. Piecz 15-20 minut do temperatury wewnętrznej 74°C.</li>
                <li><strong>Odpoczynek:</strong> Wyjmij z piekarnika, przykryj folią i zostaw na 5 minut przed krojeniem.</li>
              </ol>
            </div>
          </div>

          <div class="pro-tip">
            💡 <strong>Pro tip:</strong> Nie nakłuwaj mięsa widelcem podczas obracania — używaj szczypiec. Każde nakłucie to utrata soków.
          </div>
        </article>

        <!-- Recipe 2: Pizza -->
        <article class="recipe-card" id="pizza">
          <div class="recipe-header">
            <span class="recipe-tag">Pieczywo</span>
            <h2>🍕 Pizza pieczona na kamieniu</h2>
            <p class="recipe-intro">Ciasto dojrzewające przez dobę w lodówce daje głęboki smak i sprężystą teksturę jak w prawdziwej pizzerii neapolitańskiej.</p>
            <div class="recipe-meta">
              <span><strong>Czas przygotowania:</strong> 30 min + 24h fermentacji</span>
              <span><strong>Czas pieczenia:</strong> 8-12 min</span>
              <span><strong>Porcje:</strong> 4 pizze</span>
            </div>
          </div>

          <div class="recipe-content">
            <div class="ingredients">
              <h3>📝 Składniki na ciasto</h3>
              <ul>
                <li>500g mąki typu "00" lub chlebowej</li>
                <li>300ml letniej wody</li>
                <li>3g drożdży suszonych (około ½ łyżeczki)</li>
                <li>10g soli</li>
                <li>1 łyżka oliwy z oliwek</li>
              </ul>

              <h4>Do rozciągania:</h4>
              <ul>
                <li>Kasza manna lub kukurydziana</li>
              </ul>

              <h4>Sos pomidorowy:</h4>
              <ul>
                <li>400g pomidorów z puszki (krojone)</li>
                <li>2 ząbki czosnku</li>
                <li>1 łyżeczka oregano</li>
                <li>Sól, pieprz, szczypta cukru</li>
              </ul>
            </div>

            <div class="instructions">
              <h3>👨‍🍳 Przygotowanie ciasta</h3>
              <ol>
                <li><strong>Rozpuść drożdże:</strong> W 300ml letniej wody rozpuść drożdże i zostaw na 5 minut.</li>
                <li><strong>Połącz składniki:</strong> W dużej misce wymieszaj mąkę z solą. Dodaj wodę z drożdżami i oliwę.</li>
                <li><strong>Wyrabiaj ciasto:</strong> Zagniataj ciasto rękami przez 10-15 minut. Ciasto powinno być elastyczne i lekko kleiste.</li>
                <li><strong>Próba okienka:</strong> Ciasto jest gotowe, gdy możesz rozciągnąć kawałek tak cienko, że prześwieca — bez rwania. Jeśli się rwie, zagniataj dalej.</li>
                <li><strong>Fermentacja w lodówce:</strong> Uformuj kulę, włóż do naoliwionej miski, przykryj folią i wstaw do lodówki na 24 godziny.</li>
                <li><strong>Podział:</strong> Wyjmij ciasto z lodówki 2 godziny przed pieczeniem. Podziel na 4 części, uformuj kulki.</li>
              </ol>

              <h3>Rozciąganie i pieczenie</h3>
              <ol>
                <li><strong>Przygotuj stanowisko:</strong> Posyp blat obficie kaszą manną lub kukurydzianą.</li>
                <li><strong>Rozciągaj:</strong> Połóż kulkę ciasta na kaszy. Delikatnie rozciągaj od środka do krawędzi, obracając. NIE używaj wałka — zniszczysz bąbelki powietrza.</li>
                <li><strong>Rozgrzej kamień:</strong> Kamień do pizzy rozgrzewaj w piekarniku na maksymalnej temperaturze (250-280°C) przez minimum 45 minut.</li>
                <li><strong>Nakładaj dodatki:</strong> Nałóż sos, ser i dodatki. Mniej znaczy więcej — przeładowana pizza nie wypiecze się dobrze.</li>
                <li><strong>Wsadź do pieca:</strong> Dzięki kaszy pizza łatwo zsunie się z łopatki na gorący kamień.</li>
                <li><strong>Piecz:</strong> 8-12 minut, aż brzegi są złote i napęczniałe, a spód chrupiący.</li>
              </ol>
            </div>
          </div>

          <div class="pro-tip">
            💡 <strong>Pro tip:</strong> Kamień musi być BARDZO gorący. Jeśli nie masz kamienia, użyj odwróconej żeliwnej patelni lub blachy do pieczenia postawionej do góry dnem.
          </div>
        </article>

        <!-- Recipe 3: Zupa rybna -->
        <article class="recipe-card" id="zupa-rybna">
          <div class="recipe-header">
            <span class="recipe-tag">Zupy</span>
            <h2>🐟 Zupa rybna z dorsza</h2>
            <p class="recipe-intro">Kremowa, rozgrzewająca zupa pełna omega-3 i białka. Idealna na chłodne dni.</p>
            <div class="recipe-meta">
              <span><strong>Czas przygotowania:</strong> 20 min</span>
              <span><strong>Czas gotowania:</strong> 30 min</span>
              <span><strong>Porcje:</strong> 4</span>
            </div>
          </div>

          <div class="recipe-content">
            <div class="ingredients">
              <h3>📝 Składniki</h3>
              <ul>
                <li>400g fileta z dorsza (lub innej białej ryby)</li>
                <li>2 łyżki oliwy z oliwek</li>
                <li>1 cebula (pokrojona w kostkę)</li>
                <li>2 łodygi selera naciowego</li>
                <li>2 marchewki (pokrojone)</li>
                <li>3 ziemniaki (pokrojone w kostkę)</li>
                <li>3 ząbki czosnku</li>
                <li>1 litr bulionu rybnego lub warzywnego</li>
                <li>200ml śmietanki 18%</li>
                <li>1 łyżeczka tymianku</li>
                <li>2 liście laurowe</li>
                <li>Sól, pieprz, sok z cytryny</li>
                <li>Świeży koperek do podania</li>
              </ul>
            </div>

            <div class="instructions">
              <h3>👨‍🍳 Przygotowanie</h3>
              <ol>
                <li><strong>Przygotuj warzywa:</strong> Pokrój cebulę, seler, marchewkę i ziemniaki w podobnej wielkości kostkę.</li>
                <li><strong>Podsmaż warzywa:</strong> W dużym garnku rozgrzej oliwę. Dodaj cebulę i smaż 5 minut. Dodaj seler, marchew i czosnek, smaż kolejne 3 minuty.</li>
                <li><strong>Dodaj płyny:</strong> Wlej bulion, dodaj ziemniaki, liście laurowe i tymianek. Gotuj 15 minut, aż ziemniaki będą miękkie.</li>
                <li><strong>Dodaj rybę:</strong> Pokrój dorsza na kawałki 3-4 cm. Delikatnie włóż do zupy i gotuj 5-7 minut na małym ogniu (ryba ma się gotować, nie wrzeć).</li>
                <li><strong>Wykończ:</strong> Wlej śmietankę, dopraw solą, pieprzem i sokiem z cytryny. Podgrzej, ale nie gotuj.</li>
                <li><strong>Podawaj:</strong> Posyp świeżym koperkiem i podawaj z chrupiącym chlebem.</li>
              </ol>
            </div>
          </div>

          <div class="pro-tip">
            💡 <strong>Pro tip:</strong> Nigdy nie gotuj zupy rybnej na mocnym ogniu po dodaniu ryby — rozpadnie się na kawałki. Delikatne duszenie zachowa strukturę.
          </div>
        </article>

        <!-- Recipe 4: Zupa jarzynowa -->
        <article class="recipe-card" id="zupa-jarzynowa">
          <div class="recipe-header">
            <span class="recipe-tag">Zupy</span>
            <h2>🥕 Zupa jarzynowa</h2>
            <p class="recipe-intro">Klasyczna zupa pełna warzyw i błonnika. Prosta, zdrowa i bardzo sycąca.</p>
            <div class="recipe-meta">
              <span><strong>Czas przygotowania:</strong> 20 min</span>
              <span><strong>Czas gotowania:</strong> 40 min</span>
              <span><strong>Porcje:</strong> 6</span>
            </div>
          </div>

          <div class="recipe-content">
            <div class="ingredients">
              <h3>📝 Składniki</h3>
              <ul>
                <li>2 łyżki oliwy z oliwek</li>
                <li>1 duża cebula</li>
                <li>2 ząbki czosnku</li>
                <li>3 marchewki</li>
                <li>2 ziemniaki</li>
                <li>¼ selera korzeniowego</li>
                <li>1 pietruszka (korzeń)</li>
                <li>½ małego kalafiora</li>
                <li>100g fasolki szparagowej</li>
                <li>100g groszku zielonego</li>
                <li>1.5 litra bulionu warzywnego</li>
                <li>2 liście laurowe</li>
                <li>4 ziarna ziela angielskiego</li>
                <li>Sól, pieprz</li>
                <li>Świeża natka pietruszki i koperek</li>
              </ul>
            </div>

            <div class="instructions">
              <h3>👨‍🍳 Przygotowanie</h3>
              <ol>
                <li><strong>Przygotuj warzywa:</strong> Wszystkie warzywa pokrój w podobnej wielkości kostkę (ok. 1.5 cm).</li>
                <li><strong>Podsmaż bazę:</strong> W dużym garnku rozgrzej oliwę. Podsmaż cebulę 5 minut, dodaj czosnek i smaż minutę.</li>
                <li><strong>Dodaj twarde warzywa:</strong> Wrzuć marchew, seler, pietruszkę i ziemniaki. Smaż 5 minut, mieszając.</li>
                <li><strong>Gotuj:</strong> Zalej bulionem, dodaj liście laurowe i ziele angielskie. Gotuj 20 minut.</li>
                <li><strong>Dodaj miększe warzywa:</strong> Wrzuć kalafior i fasolkę. Gotuj kolejne 10 minut.</li>
                <li><strong>Wykończ:</strong> Dodaj groszek, gotuj 3 minuty. Dopraw solą i pieprzem.</li>
                <li><strong>Podawaj:</strong> Posyp obficie świeżą natką pietruszki i koperkiem.</li>
              </ol>
            </div>
          </div>

          <div class="pro-tip">
            💡 <strong>Pro tip:</strong> Dodawaj warzywa etapami według twardości — najpierw twarde korzeniowe, na końcu delikatne jak groszek. Dzięki temu wszystko będzie idealnie ugotowane.
          </div>
        </article>

        <!-- Recipe 5: Sałatka grecka -->
        <article class="recipe-card" id="salatka-grecka">
          <div class="recipe-header">
            <span class="recipe-tag">Sałatki</span>
            <h2>🥗 Sałatka grecka</h2>
            <p class="recipe-intro">Klasyczna sałatka śródziemnomorska — prosta, orzeźwiająca i pełna zdrowych tłuszczów.</p>
            <div class="recipe-meta">
              <span><strong>Czas przygotowania:</strong> 15 min</span>
              <span><strong>Porcje:</strong> 4</span>
            </div>
          </div>

          <div class="recipe-content">
            <div class="ingredients">
              <h3>📝 Składniki</h3>
              <ul>
                <li>2 duże pomidory malinowe</li>
                <li>1 ogórek</li>
                <li>1 czerwona cebula</li>
                <li>1 papryka (najlepiej zielona)</li>
                <li>200g sera feta</li>
                <li>100g oliwek kalamata</li>
                <li>1 łyżeczka suszonego oregano</li>
              </ul>

              <h4>Dressing:</h4>
              <ul>
                <li>4 łyżki oliwy z oliwek extra virgin</li>
                <li>2 łyżki soku z cytryny</li>
                <li>1 ząbek czosnku (rozgnieciony)</li>
                <li>½ łyżeczki suszonego oregano</li>
                <li>Sól i pieprz do smaku</li>
              </ul>
            </div>

            <div class="instructions">
              <h3>👨‍🍳 Przygotowanie</h3>
              <ol>
                <li><strong>Pokrój warzywa:</strong> Pomidory pokrój na ćwiartki, ogórek na półplasterki, paprykę w paski, cebulę w cienkie piórka.</li>
                <li><strong>Złóż sałatkę:</strong> Na dużym talerzu lub w misce ułóż warzywa. Na wierzchu połóż całą kostkę fety i oliwki.</li>
                <li><strong>Przygotuj dressing:</strong> Wymieszaj oliwę z sokiem z cytryny, czosnkiem i oregano. Dopraw solą i pieprzem.</li>
                <li><strong>Polej i podawaj:</strong> Polej sałatkę dressingiem, posyp oregano. NIE mieszaj — każdy nakłada sobie na talerz łamiąc widelcem fetę.</li>
              </ol>
            </div>
          </div>

          <div class="pro-tip">
            💡 <strong>Pro tip:</strong> Użyj prawdziwej greckiej fety z owczego mleka — ma zupełnie inny, intensywniejszy smak niż tanie zamienniki. Oliwki koniecznie z pestką — są smaczniejsze.
          </div>
        </article>

        <!-- Shopping List Section -->
        <section class="shopping-section">
          <h2>🛒 Lista zakupów na tydzień</h2>
          <p>Wszystkie składniki potrzebne do przygotowania powyższych przepisów</p>

          <div class="shopping-grid">
            <div class="shopping-category">
              <h3>🥩 Mięso i ryby</h3>
              <ul>
                <li>Pierś z kurczaka 250g</li>
                <li>Filet z dorsza 400g</li>
              </ul>
            </div>

            <div class="shopping-category">
              <h3>🥬 Warzywa</h3>
              <ul>
                <li>Pomidory 4 szt</li>
                <li>Ogórek 2 szt</li>
                <li>Papryka 2 szt</li>
                <li>Cebula 4 szt</li>
                <li>Cebula czerwona 1 szt</li>
                <li>Czosnek 2 główki</li>
                <li>Marchewka 7 szt</li>
                <li>Ziemniaki 5 szt</li>
                <li>Seler naciowy 2 łodygi</li>
                <li>Seler korzeniowy ¼</li>
                <li>Pietruszka korzeń 1 szt</li>
                <li>Kalafior ½</li>
                <li>Fasolka szparagowa 100g</li>
                <li>Groszek zielony 100g</li>
              </ul>
            </div>

            <div class="shopping-category">
              <h3>🧀 Nabiał i jaja</h3>
              <ul>
                <li>Feta 200g</li>
                <li>Śmietanka 18% - 200ml</li>
              </ul>
            </div>

            <div class="shopping-category">
              <h3>🫒 Spiżarnia</h3>
              <ul>
                <li>Mąka "00" 500g</li>
                <li>Drożdże suszone 3g</li>
                <li>Oliwa z oliwek</li>
                <li>Kasza manna/kukurydziana</li>
                <li>Pomidory w puszce 400g</li>
                <li>Oliwki kalamata 100g</li>
                <li>Sos sojowy</li>
                <li>Miód</li>
                <li>Bulion warzywny/rybny</li>
              </ul>
            </div>

            <div class="shopping-category">
              <h3>🌿 Przyprawy i zioła</h3>
              <ul>
                <li>Papryka słodka</li>
                <li>Papryka wędzona</li>
                <li>Oregano suszone</li>
                <li>Tymianek</li>
                <li>Liście laurowe</li>
                <li>Ziele angielskie</li>
                <li>Natka pietruszki świeża</li>
                <li>Koperek świeży</li>
                <li>Cytryny 2 szt</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>

    <Footer :has-saved-results="false" />
  </div>
</template>

<script setup>
import Footer from '../components/landing/Footer.vue'
</script>

<style scoped>
.recipes-page {
  min-height: 100vh;
  background: var(--gray-50);
}

/* Header */
.page-header {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
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

/* Recipe Card */
.recipe-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: var(--shadow-md);
}

.recipe-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-100);
}

.recipe-tag {
  display: inline-block;
  padding: 4px 12px;
  background: #fef2f2;
  color: #dc2626;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-full);
  margin-bottom: 12px;
}

.recipe-header h2 {
  font-size: 1.75rem;
  margin-bottom: 12px;
}

.recipe-intro {
  color: var(--gray-600);
  font-size: 1.0625rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.recipe-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--gray-500);
}

/* Recipe Content */
.recipe-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
}

.ingredients h3,
.instructions h3 {
  font-size: 1.125rem;
  margin-bottom: 16px;
  color: var(--gray-800);
}

.ingredients h4 {
  font-size: 0.9375rem;
  margin: 20px 0 12px;
  color: var(--gray-700);
}

.ingredients ul {
  list-style: none;
}

.ingredients li {
  padding: 8px 0;
  border-bottom: 1px solid var(--gray-100);
  color: var(--gray-700);
  font-size: 0.9375rem;
}

.ingredients li:last-child {
  border-bottom: none;
}

.instructions ol {
  padding-left: 0;
  counter-reset: step;
  list-style: none;
}

.instructions li {
  position: relative;
  padding-left: 48px;
  margin-bottom: 20px;
  color: var(--gray-700);
  line-height: 1.6;
}

.instructions li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  background: var(--gray-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--gray-600);
}

/* Pro Tip */
.pro-tip {
  margin-top: 28px;
  padding: 20px 24px;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: var(--radius-md);
  color: #92400e;
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Shopping Section */
.shopping-section {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-md);
}

.shopping-section h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.shopping-section > p {
  color: var(--gray-500);
  margin-bottom: 32px;
}

.shopping-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.shopping-category {
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.shopping-category h3 {
  font-size: 1rem;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--gray-200);
}

.shopping-category ul {
  list-style: none;
}

.shopping-category li {
  padding: 6px 0;
  font-size: 0.875rem;
  color: var(--gray-700);
}

/* Responsive */
@media (max-width: 1024px) {
  .recipe-content {
    grid-template-columns: 1fr;
  }
  
  .shopping-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .recipe-card {
    padding: 24px;
  }
  
  .recipe-header h2 {
    font-size: 1.5rem;
  }
  
  .recipe-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .shopping-grid {
    grid-template-columns: 1fr;
  }
}
</style>

