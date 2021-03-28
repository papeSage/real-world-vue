import { createRouter, createWebHashHistory } from "vue-router";
import acceuil from "../views/Acceuil.vue";
import solution from "../views/solution.vue";
import pack from "../views/pricing-4col.vue";
import contact from "../views/contact.vue";
import finance from "../views/finance.vue";
import administration from "../views/administration.vue";
import traduction from "../views/traduction.vue";
import gestion from "../views/gestion.vue";
import service from "../views/service.vue";
import big from "../views/big.vue";
import formations from "../views/formations.vue";
import conseils from "../views/conseils.vue";
import developpement from "../views/developpement.vue";
import renouvellement from "../views/renouvellement.vue";
import compte from "../views/Compte.vue";
import infrastructure from "../views/infrastructure.vue";



const routes = [
  {
    path: "",
    name: "acceuil",
    component: acceuil
  },
 
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue")
  },
  

 
  {
    path: "/compte",
    name: "compte",
    component: compte
  },
  {
    path: "/solution",
    name: "solution",
    component: solution
  },
  {
    path: "/pack",
    name: "pack",
    component: pack
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
  },
  {
    path: "/finance",
    name: "finance",
    component: finance
  },
  {
    path: "/administration",
    name: "administration",
    component: administration
  },
  {
    path: "/traduction",
    name: "traduction",
    component: traduction
  },
  {
    path: "/gestion",
    name: "gestion",
    component: gestion
  },
  {
    path: "/renouvellement",
    name: "renouvellement",
    component: renouvellement
  },
  {
    path: "/service",
    name: "service",
    component: service
  },
  {
    path: "/developpement",
    name: "developpement",
    component: developpement
  },
  {
    path: "/infrastructure",
    name: "infrastructure",
    component: infrastructure
  },
  {
    path: "/big",
    name: "big",
    component: big
  },
  {
    path: "/formations",
    name: "formations",
    component: formations
  },
  {
    path: "/conseils",
    name: "conseils",
    component: conseils
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
