<template>
  <div>
    <h1>Dashboard</h1>
    <hr />
    <b-card-group columns>
      <dashboard-item
        v-for="server in filteredServers"
        :key="server.id"
        v-bind:server="server"
      ></dashboard-item>
    </b-card-group>
  </div>
</template>

<script>
import dashboardItem from "./dashboardItem";
import axios from "axios";

export default {
  name: "Home",
  components: {
    "dashboard-item": dashboardItem
  },
  props: {
    searchValue: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      servers: []
    };
  },
  created() {
    this.searchValue = null;
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const vm = this;
      //get servers from api
      axios.get("./servers.json").then(response => {
        //set servers
        vm.servers = response.data;
      });
    }
  },
  computed: {
    filteredServers() {
      return this.servers.filter(s => {
        return (
          !this.searchValue ||
          s.id.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          s.components.includes(this.searchValue.toLowerCase())
        );
      });
    }
  }
};
</script>
