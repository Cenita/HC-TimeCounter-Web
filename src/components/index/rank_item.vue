<template>
    <tr>
      <td>{{index}}</td>
      <td>
        <div class="mdui-chip" style="background: white">
          <img class="mdui-chip-icon" src="../../assets/image/men.jpg">
          <span class="mdui-chip-title">{{name}}</span>
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
      data:function () {
        return {
          index:1,
          img_src:"../assets/image/men.jpg",
          name:"陈慧涛",
          bar:{
            time_string:'0分钟',
            length:70,
            run:false
          }
        }
      },
      computed:{
          variant:function () {
            if(this.bar.length<=62.3){
              return 'danger'
            }else if(this.bar.length<100){
              return 'info'
            }else{
              return 'success'
            }
          }
      }
    }
</script>

<style scoped>
  .mdui-ripple:hover{
    cursor: pointer;
  }
</style>
