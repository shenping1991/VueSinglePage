import Vue from 'vue'
import Router from 'vue-router'

import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(VueResource);
Vue.use(Router);
Vue.use(MintUI);
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import Detail from '@/components/Detail'
import Personal from '@/components/Personal'
import Contact from '@/components/Contact'
export default new Router({
	mode:'history',
	routes: [
		// {
		// 	path: '/',
		// 	name: 'Home',
		// 	// component: Home
		// },
		// {
		// 	path: '/Personal',
		// 	name: 'Personal',
		// 	// component: Personal
		// },
		// {
		// 	path: '/Contact',
		// 	name: 'Contact',
		// 	// component: Contact
		// }
	]
})
