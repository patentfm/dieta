// Symptom data organized by category
// Each symptom is linked to potential nutritional deficiencies

export const symptomCategories = {
  energy: {
    title: 'Energia i zmęczenie',
    description: 'Objawy związane z poziomem energii i witalności',
    icon: '⚡',
    symptoms: [
      {
        id: 'chronic_fatigue',
        label: 'Chroniczne zmęczenie',
        description: 'Uczucie wyczerpania utrzymujące się mimo odpoczynku',
        deficiencies: ['iron', 'b12', 'magnesium', 'vitaminD']
      },
      {
        id: 'morning_tiredness',
        label: 'Trudności z wstawaniem rano',
        description: 'Uczucie niewyspania mimo 7-8 godzin snu',
        deficiencies: ['iron', 'b12', 'vitaminD']
      },
      {
        id: 'afternoon_slump',
        label: 'Spadek energii po południu',
        description: 'Nagły spadek witalności w godzinach 14-16',
        deficiencies: ['magnesium', 'b_vitamins', 'iron']
      },
      {
        id: 'dizziness',
        label: 'Zawroty głowy',
        description: 'Krótkotrwałe zawroty, szczególnie przy wstawaniu',
        deficiencies: ['iron', 'b12', 'potassium']
      },
      {
        id: 'weakness',
        label: 'Ogólne osłabienie',
        description: 'Uczucie słabości w ciele bez wyraźnej przyczyny',
        deficiencies: ['iron', 'magnesium', 'potassium', 'vitaminD']
      },
      {
        id: 'shortness_of_breath',
        label: 'Duszność przy wysiłku',
        description: 'Szybkie męczenie się przy niewielkim wysiłku',
        deficiencies: ['iron', 'b12']
      },
      {
        id: 'cold_sensitivity',
        label: 'Nadmierna wrażliwość na zimno',
        description: 'Marzniecie nawet gdy innym jest ciepło',
        deficiencies: ['iron', 'iodine', 'b12']
      }
    ]
  },

  skinHairNails: {
    title: 'Skóra, włosy i paznokcie',
    description: 'Objawy widoczne na zewnątrz ciała',
    icon: '✨',
    symptoms: [
      {
        id: 'dry_skin',
        label: 'Sucha, łuszcząca się skóra',
        description: 'Skóra szorstka i przesuszona mimo nawilżania',
        deficiencies: ['omega3', 'vitaminA', 'vitaminE', 'zinc']
      },
      {
        id: 'brittle_nails',
        label: 'Łamliwe paznokcie',
        description: 'Paznokcie kruszą się i łatwo pękają',
        deficiencies: ['biotin', 'iron', 'zinc', 'protein']
      },
      {
        id: 'hair_loss',
        label: 'Wypadanie włosów',
        description: 'Nadmierna utrata włosów przy myciu i czesaniu',
        deficiencies: ['iron', 'zinc', 'biotin', 'vitaminD', 'protein']
      },
      {
        id: 'slow_healing',
        label: 'Wolne gojenie ran',
        description: 'Skaleczenia i zadrapania goją się dłużej niż zwykle',
        deficiencies: ['zinc', 'vitaminC', 'protein', 'vitaminA']
      },
      {
        id: 'pale_skin',
        label: 'Blada skóra',
        description: 'Nienaturalna bladość twarzy i skóry',
        deficiencies: ['iron', 'b12', 'folate']
      },
      {
        id: 'acne',
        label: 'Trądzik i wypryski',
        description: 'Częste zmiany skórne i stany zapalne',
        deficiencies: ['zinc', 'omega3', 'vitaminA', 'vitaminD']
      },
      {
        id: 'cracked_lips',
        label: 'Popękane kąciki ust',
        description: 'Bolesne pęknięcia w kącikach warg',
        deficiencies: ['b2', 'b6', 'iron', 'zinc']
      },
      {
        id: 'white_nail_spots',
        label: 'Białe plamki na paznokciach',
        description: 'Małe białe plamki pojawiające się na paznokciach',
        deficiencies: ['zinc', 'calcium']
      }
    ]
  },

  digestion: {
    title: 'Trawienie',
    description: 'Objawy związane z układem pokarmowym',
    icon: '🫄',
    symptoms: [
      {
        id: 'bloating',
        label: 'Wzdęcia',
        description: 'Uczucie rozdęcia brzucha po jedzeniu',
        deficiencies: ['probiotics', 'digestive_enzymes', 'magnesium']
      },
      {
        id: 'constipation',
        label: 'Zaparcia',
        description: 'Nieregularne lub utrudnione wypróżnienia',
        deficiencies: ['fiber', 'magnesium', 'water']
      },
      {
        id: 'diarrhea',
        label: 'Biegunki',
        description: 'Częste luźne stolce',
        deficiencies: ['probiotics', 'zinc']
      },
      {
        id: 'heartburn',
        label: 'Zgaga / refluks',
        description: 'Pieczenie w przełyku i cofanie się treści żołądkowej',
        deficiencies: ['magnesium', 'b_vitamins']
      },
      {
        id: 'nausea',
        label: 'Nudności',
        description: 'Uczucie mdłości, szczególnie po jedzeniu',
        deficiencies: ['b6', 'magnesium', 'zinc']
      },
      {
        id: 'appetite_loss',
        label: 'Brak apetytu',
        description: 'Zmniejszone łaknienie i niechęć do jedzenia',
        deficiencies: ['zinc', 'b_vitamins', 'iron']
      },
      {
        id: 'food_cravings',
        label: 'Nagłe zachcianki jedzeniowe',
        description: 'Silna potrzeba jedzenia słodyczy lub słonych przekąsek',
        deficiencies: ['magnesium', 'chromium', 'iron']
      }
    ]
  },

  moodMental: {
    title: 'Nastrój i psychika',
    description: 'Objawy związane ze stanem psychicznym',
    icon: '🧠',
    symptoms: [
      {
        id: 'irritability',
        label: 'Drażliwość',
        description: 'Łatwe irytowanie się i wybuchowość',
        deficiencies: ['magnesium', 'b_vitamins', 'omega3', 'vitaminD']
      },
      {
        id: 'anxiety',
        label: 'Lęki i niepokój',
        description: 'Uczucie niepokoju bez wyraźnej przyczyny',
        deficiencies: ['magnesium', 'b_vitamins', 'omega3', 'vitaminD']
      },
      {
        id: 'depression',
        label: 'Obniżony nastrój',
        description: 'Smutek i brak motywacji do działania',
        deficiencies: ['vitaminD', 'omega3', 'b12', 'folate', 'iron']
      },
      {
        id: 'brain_fog',
        label: 'Mgła mózgowa',
        description: 'Trudności z jasnym myśleniem i skupieniem',
        deficiencies: ['b12', 'omega3', 'iron', 'vitaminD']
      },
      {
        id: 'memory_problems',
        label: 'Problemy z pamięcią',
        description: 'Zapominanie o rzeczach i trudności z zapamiętywaniem',
        deficiencies: ['b12', 'omega3', 'iron', 'vitaminE']
      },
      {
        id: 'concentration_issues',
        label: 'Trudności z koncentracją',
        description: 'Problemy z utrzymaniem uwagi na zadaniu',
        deficiencies: ['iron', 'omega3', 'b_vitamins', 'zinc']
      },
      {
        id: 'sleep_problems',
        label: 'Problemy ze snem',
        description: 'Trudności z zasypianiem lub budzenie się w nocy',
        deficiencies: ['magnesium', 'vitaminD', 'b6', 'calcium']
      },
      {
        id: 'mood_swings',
        label: 'Wahania nastroju',
        description: 'Szybkie zmiany nastrojów bez wyraźnej przyczyny',
        deficiencies: ['omega3', 'b_vitamins', 'magnesium', 'vitaminD']
      }
    ]
  },

  musclesBones: {
    title: 'Mięśnie i kości',
    description: 'Objawy związane z układem mięśniowo-szkieletowym',
    icon: '💪',
    symptoms: [
      {
        id: 'muscle_cramps',
        label: 'Skurcze mięśni',
        description: 'Bolesne skurcze, szczególnie nocne',
        deficiencies: ['magnesium', 'potassium', 'calcium', 'vitaminD']
      },
      {
        id: 'muscle_weakness',
        label: 'Osłabienie mięśni',
        description: 'Uczucie słabości i braku siły w mięśniach',
        deficiencies: ['vitaminD', 'magnesium', 'potassium', 'protein']
      },
      {
        id: 'joint_pain',
        label: 'Bóle stawów',
        description: 'Ból i sztywność w stawach',
        deficiencies: ['vitaminD', 'omega3', 'calcium', 'magnesium']
      },
      {
        id: 'muscle_twitching',
        label: 'Drżenie powiek i mięśni',
        description: 'Mimowolne drgania mięśni twarzy lub ciała',
        deficiencies: ['magnesium', 'potassium', 'calcium', 'b_vitamins']
      },
      {
        id: 'back_pain',
        label: 'Ból pleców',
        description: 'Przewlekły ból w dolnej części pleców',
        deficiencies: ['vitaminD', 'magnesium', 'calcium']
      },
      {
        id: 'restless_legs',
        label: 'Zespół niespokojnych nóg',
        description: 'Nieodparta potrzeba ruszania nogami, szczególnie wieczorem',
        deficiencies: ['iron', 'magnesium', 'folate']
      },
      {
        id: 'bone_pain',
        label: 'Bóle kości',
        description: 'Głębokie bóle kości, szczególnie w nocy',
        deficiencies: ['vitaminD', 'calcium', 'phosphorus']
      }
    ]
  },

  immune: {
    title: 'Odporność',
    description: 'Objawy związane z układem odpornościowym',
    icon: '🛡️',
    symptoms: [
      {
        id: 'frequent_colds',
        label: 'Częste przeziębienia',
        description: 'Łapanie infekcji częściej niż 3-4 razy w roku',
        deficiencies: ['vitaminC', 'vitaminD', 'zinc', 'vitaminA']
      },
      {
        id: 'slow_recovery',
        label: 'Długie dochodzenie do siebie po chorobie',
        description: 'Przedłużające się rekonwalescencje po infekcjach',
        deficiencies: ['zinc', 'vitaminC', 'vitaminD', 'protein']
      },
      {
        id: 'recurring_infections',
        label: 'Nawracające infekcje',
        description: 'Te same infekcje wracają wielokrotnie',
        deficiencies: ['zinc', 'vitaminD', 'vitaminA', 'iron']
      },
      {
        id: 'cold_sores',
        label: 'Opryszczka',
        description: 'Częste nawroty opryszczki na ustach',
        deficiencies: ['zinc', 'vitaminC', 'lysine']
      },
      {
        id: 'allergies',
        label: 'Nasilone alergie',
        description: 'Silne reakcje alergiczne na pyłki, kurz itp.',
        deficiencies: ['vitaminD', 'vitaminC', 'quercetin', 'omega3']
      },
      {
        id: 'swollen_lymph',
        label: 'Powiększone węzły chłonne',
        description: 'Wyczuwalne węzły chłonne na szyi lub pod pachami',
        deficiencies: ['vitaminC', 'zinc', 'vitaminD']
      }
    ]
  }
}

