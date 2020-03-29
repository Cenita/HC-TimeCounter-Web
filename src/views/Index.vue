<template>

  <div id="bd" style="min-height: 500px;">
    <div v-if="this.$store.state.Authorization!=''" class="user" style="text-align: center;">
      <img :src="this.user.head_url" width="150px" height="150px" style="border-radius: 100%;" alt="">
      <div class="name" style=""><span>{{user.name}}</span></div>
      <icon></icon>
      <time_counter></time_counter>
      <week_graphy class="mdui-hidden-sm-down"></week_graphy>
    </div>
    <rank class="mdui-hidden-sm-down"></rank>
    <rank class="mdui-hidden-md-up" v-if="this.$store.state.Authorization==''"></rank>
    <div class="mdui-hidden-md-up"  v-if="this.$store.state.Authorization!=''" style="text-align: center;margin-top: 30px">
      <status></status>
    </div>
  </div>
</template>

<script>
    const rank = () => import('../components/index/rank')
    const icon = () => import('../components/index/StatusIcon')
    const time_counter = () => import('../components/index/TimeCounter')
    const week_graphy = () => import('../components/index/WeekPanel')
    const status = () => import('../components/nav/ServerStatus')
    import {getUser} from '../api/web'
    import {mapMutations} from 'vuex'
    export default {
        name: "Index",
      data:function(){
          return {
            user:{
              name:this.$store.state.Name,
              head_url:""
            }
          }
      },methods:{
        ...mapMutations(['changeLogin','setUserInfor','setWorkStatus']),
      },
      components:{
          rank,
          icon,
        time_counter,
        week_graphy,
        status
      },created(){
          var _this = this;
        if(this.$store.state.Authorization!=''){
          getUser().then(res=>{
            _this.user.name = res.data.user.user_name;
            _this.user.head_url = _this.$url+res.data.user.head;
            _this.setUserInfor({User:res.data.user});
          })
        }
      }
    }
</script>

<style scoped>
  #bd >*{
    margin-top: 60px;
  }
  .user >*{
    margin-top: 30px;
  }
  .user .name{
    font-family: 'Microsoft YaHei UI';
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 5px;
  }
</style>
