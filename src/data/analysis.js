// Analysis logic for detecting nutritional deficiencies based on symptoms
import { symptomCategories } from './symptoms.js'
import { foods, nutrientInfo, getCheapestFoodsForNutrient, getTopFoodsForNutrient } from './foods.js'

// Mapping from symptom deficiency codes to nutrient keys in foods database
const deficiencyToNutrient = {
  'iron': 'iron',
  'b12': 'b12',
  'magnesium': 'magnesium',
  'vitaminD': 'vitaminD',
  'zinc': 'zinc',
  'omega3': 'omega3',
  'vitaminC': 'vitaminC',
  'vitaminA': 'vitaminA',
  'vitaminE': 'vitaminE',
  'calcium': 'calcium',
  'potassium': 'potassium',
  'biotin': 'biotin',
  'folate': 'folate',
  'b6': 'b6',
  'b2': 'b2',
  'b_vitamins': ['b6', 'b12', 'folate'],  // Group
  'protein': 'protein',
  'fiber': 'fiber',
  'iodine': 'iodine',
  'selenium': 'selenium',
  'probiotics': null,  // Not tracked in foods
  'digestive_enzymes': null,
  'water': null,
  'chromium': null,
  'lysine': null,
  'quercetin': null,
  'phosphorus': null
}

// Deficiency descriptions and severity indicators
const deficiencyInfo = {
  iron: {
    name: 'Żelazo',
    description: 'Niezbędne do transportu tlenu w organizmie. Niedobór prowadzi do anemii, zmęczenia i osłabienia.',
    riskGroups: ['kobiety w okresie menstruacji', 'wegetarianie', 'sportowcy'],
    icon: '🩸'
  },
  b12: {
    name: 'Witamina B12',
    description: 'Kluczowa dla układu nerwowego i produkcji czerwonych krwinek. Niedobór może powodować problemy neurologiczne.',
    riskGroups: ['weganie', 'osoby starsze', 'osoby z chorobami jelit'],
    icon: '🧠'
  },
  magnesium: {
    name: 'Magnez',
    description: 'Uczestniczy w ponad 300 reakcjach enzymatycznych. Wspiera mięśnie, nerwy i produkcję energii.',
    riskGroups: ['osoby zestresowane', 'diabetycy', 'osoby pijące dużo kawy'],
    icon: '⚡'
  },
  vitaminD: {
    name: 'Witamina D',
    description: 'Hormon słońca - wspiera kości, odporność i nastrój. Niedobór bardzo częsty w Polsce.',
    riskGroups: ['osoby mało wychodzące na słońce', 'osoby starsze', 'osoby z nadwagą'],
    icon: '☀️'
  },
  zinc: {
    name: 'Cynk',
    description: 'Kluczowy dla odporności, gojenia ran i zdrowia skóry. Wspiera także płodność.',
    riskGroups: ['wegetarianie', 'osoby starsze', 'alkoholicy'],
    icon: '🛡️'
  },
  omega3: {
    name: 'Kwasy Omega-3',
    description: 'Niezbędne tłuszcze dla mózgu, serca i redukcji stanów zapalnych.',
    riskGroups: ['osoby nie jedzące ryb', 'osoby z depresją', 'osoby z chorobami serca'],
    icon: '🐟'
  },
  vitaminC: {
    name: 'Witamina C',
    description: 'Potężny antyoksydant wspierający odporność, skórę i wchłanianie żelaza.',
    riskGroups: ['palacze', 'osoby zestresowane', 'osoby mało jedzące warzyw'],
    icon: '🍊'
  },
  vitaminA: {
    name: 'Witamina A',
    description: 'Niezbędna dla zdrowych oczu, skóry i odporności.',
    riskGroups: ['osoby z chorobami jelit', 'alkoholicy'],
    icon: '👁️'
  },
  calcium: {
    name: 'Wapń',
    description: 'Budulec kości i zębów. Ważny także dla pracy mięśni i nerwów.',
    riskGroups: ['osoby nie jedzące nabiału', 'kobiety po menopauzie', 'weganie'],
    icon: '🦴'
  },
  potassium: {
    name: 'Potas',
    description: 'Reguluje ciśnienie krwi i pracę mięśni. Większość ludzi nie spożywa wystarczająco.',
    riskGroups: ['osoby z nadciśnieniem', 'sportowcy', 'osoby stosujące leki moczopędne'],
    icon: '💪'
  },
  folate: {
    name: 'Kwas foliowy',
    description: 'Kluczowy dla podziału komórek i syntezy DNA. Szczególnie ważny dla kobiet w ciąży.',
    riskGroups: ['kobiety planujące ciążę', 'osoby starsze', 'alkoholicy'],
    icon: '🧬'
  },
  biotin: {
    name: 'Biotyna',
    description: 'Witamina urody - wspiera zdrowe włosy, skórę i paznokcie.',
    riskGroups: ['osoby z problemami skórnymi', 'osoby jedzące surowe jajka'],
    icon: '💇'
  },
  fiber: {
    name: 'Błonnik',
    description: 'Niezbędny dla zdrowego trawienia i mikrobioty jelitowej.',
    riskGroups: ['osoby jedzące mało warzyw', 'osoby na diecie nikowęglowodanowej'],
    icon: '🌾'
  },
  protein: {
    name: 'Białko',
    description: 'Budulec mięśni i wszystkich tkanek ciała.',
    riskGroups: ['osoby starsze', 'weganie bez planowania diety', 'rekonwalescenci'],
    icon: '🥩'
  },
  iodine: {
    name: 'Jod',
    description: 'Niezbędny dla prawidłowej pracy tarczycy.',
    riskGroups: ['osoby nie jedzące ryb', 'osoby nie używające soli jodowanej'],
    icon: '🦪'
  },
  selenium: {
    name: 'Selen',
    description: 'Antyoksydant wspierający tarczycę i odporność.',
    riskGroups: ['osoby z chorobami tarczycy', 'wegetarianie'],
    icon: '✨'
  }
}

