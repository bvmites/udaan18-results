<template>
  <div class="container md-layout">
    <md-card class="md-primary md-layout-item md-xsmall-size-45" md-with-hover v-for="event in events" @click.native="changeRoute(event.id)">
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
      events: data[this.$route.params.parentId]
    }
  },
  methods: {
    changeRoute: function(id) {
      this.$router.push("/eventList/" + this.$route.params.parentId + "/event/" +id);
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
    margin: 10px 5px;
    display: inline-block;
    background-color: cornflowerblue;
    color: white;
  }
</style>
