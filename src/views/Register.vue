<template>
    <div style="margin-top: -30px;">
      <div>
        <router-link to="/login" >
          <i class="mdui-icon material-icons">arrow_back</i><span>返回登录</span>
        </router-link>
      </div>
      <h3 style="margin-top: 20px">
        注册账号
      </h3>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':number.error,'mdui-textfield-focus':number.text}">
        <label class="mdui-textfield-label">学号</label>
        <input class="mdui-textfield-input" v-model="number.text" @blur="checkNumber" type="number" name="stdNumber" id="stdNumber"/>
        <label v-if="number.error" class="error-tips">请输入正确的学号！</label>
      </div>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':name.error,'mdui-textfield-focus':name.text}">
        <label class="mdui-textfield-label">姓名</label>
        <input class="mdui-textfield-input" v-model="name.text" @blur="checkName" type="text" name="name"/>
        <label v-if="name.error" class="error-tips">请输入姓名</label>
      </div>
      <!--<div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':email.error,'mdui-textfield-focus':email.text}">-->
        <!--<label class="mdui-textfield-label">邮箱</label>-->
        <!--<input class="mdui-textfield-input" v-model="email.text" @blur="checkEmail" type="text" name="email"/>-->
        <!--<label v-if="email.error" class="error-tips">请输入正确的邮箱格式</label>-->
      <!--</div>-->
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':password.error,'mdui-textfield-focus':password.text}">
        <label class="mdui-textfield-label">密码</label>
        <input class="mdui-textfield-input" v-model="password.text" @blur="checkPassword" type="password" name="password"/>
        <label v-if="password.error" class="error-tips">密码必须大于6位</label>
      </div>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':comfirmPassword.error,'mdui-textfield-focus':comfirmPassword.text}">
        <label class="mdui-textfield-label">确认密码</label>
        <input class="mdui-textfield-input" v-model="comfirmPassword.text" @blur="checkComfirm" type="password" name="comfirmpassword" />
        <label v-if="comfirmPassword.error" class="error-tips">两次密码不一致</label>
      </div>
      <div class="mdui-textfield mdui-textfield-floating-label" :class="{'mdui-textfield-invalid':code.error,'mdui-textfield-focus':code.text}">
        <label class="mdui-textfield-label">注册码(请联系管理员给予)</label>
        <input class="mdui-textfield-input" v-model="code.text" @blur="checkCode" type="text" name="code"/>
        <label v-if="code.error" class="error-tips">注册码不正确请联系管理员给予注册码</label>
      </div>
      <div style="margin-bottom: 0px;margin-top: 20px">
        <div style="margin-bottom: 20px">
          <span>
            选择性别
          </span>
        </div>
        <label class="mdui-radio" style="margin-left: 20px">
          <input type="radio" v-model="sex.val" value="男" @click="sex.select=0" name="sex" :checked="sex.select==0"/>
          <i class="mdui-radio-icon"></i>
          男生
        </label>
        <label class="mdui-radio" style="margin-left: 20px">
          <input type="radio" v-model="sex.val" value="女" @click="sex.select=1" name="sex" :checked="sex.select==1"/>
          <i class="mdui-radio-icon"></i>
          女生
        </label>
      </div>
      <div>
        <div style="margin-bottom: 20px;margin-top: 20px">
          <span>
            选择年级
          </span>
        </div>
        <label class="mdui-radio" style="margin-left: 20px">
          <input type="radio" value="0" v-model="grade.val" @click="grade.select=0" name="grade" :checked="grade.select==0"/>
          <i class="mdui-radio-icon" ></i>
          {{grade.one}}
        </label>
        <label class="mdui-radio" style="margin-left: 20px">
          <input type="radio" value="1" v-model="grade.val"  @click="grade.select=1" name="grade" :checked="grade.select==1"/>
          <i class="mdui-radio-icon"></i>
          {{grade.two}}
        </label>
      </div>
      <button v-if="register.status==0" type="button" @keyup.enter="regist"  @click="regist" id="register_bottom" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-red mdui-color-blue-600">注册</button>
      <div class="mdui-progress" style="margin-top: 40px" v-if="register.status==1">
        <div class="mdui-progress-indeterminate"></div>
      </div>
    </div>
</template>

<script>
    import {getGrade,sendRegiter} from "../api/web";
    import {Toast} from 'mint-ui'
    export default {
        name: "register",
      data:function () {
        return{
          grade:{
            one:"",
            two:""
          },
          number:{
            error:false,
            text:""
          },
          name:{
            error:false,
            text:""
          },
          email:{
            error:false,
            text:""
          },
          password:{
            error:false,
            text:""
          },
          comfirmPassword:{
            error:false,
            text:""
          },
          code:{
            error:false,
            text:""
          },
          sex:{
            select:0,
            val:"男"
          },
          grade:{
            select:0,
            val:0
          },
          register:{
            status:0 //0是按钮，1是登录
          }
        }
      },
      mounted(){
          var _this = this;
          getGrade().then(res=>{
            _this.grade.one = res.data[0].toString()+' 级';
            _this.grade.two = res.data[1].toString()+' 级';
          })

      },
      computed:{
        canRegister:function () {
          return (!this.number.error && !this.name.error && !this.email.error && !this.password.error
          && !this.comfirmPassword.error && !this.code.error);
        }
      },
      methods:{
        checkNumber(){
          if(this.number.text.length!=11){
            this.number.error=true
          }else{
            this.number.error=false
          }
        },
        checkName(){
          if(this.name.text==""){
            this.name.error=true
          }else{
            this.name.error=false
          }
        },
        checkPassword(){
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
        checkCode(){
          this.code.error=false
        },
        regist(){
          this.checkNumber()
          this.checkPassword()
          this.checkCode()
          this.checkComfirm()
          this.checkName()
          var register_data;
          if (this.canRegister) {
            var _this = this;
            this.register.status = 1
            register_data = {
              "stdNumber": _this.number.text,
              "stdName": _this.name.text,
              "password": _this.password.text,
              "code": _this.code.text,
              "sex": _this.sex.val,
              "grade": _this.grade.val
            };
            sendRegiter(register_data).then(res => {
              Toast({
                message: res.data
              });
              if(res.data==='注册成功'){
                _this.$router.push('/login')
              }else{
                if(res.data==='账号已经存在'){
                  _this.number.error=true
                }else if(res.data==='姓名已经存在'){
                  _this.name.error=true
                }else if(res.data==='验证码错误'){
                  _this.code.error=true
                }
              }
              _this.register.status = 0
            })
          } else {
            return;
          }
        }
      }
    }
</script>

<style scoped>
  #register_bottom{
    margin-top: 20px;
    width: 100%;
    height: 50px;
  }
  .error-tips{
    color:red
  }
</style>
