// 引入手淘 REM 处理方案
import 'amfe-flexible';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