// Activity levels for basic info
export const activityLevels = [
  {
    id: 'sedentary',
    label: 'Siedzący tryb życia',
    description: 'Praca biurowa, mało ruchu'
  },
  {
    id: 'light',
    label: 'Lekka aktywność',
    description: 'Spacery 2-3 razy w tygodniu'
  },
  {
    id: 'moderate',
    label: 'Umiarkowana aktywność',
    description: 'Ćwiczenia 3-4 razy w tygodniu'
  },
  {
    id: 'active',
    label: 'Aktywny',
    description: 'Regularne treningi 5+ razy w tygodniu'
  },
  {
    id: 'very_active',
    label: 'Bardzo aktywny',
    description: 'Intensywne treningi, praca fizyczna'
  }
]

// Diet types
export const dietTypes = [
  {
    id: 'omnivore',
    label: 'Wszystkożerny',
    description: 'Jem wszystko'
  },
  {
    id: 'vegetarian',
    label: 'Wegetarianin',
    description: 'Bez mięsa i ryb'
  },
  {
    id: 'vegan',
    label: 'Weganin',
    description: 'Bez produktów odzwierzęcych'
  },
  {
    id: 'pescatarian',
    label: 'Pescatarianin',
    description: 'Bez mięsa, ale z rybami'
  },
  {
    id: 'flexitarian',
    label: 'Fleksitarianin',
    description: 'Głównie roślinnie, czasem mięso'
  }
]

