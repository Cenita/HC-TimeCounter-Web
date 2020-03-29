<template>
  <tr>
    <td>{{itemUser.num}}</td>
    <td>
      <div class="mdui-chip mdui-ripple" v-b-tooltip.hover :title="itemUser.grade" style="background: white;">
        <img class="mdui-chip-icon" :src="src">
        <span class="mdui-chip-title">{{itemUser.name}}</span>
      </div>
    </td>
    <td>
      <b-progress class="mdui-ripple" v-b-tooltip.hover :title="bar.time_string" :max="100"  :variant="variant" :striped="bar.run" :animated="bar.run" style="height: 30px">
        <b-progress-bar :value="bar.length" style="" >{{bar.time_string}}</b-progress-bar>
      </b-progress>
    </td>
  </tr>
</template>

<script>

  export default {
        name: "rank_item",
      props: ['itemUser'],
      data:function () {
        return {
          sex:this.itemUser.sex,
          src:this.$url+this.itemUser.avatar_path,
          bar:{
            time_string:this.itemUser.time.hours+"小时"+this.itemUser.time.minutes+'分钟',
            length:this.itemUser.prograss>=20?this.itemUser.prograss:20,
            run:this.itemUser.isInTheRoom
          }
        }
      },

      computed:{
          variant:function () {
            if(this.run){
              return 'warning'
            }
            if(this.bar.length<=62.3){
              return 'danger'
            }else if(this.bar.length<100){
              return 'info'
            }else{
              return 'success'
            }
          },
          prograsss:function(){
            return this.itemUser.prograss>=20?this.itemUser.prograss:20;
          },
          time_string:function () {
            return this.itemUser.time.hours+"小时"+this.itemUser.time.minutes+'分钟';
        },
        run:function () {
          return this.itemUser.isInTheRoom
        },
        head_path:function () {
          return this.itemUser.avatar_path
        }
      },
    watch:{
      prograsss(){
        this.bar.length=this.prograsss;
      },
      time_string(){
        this.bar.time_string=this.time_string;
      },
      run(){
        this.bar.run = this.run;
      },
      head_path(){
        this.sex = this.itemUser.sex
        this.src = this.$url+this.itemUser.avatar_path
      }
    }
    }
</script>

<style scoped>
  .mdui-ripple:hover{
    cursor: pointer;

  }
</style>
