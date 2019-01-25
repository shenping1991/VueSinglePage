import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import VueResource from 'vue-resource'
Vue.use(Router)

export default new Router({
	//mode:'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/Detail/:id',
			name: 'Detail',
			component: Detail
		}
	]
})