// Common allergens
export const allergens = [
  { id: 'gluten', label: 'Gluten' },
  { id: 'lactose', label: 'Laktoza' },
  { id: 'nuts', label: 'Orzechy' },
  { id: 'soy', label: 'Soja' },
  { id: 'eggs', label: 'Jaja' },
  { id: 'shellfish', label: 'Owoce morza' },
  { id: 'fish', label: 'Ryby' },
  { id: 'sesame', label: 'Sezam' }
]

// Mapping deficiencies to nutrients (for future use)
export const nutrientInfo = {
  iron: {
    name: 'Żelazo',
    unit: 'mg',
    dailyValue: 18,
    foods: ['pestki dyni', 'wątróbka', 'szpinak', 'soczewica', 'wołowina']
  },
  b12: {
    name: 'Witamina B12',
    unit: 'μg',
    dailyValue: 2.4,
    foods: ['wątróbka', 'jaja', 'ser', 'łosoś', 'tuńczyk']
  },
  magnesium: {
    name: 'Magnez',
    unit: 'mg',
    dailyValue: 400,
    foods: ['pestki dyni', 'migdały', 'szpinak', 'awokado', 'ciemna czekolada']
  },
  vitaminD: {
    name: 'Witamina D',
    unit: 'μg',
    dailyValue: 20,
    foods: ['tłuste ryby', 'żółtko jaja', 'grzyby', 'wątróbka']
  },
  zinc: {
    name: 'Cynk',
    unit: 'mg',
    dailyValue: 11,
    foods: ['ostrygi', 'wołowina', 'pestki dyni', 'ciecierzyca', 'orzechy nerkowca']
  },
  omega3: {
    name: 'Omega-3',
    unit: 'g',
    dailyValue: 1.6,
    foods: ['łosoś', 'sardynki', 'siemię lniane', 'orzechy włoskie', 'chia']
  },
  vitaminC: {
    name: 'Witamina C',
    unit: 'mg',
    dailyValue: 90,
    foods: ['papryka', 'kiwi', 'pomarańcze', 'brokuły', 'truskawki']
  },
  calcium: {
    name: 'Wapń',
    unit: 'mg',
    dailyValue: 1000,
    foods: ['nabiał', 'sardynki', 'jarmuż', 'migdały', 'tofu']
  },
  potassium: {
    name: 'Potas',
    unit: 'mg',
    dailyValue: 3500,
    foods: ['banany', 'ziemniaki', 'fasola', 'awokado', 'szpinak']
  },
  biotin: {
    name: 'Biotyna',
    unit: 'μg',
    dailyValue: 30,
    foods: ['jaja', 'orzechy', 'łosoś', 'awokado', 'bataty']
  }
}

