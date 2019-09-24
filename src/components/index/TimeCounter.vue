<template>
  <div>
    <div style="display: inline-block" id="Hours">{{getTimeString(time.hours)}}</div>
    <div style="display: inline-block" >:</div>
    <div style="display: inline-block" id="Minutes">{{getTimeString(time.minutus)}}</div>
    <div style="display: inline-block" >:</div>
    <div style="display: inline-block" id="Seconds">{{getTimeString(time.seconds)}}</div>
  </div>
</template>

<script>
    export default {
        name: "TimeCounter",
      data:function () {
        return{
          time:{
            hours:15,
            minutus:59,
            seconds:59
          }
        }
      },
      methods:{
          getTimeString:function(val){
            var t = 100+val;
            t = "" + t;
            t = t.slice(1,3);
            return t
        }
      },
      computed:{
          getHoursNumber(){
            return this.time.hours
          },
          getSecondsNumber(){
            return this.time.seconds
          },
          getMinutesNumber(){
            return this.time.minutus
        },
      },
      watch:{
        getMinutesNumber(val){
          if(val>=60){
            this.time.hours+=1
            this.time.minutus=0
          }
        },
        getSecondsNumber(val){
          if(val>=60){
            this.time.minutus+=1
            this.time.seconds=0
          }
        }
      },
      created(){
          var _this=this;
          setInterval(function () {
            _this.time.seconds+=1
          },1000)
      }
    }
</script>

<style>

</style>
