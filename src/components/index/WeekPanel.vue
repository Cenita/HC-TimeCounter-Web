<template>
    <div>
        <div class="mdui-table-fluid">
          <div class="mdui-container">
            <div class="mdui-tab" mdui-tab>
              <a class="mdui-ripple mdui-tab-active">本周计时图</a>
            </div>
            <div id="example2" class="mdui-p-a-2">
              <week_graphy></week_graphy>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    const week_graphy = () => import('./WeekGraphy');
    export default {
        name: "WeekGraphy",
      components:{
        week_graphy
      }
    }
</script>

<style scoped>
  .mdui-tab-active{
    border-bottom: 1px solid cornflowerblue;
  }
</style>
