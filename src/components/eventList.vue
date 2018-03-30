<template>
  <div class="container">
    <md-card class="md-primary" md-with-hover v-for="event in events" @click.native="changeRoute(event.id)">
      <md-card-media-cover>
        <md-card-media>
          <img :src="event.imgUrl" alt="Event Image Url">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{ event.name }}</div>
        </md-card-header>
      </md-card-media-cover>
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
  },
  created() {
    console.log(this.events);
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }
  .md-card {
    margin: 20px;
    display: inline-block;
    background-color: cornflowerblue;
    color: white;
    max-width: 300px;
  }
</style>
