<template>
    <div>
      <div class="mdui-col-lg-2"></div>
      <div class="mdui-col-lg-8">
        <div class="loginPage mdui-col-xs-12">
          <form id="loginform">
            <h1>计时器登录</h1>
            <div class="mdui-textfield mdui-textfield-floating-label">
              <label class="mdui-textfield-label">学号</label>
              <input class="mdui-textfield-input" type="text" name="stdNumber" id="stdNumber"/>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
              <label class="mdui-textfield-label">密码</label>
              <input class="mdui-textfield-input" type="password" name="stdPassword" id="stdPassword"/>
            </div>
            <button type="button" onclick="login();" id="loginbtn" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-blue-600">登录</button>
            <div id="loading" style="display: none">
              <div id="result" style="display: none">认证成功 <span style="color: red">3</span>秒后跳转</div>
              <div id="loading_icon" class="mdui-spinner mdui-spinner-colorful"></div>
            </div>
          </form>
        </div>
      </div>
      <div class="mdui-col-lg-2"></div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  .loginPage{
    height: 500px;
    padding: 50px;
    border: 1px solid #bde0ed;
    border-radius: 15px;
    margin:auto;
    box-shadow: #bde0ed 1px 5px 20px 5px;
    margin-top: 20px;
  }
  .main_body{
    min-height: 500px;
  }

  #loginbtn,#loading{
    margin-top: 50px;
    width: 100%;
    height: 50px;
  }

  .error label{
    color:red!important;
  }
  .error input{
    border-bottom:1px solid red ;
  }
  .mdui-spinner{
    left: 50%;
    margin-left: -16px;
  }
  #result{
    text-align: center;
    font-size: 16px;
  }
</style>
