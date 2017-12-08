<template>
  <div class="SearchView">
    <button @click="closeTalion">关闭</button>
    <input type="text" placeholder="🔍😄">
  </div>
</template>

<script>
export default {
  name: "SearchView",
  data() {
    return {

    };
  },
  methods:{
    closeTalion(){
      this.$emit('closeTalion');
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
