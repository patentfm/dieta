import OpenAI from 'openai';
import Stripe from 'stripe';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Cost-effective foods database with realistic portions
const costEffectiveFoods = {
  // Vitamins
  vitaminD: [
    { name: 'Śledź marynowany', portion: '100g', cost: '2.00', nutrientPer100g: '16.1μg' },
    { name: 'Makrela', portion: '100g', cost: '2.50', nutrientPer100g: '16.1μg' },
    { name: 'Sardynki w oleju', portion: '85g (puszka)', cost: '3.50', nutrientPer100g: '4.8μg' },
    { name: 'Jaja kurze', portion: '2 szt (100g)', cost: '1.80', nutrientPer100g: '2μg' },
  ],
  vitaminC: [
    { name: 'Papryka czerwona', portion: '100g', cost: '1.20', nutrientPer100g: '128mg' },
    { name: 'Natka pietruszki', portion: '30g', cost: '0.30', nutrientPer100g: '133mg' },
    { name: 'Brokuły', portion: '150g', cost: '1.50', nutrientPer100g: '89mg' },
    { name: 'Kiwi', portion: '1 szt (100g)', cost: '1.20', nutrientPer100g: '93mg' },
  ],
  vitaminB12: [
    { name: 'Wątróbka drobiowa', portion: '100g', cost: '1.00', nutrientPer100g: '16.6μg' },
    { name: 'Makrela', portion: '100g', cost: '2.50', nutrientPer100g: '19μg' },
    { name: 'Śledź', portion: '100g', cost: '2.00', nutrientPer100g: '13.7μg' },
    { name: 'Jaja kurze', portion: '2 szt', cost: '1.80', nutrientPer100g: '0.9μg' },
  ],
  // Minerals
  iron: [
    { name: 'Wątróbka drobiowa', portion: '100g', cost: '1.00', nutrientPer100g: '9mg' },
    { name: 'Soczewica gotowana', portion: '200g', cost: '2.40', nutrientPer100g: '3.3mg' },
    { name: 'Szpinak gotowany', portion: '150g', cost: '2.25', nutrientPer100g: '3.6mg' },
    { name: 'Fasola biała', portion: '150g', cost: '1.20', nutrientPer100g: '3.7mg' },
  ],
  magnesium: [
    { name: 'Pestki dyni', portion: '30g (2 łyżki)', cost: '1.35', nutrientPer100g: '550mg' },
    { name: 'Kasza gryczana', portion: '100g (sucha)', cost: '0.80', nutrientPer100g: '231mg' },
    { name: 'Płatki owsiane', portion: '80g', cost: '0.40', nutrientPer100g: '177mg' },
    { name: 'Ciemna czekolada 85%', portion: '30g', cost: '1.20', nutrientPer100g: '228mg' },
  ],
  zinc: [
    { name: 'Pestki dyni', portion: '30g (2 łyżki)', cost: '1.35', nutrientPer100g: '7.8mg' },
    { name: 'Wołowina', portion: '150g', cost: '6.75', nutrientPer100g: '4.8mg' },
    { name: 'Soczewica', portion: '200g gotowana', cost: '2.40', nutrientPer100g: '1.3mg' },
    { name: 'Sezam', portion: '20g (2 łyżki)', cost: '0.60', nutrientPer100g: '7.8mg' },
  ],
  calcium: [
    { name: 'Sardynki z ościami', portion: '85g', cost: '3.00', nutrientPer100g: '382mg' },
    { name: 'Sezam', portion: '30g (3 łyżki)', cost: '0.90', nutrientPer100g: '975mg' },
    { name: 'Jogurt naturalny', portion: '200g', cost: '2.00', nutrientPer100g: '110mg' },
    { name: 'Jarmuż gotowany', portion: '150g', cost: '3.00', nutrientPer100g: '254mg' },
  ],
  potassium: [
    { name: 'Fasola biała', portion: '150g gotowana', cost: '1.20', nutrientPer100g: '561mg' },
    { name: 'Ziemniaki', portion: '300g', cost: '0.60', nutrientPer100g: '421mg' },
    { name: 'Banany', portion: '2 szt (240g)', cost: '1.20', nutrientPer100g: '358mg' },
    { name: 'Szpinak', portion: '150g', cost: '2.25', nutrientPer100g: '558mg' },
  ],
  // Fatty acids
  omega3: [
    { name: 'Makrela', portion: '150g', cost: '3.75', nutrientPer100g: '2.7g EPA+DHA' },
    { name: 'Śledź', portion: '150g', cost: '3.00', nutrientPer100g: '1.7g EPA+DHA' },
    { name: 'Siemię lniane mielone', portion: '20g (2 łyżki)', cost: '0.36', nutrientPer100g: '22.8g ALA' },
    { name: 'Orzechy włoskie', portion: '30g', cost: '1.65', nutrientPer100g: '9.1g ALA' },
  ],
};

