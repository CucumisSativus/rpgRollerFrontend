<template>
  <form>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input v-model="name" class="form-control" id="inputPassword" placeholder="Password">
      </div>
    </div>
    <div class="form-group row" v-for="input of inputs" v-bind:key="input">
      <label for="`input-${input}`" class="col-sm-2 col-form-label">{{input}}</label>
      <div class="col-sm-10">
        <input v-model="hp" class="form-control" id="`input-${input}`">
      </div>
    </div>
  </form>
</template>
<script>
const ActorForm = Vue.extend({
  components: [
  ],
  name: 'actor-form',
  data(){
    return {
      id: null,
      name: null,
      hp: null,
      weaponSkill: 0,
      ballisticSkill: 0,
      strength: 0,
      toughness: 0,
      agility: 0,
      intelligence: 0,
      perception: 0,
      willPower: 0,
      fellowship: 0,
      influence: 0,

      inputs: ["hp", "weaponSkill", "ballisticSkill", "strength", "toughness", "agility",
        "intelligence", "perception", "willPower", "fellowship", "influence"]
    }
  }
})

export default ActorForm
</script>
