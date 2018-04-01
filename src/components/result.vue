<template>
  <div>
    <md-table v-model="searched" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">{{ name }}</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search Name" v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state
        md-label="No Participant found"
        :md-description="`Sorry, '${search}' is not on the list.`">
      </md-table-empty-state>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase()
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item).includes(toLower(term)))
  }

  return items
};

export default {
  props: [
    "participants", "name"
  ],
  data() {
    return {
      search: null,
      searched: []
    }
  },
  methods: {
    searchOnTable () {
      this.searched = searchByName(this.participants, this.search)
    }
  },
  created () {
    this.searched = this.participants
  }
}
</script>

<style scoped>
  .md-card{
    max-width: 800px;
    margin: 0 auto;
  }

</style>
