<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Nav,Footer
  }
}
</script>

<style>

</style>
