import {createRouter, createWebHistory, RouterOptions} from 'vue-router';
import HomeView from '@views/HomeView.vue';
import DestinationView from '@views/DestinationView.vue';
import CrewView from '@views/CrewView.vue';
import TechnologyView from '@views/TechnologyView.vue';

const history = createWebHistory('/space-tourism-multipage-website/');
const routes: RouterOptions['routes'] = [
  {
    path: '/',
    component: HomeView,
    meta: {
      bg: 'bg-home-desktop',
    },
  },
  {
    path: '/destination',
    component: DestinationView,
    meta: {
      bg: 'bg-destination-desktop',
    },
  },
  {
    path: '/crew',
    component: CrewView,
    meta: {
      bg: 'bg-crew-desktop',
    },
  },
  {
    path: '/technology',
    component: TechnologyView,
    meta: {
      bg: 'bg-technology-desktop',
    },
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
