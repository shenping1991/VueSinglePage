import Vue from 'vue'
import Router from 'vue-router'

import VueResource from 'vue-resource'

//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.use(VueResource);
Vue.use(Router);
//Vue.use(MintUI);
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import Detail from '@/components/Detail'
// import Personal from '@/components/Personal'
// import Contact from '@/components/Contact'
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const routes = [
	{
		path: '/',
		component: login
	},
]
export default new Router({
	mode:'history',
	routes
	//routes: [
	
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
		// {
		// 	path: '/Detail',
		// 	name: 'Detail',
		// 	component:Detail
		// }
	//]
})
