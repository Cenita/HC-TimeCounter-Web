<template>
  <tr>
    <td>{{itemUser.num}}</td>
    <td>
      <div class="mdui-chip" style="background: white">
        <img class="mdui-chip-icon" src="../../assets/image/men.jpg">
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
          img_src:"../assets/image/men.jpg",
          bar:{
            time_string:this.itemUser.time,
            length:this.itemUser.prograss>=20?this.itemUser.prograss:20,
            run:this.itemUser.isInTheRoom=='Y'?true:false
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
            return this.itemUser.time;
        },
        run:function () {
          return this.itemUser.isInTheRoom=='Y'?true:false
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
      }
    }
    }
</script>

<style scoped>
  .mdui-ripple:hover{
    cursor: pointer;
  }
</style>
