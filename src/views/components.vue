<template>
  <div>
    <h1>Components</h1>
    <hr />
    <b-card-group v-bind:deck="id!=null" v-bind:columns="id==null">
      <component-item
        v-for="component in filteredComponents"
        :key="component.id"
        v-bind:component="component"
      ></component-item>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";
import componentItem from "../components/componentItem";

export default {
  name: "Components",
  components: {
    "component-item": componentItem
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
      components: []
    };
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  created() {
    this.searchValue = null;
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const vm = this;
      axios.get("/components.json").then(response => {
        vm.components = response.data.filter(item => {
          return item.id == this.id || !this.id;
        });
      });
    }
  },
  computed: {
    filteredComponents() {
      return this.components.filter(c => {
        return (
          !this.searchValue ||
          c.id.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          c.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          c.description.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      });
    }
  }
};
</script>