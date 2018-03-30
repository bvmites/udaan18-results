<template>
  <div>
    <md-card class="md-primary" md-with-hover v-for="event in events" @click.native="changeRoute(event.id)">
      <md-card-header>
        <div class="md-title">{{ event.name }}</div>
      </md-card-header>
    </md-card>
  </div>
</template>
<script>
import data from '../data';

export default {
  data () {
    return {
      events: data[this.$route.params.id]
    }
  },
  methods: {
    changeRoute: function(id) {
      this.$router.push("/event/" + id);
    }
  }
}
</script>

<style scoped>
  .md-card {
    background-color: cornflowerblue;
    color: white;
    margin: 10px auto;
    max-width: 800px;
  }
</style>
