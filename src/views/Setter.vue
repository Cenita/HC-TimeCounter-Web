<template>
  <div>
    <h1>你好，{{name}}！</h1>
    <h4 style="color: darkgrey">很高兴在环创遇见你，在环创大家庭里希望大家能遵守属于环创的“家规”。</h4>
    <p>&nbsp</p>
    <h4 style="color: darkgrey">环创计时制度：在一周内24小时为优秀，15小时以上为及格，15小时以下会做出相应惩罚，连续4星期计时优秀将会予以相应的奖励。</h4>
    <h4 style="color: darkgrey">计时制度适用时间：学期间2-15周</h4>
    <p style="color: darkgrey">以下有MAC地址查询教程</p>
    <p>
      <a href="https://jingyan.baidu.com/article/adc81513591780f722bf7374.html" target="_blank">win10系统</a>
      <a href="https://jingyan.baidu.com/article/2d5afd69f105b985a2e28e20.html" target="_blank">IOS系统</a>
      <a href="https://jingyan.baidu.com/article/fcb5aff77459e2edab4a7177.html" target="_blank">安卓系统</a>
    </p>
    <h4 style="color: darkgrey">请各位小伙伴请填写常用设备的网络MAC地址，设备连接工作室WIFI后即可自动开始计时,无需打开网页</h4>
    <div class="mdui-textfield mdui-textfield-floating-label" id="mobile">
      <label class="mdui-textfield-label">手机Mac地址填写(例如  94:87:E0:31:6B:75  的格式)</label>
      <input class="mdui-textfield-input" type="text" name="mobile_mac" id="mobile_macString"/>
      <div class="mdui-textfield-error errorContent">mac不能为空</div>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label" id="computer">
      <label class="mdui-textfield-label">电脑Mac地址填写(例如  94:87:E0:31:6B:75  的格式)</label>
      <input class="mdui-textfield-input" type="text" name="computer_mac" id="computer_macString"/>
      <div class="mdui-textfield-error errorContent">mac不能为空</div>
    </div>
    <button type="button" style="margin-top: 20px" id="loginbtn" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-blue-600">保存</button>
  </div>
</template>

<script>
    export default {
        name: "Setter",
      data:function () {
        return {
          name:'陈慧涛',
        }
      }
    }
</script>

<style scoped>

</style>
