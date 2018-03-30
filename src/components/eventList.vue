<template>
  <div class="container md-layout">
    <md-card class="md-primary md-layout-item md-xsmall-size-50" md-with-hover v-for="event in events" @click.native="changeRoute(event.id)">
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
    justify-content: center;
  }
  .md-card {
    margin: 10px 0;
    display: inline-block;
    background-color: cornflowerblue;
    color: white;
    min-width: 180px;
    max-width: 190px;
  }
</style>
