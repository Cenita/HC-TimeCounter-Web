<template>
    <div>
      <mt-tabbar  v-model="selected" fixed >
        <mt-tab-item id="/">
          <img slot="icon" src="../../assets/icon/home.png">
          主页
        </mt-tab-item>
        <mt-tab-item v-if="this.$store.state.Authorization!=''" id="/weekGraphy">
          <img slot="icon" src="../../assets/icon/graphy.png">
          计时图
        </mt-tab-item>
        <mt-tab-item v-if="this.$store.state.Authorization!=''" id="/rank">
          <img slot="icon" src="../../assets/icon/rank.png">
          排行榜
        </mt-tab-item >
        <mt-tab-item id="/login">
          <img slot="icon" src="../../assets/icon/me.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "tabber",
      data(){
          return {
            selected:'主页'
          }
      },
      watch:{
        selected:function(val,oldVal){
          this.$router.push(val.toString())
        }
      }
      ,
      created(){
        let path = this.$route.path;
        this.selected=path;
      }
    }
</script>

<style scoped>
  mt-tabbar{
    background: #f3e5f5;
  }
</style>
