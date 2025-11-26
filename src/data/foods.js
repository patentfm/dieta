// Comprehensive food database with nutritional values and prices
// All values per 100g of product
// Prices in PLN per 100g (approximate market prices)

export const foods = [
  // === SEEDS & NUTS ===
  {
    id: 'pumpkin_seeds',
    name: 'Pestki dyni',
    category: 'seeds',
    pricePerl00g: 4.50,
    nutrients: {
      magnesium: 550,    // mg
      zinc: 7.8,         // mg
      iron: 8.8,         // mg
      potassium: 809,    // mg
      protein: 30,       // g
      omega3: 0.1,       // g
      fiber: 6           // g
    },
    description: 'Jedno z najlepszych źródeł magnezu i cynku'
  },
  {
    id: 'sunflower_seeds',
    name: 'Pestki słonecznika',
    category: 'seeds',
    pricePerl00g: 2.50,
    nutrients: {
      vitaminE: 35.17,   // mg
      magnesium: 325,
      selenium: 53,      // μg
      zinc: 5,
      iron: 5.3,
      b6: 1.35,          // mg
      protein: 21,
      fiber: 8.6
    },
    description: 'Bogate w witaminę E i selen'
  },
  {
    id: 'flaxseeds',
    name: 'Siemię lniane',
    category: 'seeds',
    pricePerl00g: 1.80,
    nutrients: {
      omega3: 22.8,
      fiber: 27.3,
      magnesium: 392,
      protein: 18.3,
      zinc: 4.3,
      iron: 5.7
    },
    description: 'Najlepsze roślinne źródło omega-3'
  },
  {
    id: 'chia_seeds',
    name: 'Nasiona chia',
    category: 'seeds',
    pricePerl00g: 5.00,
    nutrients: {
      omega3: 17.8,
      fiber: 34.4,
      calcium: 631,
      magnesium: 335,
      iron: 7.7,
      zinc: 4.6,
      protein: 16.5
    },
    description: 'Superfoods bogate w błonnik i omega-3'
  },
  {
    id: 'sesame_seeds',
    name: 'Sezam',
    category: 'seeds',
    pricePerl00g: 3.00,
    nutrients: {
      calcium: 975,
      magnesium: 351,
      iron: 14.6,
      zinc: 7.8,
      b6: 0.79,
      protein: 17.7,
      fiber: 11.8
    },
    description: 'Doskonałe źródło wapnia i żelaza'
  },
  {
    id: 'almonds',
    name: 'Migdały',
    category: 'nuts',
    pricePerl00g: 6.00,
    nutrients: {
      vitaminE: 25.6,
      magnesium: 270,
      calcium: 269,
      protein: 21.2,
      fiber: 12.5,
      iron: 3.7,
      zinc: 3.1
    },
    description: 'Bogate w witaminę E i białko'
  },
  {
    id: 'walnuts',
    name: 'Orzechy włoskie',
    category: 'nuts',
    pricePerl00g: 5.50,
    nutrients: {
      omega3: 9.1,
      magnesium: 158,
      zinc: 3.1,
      iron: 2.9,
      b6: 0.54,
      protein: 15.2,
      fiber: 6.7
    },
    description: 'Najlepsze orzechy dla mózgu - omega-3'
  },
  {
    id: 'cashews',
    name: 'Orzechy nerkowca',
    category: 'nuts',
    pricePerl00g: 7.00,
    nutrients: {
      magnesium: 292,
      zinc: 5.8,
      iron: 6.7,
      potassium: 660,
      protein: 18.2,
      b6: 0.42
    },
    description: 'Dobre źródło magnezu i cynku'
  },
  {
    id: 'brazil_nuts',
    name: 'Orzechy brazylijskie',
    category: 'nuts',
    pricePerl00g: 9.00,
    nutrients: {
      selenium: 1917,    // μg - rekordowa ilość!
      magnesium: 376,
      zinc: 4.1,
      calcium: 160,
      protein: 14.3
    },
    description: 'Najlepsze źródło selenu - 2 orzechy = dzienna dawka'
  },
  {
    id: 'hazelnuts',
    name: 'Orzechy laskowe',
    category: 'nuts',
    pricePerl00g: 5.00,
    nutrients: {
      vitaminE: 15,
      magnesium: 163,
      calcium: 114,
      iron: 4.7,
      zinc: 2.5,
      protein: 15,
      fiber: 9.7
    },
    description: 'Bogate w witaminę E i błonnik'
  },

  // === LEAFY GREENS ===
  {
    id: 'spinach',
    name: 'Szpinak',
    category: 'vegetables',
    pricePerl00g: 1.50,
    nutrients: {
      iron: 2.7,
      magnesium: 79,
      potassium: 558,
      vitaminA: 469,     // μg RAE
      vitaminC: 28,
      vitaminK: 483,     // μg
      folate: 194,       // μg
      calcium: 99
    },
    description: 'Klasyczne zielone warzywo bogate w żelazo'
  },
  {
    id: 'kale',
    name: 'Jarmuż',
    category: 'vegetables',
    pricePerl00g: 2.00,
    nutrients: {
      vitaminK: 817,
      vitaminC: 93,
      vitaminA: 241,
      calcium: 254,
      potassium: 348,
      magnesium: 33,
      iron: 1.6
    },
    description: 'Superwarzywo z rekordową ilością witaminy K'
  },
  {
    id: 'swiss_chard',
    name: 'Boćwina (burak liściowy)',
    category: 'vegetables',
    pricePerl00g: 1.20,
    nutrients: {
      magnesium: 81,
      potassium: 379,
      iron: 1.8,
      vitaminA: 306,
      vitaminC: 30,
      vitaminK: 830,
      calcium: 51
    },
    description: 'Niedoceniane warzywo bogate w magnez'
  },
  {
    id: 'parsley',
    name: 'Natka pietruszki',
    category: 'vegetables',
    pricePerl00g: 1.00,
    nutrients: {
      vitaminC: 133,
      vitaminA: 421,
      vitaminK: 1640,
      iron: 6.2,
      calcium: 138,
      potassium: 554,
      folate: 152
    },
    description: 'Rekordowa ilość witaminy K i C'
  },
  {
    id: 'broccoli',
    name: 'Brokuły',
    category: 'vegetables',
    pricePerl00g: 1.00,
    nutrients: {
      vitaminC: 89,
      vitaminK: 102,
      folate: 63,
      potassium: 316,
      fiber: 2.6,
      calcium: 47,
      iron: 0.7
    },
    description: 'Uniwersalne warzywo z witaminą C'
  },

  // === LEGUMES ===
  {
    id: 'lentils',
    name: 'Soczewica',
    category: 'legumes',
    pricePerl00g: 1.20,
    nutrients: {
      iron: 6.5,
      folate: 479,
      protein: 25,
      fiber: 11,
      potassium: 677,
      magnesium: 47,
      zinc: 3.3
    },
    description: 'Doskonałe źródło żelaza i białka roślinnego'
  },
  {
    id: 'chickpeas',
    name: 'Ciecierzyca',
    category: 'legumes',
    pricePerl00g: 1.00,
    nutrients: {
      protein: 19,
      fiber: 17,
      iron: 4.3,
      zinc: 2.5,
      magnesium: 79,
      folate: 172,
      potassium: 718
    },
    description: 'Wszechstronna roślina strączkowa'
  },
  {
    id: 'white_beans',
    name: 'Fasola biała',
    category: 'legumes',
    pricePerl00g: 0.80,
    nutrients: {
      protein: 21,
      fiber: 15,
      iron: 5.5,
      calcium: 147,
      magnesium: 113,
      potassium: 1185,
      folate: 388
    },
    description: 'Najtańsze źródło białka i potasu'
  },
  {
    id: 'black_beans',
    name: 'Fasola czarna',
    category: 'legumes',
    pricePerl00g: 1.00,
    nutrients: {
      protein: 21.6,
      fiber: 15.5,
      iron: 3.6,
      magnesium: 120,
      potassium: 1483,
      folate: 444,
      zinc: 1.5
    },
    description: 'Bogata w antyoksydanty i błonnik'
  },

  // === FISH & SEAFOOD ===
  {
    id: 'salmon',
    name: 'Łosoś',
    category: 'fish',
    pricePerl00g: 6.00,
    nutrients: {
      omega3: 2.3,
      vitaminD: 11,      // μg
      b12: 3.2,          // μg
      protein: 20,
      selenium: 36.5,
      potassium: 363
    },
    description: 'Najlepsze źródło omega-3 i witaminy D'
  },
  {
    id: 'sardines',
    name: 'Sardynki (w oleju)',
    category: 'fish',
    pricePerl00g: 3.50,
    nutrients: {
      omega3: 1.5,
      calcium: 382,      // z ościami
      vitaminD: 4.8,
      b12: 8.9,
      protein: 25,
      iron: 2.9,
      selenium: 52.7
    },
    description: 'Tanie źródło wapnia (jeść z ościami) i B12'
  },
  {
    id: 'mackerel',
    name: 'Makrela',
    category: 'fish',
    pricePerl00g: 2.50,
    nutrients: {
      omega3: 2.7,
      vitaminD: 16.1,
      b12: 19,
      protein: 19,
      selenium: 44
    },
    description: 'Bardzo tania ryba z omega-3'
  },
  {
    id: 'herring',
    name: 'Śledź',
    category: 'fish',
    pricePerl00g: 2.00,
    nutrients: {
      omega3: 1.7,
      vitaminD: 4.2,
      b12: 13.7,
      protein: 18,
      selenium: 36.5,
      iron: 1.1
    },
    description: 'Najtańsza ryba z omega-3 i B12'
  },
  {
    id: 'oysters',
    name: 'Ostrygi',
    category: 'seafood',
    pricePerl00g: 25.00,
    nutrients: {
      zinc: 78.6,        // Rekord!
      b12: 16,
      iron: 5.1,
      selenium: 77,
      copper: 4.5,       // mg
      protein: 9
    },
    description: 'Absolutny rekord cynku - ale drogie'
  },

  // === MEAT & ORGAN MEATS ===
  {
    id: 'beef_liver',
    name: 'Wątróbka wołowa',
    category: 'meat',
    pricePerl00g: 1.50,
    nutrients: {
      b12: 83.1,         // Rekord!
      vitaminA: 9442,    // μg - bardzo dużo!
      iron: 6.5,
      zinc: 4,
      folate: 290,
      b6: 1.1,
      protein: 20.4,
      copper: 9.8
    },
    description: 'Najbardziej odżywczy produkt - ale uważaj na wit. A'
  },
  {
    id: 'chicken_liver',
    name: 'Wątróbka drobiowa',
    category: 'meat',
    pricePerl00g: 1.00,
    nutrients: {
      b12: 16.6,
      vitaminA: 3296,
      iron: 9,
      zinc: 2.7,
      folate: 588,
      protein: 16.9,
      b6: 0.85
    },
    description: 'Tańsza alternatywa dla wątróbki wołowej'
  },
  {
    id: 'beef',
    name: 'Wołowina',
    category: 'meat',
    pricePerl00g: 4.50,
    nutrients: {
      iron: 2.6,
      zinc: 4.8,
      b12: 2.6,
      protein: 26,
      b6: 0.4,
      selenium: 18.5
    },
    description: 'Dobre źródło żelaza hemowego i cynku'
  },

  // === EGGS & DAIRY ===
  {
    id: 'eggs',
    name: 'Jaja kurze',
    category: 'eggs',
    pricePerl00g: 1.80,
    nutrients: {
      b12: 0.9,
      vitaminD: 2,
      vitaminA: 160,
      protein: 13,
      selenium: 30.7,
      choline: 293,      // mg
      iron: 1.8,
      zinc: 1.3
    },
    description: 'Kompletne źródło białka z witaminami'
  },
  {
    id: 'cheese_parmesan',
    name: 'Parmezan',
    category: 'dairy',
    pricePerl00g: 8.00,
    nutrients: {
      calcium: 1184,
      protein: 38,
      b12: 1.2,
      zinc: 2.8,
      phosphorus: 694,
      vitaminA: 207
    },
    description: 'Rekordowa ilość wapnia i białka'
  },
  {
    id: 'greek_yogurt',
    name: 'Jogurt grecki',
    category: 'dairy',
    pricePerl00g: 1.50,
    nutrients: {
      protein: 10,
      calcium: 110,
      b12: 0.75,
      probiotics: 1,     // obecne (skala umowna)
      potassium: 141,
      zinc: 0.5
    },
    description: 'Źródło białka i probiotyków'
  },

  // === FRUITS ===
  {
    id: 'oranges',
    name: 'Pomarańcze',
    category: 'fruits',
    pricePerl00g: 0.60,
    nutrients: {
      vitaminC: 53,
      folate: 30,
      potassium: 181,
      fiber: 2.4,
      calcium: 40
    },
    description: 'Klasyczne źródło witaminy C'
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    category: 'fruits',
    pricePerl00g: 1.20,
    nutrients: {
      vitaminC: 93,
      vitaminK: 40.3,
      potassium: 312,
      fiber: 3,
      vitaminE: 1.5
    },
    description: 'Więcej wit. C niż pomarańcza'
  },
  {
    id: 'bananas',
    name: 'Banany',
    category: 'fruits',
    pricePerl00g: 0.50,
    nutrients: {
      potassium: 358,
      b6: 0.37,
      vitaminC: 8.7,
      magnesium: 27,
      fiber: 2.6
    },
    description: 'Tanie źródło potasu i B6'
  },
  {
    id: 'avocado',
    name: 'Awokado',
    category: 'fruits',
    pricePerl00g: 2.50,
    nutrients: {
      potassium: 485,
      magnesium: 29,
      vitaminE: 2.1,
      vitaminK: 21,
      folate: 81,
      fiber: 6.7,
      omega3: 0.1
    },
    description: 'Zdrowe tłuszcze i potas'
  },
  {
    id: 'blueberries',
    name: 'Borówki',
    category: 'fruits',
    pricePerl00g: 4.00,
    nutrients: {
      vitaminC: 10,
      vitaminK: 19.3,
      fiber: 2.4,
      antioxidants: 9.2  // ORAC (skala umowna)
    },
    description: 'Rekordowa ilość antyoksydantów'
  },

  // === VEGETABLES ===
  {
    id: 'sweet_potato',
    name: 'Bataty (słodkie ziemniaki)',
    category: 'vegetables',
    pricePerl00g: 1.00,
    nutrients: {
      vitaminA: 709,
      vitaminC: 2.4,
      potassium: 337,
      fiber: 3,
      b6: 0.21,
      magnesium: 25
    },
    description: 'Najlepsze źródło beta-karotenu'
  },
  {
    id: 'red_pepper',
    name: 'Papryka czerwona',
    category: 'vegetables',
    pricePerl00g: 1.20,
    nutrients: {
      vitaminC: 128,     // Więcej niż pomarańcza!
      vitaminA: 157,
      vitaminE: 1.6,
      potassium: 211,
      folate: 46
    },
    description: 'Rekordowa ilość witaminy C'
  },
  {
    id: 'carrots',
    name: 'Marchewka',
    category: 'vegetables',
    pricePerl00g: 0.30,
    nutrients: {
      vitaminA: 835,
      vitaminK: 13.2,
      potassium: 320,
      fiber: 2.8,
      vitaminC: 5.9
    },
    description: 'Najtańsze źródło witaminy A'
  },
  {
    id: 'mushrooms',
    name: 'Pieczarki',
    category: 'vegetables',
    pricePerl00g: 0.80,
    nutrients: {
      vitaminD: 0.2,     // Zwiększa się przy ekspozycji na UV!
      selenium: 9.3,
      potassium: 318,
      b2: 0.4,
      b3: 3.6,
      protein: 3.1
    },
    description: 'Jedyne roślinne źródło wit. D (eksponuj na słońce!)'
  },
  {
    id: 'garlic',
    name: 'Czosnek',
    category: 'vegetables',
    pricePerl00g: 1.50,
    nutrients: {
      vitaminC: 31,
      b6: 1.24,
      selenium: 14.2,
      manganese: 1.67,
      allicin: 1         // związek aktywny (skala umowna)
    },
    description: 'Naturalny antybiotyk i wsparcie odporności'
  },

  // === GRAINS ===
  {
    id: 'oats',
    name: 'Płatki owsiane',
    category: 'grains',
    pricePerl00g: 0.50,
    nutrients: {
      fiber: 10.6,
      magnesium: 177,
      iron: 4.7,
      zinc: 4,
      protein: 16.9,
      b1: 0.76
    },
    description: 'Tanie i odżywcze śniadanie'
  },
  {
    id: 'quinoa',
    name: 'Quinoa (komosa ryżowa)',
    category: 'grains',
    pricePerl00g: 3.00,
    nutrients: {
      protein: 14.1,
      fiber: 7,
      magnesium: 197,
      iron: 4.6,
      zinc: 3.1,
      folate: 184
    },
    description: 'Kompletne białko roślinne'
  },
  {
    id: 'buckwheat',
    name: 'Kasza gryczana',
    category: 'grains',
    pricePerl00g: 0.80,
    nutrients: {
      magnesium: 231,
      iron: 2.2,
      zinc: 2.4,
      protein: 13.3,
      fiber: 10,
      potassium: 460
    },
    description: 'Polska klasyka bogata w magnez'
  },

  // === DARK CHOCOLATE ===
  {
    id: 'dark_chocolate',
    name: 'Ciemna czekolada (85%)',
    category: 'other',
    pricePerl00g: 4.00,
    nutrients: {
      magnesium: 228,
      iron: 11.9,
      zinc: 3.3,
      copper: 1.8,
      fiber: 11,
      antioxidants: 1    // obecne
    },
    description: 'Przyjemne źródło magnezu i żelaza'
  },

  // === SEAWEED ===
  {
    id: 'nori',
    name: 'Nori (wodorosty)',
    category: 'seaweed',
    pricePerl00g: 20.00,
    nutrients: {
      iodine: 1800,      // μg - bardzo dużo!
      iron: 1.8,
      vitaminA: 260,
      vitaminC: 39,
      b12: 2.4,          // rzadkie w roślinach
      protein: 5.8
    },
    description: 'Źródło jodu i B12 - ale drogie za gram'
  },
  {
    id: 'spirulina',
    name: 'Spirulina',
    category: 'seaweed',
    pricePerl00g: 15.00,
    nutrients: {
      protein: 57,
      iron: 28.5,
      b12: 0,            // nieaktywna forma!
      vitaminA: 29,
      potassium: 1363,
      magnesium: 195
    },
    description: 'Rekordowe białko - ale droga'
  }
]

