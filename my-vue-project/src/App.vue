<template>
  <div id="app">
    <HelloWorld msg="Welcome to My Front End For The"/>
    <MtgComp/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MtgComp from './components/MtgComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MtgComp,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
