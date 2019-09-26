<template>
  <div class="status">
    <i :style="{color:status_color}" class="mdui-icon material-icons" id="run_icon"  data-toggle="tooltip" data-placement="top"  style="font-size: 50px;">{{icon_name}}</i>
  </div>
</template>

<script>
    export default {
        name: "StatusIcon",
        data:function () {
          return {
            status:0//1是停止 0是正常
          }
        },
        computed:{
          icon_name(){
            if(this.status==0){
              return 'directions_run'
            }else if(this.status==1){
              return 'priority_high'
            }
          },status_color(){
            if(this.status==0){
              return '#00bfa5'
            }else if(this.status==1){
              return 'red'
            }
          }
        },
      created(){
          if(this.$store.state.UserInRoom){
            this.status=0;
          }else{
            this.status=1;
          }
      }
    }
</script>

<style scoped>

</style>
