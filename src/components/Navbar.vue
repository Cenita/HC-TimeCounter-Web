<template>
    <div class="mdui-theme-primary-blue mdui-text-color-theme-900">
      <div class="mdui-toolbar mdui-color-theme-600 toobar">
        <div id="index" @click="toIndex">
          <span class="mdui-typo-title"><img src="../assets/image/LOGO.png" alt="" style="width: 50px;height: auto;">&nbsp;环创计时系统</span>
        </div>
        <div class="mdui-hidden-sm-down">
          <ServerStatus></ServerStatus>
        </div>
        <div class="mdui-toolbar-spacer"></div>
        <div class="mdui-hidden-sm-down">
          <LoginButtom v-if="this.$store.state.Authorization==''"></LoginButtom>
          <HasLogin v-else></HasLogin>
        </div>
      </div>
    </div>
</template>

<script>
  const ServerStatus = () => import('./nav/ServerStatus')
  const LoginButtom = () => import('./nav/LoginButtom')
  const HasLogin = () => import('./nav/HasLoginButtom')
  export default {
      components:{
        ServerStatus,
        LoginButtom,
        HasLogin
      },
      methods:{
        toIndex(){
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  #index:hover{
    cursor: pointer;
  }
</style>
