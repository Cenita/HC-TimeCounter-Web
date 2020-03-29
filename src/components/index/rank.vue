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
                <item v-for="user in list" :itemUser="user"></item>
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
          <div class="MemberType">
            <label class="mdui-radio">
              <input v-model="memberType" value="正式成员" type="radio" name="memberType"/>
              <i class="mdui-radio-icon"></i>
              正式成员
            </label>
            <label class="mdui-radio">
              <input v-model="memberType" value="待审核" type="radio" name="memberType"/>
              <i class="mdui-radio-icon"></i>
              考核成员
            </label>
            <label class="mdui-radio">
              <input v-model="memberType"  value="退休成员" type="radio" name="memberType"/>
              <i class="mdui-radio-icon"></i>
              退休成员
            </label>
          </div>
          <table class="mdui-table">
            <thead>
            <tr>
              <th style="width: 10%">排行</th>
              <th style="text-align: center;width: 10%">姓名</th>
              <th style="width: 80%">计时时间</th>
            </tr>
            </thead>
            <tbody>
              <item v-for="user in list" :itemUser="user" ></item>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    import item from './rank_item'
    import {timeList} from '../../api/web'
    var timeInterval;
    export default {
        name: "rank",
      data:function(){
          return {
            itemIndex:0,
            list:[],
            memberType:"正式成员",
          }
      },
      components:{
          item
      },
      computed:{
          getType:function () {
            return this.$store.state.Type;
          }
      },
      watch:{
          getType:function () {
            switch (this.$store.state.Type) {
              case "正式成员":
                this.itemIndex = 0;
                break;
              case "待考核":
                this.itemIndex = 1;
                break;
              case "退休成员":
                this.itemIndex = 2;
                break;
              default:
                this.itemIndex = 0;
                break;
            }
            this.memberType = this.$store.state.Type;
            this.choiceTime(this.itemIndex);
          },memberType:function () {
            this.choiceTime(this.itemIndex);
        }
      },
      methods:{
        choiceTime:function (index) {
          let _this = this;
          let now=new Date();
          let thisYear = now.getFullYear();
          let today = thisYear+'-'+(now.getMonth()+1)+'-'+now.getDate();
          _this.itemIndex = index;
          if(_this.memberType==='退休成员'){
            timeList({"type":4,"role":_this.memberType,'start_time':'2012-01-01','end_time':today,'start_grade':'2000','end_grade':thisYear}).then(res => {
              let dt = res.data;
              for(let a in dt)
              {
                dt[a].prograss = 100;
              }
              _this.list = dt;
            })
          }else{
            timeList({"type":_this.itemIndex,"role":_this.memberType}).then(res => {
              _this.list = res.data;
            })
          }
        }
      },
      mounted(){
          switch (this.$store.state.Type) {
            case "正式成员":
              this.itemIndex = 0;
              break;
            case "待考核":
              this.itemIndex = 1;
              break;
            case "退休成员":
              this.itemIndex = 2;
              break;
            default:
              this.itemIndex = 0;
              break;
          }
        let _this = this;
        this.memberType = this.$store.state.Type;
        this.choiceTime(this.itemIndex);
        timeInterval = setInterval(function () {
            _this.choiceTime(_this.itemIndex);
          },60000)
      },destroyed(){
          clearInterval(timeInterval)
      }
    }
</script>

<style scoped>
  .mdui-tab-active{
    border-bottom: 1px solid cornflowerblue;
  }
  .MemberType >*{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding-left: 25px;
  }
</style>
