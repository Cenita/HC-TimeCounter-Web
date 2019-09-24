<template>
    <div>
      <div class="wave-box">
        <div class="marquee-box marquee-up" id="marquee-box">
          <div class="marquee">
            <div class="wave-list-box" id="wave-list-box1">
              <ul>
                <li>
                  <img height="60" alt="波浪" src="../assets/image/wave_02.png">
                </li>
              </ul>
            </div>
            <div class="wave-list-box" id="wave-list-box2">
              <ul>
                <li>
                  <img height="60" alt="波浪" src="../assets/image/wave_02.png">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="marquee-box" id="marquee-box3">
          <div class="marquee">
            <div class="wave-list-box" id="wave-list-box4">
              <ul>
                <li>
                  <img height="60" alt="波浪" src="../assets/image/wave_01.png">
                </li>
              </ul>
            </div>
            <div class="wave-list-box" id="wave-list-box5">
              <ul>
                <li>
                  <img height="60" alt="波浪" src="../assets/image/wave_01.png">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="show" class="content" style="color: white;text-align: center">
        <div class="introduce">
          <p>开发人员简介</p>
          <div>&nbsp</div>
          <p>新计时器系统</p>
          <p>前端，后端，UI设计，爬虫：陈慧涛</p>
          <p>服务器配置：陆仁东</p>
          <p>&nbsp</p>
          <p>旧计时器客户端版本</p>
          <p>客户端：陈潼生，张晓煌</p>
          <p>服务端：邹峰</p>
          <p>UI：刘毓奔</p>
          <p>1.4版本修改：林伟城，何家良</p>
          <p>2.0版本修改：杨容光</p>
          <div>&nbsp</div>
          <p>真诚的感谢所有为工作室奉献过的人</p>
          <p>有你们工作室因此更美好</p>
          <div>&nbsp</div>
          <p>备案号</p>
          <p>粤ICP备14046782号 © 2017 HCLAB since 1999. All rights reserved</p>
          <div>&nbsp</div>
          <p>相关链接</p>
          <p style="margin-bottom: 0px"><a href="http://www.hclab.com">工作室官网</a></p>
        </div>
      </div>
      <div v-else class="content" style="color: white;text-align: center;">

        <p>粤ICP备14046782号 © 2017 HCLAB since 1999. All rights reserved</p>
        <p>相关链接</p>
        <p style="margin-bottom: 0px"><a href="http://www.hclab.com">工作室官网</a></p>
        <div class="mdui-hidden-md-up">
          <status></status>
        </div>
      </div>
    </div>
</template>

<script>
  const status = () => import ('./nav/ServerStatus');


    import $ from 'jquery'
    export default {
        name: "foot",
      data:function () {
        return {
          show:false
        }
      },
      components:{
          status
      }
    }
    $(
      function () {
        var marqueeScroll = function(id1, id2, id3, timer) {
          var $parent = $("#" + id1);
          var $goal = $("#" + id2);
          var $closegoal = $("#" + id3);
          $closegoal.html($goal.html());
          function Marquee() {
            if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
              $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
            } else {
              $parent.scrollLeft($parent.scrollLeft() + 1);
            }
          }
          setInterval(Marquee, timer);
        }
        var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
        var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
      }
    )
</script>

<style scoped>
  .content{
    padding: 50px 0;
    background: rgb(0,159,217) !important;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none
  }
  img {
    border: 0px;
  }
  .marquee-box {
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0
  }
  .marquee {
    width: 8000%;
    height: 60px
  }
  .wave-list-box {
    float: left
  }
  .wave-list-box ul {
    float: left;
    height: 60px;
    overflow: hidden;
    zoom: 1
  }
  .wave-list-box ul li {
    height: 60px;
    width: 100%;
    float: left;
    line-height: 30px;
    list-style: none
  }
  .wave-box {
    position: relative;
    height: 59px;
  }

</style>
