<template>
  <Sidebar class="height-fill"/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  background-image: url(./assets/img/train-wallpaper.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.height-fill{
  height: 100%;
}
</style>