/**
 * Analyze selected symptoms and calculate deficiency scores
 * @param {Object} formData - Complete form data with all symptom selections
 * @returns {Object} Analysis results with deficiency scores and recommendations
 */
export function analyzeSymptoms(formData) {
  // Collect all selected symptoms
  const allSymptoms = [
    ...(formData.energy || []),
    ...(formData.skinHairNails || []),
    ...(formData.digestion || []),
    ...(formData.moodMental || []),
    ...(formData.musclesBones || []),
    ...(formData.immune || [])
  ]

  // Count deficiency occurrences
  const deficiencyScores = {}
  
  // Go through each category and count deficiencies
  Object.values(symptomCategories).forEach(category => {
    category.symptoms.forEach(symptom => {
      if (allSymptoms.includes(symptom.id)) {
        symptom.deficiencies.forEach(deficiency => {
          if (!deficiencyScores[deficiency]) {
            deficiencyScores[deficiency] = {
              count: 0,
              symptoms: []
            }
          }
          deficiencyScores[deficiency].count++
          deficiencyScores[deficiency].symptoms.push(symptom.label)
        })
      }
    })
  })

  // Calculate severity and sort
  const deficiencies = Object.entries(deficiencyScores)
    .map(([key, data]) => {
      const nutrientKey = Array.isArray(deficiencyToNutrient[key]) 
        ? deficiencyToNutrient[key][0] 
        : deficiencyToNutrient[key]
      
      return {
        id: key,
        nutrientKey,
        name: deficiencyInfo[key]?.name || nutrientInfo[nutrientKey]?.name || key,
        description: deficiencyInfo[key]?.description || '',
        icon: deficiencyInfo[key]?.icon || '❓',
        riskGroups: deficiencyInfo[key]?.riskGroups || [],
        symptomCount: data.count,
        symptoms: data.symptoms,
        severity: calculateSeverity(data.count),
        foods: nutrientKey ? getCheapestFoodsForNutrient(nutrientKey, 5) : []
      }
    })
    .filter(d => d.symptomCount > 0)
    .sort((a, b) => b.symptomCount - a.symptomCount)

  // Calculate overall health score (0-100)
  const totalSymptoms = allSymptoms.length
  const maxPossibleSymptoms = Object.values(symptomCategories)
    .reduce((sum, cat) => sum + cat.symptoms.length, 0)
  
  const healthScore = Math.max(0, Math.round(100 - (totalSymptoms / maxPossibleSymptoms) * 100))

  return {
    healthScore,
    totalSymptoms,
    deficiencies,
    topDeficiencies: deficiencies.slice(0, 5),
    recommendations: generateRecommendations(deficiencies, formData.dietSummary),
    summary: generateSummary(deficiencies, healthScore)
  }
}

/**
 * Calculate severity level based on symptom count
 */
function calculateSeverity(count) {
  if (count >= 4) return { level: 'high', label: 'Wysoki', color: '#ef4444' }
  if (count >= 2) return { level: 'medium', label: 'Średni', color: '#f59e0b' }
  return { level: 'low', label: 'Niski', color: '#22c55e' }
}

/**
 * Generate food recommendations based on deficiencies and diet preferences
 */
