<template>
  <div class="header">
    <md-toolbar>
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Results - Udaan 2018</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-fixed>
      <md-toolbar>
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="goHome">
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-list-item v-for="department in departments" @click="changeRoute(department.id)">
          <span class="md-list-item-text">{{ department.name }}</span>
        </md-list-item>
        <md-list-item @click="toDevelopers">
          <span class="md-list-item">Developers</span>
        </md-list-item>
      </md-list>
    </md-drawer>

  </div>
</template>

<script>
import data from '../data';

export default {
  data () {
    return {
      showNavigation: false,
      departments: data.departments
    }
  },
  methods: {
    changeRoute: function(id) {
      this.showNavigation = false;
      this.$router.push("/eventList/" + id);
    },
    goHome: function() {
      this.showNavigation = false;
      this.$router.push("/");
    },
    toDevelopers: function () {
      window.open("https://udaan18.com/udaan-developers.html");
    }
  }
}
</script>
<style scoped>
  .md-toolbar {
    background: #8BC34A;
    color: white;
    position: fixed;
    height: 55px;
  }
  .md-icon {
    color: white;
  }
  .md-active {
    background: white;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
