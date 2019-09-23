<template>
    <div>
      <div>
        <router-link to="/login" >
          <i class="mdui-icon material-icons">arrow_back</i><span>返回登录</span>
        </router-link>
      </div>
      <h3 style="margin-top: 20px">
        忘记密码
      </h3>
      <div v-if="nextStep.step==0" class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':number.error,'mdui-textfield-focus':number.text}">
        <label class="mdui-textfield-label">请输入你的学号</label>
        <input class="mdui-textfield-input" v-model="number.text" @blur="checkNumber" type="number" name="number"/>
        <label v-if="number.error" class="error-tips">{{number.error_text}}</label>
      </div>
      <div v-if="nextStep.step==1">
        <div v-if="nextStep.step==1" class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':code.error,'mdui-textfield-focus':code.text}">
          <label class="mdui-textfield-label">请输入邮箱内的验证码</label>
          <input @click="sendEmail" class="mdui-textfield-input" v-model="code.text"  type="number" name="code"/>
          <label v-if="code.error" class="error-tips">{{code.error_text}}</label>
          <div>
            <button v-if="code.send_string!=''" style="margin-top: 20px;margin-bottom: 20px;" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-red mdui-color-blue-600">{{code.send_string}}</button>
          </div>
        </div>
        <span v-if="code.send_string!=''">
          验证码邮件已经发送请输入识别码
        </span>
      </div>
      <div v-if="nextStep.step==2">
        <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':password.error,'mdui-textfield-focus':password.text}">
          <label class="mdui-textfield-label">请输入新密码</label>
          <input class="mdui-textfield-input" v-model="password.text" @blur="checkPassword" type="password" name="password"/>
          <label v-if="password.error" class="error-tips">密码必须大于6位</label>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':comfirmPassword.error,'mdui-textfield-focus':comfirmPassword.text}">
          <label class="mdui-textfield-label">确认新密码</label>
          <input class="mdui-textfield-input" v-model="comfirmPassword.text" @blur="checkComfirm" type="password" name="comfirmpassword" />
          <label v-if="comfirmPassword.error" class="error-tips">两次密码不一致</label>
        </div>
      </div>
      <div v-if="nextStep.step==3">
        <span>重置密码成功，点击下一步跳转到登录页面</span>
      </div>
      <button v-if="nextStep.status==0" type="button" @keyup.enter="next"  @click="next" id="loginbtn" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-blue-600">下一步</button>
      <div class="mdui-progress" style="margin-top: 40px" v-if="nextStep.status==1">
        <div class="mdui-progress-indeterminate"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Forget"
      ,data:function () {
        return{
          number:{
            error:'',
            text:'',
            error_text:'请输入正确的学号！',
            show:true
          },
          nextStep:{
            step:0,
            status:0
          },
          code:{
            error:'',
            text:'',
            error_text:'请输入验证码',
            show:false,
            send:false,
            email_time:0,
            send_string:""
          },password:{
            error:false,
            text:""
          },
          comfirmPassword:{
            error:false,
            text:""
          },
        }
      }
      ,
      methods:{
        checkNumber(){
          if(this.number.text.length!=11){
            this.number.error=true
          }else{
            this.number.error=false
          }
        },
        next(){
          if(this.nextStep.step==0){
            this.checkNumber();
            if(this.number.error){
              return;
            }
            this.nextStep.step=1;
            this.sendEmail()
          }else if(this.nextStep.step==1){
            this.checkCode()
            if(this.code.error){
              return;
            }
            this.nextStep.step=2
          }else if(this.nextStep.step==2){
            this.checkPassword()
            this.checkComfirm()
            if(this.password.error||this.comfirmPassword.error){
              return;
            }
            this.nextStep.step=3
          }else if(this.nextStep.step==3){
            this.$router.push({path:'/login'})
          }
        },
        sendEmail(){
          if(this.code.email_time==0){
            var _this = this;
            this.code.email_time=60
            _this.code.send_string = "已经发送邮件，请查收(60)"
            var count = setInterval(function () {
              _this.code.email_time-=1
              _this.code.send_string = "已经发送邮件，请查收("+_this.code.email_time+")"
              if(_this.code.email_time==0){
                _this.code.send_string = "重新发送";
                clearInterval(count)
              }
            },1000)
          }else{

          }
        },
        checkCode(){
          if(this.code.text==''){
            this.code.error=true
          }else{
            this.code.error=false
          }
        },checkPassword(){
          if(this.password.text.length<6){
            this.password.error=true
          }else{
            this.password.error=false
          }
        },
        checkComfirm(){
          if(this.password.text!=this.comfirmPassword.text){
            this.comfirmPassword.error=true
          }else{
            this.comfirmPassword.error=false
          }
        },
      }
    }
</script>

<style scoped>
  #loginbtn,#loading{
    margin-top: 20px;
    width: 100%;
    height: 50px;
  }
  .error-tips{
    color:red
  }
</style>
