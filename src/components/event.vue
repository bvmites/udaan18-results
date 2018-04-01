<template>
  <div class="wrapper">
    <div class="heading md-elevation-4">
      {{event}}
    </div>
    <md-tabs class="tabs">
      <md-tab v-for="round in eventRounds" :md-label="round.name">
        <result-list :name="round.name" :participants="round.participants"></result-list>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import Result from './result'
  import data from '../data';

export default {
  components : {
    "result-list" : Result
  },
  data() {
    return {
      event: null,
      data: data,
      eventRounds: [
        {
          name: "Round1",
          participants: [
            "a", "b", "c", "d", "e"
          ]
        },
        {
          name: "Round2",
          participants: [
            "f", "g", "h", "i", "j"
          ]
        },
        {
          name: "Round3",
          participants: [
            "k", "1", "m", "n", "o"
          ]
        }
      ]
    }
  },
  created() {
    const events = data[this.$route.params.parentId];
    for(let i=0; i<events.length;i++){
      console.log(events[i]);
      if(events[i].id === this.$route.params.childId){
        this.event = events[i].name;
        break;
      }
    }
  }
}
</script>
<style>
  .heading {
    padding: 20px;
    font-size: 3em;
    width: 100%;
    color: white;
    word-wrap: break-word;
    text-align: center;
    background: #8BC34A;
  }
  .wrapper {
    position: absolute;
    top: 55px;
    width: 100%;
  }
  .wrapper .heading {
    position: fixed;
    z-index: 1;
    height: 60px;
    font-size: 24px;
  }
  .wrapper .tabs{
    position: absolute;
    top: 60px;
  }
  .md-tabs-navigation {
    z-index: 0;
  }
  .md-field {
    border-bottom: 1px solid #000000;
  }
  .md-table-content {
    padding: 0 20px;
  }

</style>
