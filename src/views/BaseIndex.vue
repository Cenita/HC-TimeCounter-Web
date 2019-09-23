<template>
    <div>
      <narbar></narbar>
      <div style="min-height: 200px;margin-bottom: 50px;min-height: 550px">
        <div class="mdui-container">
          <div class="mdui-row main_body">
            <router-view/>
          </div>
        </div>
      </div>
      <inform style="margin-bottom: 0px"></inform>
    </div>
</template>

<script>
    import narbar from '@/components/Navbar'
    import inform from '@/components/foot'
    export default {
        name: "index",
        components:{
          narbar,
          inform
        }
    }
</script>

<style scoped>
  .main_body >*{
    margin-top: 50px;
  }
</style>
