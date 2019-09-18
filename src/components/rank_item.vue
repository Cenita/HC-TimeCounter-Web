<template>
    <tr>
      <td>{{index}}</td>
      <td>
        <div class="mdui-chip" style="background: white">
          <img class="mdui-chip-icon" src="../assets/image/默认头像-男.jpg">
          <span class="mdui-chip-title">{{name}}</span>
        </div>
      </td>
      <td>
        <div class="progress mdui-ripple" data-toggle="tooltip" data-placement="top" title="" style="margin-bottom: 0px;height: 30px;line-height: 30px;" :data-original-title="time_string">
          <div class="progress-bar  progress-bar-danger active" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" :style="barwidth_string">
            <span style="line-height: 30px">{{time_string}}</span>
          </div>
        </div>
      </td>
    </tr>
</template>

<script>
    export default {
        name: "rank_item",
      data:function () {
        return {
          index:1,
          img_src:"../assets/image/默认头像-男.jpg",
          name:"陈慧涛",
          time_string:"1000s",
          barwidth:15,
        }
      },
      computed:{
          barwidth_string:function () {
            return 'width:'+this.barwidth+'%'
          }
      }
    }
</script>

<style scoped>

</style>
