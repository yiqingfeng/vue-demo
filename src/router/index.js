import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Friction from '@/pages/Friction';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
	}, {
		path: '/friction',
		name: 'Friction',
		component: Friction,
	}],
});
