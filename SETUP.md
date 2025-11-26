# 🚀 Konfiguracja Płatności i Generowania Diety

## Wymagane konta

### 1. Stripe (płatności)
1. Załóż konto na [stripe.com](https://stripe.com)
2. Przejdź do Dashboard → Developers → API keys
3. Skopiuj **Secret key** (zaczyna się od `sk_test_` lub `sk_live_`)

### 2. OpenAI (generowanie diety)
1. Załóż konto na [platform.openai.com](https://platform.openai.com)
2. Przejdź do API keys
3. Utwórz nowy klucz i skopiuj go

### 3. Vercel (hosting)
1. Załóż konto na [vercel.com](https://vercel.com)
2. Połącz z repozytorium GitHub

---

## Konfiguracja Vercel

### Zmienne środowiskowe
W Vercel Dashboard → Settings → Environment Variables dodaj:

| Nazwa | Wartość | Środowisko |
|-------|---------|------------|
| `STRIPE_SECRET_KEY` | `sk_test_...` lub `sk_live_...` | All |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | All |
| `OPENAI_API_KEY` | `sk-...` | All |
| `FRONTEND_URL` | `https://twoja-domena.vercel.app` | All |

### Webhook Stripe
1. W Stripe Dashboard → Developers → Webhooks
2. Kliknij "Add endpoint"
3. URL: `https://twoja-domena.vercel.app/api/webhook`
4. Wybierz event: `checkout.session.completed`
5. Skopiuj "Signing secret" do zmiennej `STRIPE_WEBHOOK_SECRET`

---

## Testowanie płatności

### Tryb testowy (domyślny)
Użyj testowych kart Stripe:
- ✅ Sukces: `4242 4242 4242 4242`
- ❌ Odrzucona: `4000 0000 0000 0002`
- 🔐 Wymaga 3D Secure: `4000 0025 0000 3155`

Data ważności: dowolna przyszła data
CVC: dowolne 3 cyfry

### BLIK (testowy)
Kod: `777 123`

---

## Struktura API

```
/api/
├── create-checkout.js    # Tworzy sesję Stripe Checkout
├── webhook.js            # Odbiera potwierdzenia płatności
└── generate-diet.js      # Generuje dietę z OpenAI
```

### Przepływ płatności
1. Użytkownik klika "Stwórz plan żywieniowy"
2. Frontend → `/api/create-checkout` (POST)
3. Backend tworzy Stripe Checkout Session
4. Użytkownik przekierowany do Stripe
5. Po płatności → przekierowanie do `/dieta-sukces?session_id=...`
6. Frontend → `/api/generate-diet` (POST)
7. Backend weryfikuje płatność i generuje dietę z OpenAI

---

## Koszty

### Stripe
- 1.4% + 0.25 EUR za transakcję (karty EU)
- 2.9% + 0.25 EUR (karty spoza EU)
- BLIK: 1.5% + 0.25 PLN

Przy cenie 10 zł:
- ~0.39 zł opłaty Stripe
- ~9.61 zł dla Ciebie

### OpenAI (GPT-4o)
- Input: $2.50 / 1M tokenów
- Output: $10.00 / 1M tokenów

Szacowany koszt na dietę: ~$0.05-0.10 (~0.20-0.40 zł)

**Zysk netto na diecie: ~9.20-9.40 zł**

---

## Przejście na produkcję

1. Zmień klucze Stripe z `sk_test_` na `sk_live_`
2. Dodaj webhook produkcyjny
3. Przetestuj pełny flow
4. Ustaw domen w Stripe Dashboard → Settings → Branding

---

## Troubleshooting

### "Payment not completed"
- Sprawdź czy webhook jest poprawnie skonfigurowany
- Sprawdź logi w Vercel Dashboard → Functions

### "Failed to generate diet"
- Sprawdź klucz OpenAI
- Sprawdź limity API OpenAI
- Sprawdź logi błędów

### CORS errors
- Upewnij się, że `FRONTEND_URL` jest poprawny
- Sprawdź czy domena jest dodana w Stripe Dashboard

