<template>
	<div id="tab">
		<ul class="tab-title nav nav-tabs" role="tablist">
			<li role="presentation" >
				<a  href="javascript:void(0);" v-for="tab in tabs"
				v-bind:key="tab"
				v-bind:class="['tab-button',{active:currentTab===tab.value}]"
				v-on:click="currentTab=tab.value"
				role="tab" data-toggle="tab">{{tab.content}}</a>
			</li>
		</ul>
		<div class="tab-con tab-content">
			<div class="tab-pane" v-show="currentTab==='Home'">
				<nav-home></nav-home>
			</div>
			<div class="tab-pane" v-show="currentTab==='Personal'">
				<nav-Personal></nav-Personal>
			</div>
			<div class="tab-pane" v-show="currentTab==='Contact'">
				<nav-Contact></nav-Contact>
			</div>
			<!-- <component v-bind:is="currentTabComponent" class="tab">
			</component> -->
		</div>
	</div>
</template>
<style>
	.nav>li{
		padding: 5px 8px;
	}
	.nav>li>a{
		padding: 5px 8px;
		color: #034bca;
		text-decoration: none;
	}
</style>
<script>
	import navHome from './HomeDetail';
	import navPersonal from './Personal';
	import navContact from './Contact';
	export default{
		data(){
			return{
				currentTab:'Home',
				tabs:[
					{value:'Home',content:'首页'},
					{value:'Personal',content:'个人'},
					{value:'Contact',content:'评论'}
				],
			};
		},
		components:{
			navHome,
			navPersonal,
			navContact
		},
		// computed:{
		// 	currentTabComponent:function(){
		// 		return 'tab-'+this.currentTab.toLowerCase;
		// 	}
		// }
	}
</script>