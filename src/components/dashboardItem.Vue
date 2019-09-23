<template>
  <b-card class="mb-2" no-body>
    <router-link :to="{ name: 'ServerDetail', params: {id: server.id} }">
      <b-card-header class="font-weight-bold">{{server.id}}</b-card-header>
    </router-link>
    <b-card-body>
      <b-card-text>
        <router-link
          v-for="monitor in monitors"
          :key="monitor.id"
          class="btn mr-1 py-1 mb-1"
          :to="{ name: 'ComponentDetail', params: {id: monitor.id} }"
          v-bind:class="[monitor.status ? 'alert-success' : 'alert-danger']"
        >{{monitor.id}} :{{monitor.port}}/self</router-link>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "dashboardItem",
  props: ["server"],
  data() {
    return {
      monitors: []
    };
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

      //map for each component inserver
      vm.server.components.map((c, cindex) => {
        //get server component status
        axios.get("./components.json").then(r => {
          var cm = (c = r.data.filter(item => {
            return item.id == c;
          })[0]);

          //add monitor status
          vm.monitors.push({
            id: cm.id,
            name: cm.name,
            port: cm.port,
            //for now make status random
            status: Math.floor(Math.random() * 2) == 1 ? true : false
          });
        });
      });
    }
  }
};
</script>