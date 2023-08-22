<template>
  <div>
    <SearchComp @rando-clicked="loadCard" />
    <div v-for="card in searchedCards" :key="card.name">
      <div :style="{ borderColor: card.bgColor }" id="bg" class="card-container">
        <img :src="card.imgUrl" id="img1" alt="" />
        <div id="cardInfo">
        <h1>{{ card.name }}</h1>
        <h2>Mana Cost:{{ card.mana_cost.replace(/[{}]/g, ' ')}}</h2>
        <h2>{{card.type_line}}</h2>
        <h2>{{card.oracle_text.replace(/[{}]/g, ' ')}}</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MtgService from "../services/MtgService";
import SearchComp from "./SearchComp.vue";

export default {
  components: {
    SearchComp,
  },
  data() {
    return {
      searchedCards: [],
      
      
    };
  },
  methods: {
    loadCard() {
      MtgService.GetRandomCard().then((response) => {
        const card = {
          name: "",
          colorIdent: [],
          colors: [],
          bgColor: "",
          imgUrl: "",
          mana_cost: "",
          cmc: "",
          type_line: "",
          oracle_text: "",
          set_name: "",
          keywords: [],
        };
        card.name = response.data.name;
        card.colorIdent = response.data.colors;
        card.bgColor = this.bgColorSelector(response.data.colors);
        card.imgUrl = response.data.image_uris.border_crop;
        card.cmc = response.data.cmc;
        card.mana_cost = response.data.mana_cost;
        card.type_line = response.data.type_line;
        card.oracle_text = response.data.oracle_text;
        card.set_name = response.data.set_name;
        card.keywords = response.data.keywords;
        this.searchedCards.unshift(card)
      });
    },
    saveCard() {
      //this.$store.mutations.addCardToSaved(state,this.card)
    },
    bgColorSelector(colorIdent) {
      switch (colorIdent[0]) {
        case "G":
          return "rgb(0,115,62)";
        case "U":
          return "rgb(14,104,171)";
        case "R":
          return "rgb(211,32,42)";
        case "B":
          return "rgb(21, 11, 0)";
        case "W":
          return "rgb(211,211,211)";
        default:
          return "rgb(192,192,192)";
      }
    },
  },
};
</script>

<style>
#bg {
  border-style: solid;
  border-width: 2em;
  background: rgb(23, 18, 15);
}
h1,
h2 {
  color: aliceblue;
  text-decoration: none;
}
.card-container {
  display: flex;
}
#cardInfo{
  padding: 1rem;
}

</style>
