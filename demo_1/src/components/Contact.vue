<template>
<div class="content-wrap">
	<h1>{{pagetitle}}</h1>
	<div>
		<ul >
			<li v-for="(item,index) in items">{{item.title}}:{{item.content}}</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default{
		// name:"Personal",
		data(){
			return{
				pagetitle:"联系",
				title:"首页",
				items:[
					{id:1,title:"姓名",content:"sp"},
					{id:2,title:"年龄",content:"20"},
					{id:3,title:"联系方式",content:"15045124512"}
				]
			}
		},
		
	}
</script>