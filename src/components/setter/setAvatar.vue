<template>
    <div style="margin: 20px 0px;text-align: center">
      <div style="border-radius: 100%;margin-top: 70px;margin-bottom: 70px;">
        <div @click="click" class="mengban" @mouseenter="enter" @mouseleave="leave" v-if="mouseIn">
          <h5 style="line-height: 200px;">
            点击上传头像
          </h5>
        </div>
        <div @click="click" style="border-radius: 100%;width: 200px;margin: auto" @mouseenter="enter" @mouseleave="leave" >
          <img @click="click" style="border-radius: 100%;width: 200px;height: 200px;" :src="asrc" alt="">
        </div>
        <h5 style="margin-top: 50px;color: #b0bec5">
          点击头像上传头像
        </h5>
      </div>
      <div v-if="uploadding==true" class="mdui-progress" style="margin-top: 40px">
        <div class="mdui-progress-indeterminate"></div>
      </div>
      <form action="" hidden>
        <input ref="uploadInput" @change="upload" id="fileUpload" type="file" accept="image/*">
      </form>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import {setAvatar} from "../../api/web";
    export default {
        name: "upload_image",
      data:function () {
        return {
          mouseIn:true,
          uploadding:false,
          asrc:this.$url+this.$store.state.Avatar
        }
      },
      methods:{
          enter:function () {
            this.mouseIn=true
          },leave:function () {
            this.mouseIn=false
          },click:function () {
            document.getElementById('fileUpload').click()
        },upload:function () {
          let formData = new FormData();
          let file = this.$refs.uploadInput.files[0];
          let size;
          formData.append('file',file,file.name);
          size = file.size/(1024*1024);
          Toast({
            message:"图片上传中"
          })
          this.uploadding=true
          if(size>1){
            Toast({
              message:"上传的图片不能大于1M"
            })
            this.uploadding=false;
          }else{
            setAvatar(formData).then(
              res=>{
                Toast({
                  message:"图片上传完成"
                });
                this.uploadding=false;
                this.asrc = this.$url+res.data
              }
            ).catch(res=>{
              Toast({
                message:"超时"
              });
              this.uploadding=false;
            })
          }
        }
      }
    }
</script>

<style scoped>
  .mengban:hover,img:hover{
    cursor: pointer;
  }
  .mengban{
    background: white;
    opacity: 0.5;
    border-radius: 100%;
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 100;
  }
</style>
