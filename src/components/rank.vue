<template>
    <div class="mdui-table-fluid">
      <div class="mdui-container">
        <div class="mdui-tab">
          <a class="mdui-ripple mdui-tab-active">本周计时</a>
          <a class="mdui-ripple">两周计时</a>
          <a class="mdui-ripple">本月计时</a>
          <a class="mdui-ripple">本学期计时</a>
          <div class="mdui-tab-indicator" style="left: 0px; width: 112px;"></div>
        </div>
        <div style="padding: 20px">
          <table class="mdui-table">
            <thead>
              <tr>
                <th style="width: 10%">排行</th>
                <th style="text-align: center;width: 10%">姓名</th>
                <th >计时时间</th>
              </tr>
            </thead>
            <tbody>
              <item></item>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    import item from './rank_item'
    export default {
        name: "rank",
      components:{
          item
      }
    }
</script>

<style scoped>

</style>
