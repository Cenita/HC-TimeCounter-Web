<template>
    <div>
      <label class="mdui-checkbox">
        <input type="checkbox" disabled :checked="checkset"/>
        <i class="mdui-checkbox-icon"></i>
        <span :class="classset">
          {{infor_text}}
        </span>
      </label>
    </div>
</template>

<script>
    export default {
        name: "ServerStatus",
      data:function () {
        return {
          infor_text:"计时服务正常运行",
          checkset:true,
          classset:"",
          status:true
        }
      },
      methods:{
          setFalse:function () {
            var _this = this;
            this.infor_text = "计时服务异常，请联系管理员解决";
            this.classset = "setColorRed";
            this.checkset = false
          },
          setTrue:function () {
            this.infor_text = "计时服务正常运行";
            this.classset = "";
            this.checkset = true
          },
          toggle:function () {
            if(this.status){
              this.setFalse()
              this.status = !this.status
            }
            else{
              this.setTrue()
              this.status = !this.status
            }
          }
      }
    }
</script>

<style scoped>
  .setColorRed{
    color: #ff0a13 !important;
  }
</style>
