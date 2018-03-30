<template>
  <div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Results</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar>
        <span class="md-title">Departments</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="goHome">
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-list-item v-for="department in departments" @click="changeRoute(department.id)">
          <span class="md-list-item-text">{{ department.name }}</span>
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
      this.$router.push("/eventList/" + id);
    },
    goHome: function() {
      this.$router.push("/");
    }
  },
  created() {
    console.log(this.departments);
  }
}
</script>
<style scoped>
  .md-active {
    background: white;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
