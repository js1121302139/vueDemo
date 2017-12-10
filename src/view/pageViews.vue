<template>
  <div class="pageViews">
      <TabBar @showSearch="open"/>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <SearchView v-show="search" @closeTalion='close'/>
  </div>
</template>

<script>
import TabBar from "../components/tebBar";
import SearchView from "../view/SearchView";
import { mapState } from "vuex";
export default {
  name: "pageViews",
  components: {
    TabBar,
    SearchView
  },
  data() {
    return {
      search:'',
      slide:'fade-enter'
    };
  },
  methods:{
    open(){
      this.search='open'
    },
    close(){
      this.search=''
    }
  },
  watch:{
    '$route' (to,from){
      const toDepth = to.path.split('/').length;
      const fromDepth = to.path.split('/').length;
      this.slide = toDepth<fromDepth?'slide-right':'slide-left'
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  height: 100%;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>
