<template>
    <div class="mdui-theme-primary-blue mdui-text-color-theme-900">
      <div class="mdui-toolbar mdui-color-theme-600 toobar">
        <router-link to="/">
          <span class="mdui-typo-title"><img src="../assets/image/LOGO白.png" alt="" style="width: 50px;height: auto;">&nbsp;环创计时系统</span>
        </router-link>
        <ServerStatus></ServerStatus>
        <div class="mdui-toolbar-spacer"></div>
        <LoginButtom></LoginButtom>
      </div>
    </div>
</template>

<script>
    import ServerStatus from './nav/ServerStatus'
    import LoginButtom from './nav/LoginButtom'
    export default {
      components:{
        ServerStatus,
        LoginButtom
      }
    }
</script>

<style scoped>

</style>
