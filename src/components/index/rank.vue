<template>
    <div>
      <div class="mdui-table-fluid mdui-hidden-sm-down">
        <div class="mdui-container">
          <div class="mdui-tab">
            <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==0}" @click="choiceTime(0)">本周计时</a>
            <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==1}" @click="choiceTime(1)">两周计时</a>
            <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==2}" @click="choiceTime(2)">本月计时</a>
            <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==3}" @click="choiceTime(3)">本学期计时</a>
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
      <div class="mdui-hidden-md-up" style="margin-top: -50px;">
        <div class="mdui-tab">
          <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==0}" @click="choiceTime(0)">本周计时</a>
          <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==1}" @click="choiceTime(1)">两周计时</a>
          <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==2}" @click="choiceTime(2)">本月计时</a>
          <a class="mdui-ripple" :class="{'mdui-tab-active':itemIndex==3}" @click="choiceTime(3)">本学期计时</a>
        </div>
        <div>
          <table class="mdui-table">
            <thead>
            <tr>
              <th style="width: 10%">排行</th>
              <th style="text-align: center;width: 10%">姓名</th>
              <th style="width: 80%">计时时间</th>
            </tr>
            </thead>
            <tbody>
              <item v-for="user in list" :itemUser="user"></item>
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
      data:function(){
          return {
            itemIndex:0,
            list:[]
          }
      },
      components:{
          item
      },
      methods:{
        choiceTime:function (index) {
          let _this = this;
          this.itemIndex = index;
          this.$axios.get('/api/getUserTime?type='+index).then(res => {
            _this.list = res.data;
          })
        }
      },
      created(){
          let _this = this;
          this.$axios.get('/api/getUserTime').then(res => {
            _this.list = res.data;
          })
      }
    }
</script>

<style scoped>
  .mdui-tab-active{
    border-bottom: 1px solid cornflowerblue;
  }
</style>
