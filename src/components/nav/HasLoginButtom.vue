<template>
    <div>
      <div class="page" mdui-menu="{target: '#loginPage'}" >
        <div  style="border: 0px;margin-right: 10px;width: 40px;height: 40px" class="mdui-btn mdui-btn-icon">
          <img :src="img_src" alt="" style="width: 40px;height: 40px;">
        </div>
        <span  style="margin-right: 20px">{{this.$store.state.Name}}</span>
      </div>

      <ul id="loginPage" class="mdui-menu">
        <li class="mdui-menu-item">
          <a @click="toSet('set')" class="mdui-ripple">设置Mac地址</a>
        </li>
        <li class="mdui-menu-item">
          <a @click="toSet('avatar')" class="mdui-ripple">设置头像</a>
        </li>
        <li class="mdui-menu-item">
          <a @click="toSet('developer')" class="mdui-ripple">开发人员</a>
        </li>
        <li class="mdui-menu-item">
          <a @click="loginOut" class="mdui-ripple">退出登录</a>
        </li>
      </ul>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "HasLoginButtom",
      data:function(){
          return {
            img_src:this.$url + this.$store.state.Avatar
          }
      },
      computed:{
          head_src:function () {
            return this.$store.state.Avatar
          }
      },
      watch:{
          head_src:function () {
            this.img_src = this.$url + this.$store.state.Avatar
          }
      },
      methods:{
        ...mapMutations(['changeLogin']),
          toSet(value){
            if(value=='set'){
              this.$router.push('/set')
            }else{
              this.$router.push('/set/'+value)
            }
          },
          loginOut(){
            this.changeLogin({Authorization:""})
            this.$router.push('/login')
          }
      }
    }
</script>

<style scoped>
  .page:hover{
    cursor: pointer;
  }
</style>
