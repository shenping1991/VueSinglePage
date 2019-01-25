<template>
	<li class="sec_li">
		<router-link to="/Detail" class="lp_li_a">
		<div class="lp_li_imgWrap">
			<img src="" alt="" width="100px" height="100px">
		</div>
		<p class="lp_li_name">{{title}}</p>
		<p class="lp_li_price">{{price}}</p>
		</router-link>
	</li>
</template>
<style scoped>
	.sec_li{
		float: left;;
		width:50%;
		margin-bottom: 0.1rem;
	}
	.lp_li_imgWrap{
		padding: 0.2rem 0;
	}
	.lp_li_imgWrap img{
		width:auto;
		height: 2rem;
	}
</style>
<script>
	export default{
		props:['title','price']
	}
</script>