// Category labels
export const categoryLabels = {
  seeds: 'Nasiona i pestki',
  nuts: 'Orzechy',
  vegetables: 'Warzywa',
  legumes: 'Rośliny strączkowe',
  fish: 'Ryby',
  seafood: 'Owoce morza',
  meat: 'Mięso',
  eggs: 'Jaja',
  dairy: 'Nabiał',
  fruits: 'Owoce',
  grains: 'Zboża i kasze',
  seaweed: 'Algi i wodorosty',
  other: 'Inne'
}

// Nutrient information with daily values
export const nutrientInfo = {
  iron: {
    name: 'Żelazo',
    unit: 'mg',
    dailyValue: 18,
    description: 'Niezbędne do transportu tlenu we krwi'
  },
  zinc: {
    name: 'Cynk',
    unit: 'mg',
    dailyValue: 11,
    description: 'Kluczowy dla odporności i gojenia ran'
  },
  magnesium: {
    name: 'Magnez',
    unit: 'mg',
    dailyValue: 400,
    description: 'Wspiera mięśnie, nerwy i energię'
  },
  calcium: {
    name: 'Wapń',
    unit: 'mg',
    dailyValue: 1000,
    description: 'Buduje kości i zęby'
  },
  potassium: {
    name: 'Potas',
    unit: 'mg',
    dailyValue: 3500,
    description: 'Reguluje ciśnienie krwi i pracę mięśni'
  },
  vitaminD: {
    name: 'Witamina D',
    unit: 'μg',
    dailyValue: 20,
    description: 'Wspiera kości i odporność'
  },
  vitaminC: {
    name: 'Witamina C',
    unit: 'mg',
    dailyValue: 90,
    description: 'Antyoksydant wspierający odporność'
  },
  vitaminA: {
    name: 'Witamina A',
    unit: 'μg',
    dailyValue: 900,
    description: 'Dla zdrowych oczu i skóry'
  },
  vitaminE: {
    name: 'Witamina E',
    unit: 'mg',
    dailyValue: 15,
    description: 'Antyoksydant chroniący komórki'
  },
  vitaminK: {
    name: 'Witamina K',
    unit: 'μg',
    dailyValue: 120,
    description: 'Dla krzepnięcia krwi i kości'
  },
  b12: {
    name: 'Witamina B12',
    unit: 'μg',
    dailyValue: 2.4,
    description: 'Dla układu nerwowego i energii'
  },
  b6: {
    name: 'Witamina B6',
    unit: 'mg',
    dailyValue: 1.7,
    description: 'Wspiera metabolizm i nastrój'
  },
  folate: {
    name: 'Kwas foliowy',
    unit: 'μg',
    dailyValue: 400,
    description: 'Kluczowy dla podziału komórek'
  },
  omega3: {
    name: 'Omega-3',
    unit: 'g',
    dailyValue: 1.6,
    description: 'Dla mózgu i serca'
  },
  fiber: {
    name: 'Błonnik',
    unit: 'g',
    dailyValue: 30,
    description: 'Wspiera trawienie'
  },
  protein: {
    name: 'Białko',
    unit: 'g',
    dailyValue: 50,
    description: 'Budulec mięśni i tkanek'
  },
  selenium: {
    name: 'Selen',
    unit: 'μg',
    dailyValue: 55,
    description: 'Antyoksydant wspierający tarczycę'
  },
  iodine: {
    name: 'Jod',
    unit: 'μg',
    dailyValue: 150,
    description: 'Niezbędny dla tarczycy'
  },
  biotin: {
    name: 'Biotyna',
    unit: 'μg',
    dailyValue: 30,
    description: 'Dla zdrowych włosów i paznokci'
  },
  copper: {
    name: 'Miedź',
    unit: 'mg',
    dailyValue: 0.9,
    description: 'Wspiera metabolizm żelaza'
  },
  choline: {
    name: 'Cholina',
    unit: 'mg',
    dailyValue: 550,
    description: 'Dla zdrowia mózgu i wątroby'
  }
}

