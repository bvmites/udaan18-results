<template>
  <div class="wrapper">
    <div class="heading md-elevation-4">
      {{event}}
    </div>
    <div v-if="loaded">
      <md-empty-state v-if="!rounds"
                      md-icon="info"
                      md-label="Results will be announced soon"
                      class="empty"
                      md-description="Event consist of only 1 Round. Result of the event will be declared at venue of event"></md-empty-state>
      <md-tabs v-if="rounds" class="tabs">
        <md-tab v-for="round in eventRounds" :md-label="round.round">
          <result-list :participants="round.participants"></result-list>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
  import Result from './result'
  import data from '../data'

export default {
  components : {
    "result-list" : Result
  },
  data() {
    return {
      event: null,
      data: data,
      loaded: false,
      rounds: false,
      eventRounds: []
    }
  },
  created() {
    this.$http.get("https://udaan18-messenger.herokuapp.com/results/" + this.$route.params.childId).then(function(response) {
      this.eventRounds = response.data;
      console.log(this.eventRounds);
      this.loaded = true;
      if(this.eventRounds.length > 0)
        this.rounds = true;
    });
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
  .wrapper {
    position: absolute;
    top: 55px;
    width: 100%;
  }
  .wrapper .heading {
    padding: 20px;
    width: 100%;
    color: white;
    word-wrap: break-word;
    text-align: center;
    background: #8BC34A;
    position: fixed;
    z-index: 1;
    height: 60px;
    font-size: 24px;
  }
  .wrapper .tabs{
    position: absolute;
    top: 60px;
  }
  .empty{
    top: 70px;
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
