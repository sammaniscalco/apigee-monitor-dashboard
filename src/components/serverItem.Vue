<template>
  <b-card class="mb-2" header-class="font-weight-bold" v-bind:header="server.id">
    <b-card-text>{{server.url}}</b-card-text>
    <hr />
    <div>
      <router-link
        v-for="component in server.components"
        :key="component"
        class="btn btn-primary mr-1 py-1 mb-1"
        :to="{ name: 'ComponentDetail', params: {id: component} }"
      >{{component}}</router-link>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "serverItem",
  props: ["server"]
};
</script>