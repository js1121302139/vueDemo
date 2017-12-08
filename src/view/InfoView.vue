<template>
  <div class="infoViews">
    <button @click="$router.go(-1)">回到上一夜</button>
    Info{{JSON.stringify($route.query)}}
    Info{{JSON.stringify($route.params)}}
  </div>
</template>

<script>
export default {
  name: "infoViews",
  data() {
    return {};
  },
  created(){
    console.log(this.$route)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
