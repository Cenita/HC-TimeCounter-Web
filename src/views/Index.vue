<template>

  <div>
    <div v-if="this.$store.state.Authorization!=''" class="user" style="text-align: center;">
      <img src="../assets/image/默认头像-男.jpg" width="150px" style="border-radius: 100%;" alt="">
      <div class="name" style=""><span>{{user.name}}</span></div>
      <icon></icon>
      <time_counter></time_counter>
    </div>
    <rank></rank>
  </div>
</template>

<script>
    const rank = () => import('../components/index/rank')
    const icon = () => import('../components/index/StatusIcon')
    const time_counter = () => import('../components/index/TimeCounter')
    export default {
        name: "Index",
      data:function(){
          return {
            user:{
              name:"陈慧涛"
            }
          }
      },
      components:{
          rank,
          icon,
        time_counter
      }
    }
</script>

<style scoped>
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
