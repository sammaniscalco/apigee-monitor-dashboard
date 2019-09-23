<template>
  <div>
    <h1>Servers</h1>
    <hr />
    <b-card-group v-bind:deck="id!=null" v-bind:columns="id==null">
      <server-item v-for="server in filteredServers" :key="server.id" v-bind:server="server"></server-item>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";
import serverItem from "./serverItem";

export default {
  name: "Servers",
  components: {
    "server-item": serverItem
  },
  props: {
    searchValue: {
      type: String,
      default: null
    },
    id: {
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
      axios.get("./servers.json").then(response => {
        vm.servers = response.data.filter(item => {
          return item.id == this.id || !this.id;
        });
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