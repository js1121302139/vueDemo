<template>
  <div class="pageViews">
    Homeasd
    <img :src="logo">
    <button @click="$router.push({name:'InfoView',query:{uId:123}})">详情</button>
    <button @click="$router.push({name:'InfoView',params:{tit:'今日头条'}})">今日头条</button>
    <button @click="$router.push({name:'InfoView'})">我的喜欢</button>
    <button @click="$router.push({name:'InfoView'})">情感电影</button>
    <button @click="$router.push({name:'InfoView'})">爱情喜剧</button>
    <button @click="setA">爱情喜剧</button>

    {{getA}}
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import TabBar from "../components/tebBar";
import logo from '../assets/logo.png'
export default {
  name: "pageViews",
  components: {
    TabBar
  },
  data() {
    return {
      logo
    };
  },
  methods:{
    ...mapActions(['setA'])
  },
  computed:mapGetters(['getA'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
