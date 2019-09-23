<template>
    <div>
      <div class="page" mdui-menu="{target: '#loginPage'}" >
        <div  style="border: 0px;margin-right: 10px;width: 40px;height: 40px" class="mdui-btn mdui-btn-icon">
          <img src="../../assets/image/默认头像-男.jpg" alt="" style="width: 40px;">
        </div>
        <span  style="margin-right: 20px">陈慧涛</span>
      </div>

      <ul id="loginPage" class="mdui-menu">
        <li class="mdui-menu-item">
          <a @click="toSet" class="mdui-ripple">设置</a>
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
      methods:{
        ...mapMutations(['changeLogin']),
          toSet(){
            this.$router.push('/set')
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
