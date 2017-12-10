<template>
    <div class="tabBar">
      <div class="nav">
        <router-link :to="{name:'HomeView'}">Home</router-link>
        <router-link :to="{name:'MoiveView'}">电影</router-link>
        <router-link :to="{name:'BookView'}">图书</router-link>
        <router-link :to="{name:'MeView'}">我的</router-link>
        <router-link to="">广播</router-link>
        <router-link to="">小组</router-link>
        <button @click="showSearch">🔍</button>
      </div>
    </div>
</template>
<style lang='less' scoped>

</style>
<<script>
export default {
  name:'tabBar',
  methods:{
    showSearch(){
      this.$emit('showSearch');
    }
  }
}
</script>