// Map deficiency keys to food database keys
const deficiencyToFoodKey = {
  'vitamin-d': 'vitaminD',
  'vitamin-c': 'vitaminC',
  'vitamin-b12': 'vitaminB12',
  'iron': 'iron',
  'magnesium': 'magnesium',
  'zinc': 'zinc',
  'calcium': 'calcium',
  'potassium': 'potassium',
  'omega3': 'omega3',
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sessionId } = req.body;

    // Verify payment was completed
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== 'paid') {
      return res.status(402).json({ error: 'Payment not completed' });
    }

    // Get data from session metadata
    const deficiencies = JSON.parse(session.metadata.deficiencies || '[]');
    const userPreferences = JSON.parse(session.metadata.userPreferences || '{}');

    // Build recommended foods list based on deficiencies
    const recommendedFoods = [];
    deficiencies.forEach(def => {
      const foodKey = deficiencyToFoodKey[def.id] || def.nutrientKey;
      if (costEffectiveFoods[foodKey]) {
        recommendedFoods.push({
          deficiency: def.name,
          priority: def.severity?.level || 'medium',
          foods: costEffectiveFoods[foodKey],
        });
      }
    });

    // Build the prompt for OpenAI
    const prompt = buildDietPrompt(deficiencies, recommendedFoods, userPreferences);

    // Generate diet with OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `Jesteś ekspertem dietetykiem. Tworzysz praktyczne, smaczne i budżetowe jadłospisy.
          
ZASADY:
- Używaj TYLKO produktów z podanej listy rekomendowanych
- Porcje muszą być realistyczne (np. max 30g pestek dyni, max 150g mięsa)
- Posiłki mają być proste do przygotowania (max 30 min)
- Uwzględnij preferencje użytkownika (wegetarianizm, alergie)
- Każdy przepis ma mieć konkretne gramatura
- Lista zakupów ma mieć szacunkowe ceny
- Odpowiadaj TYLKO w formacie JSON`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const dietPlan = JSON.parse(completion.choices[0].message.content);

    res.status(200).json({
      success: true,
      dietPlan,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Diet generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate diet',
      details: error.message 
    });
  }
}

function buildDietPrompt(deficiencies, recommendedFoods, preferences) {
  const deficiencyList = deficiencies
    .map(d => `- ${d.name} (priorytet: ${d.severity?.level || 'średni'}, ${d.symptomCount} objawów)`)
    .join('\n');

  const foodsList = recommendedFoods
    .map(rf => {
      const foods = rf.foods
        .map(f => `  • ${f.name}: ${f.portion} = ~${f.cost} zł (${f.nutrientPer100g}/100g)`)
        .join('\n');
      return `${rf.deficiency} (${rf.priority}):\n${foods}`;
    })
    .join('\n\n');

  const preferencesText = [];
  if (preferences.isVegetarian) preferencesText.push('wegetarianin');
  if (preferences.isVegan) preferencesText.push('weganin');
  if (preferences.allergies?.length) preferencesText.push(`alergie: ${preferences.allergies.join(', ')}`);
  if (preferences.budget) preferencesText.push(`budżet tygodniowy: ${preferences.budget} zł`);

  return `
Stwórz 7-dniowy jadłospis dla osoby z następującymi niedoborami:

WYKRYTE NIEDOBORY:
${deficiencyList}

REKOMENDOWANE PRODUKTY (używaj TYLKO tych, są posortowane od najtańszych):
${foodsList}

PREFERENCJE UŻYTKOWNIKA:
${preferencesText.length ? preferencesText.join(', ') : 'brak szczególnych'}

WYMAGANY FORMAT JSON:
{
  "weeklyPlan": [
    {
      "day": "Poniedziałek",
      "meals": {
        "breakfast": {
          "name": "Nazwa posiłku",
          "ingredients": ["składnik 1 (ilość)", "składnik 2 (ilość)"],
          "instructions": "Krótka instrukcja przygotowania",
          "nutrients": ["uzupełnia: witamina X, minerał Y"],
          "prepTime": "10 min"
        },
        "lunch": { ... },
        "dinner": { ... },
        "snack": { ... }
      }
    }
    // ... pozostałe dni
  ],
  "shoppingList": [
    { "item": "nazwa produktu", "amount": "ilość", "estimatedPrice": "X.XX zł" }
  ],
  "totalEstimatedCost": "XX.XX zł",
  "nutritionSummary": {
    "addressedDeficiencies": ["niedobór 1", "niedobór 2"],
    "tips": ["wskazówka 1", "wskazówka 2"]
  }
}

Pamiętaj:
- Porcje pestek/nasion: max 30g dziennie
- Porcje mięsa: 100-150g
- Porcje ryb: 100-150g  
- Porcje warzyw: 150-200g
- Posiłki mają być smaczne i różnorodne
- Uwzględnij produkty sezonowe i tanie`;
}

