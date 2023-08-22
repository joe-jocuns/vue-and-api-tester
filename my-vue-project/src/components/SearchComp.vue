<template>
  <div>
    <button @click="randoCard">Random Card</button>
    

  </div>
</template>

<script>
export default {
    methods:{
        randoCard(){
            this.$emit("rando-clicked")
        },
        saveCard(){
            this.$emit("card-saved")
        }
    }
//<button @click="saveCard">Save Card</button>
}
</script>

<style>
</style>