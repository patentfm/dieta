import { createRouter, createWebHistory } from 'vue-router'

// Lazy load pages
const Home = () => import('../views/Home.vue')
const Results = () => import('../views/Results.vue')
const ProductsDatabase = () => import('../views/ProductsDatabase.vue')
const CookingTips = () => import('../views/CookingTips.vue')
const Recipes = () => import('../views/Recipes.vue')
const Guides = () => import('../views/Guides.vue')
const BMICalculator = () => import('../views/BMICalculator.vue')
const About = () => import('../views/About.vue')
const Privacy = () => import('../views/Privacy.vue')
const Terms = () => import('../views/Terms.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wyniki',
    name: 'Results',
    component: Results
  },
  {
    path: '/baza-produktow',
    name: 'ProductsDatabase',
    component: ProductsDatabase
  },
  {
    path: '/sztuczki-kulinarne',
    name: 'CookingTips',
    component: CookingTips
  },
  {
    path: '/przepisy',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/poradniki',
    name: 'Guides',
    component: Guides
  },
  {
    path: '/kalkulator-bmi',
    name: 'BMICalculator',
    component: BMICalculator
  },
  {
    path: '/o-nas',
    name: 'About',
    component: About
  },
  {
    path: '/polityka-prywatnosci',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/regulamin',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

