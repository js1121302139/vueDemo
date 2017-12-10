<template>
  <div class="meView">
   <button @click="exit">推出登录</button>
  </div>
</template>

<style scoped>

</style>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'meView',
    methods:{
      ...mapActions(['Login']),
      exit(){
        this.Login();
        this.$router.push({name:'LoginView'});
      }
    }
  }
</script>
