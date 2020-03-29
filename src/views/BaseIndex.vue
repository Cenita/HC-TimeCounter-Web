<template>
    <div>
      <narbar></narbar>
      <div style="margin-bottom: 50px">
        <div class="mdui-container">
          <div class="mdui-row main_body">
            <router-view/>
          </div>
        </div>
      </div>
      <inform class="mdui-hidden-sm-down" style="margin-bottom: 0px"></inform>
      <tabber class="mdui-hidden-md-up"></tabber>
    </div>
</template>

<script>
  const narbar = () => import('@/components/Navbar')
  const inform = () => import('@/components/foot')
  const tabber = () => import('@/components/index/Tabber')
  import {getUser} from "../api/web";
  import {mapMutations} from 'vuex'
  export default {
        name: "index",
        components:{
          narbar,
          inform,
          tabber
        },created(){
        var _this = this;
        if(this.$store.state.Authorization!=''){
          getUser().then(res=>{
            _this.setUserInfor({User:res.data.user});
          })
        }
      },
      methods:{
        ...mapMutations(['setUserInfor']),
      }
    }
</script>

<style scoped>
  .main_body >*{
    margin-top: 50px;
  }
</style>
