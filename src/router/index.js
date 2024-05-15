import Vue from 'vue';
import Router from 'vue-router';
import CharacterList from '@/components/CharacterCard/CharacterList';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'CharacterList',
    component: CharacterList,
  },
];

const router = new Router({
  routes,
});

export default router;
