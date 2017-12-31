<template>
  <div id="app">
    <div class="container">
      <div class='row'>
        <div class='col'>
          <actor-form></actor-form>
        </div>
      </div>
      <div class='row'>
        <div class='col'>
          <actor-list></actor-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ActorList from './components/ActorList.vue';
import ActorForm from './components/ActorForm.vue';
@Component({
    components: {
    ActorList,
    // ActorForm
  }
})
export default class App extends Vue{

  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
