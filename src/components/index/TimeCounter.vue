<template>
  <div style="font-size: 40px;color: #55c0df;">
    <div style="display: inline-block" id="Hours">{{getTimeString(time.hours)}}</div>
    <div style="display: inline-block" >:</div>
    <div style="display: inline-block" id="Minutes">{{getTimeString(time.minutus)}}</div>
    <div style="display: inline-block" >:</div>
    <div style="display: inline-block" id="Seconds">{{getTimeString(time.seconds)}}</div>
  </div>
</template>

<script>
  var interVal;
    export default {
        name: "TimeCounter",
      data:function () {
        return{
          time:{
            hours:Number(this.$store.state.Time.Hours),
            minutus:Number(this.$store.state.Time.Minutes),
            seconds:Number(this.$store.state.Time.Seconds)
          },
          run:false
        }
      },
      methods:{
          getTimeString:function(val){
            var t = 100+val;
            t = "" + t;
            t = t.slice(1,3);
            return t
        },stopInterval:function () {
          clearInterval(interVal)
        },runInterval:function () {
            var _this = this;
          interVal = setInterval(function () {
            _this.time.seconds+=1
          },1000)
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
        },getUserWork(){
            return this.$store.state.UserInRoom
        },getGlobalMinutes(){
            return Number(this.$store.state.Time.Minutes)
        },getGlobalSeconds(){
          return Number(this.$store.state.Time.Seconds)
        },getGlobalHours(){
          return Number(this.$store.state.Time.Hours)
        }
      },
      watch:{
        getGlobalMinutes(){
          this.time.minutus = Number(this.$store.state.Time.Minutes)
        },
        getGlobalSeconds(){
          this.time.seconds = Number(this.$store.state.Time.Seconds)
        },
        getGlobalHours(){
          this.time.hours = Number(this.$store.state.Time.Hours)
        },
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
        },getUserWork(val){
          this.run = val;
        },run:function () {
          if(this.run){
            this.runInterval()
          }else{
            this.stopInterval()
          }
        }
      },
      created(){
          var _this=this;
          if(this.$store.state.UserInRoom){
            this.run = true
          }
      }
    }
</script>

<style>

</style>
