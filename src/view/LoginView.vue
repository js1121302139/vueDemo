<template>
  <div class="loginView">
   LoginView{{getLogin}}
    <button @click="open">登陆</button>
  </div>
</template>

<style scoped>

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'loginView',
    methods:{
      ...mapActions(['Login']),
      open(){
        this.Login();
        this.$router.push({path:'/pages'})
      }
    },
    computed:{
      ...mapGetters(['getLogin'])
    }
  }
</script>
