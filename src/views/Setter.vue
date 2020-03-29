<template>
    <div style="margin-top: 0px;">
      <mt-navbar v-model="selected" class="mdui-hidden-md-up">
        <mt-tab-item id="1">设置MAC地址</mt-tab-item>
        <mt-tab-item id="2">设置头像</mt-tab-item>
        <mt-tab-item id="3">开发人员</mt-tab-item>
      </mt-navbar>
      <router-view style="margin-top: 20px;"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Setter",
      data:function () {
        return {
          selected:"1"
        }
      },methods:{
      },
      created(){
        var url = this.$route.path;
        if(url=='/set'){
          this.selected="1"
        }else if(url=='/set/avatar'){
          this.selected="2"
        }else if(url=='/set/developer'){
          this.selected='3'
        }
      },watch:{
          $route(to,from){
            var url = to.path;
            if(url=='/set'){
              this.selected="1"
            }else if(url=='/set/avatar'){
              this.selected="2"
            }else if(url=='/set/developer'){
              this.selected='3'
            }
          },
          selected:function (val) {
            if(val==1){
              this.$router.push('/set')
            }else if(val==2){
              this.$router.push('/set/avatar')
            }else if(val==3){
              this.$router.push('/set/developer')
            }
          }
      }
    }
</script>

<style scoped>
  mt-navbar>*:hover{
    cursor: pointer;
  }
</style>
