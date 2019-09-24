<template>
    <div>
      <mt-tabbar  v-model="selected" fixed >
        <mt-tab-item id="/">
          主页
        </mt-tab-item>
        <mt-tab-item v-if="this.$store.state.Authorization!=''" id="/weekGraphy">
          计时图
        </mt-tab-item>
        <mt-tab-item v-if="this.$store.state.Authorization!=''" id="/rank">
          排行榜
        </mt-tab-item >
        <mt-tab-item id="/login">
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
