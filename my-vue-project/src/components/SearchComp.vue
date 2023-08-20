<template>
  <div>
    <button @click="randoCard">click me</button>

  </div>
</template>

<script>
export default {
    methods:{
        randoCard(){
            this.$emit("rando-clicked")
        }
    }

}
</script>

<style>

</style>