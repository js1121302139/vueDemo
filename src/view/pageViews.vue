<template>
  <div class="pageViews">
      <TabBar @showSearch="open"/>
      <router-view></router-view>
      <SearchView v-show="search" @closeTalion='close'/>
  </div>
</template>

<script>
import TabBar from "../components/tebBar";
import SearchView from "../view/SearchView";
export default {
  name: "pageViews",
  components: {
    TabBar,
    SearchView
  },
  data() {
    return {
      search:''
    };
  },
  methods:{
    open(){
      this.search='open'
    },
    close(){
      this.search=''
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
