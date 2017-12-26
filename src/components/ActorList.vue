<template>
  <div>
  </div>
</template>
<script>
import {ActorsApi} from './http/ActorsApi';
export default {
  name: 'actor-list',
  data() {
    return {
      actors: []
    }
  },
  created() {
    ActorsApi.getActorsList.then(resp =>{
      console.log(resp)
    })
  }
}
</script>
