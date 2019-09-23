<template>
    <div>
      <div class="mdui-col-lg-2"></div>
      <div class="mdui-col-lg-8">
        <div class="loginPage mdui-col-xs-12">
          <form id="loginform">
            <router-view/>
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
    padding: 50px;
    padding-bottom: 70px;
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