function generateRecommendations(deficiencies, dietSummary) {
  const recommendations = []
  const addedFoods = new Set()
  const dietType = dietSummary?.dietType || 'omnivore'
  const allergens = dietSummary?.allergens || []

  // Filter foods based on diet type
  const isAllowed = (food) => {
    // Check allergens
    if (allergens.includes('gluten') && ['oats', 'quinoa'].includes(food.id)) return false
    if (allergens.includes('nuts') && food.category === 'nuts') return false
    if (allergens.includes('fish') && food.category === 'fish') return false
    if (allergens.includes('shellfish') && food.category === 'seafood') return false
    if (allergens.includes('eggs') && food.category === 'eggs') return false
    if (allergens.includes('lactose') && food.category === 'dairy') return false
    if (allergens.includes('soy') && food.id === 'tofu') return false
    if (allergens.includes('sesame') && food.id === 'sesame_seeds') return false

    // Check diet type
    if (dietType === 'vegan') {
      return !['fish', 'seafood', 'meat', 'eggs', 'dairy'].includes(food.category)
    }
    if (dietType === 'vegetarian') {
      return !['fish', 'seafood', 'meat'].includes(food.category)
    }
    if (dietType === 'pescatarian') {
      return !['meat'].includes(food.category) || food.id.includes('liver')
    }

    return true
  }

  // Get top foods for each deficiency
  deficiencies.slice(0, 5).forEach(deficiency => {
    if (!deficiency.nutrientKey) return

    const topFoods = getCheapestFoodsForNutrient(deficiency.nutrientKey, 10)
      .filter(food => isAllowed(food) && !addedFoods.has(food.id))
      .slice(0, 3)

    topFoods.forEach(food => {
      addedFoods.add(food.id)
      recommendations.push({
        food,
        forDeficiency: deficiency.name,
        nutrientKey: deficiency.nutrientKey,
        priority: deficiency.symptomCount
      })
    })
  })

  // Sort by priority and cost-effectiveness
  return recommendations
    .sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority
      return parseFloat(a.food.costPerDV) - parseFloat(b.food.costPerDV)
    })
    .slice(0, 15)
}

/**
 * Generate a summary text based on analysis results
 */
function generateSummary(deficiencies, healthScore) {
  if (deficiencies.length === 0) {
    return {
      title: 'Świetnie!',
      text: 'Nie wykryliśmy wyraźnych oznak niedoborów żywieniowych. Kontynuuj zrównoważoną dietę!',
      type: 'success'
    }
  }

  const topDeficiency = deficiencies[0]
  const hasHighSeverity = deficiencies.some(d => d.severity.level === 'high')

  if (hasHighSeverity) {
    return {
      title: 'Wykryto potencjalne niedobory',
      text: `Twoje objawy sugerują możliwy niedobór ${topDeficiency.name} i innych składników. Warto rozważyć konsultację z lekarzem i włączyć do diety rekomendowane produkty.`,
      type: 'warning'
    }
  }

  return {
    title: 'Zauważyliśmy pewne objawy',
    text: `Na podstawie Twoich odpowiedzi, warto zwrócić uwagę na spożycie ${deficiencies.slice(0, 3).map(d => d.name).join(', ')}. Poniżej znajdziesz produkty, które mogą pomóc.`,
    type: 'info'
  }
}

/**
 * Calculate the cost to meet daily value for a nutrient from a specific food
 */
export function calculateCostForDailyValue(food, nutrientKey) {
  const nutrient = nutrientInfo[nutrientKey]
  if (!nutrient || !food.nutrients[nutrientKey]) return null

  const amountPer100g = food.nutrients[nutrientKey]
  const dailyValue = nutrient.dailyValue
  const gramsNeeded = (dailyValue / amountPer100g) * 100
  const cost = (gramsNeeded / 100) * food.pricePerl00g

  return {
    gramsNeeded: Math.round(gramsNeeded),
    cost: cost.toFixed(2),
    percentPerServing: Math.round((amountPer100g / dailyValue) * 100)
  }
}

/**
 * Get all foods sorted by cost-effectiveness for multiple nutrients
 */
export function getOptimalFoods(nutrientKeys, limit = 20) {
  const foodScores = foods.map(food => {
    let totalScore = 0
    let nutrientsProvided = 0

    nutrientKeys.forEach(key => {
      if (food.nutrients[key] && nutrientInfo[key]) {
        const percentDV = (food.nutrients[key] / nutrientInfo[key].dailyValue) * 100
        const costEfficiency = percentDV / food.pricePerl00g
        totalScore += costEfficiency
        nutrientsProvided++
      }
    })

    return {
      ...food,
      totalScore,
      nutrientsProvided,
      averageScore: nutrientsProvided > 0 ? totalScore / nutrientsProvided : 0
    }
  })

  return foodScores
    .filter(f => f.nutrientsProvided > 0)
    .sort((a, b) => b.averageScore - a.averageScore)
    .slice(0, limit)
}

