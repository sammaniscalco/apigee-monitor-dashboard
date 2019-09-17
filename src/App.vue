<template>
  <div id="app">
    <nav-header @searchValue="doSearch($event)"></nav-header>
    <b-container fluid>
      <b-row>
        <b-col role="main" class="px-md-4">
          <router-view :searchValue="searchValue" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navHeader from "./components/navHeader";

export default {
  name: "app",
  components: {
    "nav-header": navHeader
  },
  data() {
    return {
      searchValue: null
    };
  },
  methods: {
    doSearch(value) {
      this.searchValue = value;
    }
  }
};
</script>

<style>
</style>
