<template>
	<div class="content-wrap">
		<h1>{{title}}</h1>
		<div class="content">
			<ul class="cont_ul">
				<list v-for="item in items" :id="item.id" :price="item.price" :title="item.title" :img="item.img"></list>
			</ul>
			<div style="clear:both;"></div>
		</div>
		
	</div>
</template>
<script>
	import List from './List';
	export default{
		// name:"Home",
		data(){
			return{
				title:"首页",
				items:[
					{id:1,title:"类目",price:"10"},
					{id:2,title:"类目",price:"20"},
					{id:3,title:"类目",price:"30"}
				]
			}
		},
		components:{
			List,
		},
		created(){
			this.$http.get('/api/books').then((data)=>{
				this.items=data.body.data;
			});
		}
	}
</script>