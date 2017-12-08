<template>
  <div class="SearchView">
    <button @click="closeTalion">关闭</button>
    <input type="text" placeholder="🔍😄" :value="a">
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
  },
  computed:{
    ...mapState(['a'])
  },
  watch:{
    numA(){

    },
    AnNumA(){

    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
