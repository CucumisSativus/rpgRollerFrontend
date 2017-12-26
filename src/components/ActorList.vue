<template>
  <div>
    <ul>
      <li
       v-for="actor of actors"
       v-bind:key="actor.id"
       >
       <dl>
         <dt>Name</dt>
         <dd>{{actor.name}}</dd>
         <dt>Id</dt>
         <dd>{{actor.id}}</dd>
         <dt>Max hp</dt>
         <dd>{{actor.hp}}</dd>

         <dt>Statistics</dt>
         <dd>
           <table class="table">
             <thead class="thead-dark">
               <tr>
                 <th>WS</th>
                 <th>BS</th>
                 <th>S</th>
                 <th>T</th>
                 <th>Ag</th>
                 <th>Int</th>
                 <th>Per</th>
                 <th>WP</th>
                 <th>Fel</th>
                 <th>Ifl</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>{{actor.statistics.weaponSkill}}</td>
                 <td>{{actor.statistics.ballisticSkill}}</td>
                 <td>{{actor.statistics.strength}}</td>
                 <td>{{actor.statistics.toughness}}</td>
                 <td>{{actor.statistics.agility}}</td>
                 <td>{{actor.statistics.intelligence}}</td>
                 <td>{{actor.statistics.perception}}</td>
                 <td>{{actor.statistics.willPower}}</td>
                 <td>{{actor.statistics.fellowship}}</td>
                 <td>{{actor.statistics.influence}}</td>
               </tr>
             </tbody>
           </table>
         </dd>
       </dl>
       </li>
    </ul>
  </div>
</template>
<script>
import {ActorsApi} from '../http/ActorsApi';

export default {
  name: 'actor-list',
  data() {
    return {
      actors: []
    }
  },
  created() {
    ActorsApi.getActorsList().then(resp =>{
      console.log(resp.data)
      this.actors = resp.data
    })
  }
}
</script>
