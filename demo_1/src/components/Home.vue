<template>
	<div class="container">
		<home-header></home-header>
		<div class="content">
			<ul class="cont_ul">
				<list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
			</ul>
		</div>
	</div>
</template>
<style>
	ul,li{
		list-style-type: none;
		list-style: none;
	}
</style>
<script>
	import HomeHeader from './HomeHeader'
	import List from './List'
	export default{
		name:"Home",
		data(){
			return{
				items:[
					{title:"奶茶",price:"10"},
					{title:"饮料",price:"20"},
					{title:"咖啡",price:"30"}
				]
			}
		},
		components:{
			HomeHeader,
			List

		},
		// created(){
		// 	this.$http.get('/api/drink').then((data)=>{
		// 		this.items=data.body.data;
		// 	})
		// }
	}
</script>