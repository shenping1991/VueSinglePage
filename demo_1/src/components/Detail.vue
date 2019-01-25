<template>
	<div class="detail">
	<img src="" alt="" width="100px" height="300px" >
		<p class="title">我是标题</p>
		<div class="content">我是内容内容内容内容内容内容内容内容内容内容内容内容</div>
		<h1>{{this.$route.params.id}}</h1>
	</div>
</template>
<script>
	import DetailHeader from './DetailHeader'
	export default{
		name:'Detail',
		components:{
			DetailHeader
		}
	}
</script>
<style>
	img{
		display:block;
		width:30%;
		margin:0 auto 0.2em;
	}
	.detail{
		margin:0 auto;
		padding: 0.3rem;
		font-size: 0.2em;
	}
	.title{
		color: #333;
		font-size: 14px;
		font-weight: bold;
	}
	.content{
		color: #333;
		text-indent: 28px;
		font-size: 14px;
		line-height: 30px;
		text-align: justify;
		word-break: break-all;
		padding-bottom: 0.2rem
	}
</style>