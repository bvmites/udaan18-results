<template>
  <div class="container">
    <md-card v-for="department in departments" @click.native="changeRoute(department.id)" md-with-hover>
      <md-card-media-cover>
        <md-card-media>
          <img src="https://www.artistsnetwork.com/wp-content/uploads/2017/04/abstract-painting-full.jpg">
        </md-card-media>
        <md-card-area>
          <span class="card-title">{{ department.name }}</span>
        </md-card-area>
      </md-card-media-cover>

    </md-card>
  </div>
</template>

<script>
import data from '../data'

export default {
  data() {
    return {
      departments: data.departments
    }
  },
  methods: {
    changeRoute: function(id) {
      this.$router.push("/eventList/" + id);
    }
  }
}
</script>
<style scoped>
  .container {
    text-align: center;
  }
  .md-card {
    display: inline-block;
    max-width: 400px;
    margin: 10px;
  }
  .md-card:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  .card-title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }
</style>
