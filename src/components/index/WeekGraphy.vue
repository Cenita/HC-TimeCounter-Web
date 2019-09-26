<template>
    <div>
      <div class="mdui-hidden-md-up" style="height: 60px;text-align: center;font-size: 20px;color: #00b0ff;font-family: 'Microsoft YaHei UI';font-weight: 800">本周计时图</div>
      <div id="week_graphy" class="mdui-col-xs-12"  style="margin-top: -40px;height:400px"></div>
    </div>
</template>

<script>
  var echarts = require('echarts/lib/echarts');
  require("echarts/lib/chart/heatmap");
  require("echarts/lib/component/grid");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/visualMap");
  var hours = ['8','9','10','11','12',
    '13','14','15','16','17','18','19','20','21','22','23'];
  var days = ['周日', '周六', '周五',
    '周四', '周三', '周二', '周一'];
    export default {
      name: "Week",
      mounted(){
        var myChart = echarts.init(document.getElementById('week_graphy'));
        this.$axios.get('/api/getMap').then(res=>{
          if(res.data.code==401){
            this.$router.push('/login');
            return ;
          }else if(res.data.code===200){
            var gdata = res.data.data.map
            gdata = gdata.map(function (item) {
              return [item[1], item[0], item[2] || '-'];
            });
            myChart.setOption({
              tooltip: {
                position: 'top'
              },
              xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                  show: true
                }
              },
              yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                  show: true
                }
              },
              visualMap: {
                min: 0,
                max: 60,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top:'0',
                show:false
              },
              series: [{
                name: '计时（分钟）',
                type: 'heatmap',
                data:gdata,
                label: {
                  normal: {
                    show: true
                  }
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                  },
                }
              }]
            });
          }
        });


      }
    }
</script>

<style scoped>

</style>
