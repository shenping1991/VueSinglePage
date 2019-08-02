<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- <router-view/> -->
            <div>
                <mt-cell class="page-part" title="当前选中" :value="selected" />
            </div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="home">
                    <!-- <router-link to="/">1111</router-link>  -->
                    <nav-home></nav-home>
                </mt-tab-container-item>
                <mt-tab-container-item id="personal">
                    <router-link to="/Personal">222</router-link>
                </mt-tab-container-item>
                <mt-tab-container-item id="contact">
                    <router-link to="/Contact">333</router-link>
                </mt-tab-container-item>
            </mt-tab-container>
            <mt-tabbar v-model="selected" fixed>
                <mt-tab-item id="home" >
                    <img slot="icon" src="./assets/icon-admin.png">首页
                </mt-tab-item>
                <mt-tab-item id="personal">
                    <img slot="icon" src="./assets/icon-admin.png">个人
                </mt-tab-item>
                <mt-tab-item id="contact">
                    <img slot="icon" src="./assets/icon-admin.png">联系
                </mt-tab-item>
            </mt-tabbar>
          </div>
      </div>
  </div>
</template>

<script>
import navHome from './components/Home';
export default {
    name: 'App',
    data(){
        return{
            selected: "home",
        }
    },
    components:{
        navHome,
    },
    watch:{
        selected:function(val,oldVal){
            switch(val){
                case "home":
                    this.$router.push("/");
                    break;
                case "personal":
                    this.$router.push("/personal");
                    break;
                case "contact":
                    this.$router.push("/contact");
                    break;
            }
        }
    }
}
</script>

<style>
#app {
  position:relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
ul,li{
    list-style-type: none;
}
/*.page-tabbar {
    overflow: hidden;
    height: 100vh;
}

.page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
}*/
</style>
