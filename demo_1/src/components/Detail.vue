<template>
<div>
	<h1>详情页面</h1>
	<div class="detail">
	<img src="" alt="" width="100px" height="300px" >
		<p class="title">我是标题</p>
		<div class="content">我是内容内容内容内容内容内容内容内容内容内容内容内容我是内容内容内容内容内容内容内容内容内容内容内容内容我是内容内容内容内容内容内容内容内容内容内容内容内容我是内容内容内容内容内容内容内容内容内容内容内容内容我是内容内容内容内容内容内容内容内容内容内容内容内容</div>
		<!-- <h1>{{this.$route.params.id}}</h1> -->
	</div>
</div>
</template>
<script>
	export default{
		name:'Detail',
		data(){
			return{

			}
		},
		components:{
		}
	}
</script>
<style>
	h1{
		text-align:center;
		font-size:2rem;
		color: #333;
	}
	img{
		display:block;
		width:30%;
		margin:0 auto 0.2em;
		background: #ddd;
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
		width: 60%;
    	margin: 0 auto;
		color: #333;
		text-indent: 28px;
		font-size: 14px;
		line-height: 30px;
		text-align: justify;
		word-break: break-all;
		padding-bottom: 0.2rem
	}
</style>