<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/lol.jpg">
    <img src="./assets/cat-vape.gif" alt="" >
    <HelloWorld msg="Welcome to My Api Tester"/>
    <CompOne/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompOne from './components/CompOne.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CompOne
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
