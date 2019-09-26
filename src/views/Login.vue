<template>
    <div>
      <h3>计时器登录</h3>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':number_error,'mdui-textfield-focus':stnumber}">
        <label class="mdui-textfield-label">学号</label>
        <input class="mdui-textfield-input" v-model="stnumber" @blur="checkNumber" type="text" name="stdNumber"/>
        <label :hidden="!number_error" class="error-tips">{{number_error_text}}</label>
      </div>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':password_error,'mdui-textfield-focus':password}">
        <label class="mdui-textfield-label">密码</label>
        <input class="mdui-textfield-input"  v-model="password" @blur="checkPassword" type="password" name="stdPassword"/>
        <label :hidden="!password_error" class="error-tips">{{password_error_text}}</label>
      </div>
      <span><router-link to="/forget">忘记密码？</router-link></span>
      <span style="float: right"><router-link to="/register">我要注册</router-link></span>
      <button :hidden="logining" type="button" @keyup.enter="login"  @click="login" id="loginbtn" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-blue-600">登录</button>
      <div class="mdui-progress" style="margin-top: 40px" :hidden="!logining">
        <div class="mdui-progress-indeterminate"></div>
      </div>
      <div class="mdui-hidden-md-up"  v-if="this.$store.state.Authorization==''" style="bottom: 10px;position: absolute;text-align: center">
        <status></status>
      </div>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  const status = () => import('../components/nav/ServerStatus')
    export default {
        name: "Login",
      components:{status},
      data:function () {
        return {
          stnumber:"",
          password:"",
          number_error:false,
          password_error:false,
          number_error_text:"",
          password_error_text:"",
          logining:false
        }
      },
      methods:{
        ...mapMutations(['changeLogin','setUserInfor','setWorkStatus']),
          checkNumber(){
            if(this.stnumber.length!=11){
              this.number_error = true
              this.number_error_text = '请输入正确的学号！'
            }else{
              this.number_error = false
            }
          },checkPassword(){
            if(this.password==''){
              this.password_error = true
              this.password_error_text = "请输入密码"
            }else{
              this.password_error = false
            }
        },login(){
            var _this = this;
            this.checkPassword();
            this.checkNumber();
            this.logining = true;
            if(!this.password_error && !this.number_error){
              var login_data = {
                number:this.stnumber,
                password:this.password
              };
              this.$axios.post('/api/login',{data:login_data}).then(res=>{
                if(res.data.code==401){
                  this.password_error = true;
                  this.password_error_text = "密码错误或账号不存在"
                }else if(res.data.code===200){
                  var token = res.data.data.token;
                  this.changeLogin({Authorization:token});
                  this.setUserInfor({User:res.data.data.user});
                  this.setWorkStatus({Work:res.data.data.work});
                  this.$router.push('/');
                }
              }).catch(err=>{
                this.password_error = true
                this.password_error_text = "计时服务器崩坏"
              })
              this.logining = false;
            }else{
              this.logining = false;
              return false;
            }
        }
      }
    }
</script>

<style scoped>
  .error-tips{
    color:red
  }

  #loginbtn,#loading{
    margin-top: 20px;
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
