<template>
	<li class="sec_li">
	<!-- <div class="lp_li_a"> -->
		<router-link to="/Detail" class="lp_li_a">
		<div class="lp_li_imgWrap">
			<img src="" alt="" width="200px" height="160px">
		</div>
		<p class="lp_li_name">{{title}}</p>
		<p class="lp_li_price">{{price}}</p>
		</router-link>
	<!-- </div> -->
	</li>
</template>
<style scoped>
	.sec_li{
		float: left;;
		width:46%;
		margin-left: 1%;
		margin-bottom: 0.5rem;
	}
	.lp_li_a{
		border:1px solid #ddd;
		padding: 0 0.5%;
		display: block;
	}
	.lp_li_a:hover{
		border:1px solid #ddd;
	}
	.lp_li_imgWrap{
		padding: 0.2rem 0;
	}
	.lp_li_imgWrap img{
		display: block;
		background: #ddd;
		width:160px;
		height: 200px;
		margin: 0 auto;
	}
</style>
<script>
	export default{
		props:['id','title','price'],
		//id:props.id,
		data(){
			return{
			} 
		},
		methods:{

		}
	}
</script>