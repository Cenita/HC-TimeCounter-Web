<template>
  <div class="week_time mdui-row">
    <div class="hours mdui-col-xs-3" data-toggle="tooltip" data-placement="top" title="时（Hours）"><div class="hoursNums" ></div></div>
    <div class="dian mdui-col-xs-1">:</div>
    <div class="minutes mdui-col-xs-3" data-toggle="tooltip" data-placement="top" title="分（Minutes）"><div class="rq"><div class="minuetsNums"></div></div></div>
    <div class="dian mdui-col-xs-1">:</div>
    <div class="seconds mdui-col-xs-3" style="margin-right: 0px" data-toggle="tooltip" data-placement="top" title="秒（Seconds）"><div class="secondNums"></div></div>
  </div>
</template>

<script>
    export default {
        name: "TimeCounter"
    }
</script>

<style scoped>

</style>
