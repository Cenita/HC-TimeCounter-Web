<template>
    <div>
      <narbar></narbar>
      <div style="min-height: 200px">
        <router-view/>
      </div>
      <footer_inform style="margin-bottom: 0px"></footer_inform>
    </div>
</template>

<script>
    import narbar from '../components/Navbar'
    import footer_inform from '../components/footer'
    export default {
        name: "index",
        components:{
          narbar,
          footer_inform
        }
    }
</script>

<style scoped>

</style>