// Helper function to get top foods for a nutrient
export function getTopFoodsForNutrient(nutrientKey, limit = 10) {
  return foods
    .filter(food => food.nutrients[nutrientKey] !== undefined)
    .map(food => ({
      ...food,
      nutrientAmount: food.nutrients[nutrientKey],
      percentDV: nutrientInfo[nutrientKey] 
        ? Math.round((food.nutrients[nutrientKey] / nutrientInfo[nutrientKey].dailyValue) * 100)
        : null,
      costPerDV: nutrientInfo[nutrientKey]
        ? (food.pricePerl00g / (food.nutrients[nutrientKey] / nutrientInfo[nutrientKey].dailyValue)).toFixed(2)
        : null
    }))
    .sort((a, b) => b.nutrientAmount - a.nutrientAmount)
    .slice(0, limit)
}

// Helper function to get most cost-effective foods for a nutrient
export function getCheapestFoodsForNutrient(nutrientKey, limit = 10) {
  return foods
    .filter(food => food.nutrients[nutrientKey] !== undefined && food.nutrients[nutrientKey] > 0)
    .map(food => ({
      ...food,
      nutrientAmount: food.nutrients[nutrientKey],
      percentDV: nutrientInfo[nutrientKey]
        ? Math.round((food.nutrients[nutrientKey] / nutrientInfo[nutrientKey].dailyValue) * 100)
        : null,
      costPerDV: nutrientInfo[nutrientKey]
        ? parseFloat((food.pricePerl00g / (food.nutrients[nutrientKey] / nutrientInfo[nutrientKey].dailyValue)).toFixed(2))
        : null
    }))
    .filter(food => food.costPerDV !== null && food.costPerDV !== Infinity)
    .sort((a, b) => a.costPerDV - b.costPerDV)
    .slice(0, limit)
}

